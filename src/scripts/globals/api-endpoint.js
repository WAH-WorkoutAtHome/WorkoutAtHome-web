import CONFIG from "./config";

const API_ENDPOINT = {
  Google_OAuth: `${CONFIG.BASE_URL}/auth/google`,
  Calculator_Calories: `${CONFIG.BASE_URL}/calculator/calories`,
  Chatbot: `${CONFIG.BASE_URL}/chatbot`,
  Calendar_Auth: `${CONFIG.BASE_URL}/calendar/auth`,
  Calendar_OAuth2Callback: `${CONFIG.BASE_URL}/calendar/oauth2callback`,
  Calendar_Events: `${CONFIG.BASE_URL}/calendar/events`,
  Calendar_Generate: `${CONFIG.BASE_URL}/calendar/generate`,
};

export default API_ENDPOINT;
