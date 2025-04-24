import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"; // Asegúrate de agregar estilos personalizados

export function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage); // Calcula el número total de páginas

  useEffect(() => {
    const paginationContainer = document.querySelector(".paginacion");
    if (paginationContainer) {
      paginationContainer.removeAttribute("role");
    }
  }, []); // El array vacío asegura que esto se ejecute solo una vez después del montaje

  return (
    <div className="content-paginate">
      <ReactPaginate
        previousLabel="«"
        nextLabel="»"
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName="paginacion"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="selected"
        ariaLabel="Pagination" // Usamos ariaLabel aquí
      />
    </div>
  );
}
