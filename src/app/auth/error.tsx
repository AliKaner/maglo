'use client';

import Error from '@/shared/components/Error/Error';
import { ERROR_MESSAGES } from '@/shared/constants/error.messages';
import { IGlobalError } from '@/shared/types/error/types';

const AuthError = ({ error, reset }: IGlobalError) => {
  return <Error message={error.message || ERROR_MESSAGES.UNAUTHORIZED} onRetry={reset} />;
};

export default AuthError;
