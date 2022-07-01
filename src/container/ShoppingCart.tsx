import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import RecentlyViewCartProduct from '../component/content/RecentlyViewCartProduct';

function ShoppingCart() {
    return (
        <div className='shopping-cart-container'>
            <div className='shopping-cart-sub-container'>
                <div className="aem-Grid aem-Grid--12">
                    <div className='shopping-cart-title'>
                        <span className='shopping-cart-title-span'>
                            Your Shopping Bag
                        </span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--8">
                        <AddedCartProducts />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4">
                        <PriceSummary />
                    </div>
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12">
                    <div className='shopping-cart-title'>
                        <span className='shopping-cart-title-span'>
                            Recently Viewed
                        </span>
                    </div>
                    <RecentlyViewCartProduct />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;

