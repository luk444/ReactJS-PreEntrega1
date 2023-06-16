import React, { useState } from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.css';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <p className="navbar-brand">PANTAUTOMATION SHOP</p>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Soporte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de nosotros</a>
            </li>
          </ul>
        </div>
        <div className="cart-wrapper">
          <CartWidget />
          <img src="../../../../carro.png" alt="" className="cart-icon" />
        </div>
      </div>
    </nav>
  );
};
