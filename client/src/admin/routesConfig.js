/**
 * Created by Henry Huang.
 */
import AdminHomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

export default [
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