import { type HoverPos } from '@/shared/components/Tooltip';
import { Currency } from '@/shared/types/currency/enums';
import { formatPrice } from '@/shared/utils/price';

type IChartConfig = {
  yaxis: { min: number; max: number };
  hoverPos: HoverPos | null;
  handleHover: (event: any, elements: any) => void;
  updateDatePositions: () => void;
};

export const useChartOptions = (args: IChartConfig) => {
  const { yaxis, hoverPos, handleHover, updateDatePositions } = args;

  const yAxisBounds = yaxis;
  const activePoint = hoverPos;
  const onPointHover = handleHover;
  const onAnimationComplete = updateDatePositions;

  return {
    responsive: true,
    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: 'nearest' as const,
    },
    onHover: onPointHover,

    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: (ctx: any) => (activePoint && ctx.index === activePoint.index ? 'transparent' : '#929EAE'),
          font: { size: 12, weight: 400, family: 'Kumbh Sans' },
        },
      },
      y: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          callback: (tickValue: any) => {
            const priceString = formatPrice(tickValue, Currency.TRY, true);
            return priceString.replace('₺', '').trim();
          },
          stepSize: Math.ceil(yAxisBounds.max / 5),
          color: '#929EAE',
          font: { size: 12, weight: 400, family: 'Kumbh Sans' },
        },
        min: yAxisBounds.min,
        max: yAxisBounds.max,
      },
    },

    elements: {
      line: { tension: 0.4, borderWidth: 3 },
      point: {
        radius: 0,
        hitRadius: 15,
        hoverRadius: 6,
        hoverBorderWidth: 2,
        hoverBorderColor: '#FFFFFF',
      },
    },

    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },

    animation: {
      onComplete: onAnimationComplete,
    },
  };
};
