import React, { useContext } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { DashboardPrivado } from "./DashboardPrivado";
import { DashboardPublic } from "./DashboardPublic";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            path="/user"
            component={DashboardPrivado}
            isAutenticated={user.logged}
          />

          <PublicRoute
            path="/"
            component={DashboardPublic}
            isAutenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
