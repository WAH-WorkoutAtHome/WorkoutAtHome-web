import DashboardGuest from "../views/pages/dashboard-guest";
import DashboardUser from "../views/pages/dashboard-user";
import Kalendar from "../views/pages/kalendar";
import Tutorial from "../views/pages/tutorial";
import KalkulatorGizi from "../views/pages/kalkulator-gizi";
import Profile from "../views/pages/profile";
import Biodata from "../views/pages/biodata";
import Chatbot from "../views/pages/chatbot";

const getDefaultRoute = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const token = urlParams.get("token");
  const profileData = urlParams.get("profile");

  if (token) {
    localStorage.setItem("userToken", token);
  }

  if (profileData) {
    try {
      const profile = JSON.parse(decodeURIComponent(profileData));
      localStorage.setItem("userProfile", JSON.stringify(profile));
    } catch (error) {
      console.error("Failed to parse profile data", error);
    }
  }

  const userToken = localStorage.getItem("userToken");
  return userToken ? DashboardUser : DashboardGuest;
};

const routes = {
  "/": getDefaultRoute(),
  "/dashboard-guest": DashboardGuest,
  "/biodata": Biodata,
  "/dashboard-user": DashboardUser,
  "/kalendar": Kalendar,
  "/tutorial": Tutorial,
  "/kalkulator-gizi": KalkulatorGizi,
  "/profile": Profile,
  "/chatbot": Chatbot,
};

export default routes;
