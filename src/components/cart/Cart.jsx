import { useCart } from "../../components/cart/CartContext";
import { HiOutlineXMark } from "react-icons/hi2";
import { TbTrashFilled } from "react-icons/tb";
import { SetAmount } from "../SetAmount/SetAmount";
import { useState } from "react";
import { Payment } from "../../components/checkout/Checkout";
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

  // Calcular los valores para pasar al componente Payment
  const totalAmount = getTotal();
  const description = cart.map((item) => item.title).join(", ");
  const name = "Carrito de Compras";

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
                <div className="DescriptionItem">
                  <p>{item.description}</p>
                </div>
                <button
                  className="RemoveButton"
                  name="remove"
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
          <button className="EmptyCart Button" onClick={clearCart} name="clear">
            <TbTrashFilled />
            Vaciar carrito
          </button>
          <div className="Summary">
            <div className="ContentSummary">
              <h2>Resumen Compra</h2>
              <div className="Items">
                <div className="OriginalPrice Item">
                  <span>Precio original</span>
                  <span>
                    $
                    {cart
                      .reduce(
                        (total, item) =>
                          total + item.priceBeforeDiscount * item.quantity,
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
                          (item.priceBeforeDiscount - item.priceAfterDiscount) *
                            item.quantity,
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
                    {totalAmount.toLocaleString("es-ES", {
                      useGrouping: true,
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="Checkout">
              <Payment
                name={name}
                description={description}
                totalAmount={totalAmount}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
