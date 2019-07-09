// @flow

import React from 'react';
import {
  Route, BrowserRouter as Router, Redirect, Switch
} from 'react-router-dom';
import Main from '../views/Main/Main';
import '../assets/index.css';

import type { Element } from 'react';

const AppRoutes = (): Element<any> => (
  <Router>
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Route
        path="*"
        exact
        render={(): Element<'div'> => (<div>404</div>)}
      />
    </Switch>
  </Router>
);

export default AppRoutes;
