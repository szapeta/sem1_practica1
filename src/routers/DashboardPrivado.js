import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeUser } from '../components/private/homeuser/HomeUser';

export const DashboardPrivado = () => {
  return (
    <>
      <Switch>
        <Route path="/homeuser" element={HomeUser} />
      </Switch>
    </>
  );
};
