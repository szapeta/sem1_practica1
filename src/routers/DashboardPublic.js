import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from "../components/public/home/Home";
import { Login } from "../components/public/login/Login";
import { Registro } from '../components/public/registro/Registro';

export const DashboardPublic = () => {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={Registro} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
