import React, { useState } from "react";
import { products } from "../Services/Product";
import "./Shoes.css";

const Shoes = () => {

  // filter shoes
  const shoeProducts = products.filter(product =>
    product.name.toLowerCase().includes("shoe")
  );

  // quantity state
  const [counts, setCounts] = useState({});

  const addItem = id => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeItem = id => {
    setCounts(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  return (
    <div className="shoes-page">

      <h1>Shoes Collection</h1>

      <div className="shoe-grid">

        {shoeProducts.map(product => {

          const qty = counts[product.id] || 0;

          return (
            <div key={product.id} className="shoe-card">

              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p>₹ {product.price}</p>

              <div className="cart-controls">

                <button
                  className="cart-btn"
                  onClick={() => removeItem(product.id)}
                >
                  −
                </button>

                <span>{qty}</span>

                <button
                  className="cart-btn"
                  onClick={() => addItem(product.id)}
                >
                  +
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Shoes;
