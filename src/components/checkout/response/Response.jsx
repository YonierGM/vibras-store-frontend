import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Response() {
  const location = useLocation();
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener el parámetro ref_payco de la URL
  const queryParams = new URLSearchParams(location.search);
  const refPayco = queryParams.get("ref_payco");

  useEffect(() => {
    if (refPayco) {
      // Realizar la solicitud a la API de ePayco
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
      setError("No se encontró el parámetro ref_payco en la URL.");
      setLoading(false);
    }
  }, [refPayco]);

  if (loading) {
    return <p>Cargando detalles de la transacción...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!transactionDetails) {
    return <p>No se encontraron detalles de la transacción.</p>;
  }

  // Extraer los datos relevantes de la transacción
  const { data } = transactionDetails;
  const status = data.x_response; // Estado de la transacción
  const message = data.x_response_reason_text; // Mensaje de la transacción

  return (
    <div>
      <h1>Estado de la Transacción</h1>
      <p>Estado: {status}</p>
      <p>Mensaje: {message}</p>
    </div>
  );
}
