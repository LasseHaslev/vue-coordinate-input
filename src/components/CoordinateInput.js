import CoordinatePicker from './CoordinatePicker';

export default {
    template: `
        <div>
            <coordinate-picker @selected="onSelect" :api-key="apiKey"></coordinate-picker>
        </div>
    `,

    props: {
        'api-key': {
            type: String,
            default: null,
            required: true,
        },
    },
    components: {
        CoordinatePicker,
    },
}
