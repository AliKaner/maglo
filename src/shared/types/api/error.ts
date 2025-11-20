export const enum ErrorCodes {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidInput = 'INVALID_INPUT',
  AccountDeactivated = 'ACCOUNT_DEACTIVATED',
  TokenMissing = 'TOKEN_MISSING',
  UnexpectedError = 'UNEXPECTED_ERROR',
  ValidationFailed = 'VALIDATION_FAILED',
}

export interface ErrorDetail {
  field: string;
  message: string;
  code: string;
}
