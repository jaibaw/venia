import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SingleProductDetails from '../component/content/SingleProductDetails';
import SingleProductDisplay from '../component/content/SingleProductDisplay';

function ProductDetail() {

    return (
        <div className='product-detail-container'>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--5'>
                    <SingleProductDisplay />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--7'>
                    <div className='product-detail-sub-container'>
                        <SingleProductDetails />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

