import { API_BASE_URL } from '@/shared/constants';
import { ROUTES } from '@/shared/constants/routes';
import { RefreshTokenResponse } from '@/shared/types/api/UserService';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { clearTokens, getTokens, setAccessToken } from './token';

const onUnauthorized: () => void = () => {
  window.location.href = ROUTES.AUTH.SIGN_IN;
};

let isRefreshing = false;
let failedQueue: Array<{ resolve: (value: unknown) => void; reject: (reason?: any) => void }> = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const protectedAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

protectedAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const tokens = getTokens();

    if (tokens?.access.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${tokens.access.token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

protectedAPI.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
            }
            return protectedAPI(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await axios.post<RefreshTokenResponse>(
          `${API_BASE_URL}/users/refresh-token`,
          {},
          { withCredentials: true },
        );

        const newAccessToken = data.accessToken;

        setAccessToken(newAccessToken);

        protectedAPI.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;

        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }

        processQueue(null, newAccessToken);
        return protectedAPI(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);
        clearTokens();

        onUnauthorized();

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default protectedAPI;
