// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const Navbar = () => {
  const handleLogout = () => {
    AuthService.logout();
    window.location.href = "/login";  // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
