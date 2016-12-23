import CoordinatePicker from './CoordinatePicker';

export default {
    template: `
        <div>
            <coordinate-picker :lat="hiddenLat" :lng="hiddenLng" @select="onSelect" :api-key="apiKey"></coordinate-picker>
            <input type="hidden" :name="latName" :value="hiddenLat">
            <input type="hidden" :name="lngName" :value="hiddenLng">
        </div>
    `,

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

    components: {
        CoordinatePicker,
    },
}
