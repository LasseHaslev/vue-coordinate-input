export default {

    props: {
        'api-key': {
            type: String,
            default: null,
            required: true,
        },

        'lat-name': {
            type: String,
            default: 'lat',
        },

        'lng-name': {
            type: String,
            default: 'lng',
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
            hiddenLat: this.lat,
            hiddenLng: this.lng,
        }
    },

    methods: {
        onSelect( coordinates ) {
            this.hiddenLat = coordinates.lat;
            this.hiddenLng = coordinates.lng;

            this.$emit( 'select', coordinates );
        },
    },
}
