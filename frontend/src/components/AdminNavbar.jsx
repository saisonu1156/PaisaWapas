import React, { useState } from "react";
import logo from "../assets/logo.png";
import sai from "../assets/sai.jpg";
import "./AdminNavbar.css"; // import plain CSS

function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="admin-navbar">
      <div className="nav-container">
        {/* Logo + Title */}
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">Product Management</span>
        </div>

        {/* Hamburger for small screens */}
        <div className="hamburger">
          <button onClick={toggleMenu}>
            <svg
              className="hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Profile (Sai Image) */}
        <div className="profile-desktop">
          <img src={sai} alt="Sai" className="profile-img" />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <span className="menu-item">Dashboard</span>
          <span className="menu-item">Products</span>
          <span className="menu-item">Orders</span>
          <div className="mobile-profile">
            <img src={sai} alt="Sai" className="profile-img-mobile" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbar;
