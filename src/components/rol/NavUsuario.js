import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

export const NavUsuario = () => {
    return (
        <>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link pr-5"
                        exact
                        to="/foto"
                    >
                        Ver Fotos
                    </NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link pr-5"
                        exact
                        to="/fotoupload"
                    >
                        Subir Fotos
                    </NavLink>
                </div>
                <div className="navbar-nav pr-5">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/perfiledit"
                    >
                        Editar Perfil
                    </NavLink>
                </div>
                <div className="navbar-nav pr-5">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/albumedit"
                    >
                        Editar Album
                    </NavLink>
                </div>
            </div>
        </>
    )
}