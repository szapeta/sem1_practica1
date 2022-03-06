import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AlbumEditar } from "../components/private/albumeditar/AlbumEditar";
import { HomeUser } from "../components/private/homeuser/HomeUser";
import { PerfilEdit } from "../components/private/perfiledit/PerfilEdit";
import { SubirFotos } from "../components/private/subirfotos/SubirFotos";
import { VerFotos } from "../components/private/verfotos/VerFotos";
import FooterAuth from "../components/rol/FooterAuth";
import { NavAuth } from "../components/rol/NavAuth";

export const DashboardPrivado = () => {
  return (
    <>
      <NavAuth />
      <div className="container mt-2">
        <Switch>
          <Route path="/homeuser" component={HomeUser} />
          <Route path="/perfiledit" component={PerfilEdit} />
          <Route path="/albumedit" component={AlbumEditar} />
          <Route path="/foto" component={VerFotos} />
          <Route path="/fotoupload" component={SubirFotos} />

          <Redirect to="/home/login" />
        </Switch>
      </div>
      <FooterAuth />
    </>
  );
};
