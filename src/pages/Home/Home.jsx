import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <section className="home-container">
          <div className="home-container-info">
            <p className="home-container-info-p">Los mejores precios</p>
            <h1 className="home-container-info-h1">
              Súper precios en tus artículos favoritos
            </h1>
            <p className="home-container-info-p">
              Explora nuestros productos y ofertas especiales.
            </p>
          </div>
          <button
            className="Button Button-buy"
            aria-label="Ir a la página de productos para comprar"
          >
            <Link to="/products">Comprar ahora</Link>
          </button>
        </section>
      </div>
    </>
  );
}
export default Home;
