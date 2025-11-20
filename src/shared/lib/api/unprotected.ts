import { API_BASE_URL } from '@/shared/constants';
import axios from 'axios';
import { setAccessToken } from './token';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  response => {
    const accessToken = response.data?.data?.accessToken;
    if (accessToken) setAccessToken(accessToken);

    return response;
  },
  error => Promise.reject(error),
);

export default api;
