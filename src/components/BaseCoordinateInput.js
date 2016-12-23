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
        }
    },
    data() {
        return {
            map: null,
            scope: new Vue(),

            lat:61.0638268,
            lng:6.5696338,
        }
    },

    methods: {
        onMapReady( map ) {
            this.map = map;
        },

        onTrigger( coordinates ) {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;
        }

    }
}
