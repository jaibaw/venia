import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchSingleProduct } from '../actions/get-products';
import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import RecentlyViewCartProduct from '../component/content/RecentlyViewCartProduct';

function ShoppingCart() {
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
                <div className="aem-GridColumn aem-GridColumn--default--7">
                    <AddedCartProducts />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5">
                    <PriceSummary />
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <RecentlyViewCartProduct />
            </div>
        </div>
    );
}

export default ShoppingCart;

