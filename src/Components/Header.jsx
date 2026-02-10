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
        <Link to="/women">Products</Link>
        <Link to="/kids">Login</Link>
      </div>

    </header>
  );
}

export default Header;
