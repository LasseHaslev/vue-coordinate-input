export default {
    template: `
        <span></span>
    `,
    props: {
        scope: {
            type: Object,
            required: true,
        },

        draggable: {
            type: Boolean,
            default: false,
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
        }
    },

    data() {
        return {
            map: null,
            marker: null,
        }
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
            this.marker.setPosition( position );
        },
    },

    mounted() {
        this.scope.$on( 'ready', this.mapReady );
    },

    methods: {
        mapReady( map, google ) {
            var self = this;
            this.map = map;
            this.marker = new google.maps.Marker({
                position: self.position,
                map: self.map,
                draggable: self.draggable,
            });
            if (this.draggable) {
                google.maps.event.addListener( this.marker, 'dragend', function( evt ) {
                    self.$emit( 'drop', {
                        lat: evt.latLng.lat(),
                        lng: evt.latLng.lng(),
                    } );
                } );
            }
        },
    }
}
