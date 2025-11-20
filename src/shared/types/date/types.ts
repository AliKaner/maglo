import { DateLanguage } from '@/shared/types/language/enum';

export type DateLanguageType = keyof typeof DateLanguage | (string & {});
