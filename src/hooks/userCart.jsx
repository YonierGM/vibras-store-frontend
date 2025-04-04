import { useEffect, useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product, quantity = 1) => {
    console.log("Producto agregado:", product, "Cantidad:", quantity);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si el producto no está en el carrito, agrégalo
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Efecto para observar cambios en el carrito
  useEffect(() => {
    console.log("Carrito actualizado:", cart);
  }, [cart]);

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Obtener el total del carrito
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotal,
  };
}
