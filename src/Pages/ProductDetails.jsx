// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import { products } from "../Services/Product";
// import "./ProductDetails.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();


//   // find product by id
//   const product = products.find(
//     item => item.id === Number(id)
//   );

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <div className="details-page">

//       <div className="details-card">

//         <img
//           src={product.image}
//           alt={product.name}
//         />

//         <div className="details-info">

//           <h2>{product.name}</h2>

//           <p className="price">
//             ₹ {product.price}
//           </p>

//           <p>
//             Category: {product.category}
//           </p>

//     <button
//   onClick={() => {
//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i => i.id === product.id
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({ ...product, qty: 1 });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     // ✅ correct navigation
//     navigate("/cart");
//   }}
// >
//   Add to Cart
// </button>




//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { products } from "../Services/Product";
import "./ProductDetails.css";

const ProductDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  // size state
  const [size, setSize] = useState(null);

  // find product
  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // check if size required
  const needsSize = ["men", "women", "kids", "shoes"]
    .includes(product.category);

  // add to cart
  const handleAddToCart = () => {

    if (needsSize && !size) {
      alert("Please select size");
      return;
    }

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(i =>
      needsSize
        ? i.id === product.id && i.size === size
        : i.id === product.id
    );

    if (item) {
      item.qty += 1;
    } else {
      existingCart.push({
        ...product,
        size: needsSize ? size : null,
        qty: 1
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    navigate("/cart");
  };

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

          {/* SIZE SELECTOR */}
          {needsSize && (
            <div className="size-selector">

              <span className="size-label">
                Select Size:
              </span>

              <div className="size-buttons">
                {[6, 7, 8, 9, 10].map(s => (
                  <button
                    key={s}
                    className={
                      size === s
                        ? "size-btn active"
                        : "size-btn"
                    }
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>

            </div>
          )}

          <button onClick={handleAddToCart}>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;
