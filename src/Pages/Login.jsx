import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [error, setError] = useState("");


  useEffect(() => {
    const savedUser = localStorage.getItem("userEmail");
    if (savedUser) {
      setEmail(savedUser);
    }
  }, []);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!hasAccount) return setError("Please confirm you have an account");

    if (!email || !password)
      return setError("All fields are required");

    if (!validateEmail(email))
      return setError("Enter a valid email");

    if (password.length < 6)
      return setError("Password must be at least 6 characters");

 
    localStorage.setItem("userEmail", email);

    setError("");


    navigate("/");
  };

  return (
    <div className="login-overlay">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={hasAccount}
              onChange={() => setHasAccount(!hasAccount)}
            />
            I already have an account
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
