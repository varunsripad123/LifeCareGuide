import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './loginpage';
import VehicleDetailsForm from './VehicleDetailsForm1';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/vehicle-details" component={VehicleDetailsForm} />
      </Switch>
    </Router>
  );
}

export default Routes;

