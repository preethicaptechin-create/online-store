// import "./Header.css";

// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <header className="header">
//       <Link to="men">Home</Link>
//        <Link to="/women">Products</Link>
//         <Link to="/kids">Login</Link>
//     </header>
//   );
// }

// export default Header;

import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>

      {/* Promo carousel strip */}
      <div className="promo-bar">
        <div className="promo-track">
          <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
          <span>✨ New Arrivals Just Dropped!</span>
          <span>🛍️ Trendy Fashion Deals Waiting!</span>

          {/* duplicate for smooth loop */}
          <span>🔥 Style Bazaar — Flat 30% OFF — Shop Now!</span>
          <span>✨ New Arrivals Just Dropped!</span>
          <span>🛍️ Trendy Fashion Deals Waiting!</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
          <input
          className="search-bar"
          type="text"
          placeholder="Search products..."
        />
         <FaShoppingCart className="cart-icon" />
      </div>

    </header>
  );
}

export default Header;
