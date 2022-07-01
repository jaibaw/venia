import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant/routes';

function RecentlyViewCartProduct() {
    const productList = useSelector((state: any) => state.getProductList.getProductList);
    const recentViewList = productList.slice(0, 4);

    return (
        <div className='product-display-list-container'>
            <div className="aem-Grid aem-Grid--12">
                {recentViewList && recentViewList.map(function (key: any) {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <div className='recent-product-display-container'>
                                <div className='product-display-img-div'>
                                    <Link to={ROUTES.PRODUCT_LIST}>
                                        {<img
                                            className='recent-product-img'
                                            src={key.image}
                                            id={key.id}
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
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default RecentlyViewCartProduct;

