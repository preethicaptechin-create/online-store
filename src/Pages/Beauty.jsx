import React from "react";
import { products } from "../Services/Product"; // adjust path if needed
import "./Beauty.css"

const Beauty = () => {

  // filter shoe products
  const beautyProducts = products.filter(product =>
    product.name.toLowerCase().includes("beauty")
  );

  return (
    <div className="beauty-page">

      <h1>Beauty Products</h1>

      <div className="beauty-grid">

        {beautyProducts.map(product => (

          <div key={product.id} className="beauty-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Beauty;


