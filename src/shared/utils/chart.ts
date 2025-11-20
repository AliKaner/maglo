import { type Dataset } from '@/shared/components/LineChart/LineChart.types';

const DEFAULT_RANGE = { min: 0, max: 10 };
const AXIS_PADDING_PERCENTAGE = 0.2;
const MINIMUM_AXIS_PADDING = 2;

export const calculateYAxis = (seriesData: Dataset[] = []) => {
  if (!seriesData || seriesData.length === 0) return DEFAULT_RANGE;

  const combinedDataPoints = seriesData.flatMap(dataset => dataset.data);
  if (combinedDataPoints.length === 0) return DEFAULT_RANGE;

  const dataHigh = Math.max(...combinedDataPoints, 0);
  const dataLow = Math.min(...combinedDataPoints, 0);

  const dataRange = dataHigh - dataLow;
  let axisBuffer = dataRange * AXIS_PADDING_PERCENTAGE;

  if (axisBuffer === 0) axisBuffer = MINIMUM_AXIS_PADDING;

  const finalMax = Math.ceil(dataHigh + axisBuffer);
  const rawMin = Math.floor(dataLow - axisBuffer);
  const finalMin = Math.max(0, rawMin);

  return { min: finalMin, max: finalMax };
};
