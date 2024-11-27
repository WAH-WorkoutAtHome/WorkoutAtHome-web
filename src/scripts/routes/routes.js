import DashboardGuest from '../views/pages/dashboard-guest';
import DashboardUser from '../views/pages/dashboard-user';
import Kalendar from '../views/pages/kalendar';
import Tutorial from '../views/pages/tutorial';
import KalkulatorGizi from '../views/pages/kalkulator-gizi';

const routes = {
  '/': DashboardGuest,
  '/dashboard-guest': DashboardGuest,
  '/dashboard-user': DashboardUser,
  '/kalendar': Kalendar,
  '/tutorial': Tutorial,
  '/kalkulator-gizi': KalkulatorGizi,
};
 
export default routes;