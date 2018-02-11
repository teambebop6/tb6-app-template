import React from 'react';
import { Route, Link} from 'react-router-dom';
import TopBar from '../common/TopBar/TopBar';
const path = require('path');

const router = ({ match }) => (
  <div>  
    <TopBar/>
  
    <ul>
      <li>
        <Link to={path.join(match.url, './')}>List items</Link>
      </li>
      <li>
        <Link to={path.join(match.url, './add')}>Add item</Link>
      </li>
    </ul>

    <Route path={path.join(match.url, './add')} component={AddItem} />

    <Route exact path={path.join(match.url, '/')} render={() =>
      <h3>Items list</h3>
    }
    />
  </div>
)

const AddItem = () => (
  <div>
    <h3>Add item</h3>
  </div>
);

export default router;
