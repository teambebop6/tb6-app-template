/**
 * Created by Henry Huang.
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './default/Home';
import AdminRouter from './admin/routes';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/admin/" component={AdminRouter}/>
    </div>
  </Router>
);

export default router;
