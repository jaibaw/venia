import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { action_fetchProductList, action_fetchSingleProduct } from '../../actions/get-products';
import heart from "../../assests/images/heart.svg";
import Pagination from '../common/pagination/Pagination';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';
import Loader from '../common/Loader';

let PageSize = 15;


function ProductDisplay() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const [loader, setLoader] = useState(true);

    const productList = useSelector((state: any) => state.getProductList.getProductList);

    useEffect(() => {
        if (productList.length > 1) {
            setLoader(false)
        }
    }, [productList]);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentProductList = productList.slice(firstPageIndex, lastPageIndex);

    const onProductClick = (e: any) => {
        dispatch(action_fetchSingleProduct(parseInt(e.target.id)));
    }

    return (
        <div className='product-display-list-container'>
            <div>
                { loader && <Loader loader={loader} />}
            </div>
            <div className='product-dispaly-sub-container'>
                <div className="aem-Grid aem-Grid--12">
                    {currentProductList && currentProductList.map(function (key: any) {
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
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className=''>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={productList && productList ? productList.length : 0}
                        pageSize={PageSize}
                        onPageChange={(page: any) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;