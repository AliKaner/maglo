import { API_BASE_URL } from '.';

const FINANCIAL_API_BASE = API_BASE_URL + '/financial';
const USERS_API_BASE = API_BASE_URL + '/users';

export const API_ROUTES = {
  FINANCIAL: {
    SUMMARY: `${FINANCIAL_API_BASE}/summary`,
    WORKING_CAPITAL: `${FINANCIAL_API_BASE}/working-capital`,
    WALLET: `${FINANCIAL_API_BASE}/wallet`,
    RECENT_TRANSACTIONS: `${FINANCIAL_API_BASE}/transactions/recent`,
    SCHEDULED_TRANSACTIONS: `${FINANCIAL_API_BASE}/transfers/scheduled`,
  },
  USERS: {
    REGISTER: `${USERS_API_BASE}/register`,
    LOGIN: `${USERS_API_BASE}/login`,
    LOGOUT: `${USERS_API_BASE}/logout`,
    USER_PROFILE: `${USERS_API_BASE}/profile`,
  },
};
