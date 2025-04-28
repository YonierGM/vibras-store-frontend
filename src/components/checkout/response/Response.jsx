import React from "react";
import { useLocation } from "react-router-dom";
import "./Response.css"; // Asegúrate de tener este archivo CSS para estilos
export function Response() {
  const location = useLocation();

  // Obtener los parámetros de la URL
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("x_respuesta"); // Estado de la transacción
  const message = queryParams.get("x_response_reason_text"); // Mensaje de la transacción

  return (
    <div>
      <h1>Estado de la Transacción</h1>
      <p>Estado: {status}</p>
      <p>Mensaje: {message}</p>
    </div>
  );
}
