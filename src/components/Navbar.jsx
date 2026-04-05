import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>TaskFlow</h1>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/create">Crear tarea</Link>
      </div>
    </nav>
  );
}

export default Navbar;