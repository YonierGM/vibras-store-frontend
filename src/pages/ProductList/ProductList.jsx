import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/Card";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../../components/spinner/Spinner";
import { Pagination } from "../../components/pagination/Pagination";
import { ProductFilters } from "../../components/filters/Filters";
import "./ProductList.css";

function ProductList() {
  const [page, setPage] = useState(1); // Estado para la página actual
  const limit = 30; // Número de productos por página
  const skip = (page - 1) * limit; // Calcula el valor de `skip` basado en la página actual

  // Pasa la URL con los parámetros de paginación al hook
  const { data, loading } = useFetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  if (!loading && products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  // Maneja el cambio de página
  const handlePageChange = (event) => {
    setPage(event.selected + 1); // ReactPaginate usa índices basados en 0, por lo que sumamos 1
  };

  return (
    <>
      <div className="Main-content">
        <section className="Filters">
          <ProductFilters
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
        </section>
        <div className="Cards">
          {(filteredProducts.length ? filteredProducts : products).map(
            (product) => (
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
            )
          )}
        </div>
        <Pagination
          totalItems={data?.total || 0}
          itemsPerPage={limit}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default ProductList;
