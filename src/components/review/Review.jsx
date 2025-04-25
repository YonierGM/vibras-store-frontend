import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { Spinner } from "../spinner/Spinner";

import { v4 as uuidv4 } from "uuid";
import "./Review.css";
import { Stars } from "../stars/Stars";

export function Review() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <section className="review">
      <div className="main_container">
        <div className="review_container">
          <div className="rating">
            {/* <h1>Opiniones del Producto</h1> */}
            <div className="rating-star">
              <span className="rating-number">{product.rating}</span>
              <div className="rating-star-amount">
                <Stars rating={product.rating} />
                <p className="total-reviews">
                  {product.reviews.length} opiniones
                </p>
              </div>
            </div>
          </div>
          <div className="review_content">
            {product.reviews.map((review) => (
              <div key={uuidv4()} className="review__card">
                <div className="review_card_header">
                  <Stars rating={review.rating} />
                  <q className="review_card-comment">{review.comment}</q>
                </div>

                <div className="review_card_profile">
                  <div className="review_card_prodile_image">
                    <div className="image">
                      <img src="/user-profile.webp" alt="Perfil Usuario" />
                    </div>
                    <span>{review.reviewerName}</span>
                  </div>
                  <hr />
                  <span>
                    {new Date(review.date).toISOString().split("T")[0]}{" "}
                    {/* Muestra solo la fecha */}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
