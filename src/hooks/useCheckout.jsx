export function useCheckout() {
  const openCheckout = (data) => {
    const handler = window.ePayco.checkout.configure({
      key: import.meta.env.VITE_EPAYCO_PUBLIC_KEY, // Obtiene la clave desde las variables de entorno
      test: true, // Cambiar a false en producción
    });

    handler.open(data);
    handler.onClose = function () {
      // Aquí puedes manejar el cierre del checkout
      console.log("Checkout cerrado");
    };
  };

  return { openCheckout };
}
