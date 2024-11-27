import DashboardGuest from '../views/pages/dashboard-guest';
import DashboardUser from '../views/pages/dashboard-user';
import Kalendar from '../views/pages/kalendar';
import Tutorial from '../views/pages/tutorial';
import KalkulatorGizi from '../views/pages/kalkulator-gizi';
import Profile from '../views/pages/profile';
import Biodata from '../views/pages/biodata';

const routes = {
  '/': DashboardGuest,
  '/dashboard-guest': DashboardGuest,
  '/biodata': Biodata,
  '/dashboard-user': DashboardUser,
  '/kalendar': Kalendar,
  '/tutorial': Tutorial,
  '/kalkulator-gizi': KalkulatorGizi,
  '/profile': Profile
};
 
export default routes;