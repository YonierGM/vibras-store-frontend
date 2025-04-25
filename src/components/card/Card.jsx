import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardFooter } from "../CardFooter/CardFooter";
import { useOptimizedImage } from "../../hooks/useCloudinary";
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
  const optimizedImage = useOptimizedImage(image);

  useEffect(() => {
    // Precarga la imagen
    const img = new Image();
    img.src = optimizedImage || image;
  }, [optimizedImage, image]);

  return (
    <div className="Card" onClick={() => navigate(`/product/${id}`)}>
      <div className="CardHeader">
        <img src={optimizedImage || image} alt="Imagen producto" />
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
