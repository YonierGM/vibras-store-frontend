import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

import { GoHome } from "react-icons/go";
import { PiPackage } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";

import "./Header.css";
export function Header() {
  const [menu, setMenu] = useState(false);
  // Efecto para controlar el scroll del body
  useEffect(() => {
    if (menu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Limpieza al desmontar
    };
  }, [menu]);
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
        <div className="Carrito">
          <BsCart3 className="Icon" />
        </div>
      </div>
    </header>
  );
}
