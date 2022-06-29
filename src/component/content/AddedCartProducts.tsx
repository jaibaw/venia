import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SimpleAccordion from '../common/Accordian';
import EditMenu from '../common/EditMenu';
import Quantity from '../common/Quantity';

function AddedCartProducts() {

    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);
    console.log(singleProductDetail);
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--2">
                    <img className='side-product-display' src={singleProductDetail.image}>
                    </img>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4">
                    <div>
                        <label> {singleProductDetail.title}</label>
                    </div>
                    <div>
                        <label> Size : Medium</label>
                    </div>
                    <div>
                        <label> Color : Black</label>
                    </div>
                    <div>
                        <label>{singleProductDetail.price}</label>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <Quantity />

                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <EditMenu />
                </div>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <SimpleAccordion />
            </div>

        </div>
    );
}

export default AddedCartProducts;

