import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

import { Toaster } from "react-hot-toast";

import "./App.css";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Toaster position="button-right" reverseOrder={false} />
      <section className="Layout">
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
                <Route path="/product/:id" element={<ProductDetail />}></Route>
              </Routes>
            </div>
            <div className="FooterLayout">
              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </section>
    </>
  );
}

export default App;
