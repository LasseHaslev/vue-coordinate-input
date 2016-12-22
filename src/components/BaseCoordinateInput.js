import HasGoogleMap from './mixins/HasGoogleMap';

export default {
    mixins: [ HasGoogleMap ],

    data() {
        return {
            map: null,
        }
    }
}
