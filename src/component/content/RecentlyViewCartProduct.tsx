import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action_fetchProductList } from '../../actions/get-products';

function RecentlyViewCartProduct() {
    const dispatch = useDispatch();


    const productList = useSelector((state: any) => state.getProductList.getProductList);

    // if user gets authenticated then only call for user details
    useEffect(() => {
        dispatch(action_fetchProductList());
        // dispatch(action_fetchProductByCategory('jewelery'));
        //dispatch(action_fetchSingleProduct(1));
        //dispatch(action_sortProductPrice('desc'));
    }, []);

    const recentViewList = productList.slice(0, 4);

    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                {recentViewList && recentViewList.map(function (key: any) {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <div>
                                <img
                                    className='product-img'
                                    src={key.image}>
                                </img>
                            </div>
                            <div>
                                <label>{key.title}</label>
                            </div>
                            <div>
                                <label>{key.price}</label>
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default RecentlyViewCartProduct;

