import List from './List';
import Add from './Add';

export default [
  {
    path: '/add',
    component: Add,
    exact: true,
    admin: true,
  },
  {
    path: '/',
    component: List,
    exact: false,
    admin: true,
  }
]
