import {CoordinateInput} from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple confirm</h1>
                    <p>This is a simple vue modal where you can listen to events if it is confirmed or canceled</p>
                    <pre>
    &#60;confirm @confirm="onConfirm" @cancel="onCancel" ref="confirm">&#60;/confirm>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

                    <div class="container">
                        <coordinate-input :lat="61.0638268" :lng="6.5696338" lat-name="lat-name" lng-name="lng-name" api-key=""></coordinate-input>
                    </div>

                </div>
            </section>
            
        </div>
    `,

    components: {
        CoordinateInput,
    }
}
