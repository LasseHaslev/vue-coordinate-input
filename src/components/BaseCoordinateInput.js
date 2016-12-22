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
        }
    }
}
