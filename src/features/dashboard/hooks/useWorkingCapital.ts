import { WORKING_CAPITAL_CHART_LINES } from '@/features/dashboard/constants';
import financialAPI from '@/shared/lib/api/services/financial.service';
import type { WorkingCapitalData } from '@/shared/types/api/FinancialService/types';
import { useQuery } from '@tanstack/react-query';

export const useWorkingCapital = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ['working-capital'],
    queryFn: async () => financialAPI.getWorkingCapital(),
  });

  const data = response?.success ? response.data : null;

  const chartData = () => {
    if (!data?.data) return null;

    const labels = data.data.map((item: WorkingCapitalData) => item.month);
    const incomeData = data.data.map((item: WorkingCapitalData) => item.income / 1000);
    const expenseData = data.data.map((item: WorkingCapitalData) => item.expense / 1000);

    const datasets = [
      {
        label: WORKING_CAPITAL_CHART_LINES[0].name,
        data: incomeData,
        borderColor: WORKING_CAPITAL_CHART_LINES[0].stroke,
        backgroundColor: WORKING_CAPITAL_CHART_LINES[0].stroke,
        pointHoverBackgroundColor: WORKING_CAPITAL_CHART_LINES[0].stroke,
      },
      {
        label: WORKING_CAPITAL_CHART_LINES[1].name,
        data: expenseData,
        borderColor: WORKING_CAPITAL_CHART_LINES[1].stroke,
        backgroundColor: WORKING_CAPITAL_CHART_LINES[1].stroke,
        pointHoverBackgroundColor: WORKING_CAPITAL_CHART_LINES[1].stroke,
      },
    ];

    return { labels, datasets };
  };

  return { data, isLoading, chartData: chartData() };
};
