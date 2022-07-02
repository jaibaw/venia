// import ProductList from "../container/ProductList";
import ProductDetail from "../container/ProductDetail";
import ShoppingCart from "../container/ShoppingCart";
import Appbar from "../component/header/Appbar"
import Footer from "../component/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constant/routes";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { action_fetchProductList } from "../actions/get-products";

//lazy loading
const ProductList = lazy(() => import('../container/ProductList'))

// main app loading
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action_fetchProductList());
  }, []);

  return (
    <>
      <div>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <header>
            <Appbar />
          </header>
          <main>
            {/* 1,159 */}
            <Routes>
              <Route path={ROUTES.PRODUCT_LIST} element={<ProductList />} />
              <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetail />} />
              <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCart />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </Suspense>
      </div>
    </>
  );
}

export default App;
