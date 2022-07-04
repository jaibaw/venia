import paypal from "../../assests/images/paypal.png";
import checkout from "../../assests/images/checkout.png";
import { useSelector } from 'react-redux';

//price summary product
function PriceSummary(props: any) {
    //redux state
    const setQuantity = useSelector((state: any) => state.getProductList.setQuantity);
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})

    // return component
    return (
        <div className='price-summary-container'>
            <div className='price-summary-title'>
                <label className='price-summary-title-span'>Pricing Summary</label>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--11">
                    <div>
                        <div className='price-summary-sub-title'>
                            <label className="price-summary-sub-title-span">Subtotal</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className="price-summary-sub-title-span">Coupon</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className="price-summary-sub-title-span">Gift Card</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className="price-summary-sub-title-span">Estimated tax</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className="price-summary-sub-title-span">Estimated shipping</label>
                        </div>
                        <div className='price-summary-sub-title'>
                            <label className='price-summary-estimated-total-span'> Estimated Total</label>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
                    <div className='price-summary-sub-title'>
                        <label className="price-summary-sub-title-span">${(singleProductDetail.price * parseInt(setQuantity)).toFixed(2)}</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label className="price-summary-sub-title-span">-${35.43}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label className="price-summary-sub-title-span">-${50}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label className="price-summary-sub-title-span">${23.28}</label>
                    </div>

                    <div className='price-summary-sub-title'>
                        <label className="price-summary-sub-title-span">FREE</label>
                    </div>
                    <div className='price-summary-sub-title'>
                        <label className='price-summary-estimated-total-span'>${((singleProductDetail.price * parseInt(setQuantity)) - 62.15).toFixed(2)}</label>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className='price-summary-imgs-container'>
                    <div>
                        <img className='price-summary-img-checkout' alt="checkout" src={checkout}>
                        </img>
                    </div>
                    <div>
                        <img className='price-summary-img-paypal' alt='payment' src={paypal}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceSummary;

