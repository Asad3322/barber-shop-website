import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages and Components
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";
import Servicepage from "./Pages/Servicepage";
import Productspage from "./Pages/Productspage";
import Dashboardpage from "./Pages/Dashboardpage";
import Contactpage from "./Pages/Contactpage";
import Loginpage from "./Pages/Loginpage";
import SignupPage from "./Pages/Signuppage";
import ServiceDetail from "./Components/ServiceDetail";
import MyBookings from "./Components/MyBookings";
import AddProduct from "./Components/AddProduct";
import ViewProduct from "./Components/ViewProduct";
import AddService from "./Components/AddService";
import ViewService from "./Components/ViewService";
import Bookings from "./Components/Bookings";
import EditService from "./Components/EditService"; // ✅ Import added
import BookService from "./Components/BookService";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/book-service/:id" element={<BookService />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboardpage />
            </ProtectedRoute>
          }
        >
          <Route
            path="add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="view-product"
            element={
              <ProtectedRoute>
                <ViewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="add-service"
            element={
              <ProtectedRoute>
                <AddService />
              </ProtectedRoute>
            }
          />
          <Route
            path="view-service"
            element={
              <ProtectedRoute>
                <ViewService />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit-service/:id"
            element={
              <ProtectedRoute>
                <EditService />
              </ProtectedRoute>
            }
          />{" "}
          {/* ✅ Added */}
          <Route
            path="bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
};

export default App;
