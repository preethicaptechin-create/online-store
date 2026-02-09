import "./Header.css";

import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/">Home</Link>
       <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
    </header>
  );
}

export default Header;

