import GoogleMapsLoader from 'google-maps';
export default {

    template: `
        <div style="height:100%">
            
        </div>
    `,

    props: {
        'api-key': {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            google:null,
            map:null,
            lat:61.0638268,
            lng:6.5696338,
            zoom:8,
        };
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
                    center: {lat: self.lat, lng: self.lng },
                    zoom: self.zoom
                });

                self.$emit( 'ready', map );

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
