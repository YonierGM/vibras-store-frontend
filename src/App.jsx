import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { ProductList } from "./pages/ProductList/ProductList";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <section className="layout">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
