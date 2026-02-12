// import { Link } from "react-router-dom";
// import "./ProductCard.css";

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">

//       {/* Click image → open details page */}
//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹ {product.price}</p>

//       <button className="add-btn">
//         Add to Cart
//       </button>

//     </div>
//   );
// }

// export default ProductCard;


// import { Link } from "react-router-dom";
// import "./ProductCard.css";
// import {usenavigatefrom react router dom}

// function ProductCard({ product }) {
//   return (
//     <div className="product-card">

//       {/* Click image → open details page */}
//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹ {product.price}</p>

//       <button className="add-btn">
//            navigate("/Cart");
//         Add to Cart
//       </button>

//     </div>
//   );
// }

// export default ProductCard;
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./ProductCard.css";

// function ProductCard({ product }) {

//   const navigate = useNavigate();

//   // ✅ STEP 1 — size state (ADD HERE)
//   const [size, setSize] = useState(null);

//   // ✅ STEP 2 — add to cart with size
//   const handleAddToCart = () => {

//     if (!size) {
//       alert("Please select size");
//       return;
//     }

//     const existingCart =
//       JSON.parse(localStorage.getItem("cart")) || [];

//     const item = existingCart.find(
//       i =>
//         i.id === product.id &&
//         i.size === size
//     );

//     if (item) {
//       item.qty += 1;
//     } else {
//       existingCart.push({
//         ...product,
//         size,
//         qty: 1
//       });
//     }

//     localStorage.setItem(
//       "cart",
//       JSON.stringify(existingCart)
//     );

//     navigate("/cart");
//   };

//   return (
//     <div className="product-card">

//       <Link to={`/product/${product.id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-image"
//         />
//       </Link>

//       <h3>{product.name}</h3>
//       <p>₹ {product.price}</p>

//       {/* ✅ STEP 3 — size selector (ADD HERE) */}
//       <div className="size-selector">
//         {[6, 7, 8, 9, 10].map(s => (
//           <button
//             key={s}
//             className={
//               size === s
//                 ? "size-btn active"
//                 : "size-btn"
//             }
//             onClick={() => setSize(s)}
//           >
//             {s}
//           </button>
//         ))}
//       </div>

//       <button
//         className="add-btn"
//         onClick={handleAddToCart}
//       >
//         Add to Cart
//       </button>

//     </div>
//   );
// }

// export default ProductCard;


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Productcard.css"

function ProductCard({ product }) {

  const navigate = useNavigate();

  // size state
  const [size, setSize] = useState(null);

  // 👉 ADD THIS HERE (after useState)
  const needsSize = ["men", "women", "kids", "shoes"]
    .includes(product.category);

  const handleAddToCart = () => {

    // require size only if category needs it
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
    <div className="product-card">

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      {/* show size selector only when needed */}
      {needsSize && (
        <div className="size-selector">
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
      )}

      <button
        className="add-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
