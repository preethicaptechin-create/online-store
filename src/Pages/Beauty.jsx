import React, { useState } from "react";
import { products } from "../Services/Product";
import "./Beauty.css";

const Beauty = () => {

  // filter beauty products
  const beautyProducts = products.filter(product =>
    product.name.toLowerCase().includes("beauty")
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
    <div className="beauty-page">

      <h1>Beauty Collection</h1>

      <div className="beauty-grid">

        {beautyProducts.map(product => {

          const qty = counts[product.id] || 0;

          return (
            <div key={product.id} className="beauty-card">

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

export default Beauty;



