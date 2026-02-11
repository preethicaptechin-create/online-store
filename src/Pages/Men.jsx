import React, { useState } from "react";
import { products } from "../Services/Product";
import "./Men.css";

const Men = () => {

  // filter men products
  const menProducts = products.filter(product =>
    product.name.toLowerCase().includes("men")
  );

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
    <div className="men-page">

      <h1>Men's Collection</h1>

      <div className="men-grid">

        {menProducts.map(product => {

          const qty = counts[product.id] || 0;

          return (
            <div key={product.id} className="men-card">

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

export default Men;
