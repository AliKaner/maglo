import { ACCESS_TOKEN_KEY, EXPIRE_TIME_IN_ONE_HOUR } from '@/shared/constants';
import Cookies from 'js-cookie';

interface AccessTokenPayload {
  access: {
    token: string;
  };
}

export const getTokens = (): AccessTokenPayload | null => {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);

  if (accessToken) {
    return {
      access: { token: accessToken },
    };
  }

  return null;
};

export const setAccessToken = (token: string): void => {
  Cookies.set(ACCESS_TOKEN_KEY, token, { expires: EXPIRE_TIME_IN_ONE_HOUR });
};

export const clearTokens = (): void => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};
