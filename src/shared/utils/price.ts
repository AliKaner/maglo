import { Currency } from '@/shared/types/currency/enums';
import { CurrencyType } from '@/shared/types/currency/types';
import { CurrencyLanguage } from '@/shared/types/language/enum';

export const formatPrice = (
  price: number | string,
  currency: CurrencyType = Currency.USD,
  baseMin?: boolean,
): string => {
  const numericPrice = typeof price === 'string' ? Number.parseFloat(price) : price;

  if (Number.isNaN(numericPrice)) return 'N/A';

  const currencyKey = currency as keyof typeof CurrencyLanguage;
  const locale = CurrencyLanguage[currencyKey] || CurrencyLanguage.USD;

  const TIERS = [
    { threshold: 1_000_000_000_000, divisor: 1_000_000_000_000, suffix: 'T' },
    { threshold: 1_000_000_000, divisor: 1_000_000_000, suffix: 'B' },
    { threshold: 1_000_000, divisor: 1_000_000, suffix: 'M' },
    { threshold: 100_000, divisor: 1_000, suffix: 'K' },
    baseMin ? { threshold: 1, divisor: 1, suffix: 'K' } : null,
    baseMin ? { threshold: 0, divisor: 1, suffix: 'K' } : null,
  ].filter(Boolean) as { threshold: number; divisor: number; suffix: string }[];

  const tier = TIERS.find(tier => Math.abs(numericPrice) >= tier.threshold);

  if (tier) {
    const { divisor, suffix } = tier;
    const valueToFormat = numericPrice / divisor;

    const formattedBase = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(valueToFormat);

    const result = `${formattedBase}${suffix}`;
    return result.replace(/^-([$€£])/, '- $1');
  }

  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(numericPrice);

  return formatted.replace(/^-([$€£])/, '- $1');
};
