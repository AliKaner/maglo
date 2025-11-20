import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import financialAPI from '@/shared/lib/api/services/financial.service';
import { type SummaryData } from '@/shared/types/api/FinancialService';
import { type IconName } from '@/shared/components/Icon';
import { type CurrencyType } from '@/shared/types/currency/types';
import { type SummaryCardProps } from '@/features/dashboard/components/SummaryCard';

const CARD_CONFIG: { title: string; icon: IconName; isFeatured?: boolean; dataKey: keyof SummaryData }[] = [
  {
    title: 'Total balance',
    icon: 'WalletClosed20',
    isFeatured: true,
    dataKey: 'totalBalance',
  },
  {
    title: 'Total expense',
    icon: 'WalletClosed20',
    dataKey: 'totalExpense',
  },
  {
    title: 'Total savings',
    icon: 'WalletAdd20',
    dataKey: 'totalSavings',
  },
];

export const useFinancialSummary = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['financial-summary'],
    queryFn: () => financialAPI.getSummary(),
  });

  const summaryCards = useMemo<SummaryCardProps[]>(() => {
    if (!data?.success) return [];

    return CARD_CONFIG.map(config => {
      const summaryData = data.data[config.dataKey];

      return {
        title: config.title,
        icon: config.icon,
        isFeatured: config.isFeatured ?? false,
        price: {
          amount: summaryData.amount,
          currency: summaryData.currency as CurrencyType,
        },
        change: summaryData.change,
      };
    });
  }, [data]);

  return {
    summaryCards,
    isLoading,
    error,
  };
};
