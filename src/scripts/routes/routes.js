import DashboardGuest from '../views/pages/dashboard-guest';
import DashboardUser from '../views/pages/dashboard-user';
import Tutorial from '../views/pages/tutorial';

const routes = {
  '/': DashboardGuest,
  '/dashboard-guest': DashboardGuest,
  '/dashboard-user': DashboardUser,
  '/tutorial': Tutorial,
};
 
export default routes;