/**
 * Created by Henry Huang.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './default/Home';
import AdminHome from './admin/Home';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={AdminHome}/>
    </div>
  </Router>
);

export default router;