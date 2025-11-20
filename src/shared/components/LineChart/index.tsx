'use client';

import { useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Tooltip } from '@/shared/components';
import { useChartHover, useChartOptions } from '@/shared/hooks';

import { calculateYAxis } from '@/shared/utils/chart';
import styles from './LineChart.module.scss';
import { LineChartProps } from './LineChart.types';

const LineChart = ({ labels = [], datasets = [] }: LineChartProps) => {
  const chartRef = useRef<any>(null);
  const [datePositions, setDatePositions] = useState<number[]>([]);
  const { hoverPos, handleHover, handleMouseLeave } = useChartHover({ chartRef, labels, datasets });
  const updateDatePositions = () => {
    const chart = chartRef.current;
    if (!chart) return;

    const positions = labels
      .map((_, index) => {
        const chartMeta = chart.getDatasetMeta(0);
        return chartMeta?.data[index]?.x ?? 0;
      })
      .filter(pos => pos > 0);

    setDatePositions(positions);
  };

  const yaxis = calculateYAxis(datasets);
  const realData = { labels, datasets };

  const chartOpts = useChartOptions({ yaxis, hoverPos, handleHover, updateDatePositions });

  return (
    <div className={styles.chartWrapper} onMouseLeave={handleMouseLeave}>
      <div className={styles.chartDividers}>
        {datePositions.map((position: number, index: number): React.ReactNode => (
          <div key={index} className={styles.chartDivider} style={{ left: `${position}px` }} />
        ))}
      </div>
      <Line ref={chartRef} options={chartOpts} data={realData} />
      <Tooltip hoverPos={hoverPos} />
    </div>
  );
};

export default LineChart;
