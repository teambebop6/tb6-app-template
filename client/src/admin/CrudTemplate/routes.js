import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from '../common/TopBar/TopBar';

// Subroutes
import List from './List';
import Add from './Add';

const path = require('path');
const router = ({ match }) => (
  <div>  
    <TopBar/>

    <Route path={path.join(match.url, './add')} component={Add} />
    <Route exact path={path.join(match.url, '/')} component={List} />

  </div>
)

export default router;
