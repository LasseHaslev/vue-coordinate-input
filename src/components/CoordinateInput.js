import { Geocoder } from '@lassehaslev/vue-geocoder';
import BaseCoordinateInput from './BaseCoordinateInput';
export default {

    mixins: [ BaseCoordinateInput ],
    
	template: `
	    <div>
        <div>
            <div style="width: 100%; height:500px" class="google-map"></div>
        </div>
            <geocoder :api-key="apiKey"></geocoder>
	    </div>
	`,
    components: {
        Geocoder,
    }
}
