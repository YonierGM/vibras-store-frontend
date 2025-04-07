import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import { useFetch } from "../../hooks/useFetch";
import "./ProductList.css";
import { Spinner } from "../../components/spinner/Spinner";

export function ProductList() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <div className="Cards">
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            image={product.images[0]}
            title={product.title}
            rating={product.rating}
            price={product.price}
            discountPercentage={product.discountPercentage}
            priceAfterDiscount={product.priceAfterDiscount}
            priceBeforeDiscount={product.priceBeforeDiscount}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
}
