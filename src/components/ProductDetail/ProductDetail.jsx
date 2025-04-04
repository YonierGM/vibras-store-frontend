import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { CardFooter } from "../CardFooter/CardFooter";
import { useCart } from "../../components/cart/CartContext";

import "./ProductDetail.css";
import { Cart } from "../cart/Cart";

export function ProductDetail() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);
  const [image, setImage] = useState(null); // Estado para la imagen principal
  const { addToCart } = useCart();

  // Actualiza la imagen principal cuando el producto se carga
  useEffect(() => {
    if (product && product.images) {
      setImage(product.images[0]); // Inicializa con la primera imagen
    }
  }, [product]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <>
      <Cart />
      <div className="ContentDetail">
        <div className="Images">
          <div className="Principal">
            <img src={image} alt={product.title} />
          </div>
          <div className="Galeria">
            {product.images.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                className={img === image ? "active" : ""}
                key={index}
                src={img}
                alt={`${product.title} ${index}`}
              />
            ))}
          </div>
        </div>
        <div className="Info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* Pasamos el objeto `product` al componente `CardFooter` */}
          <CardFooter
            rating={product.rating}
            price={product.price}
            discountPercentage={product.discountPercentage}
            priceAfterDiscount={product.priceAfterDiscount}
            priceBeforeDiscount={product.priceBeforeDiscount}
          />
          <div className="Buy">
            <button>Comprar</button>
            <button onClick={() => addToCart(product, 1)} className="AddToCart">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
