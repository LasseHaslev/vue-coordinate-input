import GoogleMapsLoader from 'google-maps';
export default {

    props: {
        'api-key': {
            type: String,
            default: null,
        },
        scope: {
            type: Object,
            required: true,
        },

        lat: {
            type: Number,
            default: 0,
            required: true,
        },

        lng: {
            type: Number,
            default: 0,
            required: true,
        },

        zoom: {
            type: Number,
            default: 8,
        }

    },

    data() {
        return {
            google:null,
            map:null,
        };
    },

    computed: {
        position() {
            return {
                lat: this.lat,
                lng: this.lng,
            }
        }
    },

    watch: {
        position( position ) {
            this.map.setCenter( position );
        },

        zoom( zoom ) {
            this.map.setZoom( zoom );
        },

    },

    mounted() {
        GoogleMapsLoader.KEY = this.apiKey;
        this.loadMap();
    },

    methods: {
        loadMap() {
            var self = this;
            GoogleMapsLoader.load(function(google) {
                window.google = google;
                self.$set( self, 'google', google );
                var map = new google.maps.Map(self.$el, {
                    center: self.position,
                    zoom: self.zoom
                });

                self.$emit( 'ready', map, google );

                self.scope.$emit( 'ready', map, google );

                self.$set( self, 'map', map );

                google.maps.event.addDomListener( window, 'resize', function() {
                    self.setMapCenter();
                } );

            });
        },
        setMapCenter() {
            this.map.setCenter( { lat: this.lat, lng: this.lng } );
        },
    }
}
