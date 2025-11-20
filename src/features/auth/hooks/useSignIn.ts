import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import type { ISignInSchema } from '@/features/auth/schemas/signin.schema';
import { formApiResponseError } from '@/features/auth/utils/error.util';
import { ROUTES } from '@/shared/constants/routes';
import userAPI from '@/shared/lib/api/services/user.service';
import { useUserStore } from '@/shared/stores/useUserStore';
import type { ErrorResponse } from '@/shared/types/api/response';

export const useSignIn = () => {
  const router = useRouter();
  const { setUser } = useUserStore();

  const loginMutation = useMutation({
    mutationFn: (data: ISignInSchema) => userAPI.login(data),
    onSuccess: response => {
      if (response.success && response.data) {
        toast.success(response.message);
        setUser(response.data.user);
        router.replace(ROUTES.DASHBOARD);
      }
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      formApiResponseError(error);
    },
  });

  return {
    signIn: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
