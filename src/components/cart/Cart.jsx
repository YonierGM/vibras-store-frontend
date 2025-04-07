import { useCart } from "../../components/cart/CartContext";

import { HiOutlineXMark } from "react-icons/hi2";
import { TbTrashFilled } from "react-icons/tb";
import { AiFillCreditCard } from "react-icons/ai";

import { SetAmount } from "../SetAmount/SetAmount";
import { useState } from "react";

import "./Cart.css";
export function Cart() {
  const { cart, removeFromCart, getTotal, clearCart, updateQuantity } =
    useCart();

  const [amount, setAmount] = useState(1); // Estado para la cantidad

  function addAmout() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  function subtractAmount() {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  }

  return (
    <div className="Cart">
      <div className="CartContent">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="CartItem">
              <div className="CartHeader">
                <div className="ImageItem">
                  <img src={item.images[0]} alt={item.title} />
                </div>
                <div className="CartOptions">
                  <SetAmount
                    amount={item.quantity}
                    onAdd={() => updateQuantity(item.id, item.quantity + 1)}
                    onSubtract={() =>
                      updateQuantity(
                        item.id,
                        item.quantity > 1 ? item.quantity - 1 : 1
                      )
                    }
                  />
                  <span className="PriceAfterDiscount">
                    $
                    {item.priceAfterDiscount.toLocaleString("es-ES", {
                      useGrouping: true,
                    })}
                  </span>
                </div>
              </div>
              <div className="CartItemDetails">
                {/* <div className="TitleItem">
                  <h2>{item.title}</h2>
                </div> */}
                <div className="DescriptionItem">
                  <p>{item.description}</p>
                </div>
                <button
                  className="RemoveButton"
                  onClick={() => {
                    removeFromCart(item.id);
                    console.log("Producto eliminado:", item.id);
                  }}
                >
                  <HiOutlineXMark />
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <>
          <button className="EmptyCart Button" onClick={clearCart}>
            <TbTrashFilled />
            Vaciar carrito
          </button>
          <div className="Summary">
            <div className="ContentSummary">
              <h2>Order summary</h2>
              <div className="Items">
                <div className="OriginalPrice Item">
                  <span>Precio original</span>
                  <span>
                    $
                    {cart
                      .reduce(
                        (total, item) => total + item.priceBeforeDiscount,
                        0
                      )
                      .toLocaleString("es-ES", {
                        useGrouping: true,
                      })}
                  </span>
                </div>
                <div className="Savings Item">
                  <span>Ahorros</span>
                  <span className="SavingsPrice">
                    $
                    {cart
                      .reduce(
                        (total, item) =>
                          total +
                          (item.priceBeforeDiscount - item.priceAfterDiscount),
                        0
                      )
                      .toLocaleString("es-ES", {
                        useGrouping: true,
                      })}
                  </span>
                </div>
                <hr />
                <div className="TotalPrice Item">
                  <span>Total</span>
                  <span>
                    $
                    {getTotal().toLocaleString("es-ES", {
                      useGrouping: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="Checkout">
              <button className="CheckoutButton Button">
                <AiFillCreditCard />
                Pagar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
