import type {
  RecentTransaction,
  RecentTransactionSummary,
  ScheduledTransfer,
  ScheduledTransferSummary,
  SummaryDetail,
  WalletCard,
  WorkingCapital,
} from './types';

export interface SummaryData {
  totalBalance: SummaryDetail;
  totalExpense: SummaryDetail;
  totalSavings: SummaryDetail;
}

export interface SummaryResponse extends SummaryData {
  lastUpdated: Date;
}

export type WorkingCapitalResponse = WorkingCapital;

export interface WalletResponse {
  cards: WalletCard[];
}

export interface RecentTransactionResponse {
  transactions: RecentTransaction[];
  summary: RecentTransactionSummary;
}

export interface ScheduledTransferResponse {
  transfers: ScheduledTransfer[];
  summary: ScheduledTransferSummary;
}
