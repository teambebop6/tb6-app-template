/**
 * Created by Henry Huang.
 */
import React from 'react';
import { Route } from 'react-router-dom';
import AdminRouteContainer from './containers/AdminRouteContainer';
import AdminHomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

const routes = [
  <AdminRouteContainer exact path="/admin" component={AdminHomePage}/>,
  <Route exact path={'/login'} component={LoginPage}/>,
];

export default routes;