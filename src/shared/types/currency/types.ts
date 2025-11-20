import { CurrencyLanguage } from '@/shared/types/language/enum';
import { Currency } from './enums';

export type CurrencyType = keyof typeof Currency | (string & {});

export type CurrencyLanguageType = keyof typeof CurrencyLanguage | (string & {});

export type Price = {
  amount: number;
  currency: CurrencyType;
};
