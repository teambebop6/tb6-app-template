/**
 * Created by Henry Huang.
 */
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

const routes = [
  <Route exact path="/" component={Home}/>,
];

export default routes;