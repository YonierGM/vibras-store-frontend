import { useNavigate } from "react-router-dom";
import { CardFooter } from "../CardFooter/CardFooter";
import "./Card.css";

// Función para optimizar imagenes vía Cloudinary
const getOptimizedImage = (url, width = 400) => {
  return `https://res.cloudinary.com/dixepglqi/image/fetch/w_${width},q_auto,f_auto/${encodeURIComponent(
    url
  )}`;
};

export function Card({
  id,
  image,
  title,
  rating,
  price,
  discountPercentage,
  priceAfterDiscount,
  priceBeforeDiscount,
  description,
}) {
  const navigate = useNavigate();

  return (
    <div className="Card" onClick={() => navigate(`/product/${id}`)}>
      <div className="CardHeader">
        <img
          src={getOptimizedImage(image)}
          alt="Imagen producto"
          loading="lazy"
        />
      </div>
      <div className="CardBody">
        <h1>{title}</h1>
        <CardFooter
          rating={rating}
          price={price}
          discountPercentage={discountPercentage}
          priceAfterDiscount={priceAfterDiscount}
          priceBeforeDiscount={priceBeforeDiscount}
        />
      </div>
    </div>
  );
}
