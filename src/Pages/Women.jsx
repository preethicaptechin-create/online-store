// import React, { useState } from "react";
// import { products } from "../Services/Product";
// import { Link } from "react-router-dom";
// import "./Women.css";

// const Women = () => {

//   // filter women products
// const womenProducts = products.filter(
//   product => product.category === "women"
// );


//   // quantity state
//   const [counts, setCounts] = useState({});

//   const addItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1
//     }));
//   };

//   const removeItem = id => {
//     setCounts(prev => ({
//       ...prev,
//       [id]: Math.max((prev[id] || 0) - 1, 0)
//     }));
//   };

//   return (
//     <div className="women-page">

//       <h1>Women's Collection</h1>

//       <div className="women-grid">

//         {womenProducts.map(product => {

//           const qty = counts[product.id] || 0;

//           return (
//             <div key={product.id} className="women-card">

//               {/* <img src={product.image} alt={product.name} /> */}
//                             <Link to={`/product/${product.id}`}>
//   <img src={product.image} alt={product.name} />
// </Link>

//               <h3>{product.name}</h3>
//               <p>₹ {product.price}</p>

//               <div className="cart-controls">

//                 <button
//                   className="cart-btn"
//                   onClick={() => removeItem(product.id)}
//                 >
//                   −
//                 </button>

//                 <span>{qty}</span>

//                 <button
//                   className="cart-btn"
//                   onClick={() => addItem(product.id)}
//                 >
//                   +
//                 </button>

//               </div>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default Women;



import React from "react";
import { products } from "../Services/Product";
import { Link, useNavigate } from "react-router-dom";
import "./Women.css";

const Women = () => {

  const navigate = useNavigate();

  // filter women products
  const womenProducts = products.filter(
    product => product.category === "women"
  );

  // ✅ Add to cart
  const handleAddToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const item = existingCart.find(
      i => i.id === product.id
    );

    if (item) {
      item.qty += 1;
    } else {
      existingCart.push({ ...product, qty: 1 });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    // 👉 go to cart page
    navigate("/cart");
  };

  return (
    <div className="women-page">

      <h1>Women's Collection</h1>

      <div className="women-grid">

        {womenProducts.map(product => (

          <div key={product.id} className="women-card">

            {/* Click image → details */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
              />
            </Link>

            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>

            {/* ✅ Add to cart button */}
            <button
              className="add-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Women;
