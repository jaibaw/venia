import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchSingleProduct } from '../actions/get-products';
import SingleProductDetails from '../component/content/SingleProductDetails';
import SingleProductDisplay from '../component/content/SingleProductDisplay';

function ProductDetail() {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    // if user gets authenticated then only call for user details
    useEffect(() => {
        // dispatch(action_fetchProductByCategory('jewelery'));
        dispatch(action_fetchSingleProduct(1));
        //dispatch(action_sortProductPrice('desc'));
    }, []);

    const productList = useSelector((state: any) => state.getProductList.getProductList);
    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);


    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--5'>
                    <SingleProductDisplay />
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--7'>
                    <SingleProductDetails />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

