import { Geocoder } from '@lassehaslev/vue-geocoder';
import BaseCoordinatePicker from './BaseCoordinatePicker';
import GoogleMap from './GoogleMap';
import GoogleMapMarker from './GoogleMapMarker';
export default {

    mixins: [ BaseCoordinatePicker ],
    
	template: `
	    <div>
            <google-map-marker :lat="lat" :lng="lng" :scope="scope"></google-map-marker>
        <div :style="{ height:height + 'px' }">
            <google-map :lat="lat" :lng="lng" :scope="scope" @ready="onMapReady" ref="google-map" :api-key="apiKey"></google-map>
        </div>
            <geocoder @selected="onTrigger" :api-key="apiKey"></geocoder>
	    </div>
	`,
    components: {
        Geocoder,
        GoogleMap,
        GoogleMapMarker,
    }
}
