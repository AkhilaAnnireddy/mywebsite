import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/Projects" className="nav-item">
        Projects
      </NavLink>
      <NavLink to="/Resume" className="nav-item">
        Resume
      </NavLink>
      <NavLink to="/Blog" className="nav-item">
        Blog
      </NavLink>
      <NavLink to="/Contact" className="nav-item">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
