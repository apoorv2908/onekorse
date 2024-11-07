import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">{"<"}</span>
        <span className="logo-text">ONEKORSE</span>
      </div>

      <nav className="nav-links">
        <Link to="/home" className="active">
          HOME
        </Link>
        <Link to="/aboutus">ABOUT</Link>

        <Link to="/pages">PAGES</Link>
        <Link to="">CLASSES</Link>
        <Link to="">COURSES</Link>
        <Link to="">BLOG</Link>
        <Link to="/contactus">CONTACT</Link>
      </nav>

      <div className="icons">
        <FaSearch className="icon" />
        <FaShoppingCart className="icon" />
        <FaBars className="icon" />
      </div>
    </header>
  );
};

export default Header;
