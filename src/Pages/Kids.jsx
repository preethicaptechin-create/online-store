import React, { useState } from "react";
import { products } from "../Services/Product";
import { Link } from "react-router-dom";
import "./Kids.css";

const Kids = () => {

  // filter kids products
 const kidsProducts = products.filter(
  product => product.category === "kids"
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
    <div className="kids-page">

      <h1>Kids Collection</h1>

      <div className="kids-grid">

        {kidsProducts.map(product => {

          const qty = counts[product.id] || 0;

          return (
            <div key={product.id} className="kids-card">

              {/* <img src={product.image} alt={product.name} /> */}
                           <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

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

export default Kids;
