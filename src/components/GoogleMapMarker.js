export default {
    template: `
        <span></span>
    `,
    props: {
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
            });
        },
    }
}
