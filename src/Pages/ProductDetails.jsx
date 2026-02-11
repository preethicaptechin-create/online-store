import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../Services/Product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  // find product by id
  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="details-info">

          <h2>{product.name}</h2>

          <p className="price">
            ₹ {product.price}
          </p>

          <p>
            Category: {product.category}
          </p>

          <button className="add-cart-btn">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;
