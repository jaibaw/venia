import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import RecentlyViewCartProduct from '../component/content/RecentlyViewCartProduct';

function ShoppingCart() {
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

