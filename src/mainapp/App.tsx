import ProductList from "../container/ProductList";
import ProductDetail from "../container/ProductDetail";
import ShoppingCart from "../container/ShoppingCart";
import Appbar from "../component/header/Appbar"
import Footer from "../component/footer/Footer";

function App() {
  return (
    <>
      <div>
        <header>
          <Appbar />
        </header>
        <main>
          {/* 1,159 */}
          <ShoppingCart />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
