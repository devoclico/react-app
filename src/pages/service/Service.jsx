import './Service.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});

function Service() {
    return (
        <div id="template-account-settings-1" className="template-forms-others-service container-border light-grey-background flex-center">

            <groupui-card padding="40px" elevation="8">
                <groupui-grid gutter="16px" margin-type="custom" margin="0px">
                    <groupui-headline heading="h1">Schedule service with a dealership</groupui-headline>
                    <groupui-text id="description">The first inspection after delivery is due for most VW vehicles after
                        three years or 60,000 kilometers, then every 2 years or 60,000 km.
                    </groupui-text>

                    <groupui-headline heading="h5" className="sub-headings">Vehicle information</groupui-headline>
                    <groupui-grid-row>
                        <groupui-grid-col m="6" l="4">
                            <groupui-select value="volkswagen">
                                <span slot="label">Car make</span>
                                <groupui-select-option value="volkswagen">Volkswagen</groupui-select-option>
                                <groupui-select-option>Seat</groupui-select-option>
                                <groupui-select-option>Skoda</groupui-select-option>
                            </groupui-select>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="4">
                            <groupui-select value="id3">
                                <span slot="label">Model</span>
                                <groupui-select-option value="id3">ID.3</groupui-select-option>
                                <groupui-select-option>Leon</groupui-select-option>
                                <groupui-select-option>Octavia</groupui-select-option>
                            </groupui-select>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="4">
                            <groupui-date-picker value="2023-01-04">
                                <span slot="label">First registration</span>
                            </groupui-date-picker>
                        </groupui-grid-col>
                    </groupui-grid-row>

                    <groupui-headline heading="h5" className="sub-headings">Details</groupui-headline>
                    <groupui-grid-row>
                        <groupui-grid-col m="6">
                            <groupui-input value="23.869 km">
                                <span slot="label">Milage</span>
                            </groupui-input>
                        </groupui-grid-col>
                        <groupui-grid-col m="6">
                            <groupui-input value="WOB VW 123">
                                <span slot="label">License plate</span>
                            </groupui-input>
                        </groupui-grid-col>
                    </groupui-grid-row>

                    <groupui-headline heading="h5" className="sub-headings">Service</groupui-headline>
                    <groupui-grid-row>
                        <groupui-grid-col m="6" l="3">
                            <groupui-checkbox checked>Brakes</groupui-checkbox>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="3">
                            <groupui-checkbox checked>Fluids</groupui-checkbox>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="3">
                            <groupui-checkbox checked>Tires</groupui-checkbox>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="3">
                            <groupui-checkbox>Battery</groupui-checkbox>
                        </groupui-grid-col>
                        <groupui-grid-col m="6" l="3">
                            <groupui-checkbox>Windshield wipers</groupui-checkbox>
                        </groupui-grid-col>
                    </groupui-grid-row>

                    <groupui-headline heading="h5" className="sub-headings">Additional note</groupui-headline>
                    <groupui-textarea placeholder="Your message" rows="4" className="textarea"></groupui-textarea>
                    <div className="button-col">
                        <groupui-button variant="secondary">Cancel</groupui-button>
                        <groupui-button>Schedule</groupui-button>
                    </div>
                </groupui-grid>
            </groupui-card>

        </div>
    );
}

export default Service;