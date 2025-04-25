import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const CartProvider = React.lazy(() => import("./components/cart/CartContext"));

const Toaster = React.lazy(() => import("react-hot-toast"));

import "./App.css";
import { ProductList } from "./pages/ProductList/ProductList";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <React.Suspense fallback={null}>
        <Toaster position="button-right" reverseOrder={false} />
      </React.Suspense>
      <section className="Layout">
        <React.Suspense fallback={<div>Cargando carrito...</div>}>
          <CartProvider>
            <BrowserRouter>
              <div className="HeaderLayout">
                <Header />
              </div>
              <div className="MainLayout">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/products" element={<ProductList />}></Route>
                  <Route
                    path="/product/:id"
                    element={<ProductDetail />}
                  ></Route>
                </Routes>
              </div>
            </BrowserRouter>
          </CartProvider>
        </React.Suspense>
      </section>
    </>
  );
}

export default App;
