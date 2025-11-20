'use client';

import { WORKING_CAPITAL_CHART_LINES } from '@/features/dashboard/constants';
import { useWorkingCapital } from '@/features/dashboard/hooks';
import { Card, DateDropdown, Legends, LineChart } from '@/shared/components';

import styles from './WorkingCapitalChart.module.scss';
import WorkingCapitalChartSkeleton from './WorkingCapitalChartSkeleton';

const WorkingCapitalChart = () => {
  const { data, isLoading, chartData } = useWorkingCapital();

  const renderContent = () => {
    if (isLoading || !chartData) return <WorkingCapitalChartSkeleton />;

    return <LineChart labels={chartData?.labels} datasets={chartData?.datasets} />;
  };

  return (
    <Card
      title="Working Capital"
      hasOverflow
      headerActions={
        <div className={styles.headerActions}>
          <Legends
            items={WORKING_CAPITAL_CHART_LINES.map(line => ({
              color: line.stroke,
              label: line.name,
            }))}
          />
          <DateDropdown timeRange={data?.period || ''} />
        </div>
      }
      showViewAll={false}
    >
      {renderContent()}
    </Card>
  );
};

export default WorkingCapitalChart;
