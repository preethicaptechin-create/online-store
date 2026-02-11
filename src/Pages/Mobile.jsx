import React from "react";
import { products } from "../Services/Product"; // adjust path if needed
import "./Mobile.css"

const Mobile = () => {

  // filter shoe products
  const mobileProducts = products.filter(product =>
    product.name.toLowerCase().includes("mobile")
  );

  return (
    <div className="mobile-page">

      <h1>Mobile Collection</h1>

      <div className="mobile-grid">

        {mobileProducts.map(product => (

          <div key={product.id} className="mobile-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Mobile;

