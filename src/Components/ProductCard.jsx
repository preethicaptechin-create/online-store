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


import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* Click image → open details page */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      <button className="add-btn">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;

