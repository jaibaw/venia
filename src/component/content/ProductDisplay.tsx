import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchSingleProduct } from '../../actions/get-products';
import heart from "../../assests/images/heart.svg";
import Pagination from '../common/pagination/Pagination';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

let PageSize = 10;


function ProductDisplay() {
    const dispatch = useDispatch();

    const List = useSelector((state: any) => state.getProductList.getProductList);

    const onProductClick = (e: any) => {
        dispatch(action_fetchSingleProduct(parseInt(e.target.id)));
    }

    const productList = List.slice(0, 15);

    return (
        <div className='product-display-list-container'>
            <div className="aem-Grid aem-Grid--12">
                {productList && productList.map(function (key: any) {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--4">
                            <div className='product-display-container'>
                                <div className='product-display-img-div'>
                                    <Link to={ROUTES.PRODUCT_DETAILS}>
                                        {<img
                                            className='product-img'
                                            src={key.image}
                                            id={key.id}
                                            onClick={onProductClick}
                                        >
                                        </img>
                                        }
                                    </Link>
                                </div>
                                <div className='product-discription'>
                                    <div>
                                        <label>{key.title}</label>
                                    </div>
                                    <div>
                                        <label>${key.price}</label>
                                    </div>
                                    <div>
                                        <img src={heart}></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* <div className="aem-Grid aem-Grid--12">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={productList && productList ? productList.length : 0}
                    pageSize={PageSize}
                    onPageChange={(page: any) => setCurrentPage(page)}
                />
            </div> */}
        </div>
    );
}

export default ProductDisplay;