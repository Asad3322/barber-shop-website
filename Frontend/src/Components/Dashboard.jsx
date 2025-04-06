import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("/dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleNavigate = (path) => {
    setActiveRoute(path);
    navigate(path);
  };

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const sidebarItems = [
    { label: "Add Product", icon: "bi-plus-circle", path: "/dashboard/add-product" },
    { label: "View Product", icon: "bi-box", path: "/dashboard/view-product" },
    { label: "Add Service", icon: "bi-tools", path: "/dashboard/add-service" },
    { label: "View Service", icon: "bi-eye", path: "/dashboard/view-service" },
    { label: "Bookings", icon: "bi-journal-check", path: "/dashboard/bookings" },
    // Removed Payments option
  ];

  const isDashboardHome = location.pathname === "/dashboard";

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white min-vh-100 p-4">
          <h4 className="mb-4" style={{ fontFamily: "'Lobster', cursive" }}>
            BarberDash
          </h4>
          <ul className="nav flex-column">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item mb-3 sidebar-icon ${
                  activeRoute === item.path ? "text-danger fw-bold" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleNavigate(item.path)}
              >
                <i className={`bi ${item.icon} me-2`}></i> {item.label}
              </li>
            ))}
            <li className="nav-item mt-4">
              <button className="btn btn-outline-light w-100" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-5">
          {isDashboardHome ? (
            <div className="text-center mt-5">
              <i className="bi bi-scissors display-1 text-primary mb-4"></i>
              <h1 className="fw-bold mb-3" style={{ fontFamily: "'Lobster', cursive" }}>
                Welcome to Your Barber Dashboard
              </h1>
              <p className="lead text-muted">
                Select an option from the sidebar to get started.
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
