import { useSelector } from 'react-redux';
import SimpleAccordion from '../common/Accordian';
import EditMenu from '../common/EditMenu';
import Quantity from '../common/Quantity';
import threemenu from '../../assests/images/threemenu.png';

// added products in cart
function AddedCartProducts() {
    //redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})

    //return component
    return (
        <div className='added-item-cart-container'>
            <div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--5">
                        <div className='added-cart-product'>
                            <img className='added-cart-product-img' alt='product' src={singleProductDetail.image}>
                            </img>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
                        <div className='added-product-detail'>
                            <div className='added-cart-label-div'>
                                <label className='added-cart-item-span'> {singleProductDetail.title}</label>
                            </div>
                            <div className='added-cart-label-div'>
                                <label className='added-cart-item-label-detail-span' >  Size : Medium</label>
                            </div>
                            <div className='added-cart-label-div' >
                                <label className='added-cart-item-label-detail-span'> Color : Black</label>
                            </div>
                            <div className='added-cart-label-div'>
                                <label className='added-cart-item-label-detail-span'>${singleProductDetail.price}</label>
                            </div>
                        </div>
                    </div>


                    <div className="aem-GridColumn--phone--1">
                        <div className='hide-three-menu-icon'>
                            <img src={threemenu} className='three-menu-logo ' alt='icon'></img>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='added-product-quantity'>
                            <Quantity />
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                        <EditMenu />
                    </div>

                </div>
            </div>

            <div>
                <div className="aem-Grid aem-Grid--12">
                    <SimpleAccordion />
                </div>
            </div>

        </div>
    );
}

export default AddedCartProducts;

