import { useNavigate } from "react-router-dom";
import { getStars } from "../../hooks/useStar";
import { CardFooter } from "../CardFooter/CardFooter";

import "./Card.css";

export function Card({
  id,
  image,
  title,
  rating,
  price,
  discountPercentage,
  description,
}) {
  const navigate = useNavigate();
  const stars = getStars(rating);

  return (
    <>
      <div
        className="Card"
        onClick={() => {
          console.log("Navigating to product ID:", id);
          navigate(`/product/${id}`);
        }}
      >
        <div className="CardHeader">
          <img src={image} alt={description} />
        </div>
        <div className="CardBody">
          <h2>{title}</h2>
          <CardFooter
            rating={rating}
            price={price}
            discountPercentage={discountPercentage}
          />
        </div>
      </div>
    </>
  );
}
