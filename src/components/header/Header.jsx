import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

import { GoHome } from "react-icons/go";
import { PiPackage } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";

import "./Header.css";
import { Cart } from "../cart/Cart";
export function Header() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false); // Estado para el carrito

  // Efecto para controlar el scroll del body
  useEffect(() => {
    if (menu || cart) {
      // Si el menú o el carrito están abiertos, deshabilitar el scroll
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Limpieza al desmontar
    };
  }, [menu, cart]);
  return (
    <header className="Header">
      <div className="Izquierda">
        <div className="Logo">
          <img src="../src/assets/logo.png" alt="Logo" />
        </div>
        <div className="Menu">
          <TiThMenu className="Icon" onClick={() => setMenu(!menu)} />
        </div>
      </div>
      <div className="Main">
        {/* Overlay que bloquea la interacción con los elementos debajo */}
        {menu && <div className="Overlay" onClick={() => setMenu(false)}></div>}
        <nav className={menu ? "Mostrar Nav" : "Nav"}>
          <div className="NavHeader">
            <div className="content">
              <h1>Vibras Store</h1>
              <IoCloseSharp onClick={() => setMenu(!menu)} />
            </div>
          </div>
          <ul>
            <li>
              <GoHome />
              <Link to="/products" onClick={() => setMenu(!menu)}>
                Inicio
              </Link>
            </li>
            <li>
              <PiPackage />
              <Link to="/products" onClick={() => setMenu(!menu)}>
                Productos
              </Link>
            </li>
            <li>
              <MdOutlineContactSupport />
              <Link to="/products" onClick={() => setMenu(!menu)}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {cart && <div className="Overlay" onClick={() => setCart(false)}></div>}
        <div className={cart ? "MostrarCart CartAside" : "CartAside"}>
          <div className="NavHeader">
            <div className="content">
              <h1>Carrito de compras</h1>
              <IoCloseSharp onClick={() => setCart(!cart)} />
            </div>
          </div>
          <div className="CartContent">
            <Cart />
          </div>
        </div>

        <div className="Cart">
          <BsCart3 className="Icon" onClick={() => setCart(!cart)} />
        </div>
      </div>
    </header>
  );
}
