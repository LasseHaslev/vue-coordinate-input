import { Geocoder } from '@lassehaslev/vue-geocoder';
import BaseCoordinateInput from './BaseCoordinateInput';
import GoogleMap from './GoogleMap';
export default {

    mixins: [ BaseCoordinateInput ],
    
	template: `
	    <div>
        <div :style="{ height:height + 'px' }">
            <google-map :api-key="apiKey"></google-map>
        </div>
            <geocoder :api-key="apiKey"></geocoder>
	    </div>
	`,
    components: {
        Geocoder,
        GoogleMap,
    }
}
