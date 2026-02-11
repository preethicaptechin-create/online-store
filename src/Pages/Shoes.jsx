import React from "react";
import { products } from "../Services/Product"; // adjust path if needed
import "./Shoes.css"

const Shoes = () => {

  // filter shoe products
  const shoeProducts = products.filter(product =>
    product.name.toLowerCase().includes("shoe")
  );

  return (
    <div className="shoes-page">

      <h1>Shoes Collection</h1>

      <div className="shoe-grid">

        {shoeProducts.map(product => (

          <div key={product.id} className="shoe-card">

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Shoes;
