import CONFIG from './config';

const API_ENDPOINT = {
    Dashboard_Guest: `${CONFIG.BASE_URL}/dashboard_guest?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
    Login: `${CONFIG.BASE_URL}/login?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
    Dashboard_User: `${CONFIG.BASE_URL}/dashboard_user?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  };

  export default API_ENDPOINT;