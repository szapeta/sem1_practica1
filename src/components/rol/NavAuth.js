import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/Types";
import { NavClear } from "./NavClear";
import { NavUsuario } from "./NavUsuario";

export const NavAuth = () => {
  const {
    user: { name, rol },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace("/home");
    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/homeuser">
        Faunadex
      </Link>

      {rol == types.rolUsuario ? <NavUsuario /> : <NavClear />}

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <button className="nav-item nav-link btn" disabled>
            {name}
          </button>
          <button className="nav-item nav-link btn" disabled>
            |
          </button>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};
