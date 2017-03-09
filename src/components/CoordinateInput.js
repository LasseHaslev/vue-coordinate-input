import CoordinatePicker from './CoordinatePicker';
import BaseCoordinateInput from './BaseCoordinateInput';

export default {
    mixins: [ BaseCoordinateInput ],

    template: `
        <div>
            <coordinate-picker :lat="hiddenLat" :lng="hiddenLng" @select="onSelect" :api-key="apiKey"></coordinate-picker>
            <input type="hidden" :name="latName" :value="hiddenLat">
            <input type="hidden" :name="lngName" :value="hiddenLng">
        </div>
    `,

    components: {
        CoordinatePicker,
    },
}
