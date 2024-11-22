import DashboardGuest from '../views/pages/dashboard-guest';
import DashboardUser from '../views/pages/dashboard-user';

const routes = {
  '/': DashboardGuest,
  '/dashboard-guest': DashboardGuest,
  '/dashboard-user': DashboardUser,
};
 
export default routes;