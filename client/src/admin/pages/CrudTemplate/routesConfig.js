import List from './List';
import Edit from './Edit';

export default [
  {
    path: '/add',
    component: Edit,
    exact: true,
    admin: true,
  },
  {
    path: '/modify/:id',
    component: Edit,
    exact: true,
    admin: true,
  },
  {
    path: '/',
    component: List,
    exact: false,
    admin: true,
  },
]
