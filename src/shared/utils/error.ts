import { ERROR_MESSAGES } from '@/shared/constants/error.messages';
import { ErrorResponse } from '@/shared/types/api/response';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const apiResponseErrorToast = (error: AxiosError<ErrorResponse>) => {
  const apiError = error.response?.data;

  if (apiError) {
    toast.error(apiError.message);
  } else {
    toast.error(ERROR_MESSAGES.GENERIC);
  }
};

const isAPIErrorResponse = (data: unknown) => {
  return typeof data === 'object' && data !== null && 'message' in data && typeof (data as any).message === 'string';
};

export const handleAPIError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error.code === 'ECONNABORTED') {
      return ERROR_MESSAGES.TIMEOUT;
    }

    if (!error.response) {
      return ERROR_MESSAGES.NETWORK;
    }

    if (error.response.status >= 500)
      switch (error.response.status) {
        case 503:
          return ERROR_MESSAGES.SERVICE_UNAVAILABLE;
        default:
          return ERROR_MESSAGES.SERVER_ERROR;
      }

    if (isAPIErrorResponse(error.response.data)) return error.response.data.message;

    switch (error.response.status) {
      case 401:
        return ERROR_MESSAGES.UNAUTHORIZED;
      case 403:
        return ERROR_MESSAGES.FORBIDDEN;
      case 404:
        return ERROR_MESSAGES.NOT_FOUND;
      case 429:
        return ERROR_MESSAGES.RATE_LIMIT;
      default:
        return error.response.statusText || ERROR_MESSAGES.GENERIC;
    }
  }

  if (error instanceof Error) return error.message;

  return ERROR_MESSAGES.GENERIC;
};

export const shouldRetryRequest = (error: unknown): boolean => {
  if (!(error instanceof AxiosError)) return false;

  if (error.code === 'ECONNABORTED') return true;
  if (!error.response) return true;

  const status = error.response.status;
  if (status === 408) return true;
  if (status === 429) return false;
  if (status >= 500) return true;

  return false;
};

export const getRetryDelay = (attemptIndex: number): number => {
  return Math.min(1000 * Math.pow(2, attemptIndex), 10000);
};
