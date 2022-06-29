import React, { useEffect } from 'react';
import paypal from "../../assests/images/paypal.png";
import checkout from "../../assests/images/checkout.png";

function PriceSummary() {
    return (
        <div>
            <label>Pricing Summary</label>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <div>
                        <label>Subtotal</label>
                    </div>
                    <div>
                        <label>Coupon</label>
                    </div>

                    <div>
                        <label>Gift Card</label>
                    </div>

                    <div>
                        <label>Estimated tax</label>
                    </div>

                    <div>
                        <label>Estimated shipping</label>
                    </div>

                    <div>
                        <label>Total</label>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <div>
                        <label>$</label>
                    </div>
                    <div>
                        <label>-$</label>
                    </div>

                    <div>
                        <label>-$</label>
                    </div>

                    <div>
                        <label>$</label>
                    </div>

                    <div>
                        <label>FREE</label>
                    </div>

                    <div>
                        <label>$</label>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    <img className='price-summary-imgs' src={checkout}>
                    </img>
                </div>
                <div>
                    <img className='price-summary-imgs' src={paypal}>
                    </img>
                </div>
            </div>
        </div>
    );
}

export default PriceSummary;

