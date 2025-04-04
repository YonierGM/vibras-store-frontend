import { useCart } from "../../components/cart/CartContext";

export function Cart() {
  const { cart, removeFromCart, getTotal, clearCart } = useCart();

  return (
    <div className="Cart">
      <h1>Carrito</h1>
      <div className="CartContent">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="CartItem">
              <img src={item.images[0]} alt={item.title} />
              <div className="CartItemDetails">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>
                  $
                  {item.priceAfterDiscount.toLocaleString("es-ES", {
                    useGrouping: true,
                  })}
                </span>
                <span>Cantidad: {item.quantity}</span>
              </div>
              <button
                className="RemoveButton"
                onClick={() => {
                  removeFromCart(item.id);
                  console.log("Producto eliminado:", item.id);
                }}
              >
                Eliminar producto
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="CartFooter">
          <h2>
            Total: $
            {getTotal().toLocaleString("es-ES", {
              useGrouping: true,
            })}
          </h2>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
}
