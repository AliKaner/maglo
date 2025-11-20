import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import type { ISignUpSchema } from '@/features/auth/schemas/signup.schema';
import { formApiResponseError } from '@/features/auth/utils/error.util';
import { ROUTES } from '@/shared/constants/routes';
import userAPI from '@/shared/lib/api/services/user.service';
import type { ErrorResponse } from '@/shared/types/api/response';

export const useSignUp = () => {
  const router = useRouter();

  const registerMutation = useMutation({
    mutationFn: (data: ISignUpSchema) => userAPI.register(data),
    onSuccess: response => {
      if (response.success && response.data) {
        toast.success(response.message);
        router.replace(ROUTES.AUTH.SIGN_IN);
      }
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      formApiResponseError(error);
    },
  });

  return {
    signUp: registerMutation.mutate,
    isLoading: registerMutation.isPending,
    error: registerMutation.error,
  };
};
