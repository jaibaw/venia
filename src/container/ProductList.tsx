import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Banner from '../component/header/Banner';
import Sidebar from '../component/header/Sidebar';
import ProductDisplay from '../component/content/ProductDisplay';

//product list
function ProductList() {

    return (
        <div className='product-list-container'>
            <Banner />
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--3'>
                    <Sidebar />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--9'>
                    <ProductDisplay />
                </div>
            </div>
        </div>
    );
}

export default ProductList;

