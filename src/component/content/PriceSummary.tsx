import React, { useEffect } from 'react';
import paypal from "../../assests/images/paypal.png";
import checkout from "../../assests/images/checkout.png";
import { useSelector } from 'react-redux';

function PriceSummary(props: any) {

    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    return (
        <div className='price-summary-container'>
            <div className='price-summary-title'>
                <label className='price-summary-title-span'>Pricing Summary</label>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--9">
                    <div>
                        <div className='price-summary-sub-title'>
                            <label>Subtotal</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label>Coupon</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label>Gift Card</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label>Estimated tax</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label>Estimated shipping</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className='price-summary-estimated-total-span'> Estimated Total</label>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <div className='price-summary-sub-title'>
                        <label>${singleProductDetail.price * 4}</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label>-${35.43}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label>-${50}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label>${23.28}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label>FREE</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label className='price-summary-estimated-total-span'>${((singleProductDetail.price * 3) - 62.15).toFixed(2)}</label>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className='price-summary-imgs-container'>
                    <div>
                        <img className='price-summary-img-checkout' src={checkout}>
                        </img>
                    </div>
                    <div>
                        <img className='price-summary-img-paypal' src={paypal}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceSummary;

