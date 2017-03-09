import Vue from 'vue';
export default {
    mixins: [],

    props: {
        'api-key': {
            type: String,
            default: null,
        },

        height: {
            type: Number,
            default: 300
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
    },
    data() {
        return {
            map: null,
            scope: new Vue(),

            hiddenLat: this.lat,
            hiddenLng: this.lng,
        }
    },

    methods: {
        onMapReady( map ) {
            this.map = map;
        },

        onTrigger( coordinates ) {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;
            this.$emit( 'select', coordinates );
        }

    }
}
