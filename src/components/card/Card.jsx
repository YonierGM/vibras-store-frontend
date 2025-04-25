import { useNavigate } from "react-router-dom";
import { CardFooter } from "../CardFooter/CardFooter";
import "./Card.css";

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
          src={image} // Imagen predeterminada
          srcSet={`
            ${image}?w=300 300w, 
            ${image}?w=600 600w, 
            ${image}?w=900 900w
          `}
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 600px, 900px"
          alt="Imagen producto"
          loading="lazy" // Carga diferida
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
