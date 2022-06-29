import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchProductByCategory, action_fetchProductList, action_fetchSingleProduct, action_sortProductPrice } from '../../actions/get-products';
import heart from "../../assests/images/heart.svg";
import Pagination from '../common/pagination/Pagination';
import { history } from "../../store/config";
import { ROUTES } from '../../constant/routes';
// import { Link } from 'react-router-dom';

let PageSize = 10;


function ProductDisplay() {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    // if user gets authenticated then only call for user details
    useEffect(() => {
        dispatch(action_fetchProductList());
        // dispatch(action_fetchProductByCategory('jewelery'));
        //dispatch(action_fetchSingleProduct(1));
        //dispatch(action_sortProductPrice('desc'));
    }, []);

    const productList = useSelector((state: any) => state.getProductList.getProductList);
    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    const onProductClick = () => {
        history.push(ROUTES.PRODUCT_DETAILS);
    }


    return (
        <div className='product-display-container'>
            <Suspense fallback={<div>Loading</div>}>
                <div className="aem-Grid aem-Grid--12">
                    {productList && productList.map(function (key: any) {
                        return (
                            <div className="aem-GridColumn aem-GridColumn--default--4">
                                <div>
                                    <img
                                        className='product-img'
                                        src={key.image}
                                        onClick={onProductClick}
                                    >
                                    </img>
                                </div>
                                <div>
                                    <label>{key.title}</label>
                                </div>
                                <div>
                                    <label>{key.price}</label>
                                </div>
                                <div>
                                    <img src={heart}></img>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="aem-Grid aem-Grid--12">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={productList ? 20 : 20}
                        pageSize={PageSize}
                        onPageChange={(page: any) => setCurrentPage(page)}
                    />
                </div>
            </Suspense>
        </div>
    );
}

export default ProductDisplay;