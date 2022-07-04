import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';

// single product display
function SingleProductDisplay() {

    // redux state
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    //maintain state on refresh 
    const Product = window.localStorage.getItem('data');
    const singleProductDetail = (Object.keys(productDetail).length > 0) ? productDetail : (Product ? JSON.parse(Product) : {})

    // return component
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide'>
                    {
                        <div>
                            {
                                IMG_CONST_VALUE.map((key) => {
                                    return (
                                        <div className='side-product-div'>
                                            <img className='side-product-display' alt='product' src={singleProductDetail.image}>
                                            </img>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    }
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12'>
                    <div className='product-display'>
                        <img className="single-img-display" alt='product' src={singleProductDetail.image}>
                        </img>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="details-div">
                    <div>
                        <label className='product-title-span'>
                            {singleProductDetail.title}
                        </label>
                    </div>
                    <div>
                        <label className='product-discription-span'>
                            Description
                        </label>
                    </div>
                    <div>
                        <p>
                            {singleProductDetail.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className='  end-border'>

            </div>
        </div>
    );
}

export default SingleProductDisplay;

