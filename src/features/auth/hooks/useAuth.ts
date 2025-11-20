import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { ROUTES } from '@/shared/constants/routes';
import userAPI from '@/shared/lib/api/services/user.service';
import { clearTokens } from '@/shared/lib/api/token';
import { useUserStore } from '@/shared/stores/useUserStore';
import type { ErrorResponse } from '@/shared/types/api/response';
import { apiResponseErrorToast } from '@/shared/utils/error';

export const useAuth = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, setUser, clearUser } = useUserStore();

  const logoutMutation = useMutation({
    mutationFn: () => userAPI.logout(),
    onSuccess: () => {
      setUser(null);
      clearUser();
      clearTokens();
      queryClient.clear();

      toast.success('Logged out successfully');
      router.push(ROUTES.AUTH.SIGN_IN);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      apiResponseErrorToast(error);
    },
  });

  return {
    user,
    isAuthenticated: !!user,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
};
