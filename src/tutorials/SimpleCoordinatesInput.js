import {CoordinateInput} from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple confirm</h1>
                    <p>This is a simple vue modal where you can listen to events if it is confirmed or canceled</p>
                    <pre>
    &#60;coordinate-input :drag-marker="true" @select="onSelect" :lat="0" :lng="0" lat-name="lat-name" lng-name="lng-name" api-key="">&#60;/coordinate-input>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <label class="label" for="">Latitude</label>
                                <p class="control"><input id="class" class="input" type="text" name="" v-model="lat" disabled></p>
                            </div>
                            <div class="column">
                                <label class="label" for="">Longitude</label>
                                <p class="control"><input id="class" class="input" type="text" name="" v-model="lng" disabled></p>
                            </div>
                        </div>
                        <coordinate-input :drag-marker="true" @select="onSelect" :lat="lat" :lng="lng" lat-name="lat-name" lng-name="lng-name" api-key=""></coordinate-input>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    data() {
        return {
            lat: 61.0638268,
            lng: 6.5696338,
        };
    },

    methods: {
        onSelect( coordinates ) {
            this.lat = coordinates.lat;
            this.lng = coordinates.lng;
        }
    },

    components: {
        CoordinateInput,
    }
}
