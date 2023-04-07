import './Home.css';
import '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/group-ui/assets/themes/vwag/vwag.css';
import { applyPolyfills, defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});

function Home() {

    const afterCLick = () => {
        alert("Action Performed!");
    }


    return (
        <div id="template-account-settings-1">
            <groupui-card padding="48px">
                <groupui-headline heading="h1">Account settings</groupui-headline>
                <groupui-tabs>
                    <groupui-tab tab="firstTabId" name="Company" icon="business-bag-24">
                        <div className="content">
                            <groupui-grid margin-type="custom" margin="0">
                                <groupui-grid-row>
                                    <groupui-grid-col>
                                        <groupui-input value="Volkswagen AG"></groupui-input>
                                    </groupui-grid-col>
                                </groupui-grid-row>
                                <groupui-grid-row id="address">
                                    <groupui-grid-col>
                                        <groupui-select id="country" value="Germany">
                                            <span slot="label">Address</span>
                                            <groupui-select-option>Austria</groupui-select-option>
                                            <groupui-select-option value="Germany">Germany</groupui-select-option>
                                            <groupui-select-option>Zimbabwe</groupui-select-option>
                                        </groupui-select>
                                    </groupui-grid-col>
                                    <groupui-grid-col>
                                        <groupui-input id="street" value="Berliner Ring 2"></groupui-input>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6">
                                        <groupui-input id="zip" value="38440"></groupui-input>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6">
                                        <groupui-input id="city" value="Wolfsburg"></groupui-input>
                                    </groupui-grid-col>
                                </groupui-grid-row>
                            </groupui-grid>
                        </div>
                        <div className="button">
                            <groupui-button id="add-company-info-button" onClick={afterCLick} >Done</groupui-button>
                        </div>
                    </groupui-tab>
                    <groupui-tab tab="secondTabId" name="Teams" icon="user-group-24">
                        <div className="content">
                            <groupui-grid gutter="2.5rem" margin-type="custom" margin="0">
                                <groupui-grid-row>
                                    <groupui-grid-col m="6" l="4">
                                        <div className="category">
                                            <div className="icon">
                                                <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvcjE1NmZDcm1UZnA5QkpkSzI1a0Uuc3ZnIn0:volkswagen:GGP7o8zwJXKFDs6vnk3sq92vqpwOyG9RFQXfmfzGb7E?width={width}"
                                                    alt="All stars" />
                                            </div>
                                            <div className="text">
                                                <groupui-headline heading="h3">All stars</groupui-headline>
                                                <groupui-text size="label">53 members</groupui-text>
                                            </div>
                                        </div>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6" l="4">
                                        <div className="category">
                                            <div className="icon">
                                                <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvOXp2TmNOMUVBVUNkYjQ3bWljODEuc3ZnIn0:volkswagen:V_TPeaAUX0dgM3DuNRKXR66vbfcbUBoErnIexG1xU10?width={width}"
                                                    alt="GroupUI" />
                                            </div>
                                            <div className="text">
                                                <groupui-headline heading="h3">GroupUI</groupui-headline>
                                                <groupui-text size="label">5 members</groupui-text>
                                            </div>
                                        </div>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6" l="4">
                                        <div className="category">
                                            <div className="icon">
                                                <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvYW9pWmVNZFlINmppRE11Sk1CVGcuc3ZnIn0:volkswagen:Ka2UVeF2h1v3jjZBv2jLIpFBRpYz6_r3VFJMgO_lhBI?width={width}"
                                                    alt="Hugs for Bugs" />
                                            </div>
                                            <div className="text">
                                                <groupui-headline heading="h3">Hugs for Bugs</groupui-headline>
                                                <groupui-text size="label">251 members</groupui-text>
                                            </div>
                                        </div>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6" l="4">
                                        <div className="category">
                                            <div className="icon">
                                                <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvR0tRNWN0VFZGYlNyQW0xMmdBaDMuc3ZnIn0:volkswagen:EYf99oeNcjUlyPPQoxR_91mLdJr_wBdhUAx_ScW7uZQ?width={width}"
                                                    alt="Infinity" />
                                            </div>
                                            <div className="text">
                                                <groupui-headline heading="h3">Infinity</groupui-headline>
                                                <groupui-text size="label">19 members</groupui-text>
                                            </div>
                                        </div>
                                    </groupui-grid-col>
                                    <groupui-grid-col m="6" l="4">
                                        <div className="category">
                                            <div className="icon">
                                                <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvM1dLdnpmZjI2ekwyVU4xbU5BQlguc3ZnIn0:volkswagen:cXugwMoPP7dhJLEpDmWY0RwVLPgx6Xa6hM3UJ3zMsZQ?width={width}"
                                                    alt="Paradox" />
                                            </div>
                                            <div className="text">
                                                <groupui-headline heading="h3">Paradox</groupui-headline>
                                                <groupui-text size="label">7 members</groupui-text>
                                            </div>
                                        </div>
                                    </groupui-grid-col>
                                </groupui-grid-row>
                            </groupui-grid>
                        </div>
                        <div className="button">
                            <groupui-button>Done</groupui-button>
                        </div>
                    </groupui-tab>
                    <groupui-tab tab="thirdTabId" name="Payments" icon="credit-card-24">
                        <div className="content">
                            <groupui-text className="label">Select a payment method</groupui-text>
                            <groupui-radio-group>
                                <div className="payment-option">
                                    <groupui-radio-button>Bank transfer</groupui-radio-button>
                                </div>
                                <groupui-divider></groupui-divider>
                                <div className="payment-option">
                                    <groupui-radio-button>PayPal</groupui-radio-button>
                                    <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvSEpvZTFMUUhUd1FTc3Bncnh0cW0uc3ZnIn0:volkswagen:5vpCyY3V-PX7LKgRnbhECmrvlvARh4DICw09BA4Ht5k?width={width}"
                                        alt="PayPal" />
                                </div>
                                <groupui-divider></groupui-divider>
                                <div className="payment-option">
                                    <groupui-radio-button>Credit or debit card</groupui-radio-button>
                                    <div id="card-options">
                                        <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwvNlBXQWRMOE04ZDFwUUdyc1dxR2cuc3ZnIn0:volkswagen:Sxr8hMMrPghnPrfe9cW4aX3fdoHUpIhWWwIgMr1-mW0?width={width}"
                                            alt="Visa" />
                                        <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoidm9sa3N3YWdlblwvZmlsZVwva0pQQWpxMnlIQ3plY2pobVkzdEguc3ZnIn0:volkswagen:HlACVgWBNK9hcep8YzKb1GtsnhhxtrQ9n6I6h2aUKF4?width={width}"
                                            alt="Mastercard" />
                                    </div>
                                </div>
                            </groupui-radio-group>
                            <div id="credit-card-info">
                                <groupui-grid>
                                    <groupui-grid-row margin-type="custom" margin="0">
                                        <groupui-grid-col>
                                            <groupui-input id="card-holder" value="Volkswagen AG" icon="user-24"
                                                icon-position="right">
                                                <span slot="label">Cardholder</span>
                                            </groupui-input>
                                        </groupui-grid-col>
                                        <groupui-grid-col>
                                            <groupui-input id="card-number" value="4371 2891 9373 7410" icon="credit-card-24"
                                                icon-position="right">
                                                <span slot="label">Card number</span>
                                            </groupui-input>
                                        </groupui-grid-col>
                                        <groupui-grid-col m="6">
                                            <groupui-date-picker id="card-expiry" date-format="m/y"
                                                value="2027-03-01">
                                                <span slot="label">Expiry date</span>
                                            </groupui-date-picker>
                                        </groupui-grid-col>
                                        <groupui-grid-col m="6">
                                            <groupui-input type="password" id="card-cvv" value="123" icon="info-24"
                                                icon-position="right">
                                                <span slot="label">CVC/CVV</span>
                                            </groupui-input>
                                        </groupui-grid-col>
                                    </groupui-grid-row>
                                </groupui-grid>
                            </div>
                            <groupui-checkbox checked>Save card for future use</groupui-checkbox>
                        </div>
                        <div id="actions">
                            <div id="ssl-hint">
                                <groupui-icon name="locked-16"></groupui-icon>
                                <span>Your transaction is secured with SSL encryption</span>
                            </div>
                            <div className="button">
                                <groupui-button>Add</groupui-button>
                            </div>
                        </div>
                    </groupui-tab>
                </groupui-tabs>
            </groupui-card>
        </div>
    );
}

export default Home;
