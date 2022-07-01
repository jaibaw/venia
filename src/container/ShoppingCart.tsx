import AddedCartProducts from '../component/content/AddedCartProducts';
import PriceSummary from '../component/content/PriceSummary';
import RecentlyViewCartProduct from '../component/content/RecentlyViewCartProduct';

function ShoppingCart() {
    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <h2>
                    Your Shopping Bag
                </h2>
                <div className="aem-GridColumn aem-GridColumn--default--7">
                    <AddedCartProducts />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5">
                    <PriceSummary />
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <h2>Recently Viewed</h2>
                <RecentlyViewCartProduct />
            </div>
        </div>
    );
}

export default ShoppingCart;

