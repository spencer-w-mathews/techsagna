// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <img src={logo} height={50} /> */}
        <Link to="/" className="navbar-logo" >TechSagna</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
