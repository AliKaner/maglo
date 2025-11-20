import { useState } from 'react';

import { HoverPos, LineChartProps } from '@/shared/components/LineChart/LineChart.types';

interface IChartHover {
  chartRef: any;
  labels: string[];
  datasets: LineChartProps['datasets'];
}

export const useChartHover = (args: IChartHover) => {
  const { chartRef, labels, datasets = [] } = args;

  const [activeTooltip, setActiveTooltip] = useState<HoverPos | null>(null);

  const clearTooltip = () => {
    setActiveTooltip(null);
  };

  const updateTooltip = (event: any, elements: any) => {
    const hasActiveElements = elements.length > 0 && datasets.length > 0;

    if (hasActiveElements) {
      const activeElement = elements[0];
      const chartInstance = chartRef.current;

      if (!chartInstance) return;

      const { index: dataIndex, datasetIndex } = activeElement;
      const meta = chartInstance.getDatasetMeta(datasetIndex);
      const pointData = meta.data[dataIndex];
      const dataset = datasets[datasetIndex];

      if (!dataset) return;

      const newTooltipData: HoverPos = {
        x: pointData.x,
        y: pointData.y,
        value: dataset.data[dataIndex],
        date: labels[dataIndex],
        index: dataIndex,
        lineType: dataset.label,
        isIncome: datasetIndex === 0,
      };

      setActiveTooltip(prevData => {
        const isSamePoint = prevData?.index === newTooltipData.index;
        const isSameLine = prevData?.lineType === newTooltipData.lineType;

        if (isSamePoint && isSameLine) {
          return prevData;
        }
        return newTooltipData;
      });
    } else {
      clearTooltip();
    }
  };

  return {
    hoverPos: activeTooltip,
    handleHover: updateTooltip,
    handleMouseLeave: clearTooltip,
  };
};
