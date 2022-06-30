import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';


function SingleProductDisplay() {


    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    console.log("singleProductDetail-d", singleProductDetail, singleProductDetail.rating ? singleProductDetail.rating.count : "")

    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--3'>
                    {
                        IMG_CONST_VALUE.map((key) => {
                            return (
                                <div>
                                    <img className='side-product-display' src={singleProductDetail.image}>
                                    </img>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--9'>
                    <img className='product-display' src={singleProductDetail.image}>
                    </img>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    <label>
                        {singleProductDetail.title}
                    </label>
                </div>
                <div>
                    <label>
                        description
                    </label>
                </div>
                <div>
                    <p>
                        {singleProductDetail.description}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default SingleProductDisplay;

