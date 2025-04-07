import { useState, useEffect } from "react";

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Calcula los precios directamente
        const priceBeforeDiscount = parseFloat(data.price * 1000);

        const priceAfterDiscount = Math.round(
          (
            priceBeforeDiscount -
            (priceBeforeDiscount * data.discountPercentage) / 100
          ).toFixed(3)
        );

        // Agrega las propiedades calculadas al objeto `data`
        const enrichedData = {
          ...data,
          priceBeforeDiscount,
          priceAfterDiscount,
        };

        setProduct(enrichedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  return { product, loading };
}
