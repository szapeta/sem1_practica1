import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  console.log("Navbar");
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        Faunadex
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav"></div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/home/login"
          >
            Login
          </NavLink>
          <p className="nav-item nav-link">|</p>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/home/new"
          >
            Registro
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
