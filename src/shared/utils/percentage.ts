export const formatPercentage = (value: number | string): string => {
  const numericValue = typeof value === 'string' ? Number.parseFloat(value) : value;

  if (Number.isNaN(numericValue)) {
    throw new TypeError('Invalid percentage value');
  }

  return `${numericValue > 0 ? '+' : ''}${numericValue.toFixed(2)}%`;
};
