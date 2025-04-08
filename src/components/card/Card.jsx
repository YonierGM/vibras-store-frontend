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
    <>
      <div className="Card" onClick={() => navigate(`/product/${id}`)}>
        <div className="CardHeader">
          <img src={image} alt={description} />
        </div>
        <div className="CardBody">
          <h2>{title}</h2>
          <CardFooter
            rating={rating}
            price={price}
            discountPercentage={discountPercentage}
            priceAfterDiscount={priceAfterDiscount}
            priceBeforeDiscount={priceBeforeDiscount}
          />
        </div>
      </div>
    </>
  );
}
