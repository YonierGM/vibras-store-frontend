import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Asegúrate de que estos componentes tengan export default
const ProductList = lazy(() => import("./pages/ProductList/ProductList"));
const ProductDetail = lazy(() =>
  import("./components/ProductDetail/ProductDetail")
);
const Header = lazy(() => import("./components/header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <section className="Layout">
        <CartProvider>
          <BrowserRouter>
            <div className="HeaderLayout">
              <Suspense fallback={<div>Cargando header...</div>}>
                <Header />
              </Suspense>
            </div>
            <div className="MainLayout">
              <Suspense fallback={<div>Cargando página...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </Suspense>
            </div>
          </BrowserRouter>
        </CartProvider>
      </section>
    </>
  );
}

export default App;
