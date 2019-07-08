import React from 'react';
import {
  Switch, Route, BrowserRouter as Router, Redirect,
} from 'react-router-dom';

import Main from '../views/Main/Main';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Route
        path="*"
        exact
        render={() => (<div>404</div>)}
      />
    </Switch>
  </Router>
);

export default AppRoutes;
