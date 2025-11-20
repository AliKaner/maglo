import { DateLanguageType } from '@/shared/types/date/types';
import { DateLanguage } from '@/shared/types/language/enum';

export type DateFormatType = 'short' | 'long';

export const formatDate = (
  isoDate: string | Date,
  locale: DateLanguageType = DateLanguage.EN,
  format: DateFormatType = 'short',
): string => {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) return 'N/A';

  if (format === 'long') {
    const datePart = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);

    const timePart = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    }).format(date);

    return `${datePart} at ${timePart}`;
  }

  // Default short format: "14 Apr 2022"
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};
