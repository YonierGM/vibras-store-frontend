import { useState } from "react";
import "./Filters.css";

export function ProductFilters({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      // Restablece los productos filtrados
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <section className="content">
      <div className="busqueda">
        <input
          type="text"
          placeholder="Buscardor"
          value={searchTerm}
          onChange={handleSearch}
          className=""
        />
      </div>
    </section>
  );
}
