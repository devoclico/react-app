import './Change.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});

function Change() {

    const afterCLick = () => {
        const button = document.querySelector('#show-all-button');
        const accordions = document.querySelectorAll('groupui-accordion');
        if ("Show all" === button.innerText) {
            button.innerText = "Hide all"
            accordions.forEach((accordion) => accordion.expanded = true)
        } else {
            button.innerText = "Show all";
            accordions.forEach((accordion) => accordion.expanded = false)
        }
    }

    return (

        <div className="template-forms-others-oil-change container-border light-grey-background flex-center" theme="vwag">
            <groupui-card padding="40px" elevation="8">
                <form>
                    <groupui-grid gutter="0px" margin-type="custom" margin="0px">
                        <groupui-grid-row gutter-s="24px 0px">
                            <groupui-grid-col s="12" m="6">
                                <groupui-headline heading="h3">Oil change</groupui-headline>
                            </groupui-grid-col>

                            <groupui-grid-col s="12" m="6" className="tag-col">
                                <groupui-tag square>
                                    <groupui-icon name="check-16"></groupui-icon>
                                    Quality check passed
                                </groupui-tag>
                            </groupui-grid-col>
                        </groupui-grid-row>
                        <groupui-grid-row className="section-top-spacing" gutter-s="24px" gutter-m="24px">
                            <groupui-grid-col s="12" m="6" l="4">
                                <groupui-text size="body-2" className="order-information-label">ORDER NUMBERS</groupui-text>
                                <groupui-text>06942</groupui-text>
                            </groupui-grid-col>
                            <groupui-grid-col s="12" m="6" l="4">
                                <groupui-text size="body-2" className="order-information-label">MILAGE AT ACCEPTANCE</groupui-text>
                                <groupui-text>71.527 km</groupui-text>
                            </groupui-grid-col>
                            <groupui-grid-col s="12" m="6" l="4">
                                <groupui-text size="body-2" className="order-information-label">MILAGE AT RETURN</groupui-text>
                                <groupui-text>71.531 km</groupui-text>
                            </groupui-grid-col>
                        </groupui-grid-row>

                        <groupui-headline heading="h6" className="section-top-spacing section-bottom-spacing">Additional work
                        </groupui-headline>

                        <groupui-accordion first expanded>
                            <span slot="headline"><groupui-headline heading="h6">Brakes</groupui-headline></span>
                            The entire brake system is inspected including fluid, pads, lines, hoses, and rotors.
                        </groupui-accordion>
                        <groupui-accordion>
                            <span slot="headline"><groupui-headline heading="h6">Tires</groupui-headline></span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum pariatur quasi quos tempora tempore vitae.
                        </groupui-accordion>
                        <groupui-accordion>
                            <span slot="headline"><groupui-headline heading="h6">Windshield wipers</groupui-headline></span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum pariatur quasi quos tempora tempore vitae.
                        </groupui-accordion>
                        <groupui-button id="show-all-button" variant="tertiary" fullwidth onClick={afterCLick}>Show all</groupui-button>

                        <groupui-grid-row className="section-top-spacing" gutter-s="24px">
                            <groupui-grid-col s="12" m="6">
                                <groupui-headline heading="h6">Customer segment</groupui-headline>
                                <groupui-radio-button-group>
                                    <groupui-radio-button checked>Private</groupui-radio-button>
                                    <groupui-radio-button>Business</groupui-radio-button>
                                </groupui-radio-button-group>
                            </groupui-grid-col>
                            <groupui-grid-col s="12" m="6">
                                <groupui-headline heading="h6">Mobile warranty</groupui-headline>
                                <groupui-radio-button-group>
                                    <groupui-radio-button>Yes</groupui-radio-button>
                                    <groupui-radio-button checked>No</groupui-radio-button>
                                </groupui-radio-button-group>
                            </groupui-grid-col>
                        </groupui-grid-row>

                        <div className="section-top-spacing">
                            <groupui-textarea placeholder="Your message" rows="4">
                                <span slot="label">Hints and recommendations (optional)</span>
                                <span slot="description">Notes and recommendation are transferred to DSP.</span>
                            </groupui-textarea>
                        </div>

                        <groupui-headline heading="h6" className="section-top-spacing section-bottom-spacing">Executed by
                        </groupui-headline>
                        <groupui-grid-row gutter-xs="24px 0px" gutter-s="24px 0px" gutter="0px 40px">
                            <groupui-grid-col s="12" m="6">
                                <groupui-text><b>Carried out</b></groupui-text>
                                <div id="date-picker" className="grid-content">
                                    <groupui-date-picker value="2023-01-04"></groupui-date-picker>
                                </div>
                            </groupui-grid-col>
                            <groupui-grid-col s="12" m="6">
                                <groupui-text className="grid-content">
                                    <b>Executed by</b> Autohaus Schmitt Mohlenhofstrasse 2 20095 Hamburg Germany
                                </groupui-text>
                            </groupui-grid-col>
                        </groupui-grid-row>
                        <div className="button-col section-top-spacing">
                            <groupui-button>Submit</groupui-button>
                        </div>
                    </groupui-grid>
                </form>
            </groupui-card>

        </div>
    );
}

export default Change;