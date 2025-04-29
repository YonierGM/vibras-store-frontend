import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Response.css";

export function Response() {
  const location = useLocation();
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const refPayco = queryParams.get("ref_payco");

  useEffect(() => {
    if (refPayco) {
      fetch(`https://secure.epayco.co/validation/v1/reference/${refPayco}`)
        .then((response) => response.json())
        .then((data) => {
          setTransactionDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(
            "Error al obtener los detalles de la transacción:",
            err
          );
          setError("No se pudieron obtener los detalles de la transacción.");
          setLoading(false);
        });
    } else {
      setError("No se encontró Información de la compra.");
      setLoading(false);
    }
  }, [refPayco]);

  if (loading)
    return <p className="loading">Cargando detalles de la transacción...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!transactionDetails)
    return (
      <p className="error">No se encontraron detalles de la transacción.</p>
    );

  const { data } = transactionDetails;
  console.log("Detalles de la transacción:", data);
  const getStatusClass = () => {
    switch (data.x_response?.toLowerCase()) {
      case "aprobada":
        return "status success";
      case "rechazada":
        return "status error";
      case "pendiente":
        return "status pending";
      default:
        return "status unknown";
    }
  };

  return (
    <div className="response-container">
      <h1 className="title">🧾 Detalles de la Transacción</h1>
      <div className={getStatusClass()}>
        <p>
          <strong>Referencia de Pago:</strong> {data.x_ref_payco}
        </p>
        <p>
          <strong>Factura:</strong> {data.x_id_invoice}
        </p>
        <p>
          <strong>Estado:</strong> {data.x_response}
        </p>
        <p>
          <strong>Mensaje:</strong> {data.x_response_reason_text}
        </p>
        <p>
          <strong>Monto:</strong> ${data.x_amount}
        </p>
        <p>
          <strong>Fecha:</strong> {data.x_transaction_date}
        </p>
      </div>
      <a href="/" className="home-button">
        Volver a la tienda 🛍️
      </a>
    </div>
  );
}
