import DashboardGuest from '../views/pages/dashboard-guest';
import DashboardUser from '../views/pages/dashboard-user';
import Login from '../views/pages/login';

const routes = {
  '/': DashboardGuest,
  '/dashboard-guest': DashboardGuest,
  '/login': Login,
  '/dashboard-user': DashboardUser,
};
 
export default routes;