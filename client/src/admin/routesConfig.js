/**
 * Created by Henry Huang.
 */

import AdminHomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

// Subroutes
import crudRoutes from './pages/CrudTemplate/routesConfig';

const path = require('path');

var routes = [
  {
    path: '/admin',
    component: AdminHomePage,
    exact: true,
    admin: true,
  },
  {
    path: '/login',
    component: LoginPage,
    exact: true,
  }
]

// Plugin subroute
const crudBaseUrl = '/admin/crudTemplate/';
crudRoutes.forEach(function(route, index) {
  crudRoutes[index].path = path.join(crudBaseUrl, route.path);
});

routes = routes.concat(crudRoutes);


export default routes;
