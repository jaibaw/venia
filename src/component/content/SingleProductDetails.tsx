import { useDispatch, useSelector } from "react-redux";
import Breadcrum from '../common/Breadcrum';
import Color from '../common/Color';
import Quantity from '../common/Quantity';
import Size from '../common/Size';
import share from "../../assests/images/share.svg";
import heart from "../../assests/images/heart.svg";
import addtocart from "../../assests/images/addtocart.png";
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';
import Breathable from '../../assests/images/Breathable.png';
import fabricdetails from '../../assests/images/fabricdetails.png';
import Lightweightfabric from '../../assests/images/Lightweightfabric.png';
import Sweatwicking from '../../assests/images/Sweatwicking.png';
import { action_setCartQuantity } from "../../actions/get-products";

//single product details
function SingleProductDetails() {
    const dispatch = useDispatch();

    //redux state
    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    // maintain cart quantity
    const addTocart = () => {
        //temp : added hardcode data
        dispatch(action_setCartQuantity('1'));
    }

    //return product
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    <Breadcrum />
                </div>
                <div className="product-title">
                    <label className="product-title-span">
                        {singleProductDetail.title}
                    </label>
                </div>
                <div>
                    <label className="product-price-span">
                        ${singleProductDetail.price}
                    </label>
                </div>

                <div>
                    <label className="product-rating-span">
                        {singleProductDetail.rating ? singleProductDetail.rating.rate : ""} {singleProductDetail.rating ? singleProductDetail.rating.count : ""}
                    </label>
                </div>
                <div className="product-discription-details">
                    <p>
                        {singleProductDetail.description}
                    </p>
                </div>
                <div className="product-attribute">
                    <div className="product-attribute">
                        <span className="product-attribute-span">Color</span>
                    </div>
                    <Color />
                </div>
                <div className="product-attribute">
                    <div className="product-attribute">
                        <span className="product-attribute-span">Size</span>
                    </div>
                    <Size />
                </div>
                <div className="product-attribute">
                    <div className="product-attribute">
                        <span className="product-attribute-span">Quantity</span>
                    </div>
                    <Quantity />
                </div>
                <div>
                    {/* <Link to={ROUTES.SHOPPING_CART}>{<img className="product-add-to-cart-logo" src={addtocart}></img>}</Link> */}

                    <img className="product-add-to-cart-logo" src={addtocart} onClick={addTocart}></img>

                </div>
                <div className="share-save-div">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--2">
                            <img className="save-share-logo" src={heart}></img>
                            <label className="save-share-span">Save</label>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <img className="save-share-logo" src={share}></img>
                            <label className="save-share-span">Share</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="product-attribute">
                    <label className="product-attribute-span">Details</label>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                    <div>
                        <img className="fabric-details-logo" src={Sweatwicking}></img>
                        <label>
                            Sweat-wicking
                        </label>
                    </div>
                    <div>
                        <img className="fabric-details-logo" src={Lightweightfabric}></img>
                        <label>
                            Lightweight fabric
                        </label>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 logo">
                    <div>
                        <img className="fabric-details-logo" src={Breathable}></img>
                        <label>
                            Breathable
                        </label>
                    </div>
                    <div>
                        <img className="fabric-details-logo" src={fabricdetails}></img>
                        <label>
                            69% nylon, 31% lycra
                        </label>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SingleProductDetails;

