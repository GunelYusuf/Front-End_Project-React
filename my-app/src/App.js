import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Mainlayout from "./layouts/MainLayout/MainLayout";
import Accordions from "./pages/Accordions/Accordions";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Progress from "./pages/Progress/Progress";
import ShopList from "./pages/ShopList/ShopList";
import Tabs from "./pages/Tabs/Tabs";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Mainlayout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/tabs" element={<Tabs />} />
              <Route exact path="/accordions" element={<Accordions />} />
              <Route exact path="/progress" element={<Progress />} />
              <Route exact path="/shop-list" element={<ShopList />} />
              <Route exact path="/product-list" element={<ProductList />} />
            </Routes>
          </Mainlayout>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
