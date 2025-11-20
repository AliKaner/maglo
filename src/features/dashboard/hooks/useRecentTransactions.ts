import financialAPI from '@/shared/lib/api/services/financial.service';
import { useQuery } from '@tanstack/react-query';

export const useRecentTransactions = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['recent-transactions'],
    queryFn: () => financialAPI.getRecentTransactions(),
  });

  const data = response?.success ? response.data : null;

  return { data, isLoading, error };
};
