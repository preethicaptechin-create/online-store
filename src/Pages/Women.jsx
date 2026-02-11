import React from "react";
import { products } from "../Services/Product"; // adjust path if needed
import "./Women.css"

const Women = () => {

  // filter shoe products
  const womenProducts = products.filter(product =>
    product.name.toLowerCase().includes("women")
  );

  return (
    <div className="women-page">

      <h1>Women's Collections</h1>

      <div className="Women-grid">

        {womenProducts.map(product => (

          <div key={product.id} className="women-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Women;
