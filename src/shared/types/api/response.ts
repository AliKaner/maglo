import { ErrorCodes, ErrorDetail } from './error';

export type SuccessResponse<T = any> = {
  success: true;
  message: string;
  data: T;
};

export type ErrorResponse = {
  success: false;
  error: string;
  message: string;
  code?: string | ErrorCodes;
  details?: ErrorDetail[];
};

export type APIResponse<T = any> = SuccessResponse<T> | ErrorResponse;
