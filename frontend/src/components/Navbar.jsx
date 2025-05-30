// frontend/src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaReact, FaHome, FaInfoCircle, FaNewspaper } from 'react-icons/fa'; // Esempio di icone

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <FaReact className="me-2 text-info" size="1.5em" /> {/* Icona React */}
          My React Blog
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                end // Importante per la rotta '/' per non essere sempre attiva
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaHome className="me-1" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/posts"
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaNewspaper className="me-1" /> Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaInfoCircle className="me-1" /> Chi Siamo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;