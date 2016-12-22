import GoogleMapsLoader from 'google-maps';
export default {

    props: {
        'api-key': {
            type: String,
            default: null,
        },
    },


    mounted() {
        console.log(this.apiKey);
        var self = this;
        window.setTimeout( function() {
            self.loadMap();
        }, 1000 );
    },

    methods: {
        loadMap() {
        GoogleMapsLoader.KEY = this.apiKey;
        var self = this;
        var el = this.$el.querySelector( '.google-map' );
        GoogleMapsLoader.load( function( google ) {
            self.map = new google.maps.Map( el, {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            } );
        } );
        }
    }

}
