import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        // Verifica si `products` es un array
        if (Array.isArray(data.products)) {
          const enrichedProducts = data.products.map((product) => {
            const priceBeforeDiscount = parseFloat(product.price * 1000);

            const priceAfterDiscount = Math.round(
              (
                priceBeforeDiscount -
                (priceBeforeDiscount * product.discountPercentage) / 100
              ).toFixed(3)
            );

            return {
              ...product,
              priceBeforeDiscount,
              priceAfterDiscount,
            };
          });

          // Actualiza el estado con los productos enriquecidos
          setData({ ...data, products: enrichedProducts });
        } else {
          console.error("Expected `products` to be an array, but it is not.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading };
}
