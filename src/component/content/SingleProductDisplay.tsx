import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IMG_CONST_VALUE } from '../../constant/common';


function SingleProductDisplay() {
    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--3'>
                    {
                        <div>
                            {
                                IMG_CONST_VALUE.map((key) => {
                                    return (
                                        <div className='side-product-div'>
                                            <img className='side-product-display' src={singleProductDetail.image}>
                                            </img>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    }
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--9'>
                    <img className='product-display' src={singleProductDetail.image}>
                    </img>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
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

            <div className='end-border'>

            </div>
        </div>
    );
}

export default SingleProductDisplay;

