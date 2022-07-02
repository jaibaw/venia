import { useSelector } from 'react-redux';
import SimpleAccordion from '../common/Accordian';
import EditMenu from '../common/EditMenu';
import Quantity from '../common/Quantity';

// added products in cart
function AddedCartProducts() {
    //redux state
    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    //return component
    return (
        <div className='added-item-cart-container'>
            <div>
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2">
                        <div className='added-cart-product'>
                            <img className='added-cart-product-img' src={singleProductDetail.image}>
                            </img>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className='added-product-detail'>
                            <div>
                                <label className='added-cart-item-span'> {singleProductDetail.title}</label>
                            </div>
                            <div>
                                <label> Size : Medium</label>
                            </div>
                            <div>
                                <label> Color : Black</label>
                            </div>
                            <div>
                                <label>${singleProductDetail.price}</label>
                            </div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4">
                        <div className='added-product-quantity'>
                            <Quantity />
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--3">
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

