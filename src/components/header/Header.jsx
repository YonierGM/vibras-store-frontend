// import { TiThMenu } from "react-icons/ti";
// import { useState, useEffect, use } from "react";
// import { Link } from "react-router-dom";

// import { FaCartShopping } from "react-icons/fa6";
// import { IoCloseSharp } from "react-icons/io5";

// import { GoHome } from "react-icons/go";
// import { PiPackage } from "react-icons/pi";
// import { MdOutlineContactSupport } from "react-icons/md";

// import { useCart } from "../cart/CartContext";
// import "./Header.css";
// import { Cart } from "../cart/Cart";
// export function Header() {
//   const [menu, setMenu] = useState(false);
//   const [cartMenu, setCart] = useState(false); // Estado para el carrito

//   const { cart } = useCart(); // Obtener el carrito desde el contexto

//   // Efecto para controlar el scroll del body
//   useEffect(() => {
//     if (menu || cartMenu) {
//       // Si el menú o el carrito están abiertos, deshabilitar el scroll
//       document.body.classList.add("no-scroll");
//     } else {
//       document.body.classList.remove("no-scroll");
//     }
//     return () => {
//       document.body.classList.remove("no-scroll"); // Limpieza al desmontar
//     };
//   }, [menu, cartMenu]);
//   return (
//     <header className="Header">
//       <div className="Izquierda">
//         <div className="Logo">
//           <img src="../src/assets/logo.png" alt="Logo" />
//         </div>
// <div className="Menu">
//   <TiThMenu className="Icon" onClick={() => setMenu(!menu)} />
// </div>
//       </div>
//       <div className="Main">
//         {/* Overlay que bloquea la interacción con los elementos debajo */}
//         {menu && <div className="Overlay" onClick={() => setMenu(false)}></div>}
//         <nav className={menu ? "Mostrar Nav" : "Nav"}>
//           <div className="NavHeader">
//             <div className="Content">
//               <h1>Vibras Store</h1>
//               <IoCloseSharp onClick={() => setMenu(!menu)} />
//             </div>
//           </div>
//           <ul>
//             <li>
//               <GoHome />
//               <Link to="/products" onClick={() => setMenu(!menu)}>
//                 Inicio
//               </Link>
//             </li>
//             <li>
//               <PiPackage />
//               <Link to="/products" onClick={() => setMenu(!menu)}>
//                 Productos
//               </Link>
//             </li>
//             <li>
//               <MdOutlineContactSupport />
//               <Link to="/products" onClick={() => setMenu(!menu)}>
//                 Contacto
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {cartMenu && (
//           <div className="Overlay" onClick={() => setCart(false)}></div>
//         )}
//         <div className={cartMenu ? "MostrarCart CartAside" : "CartAside"}>
//           <div className="NavHeader">
//             <div className="Content">
//               <h1>Carrito de compras</h1>
//               <IoCloseSharp onClick={() => setCart(!cartMenu)} />
//             </div>
//           </div>

//           <Cart />
//         </div>

//         <div className="CartIcon">
//           <div className="Badge">
//             <span>{cart.length}</span>
//           </div>
//           <FaCartShopping className="Icon" onClick={() => setCart(!cartMenu)} />
//         </div>
//       </div>
//     </header>
//   );
// }
