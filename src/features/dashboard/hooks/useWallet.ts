import financialAPI from '@/shared/lib/api/services/financial.service';
import { useQuery } from '@tanstack/react-query';

export const useWallet = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ['wallet'],
    queryFn: async () => financialAPI.getWallet(),
  });

  const data = response?.success ? response.data.cards : null;

  return { data, isLoading };
};
