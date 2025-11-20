import type {
  RecentTransactionStatusType,
  ScheduledTransferStatusType,
  Trend,
  WalletCardType,
  WalletNetworkType,
} from './enum';

export type Change = {
  percentage: number;
  trend: `${Trend}`;
};

export interface SummaryDetail {
  amount: number;
  currency: string;
  change?: Change;
}

export interface WorkingCapitalData {
  month: string;
  income: number;
  expense: number;
  net: number;
}

export interface WorkingCapitalSummary {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
}

export interface WorkingCapital {
  period: string;
  currency: string;
  data: WorkingCapitalData[];
  summary: WorkingCapitalSummary;
}

export interface WalletCard {
  id: string;
  name: string;
  type: `${WalletCardType}`;
  cardNumber: string;
  bank: string;
  network: `${WalletNetworkType}`;
  expiryMonth: number;
  expiryYear: number;
  color: string;
  isDefault: boolean;
}

export interface RecentTransaction {
  id: string;
  name: string;
  business: string;
  image: string;
  type: string;
  amount: number;
  currency: string;
  date: string;
  status: `${RecentTransactionStatusType}`;
}

export interface RecentTransactionSummary {
  totalIncome: number;
  totalExpense: number;
  count: number;
}

export interface ScheduledTransfer {
  id: string;
  name: string;
  image: string;
  date: string;
  amount: number;
  currency: string;
  status: `${ScheduledTransferStatusType}`;
}

export interface ScheduledTransferSummary {
  totalScheduledAmount: number;
  count: number;
}
