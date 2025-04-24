import React from "react";
import "./Stars.css"; // Assuming you have some CSS for styling
import { getStars } from "../../hooks/useStar"; // Assuming you have a hook to get stars

export function Stars({ rating }) {
  const stars = getStars(rating);
  return (
    <div className="Stars">
      <span>
        {stars.map((star, index) => {
          if (star === "full") {
            return (
              <svg
                key={`star-full-${index}`}
                className="Full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          } else if (star === "half") {
            return (
              <svg
                key={`star-half-${index}`}
                className="Half"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M11 0l3.09 6.26L20 7.27l-5 4.87L16.18 20 11 16.91 5.82 20 7 12.14 2 7.27l5.91-.91L11 0z" />
              </svg>
            );
          } else if (star === "empty") {
            return (
              <svg
                key={`star-empty-${index}`}
                className="Empty"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            );
          }
          return null;
        })}
      </span>
    </div>
  );
}
