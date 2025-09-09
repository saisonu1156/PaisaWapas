import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaListUl } from "react-icons/fa";
import "./AdminSidebar.css"; // import the plain CSS

function AdminSidebar() {
  const linkClasses = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <aside className="admin-sidebar">
      {/* Logo / Header */}
      <div className="sidebar-header">
        Paisa Waapas
      </div>

      {/* Menu Items */}
      <nav className="sidebar-nav">
        <NavLink to="/admin/add-product" className={linkClasses}>
          <FaPlusCircle className="icon" />
          Add Product
        </NavLink>

        <NavLink to="/admin/list-products" className={linkClasses}>
          <FaListUl className="icon" />
          List Products
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        &copy; {new Date().getFullYear()} Admin Dashboard
      </div>
    </aside>
  );
}

export default AdminSidebar;
