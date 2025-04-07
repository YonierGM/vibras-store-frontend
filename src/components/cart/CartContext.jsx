import { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const CartContext = createContext();

export function CartProvider({ children }) {
  // Inicializa el carrito desde localStorage o como un array vacío
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Guarda el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Llama a toast.success antes de actualizar el estado
      toast.success(
        `¡Cantidad actualizada! Ahora tienes ${
          existingProduct.quantity + quantity
        } de ${product.title}`
      );

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Llama a toast.success antes de actualizar el estado
      toast.success(`¡${product.title} agregado al carrito!`);

      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  function updateQuantity(productId, newQuantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  const removeFromCart = (productId) => {
    console.log("Producto eliminado:", productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.priceAfterDiscount * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
