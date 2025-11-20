import financialAPI from '@/shared/lib/api/services/financial.service';
import { useQuery } from '@tanstack/react-query';

export const useScheduledTransfers = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['scheduled-transfers'],
    queryFn: () => financialAPI.getScheduledTransfers(),
  });

  const data = response?.success ? response.data : null;

  return { data, isLoading, error };
};
