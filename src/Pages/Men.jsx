import React from "react";
import { products } from "../Services/Product"; // adjust path if needed
import "./Men.css"

const Men = () => {

  // filter shoe products
  const menProducts = products.filter(product =>
    product.name.toLowerCase().includes("men")
  );

  return (
    <div className="men-page">

      <h1>Men's Collections</h1>

      <div className="men-grid">

        {menProducts.map(product => (

          <div key={product.id} className="men-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Men;
