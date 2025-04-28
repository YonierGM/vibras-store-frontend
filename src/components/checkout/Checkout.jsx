import React from "react";
import { useCheckout } from "../../hooks/useCheckout";
import { AiFillCreditCard } from "react-icons/ai";

export function Payment({ name, description, totalAmount }) {
  const { openCheckout } = useCheckout();

  const payNow = () => {
    const paymentData = {
      name, // Nombre del producto o productos
      description, // Descripción del producto o carrito
      currency: "COP",
      amount: totalAmount, // Precio total
      tax_base: "0",
      tax: "0",
      country: "CO",
      lang: "es",
      external: true, // Asegúrate de que este valor sea true
      response: "https://store-vibras.vercel.app/", // URL de respuesta
      confirmation: "https://store-vibras.vercel.app/", // URL de confirmación
    };

    openCheckout(paymentData);
  };

  return (
    <div>
      <h1>Pago con ePayco</h1>
      <button onClick={payNow} className="Button">
        <AiFillCreditCard />
        Pagar ahora
      </button>
    </div>
  );
}
