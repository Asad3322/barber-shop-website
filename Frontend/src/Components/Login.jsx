import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaFacebookF, FaTwitter, FaGoogle, FaCut } from "react-icons/fa"; // Import icons here
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // Send credentials to the backend
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success("Login Successful!", { theme: "colored" });
        localStorage.setItem("user", JSON.stringify(data.user)); // Optionally store user data
        navigate("/dashboard"); // Redirect to the dashboard page
      } else {
        toast.error(data.message || "Login failed", { theme: "colored" });
      }
    } catch (error) {
      toast.error("Server error, try again!", { theme: "colored" });
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-card mx-auto">
        <div className="login-header">
          <FaCut className="mb-3" size={40} style={{ color: "#d4af37" }} />
          <h2>Welcome Back</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="btn btn-login" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">Or sign in with</p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button type="button" className="login-social-btn facebook">
              <FaFacebookF />
            </button>
            <button type="button" className="login-social-btn twitter">
              <FaTwitter />
            </button>
            <button type="button" className="login-social-btn google">
              <FaGoogle />
            </button>
          </div>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
