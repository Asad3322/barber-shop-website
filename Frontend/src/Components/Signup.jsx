import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaFacebookF, FaTwitter, FaGoogle, FaCut } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Server error");
    }
  };

  return (
    <div className="signup-bg d-flex align-items-center justify-content-center min-vh-100 p-3">
      <ToastContainer />
      <div className="bg-orange text-white rounded-4 shadow-lg p-5 signup-card">
        <div className="text-center mb-4">
          <FaCut size={50} className="mb-2 text-white" />
          <h1 className="h4 fw-bold">Barber's Touch</h1>
        </div>

        <h2 className="text-center h3 mb-4">SIGN UP</h2>

        <div className="d-flex justify-content-center gap-4 mb-4">
          <button type="button" className="social-btn facebook">
            <FaFacebookF />
          </button>
          <button type="button" className="social-btn twitter">
            <FaTwitter />
          </button>
          <button type="button" className="social-btn google">
            <FaGoogle />
          </button>
        </div>

        <form className="d-grid gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name..."
            className="form-control rounded-pill px-4"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            className="form-control rounded-pill px-4"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className="form-control rounded-pill px-4"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="form-control rounded-pill px-4"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            className="form-control rounded-pill px-4"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-light text-orange fw-semibold rounded-pill"
          >
            Get Started
          </button>
        </form>

        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="text-white fw-bold text-decoration-underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
