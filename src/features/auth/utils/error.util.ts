import { useSetErrors } from '@/features/auth/stores/useAuthFormStore';
import { ISignUpSchema } from '@/features/auth/types/signup.types';
import { ErrorCodes } from '@/shared/types/api/error';
import { ErrorResponse } from '@/shared/types/api/response';
import { apiResponseErrorToast } from '@/shared/utils/error';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const formApiResponseError = (error: AxiosError<ErrorResponse>) => {
  const apiError = error.response?.data;

  if (apiError && apiError.code === ErrorCodes.ValidationFailed) {
    if (apiError.details) {
      for (const detail of apiError.details) {
        const fieldName = detail.field as keyof ISignUpSchema;
        useSetErrors({ [fieldName]: { message: detail.message } });
      }
      toast.error(apiError.message || 'Please check the form for errors');
    }
  } else {
    apiResponseErrorToast(error);
  }
};
