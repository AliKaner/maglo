import type {
  RecentTransactionResponse,
  ScheduledTransferResponse,
  SummaryResponse,
  WalletResponse,
  WorkingCapitalResponse,
} from '@/shared/types/api/FinancialService';

import { API_ROUTES } from '@/shared/constants/api.routes';
import protectedAPI from '@/shared/lib/api/protected';
import { type APIResponse } from '@/shared/types/api/response';

interface IFinancialAPI {
  getSummary(): Promise<APIResponse<SummaryResponse>>;
  getWorkingCapital(): Promise<APIResponse<WorkingCapitalResponse>>;
  getWallet(): Promise<APIResponse<WalletResponse>>;
  getRecentTransactions(): Promise<APIResponse<RecentTransactionResponse>>;
  getScheduledTransfers(): Promise<APIResponse<ScheduledTransferResponse>>;
}
class FinancialAPI implements IFinancialAPI {
  private async get<T>(url: string): Promise<APIResponse<T>> {
    const { data } = await protectedAPI.get<APIResponse<T>>(url);
    return data;
  }

  async getSummary(): Promise<APIResponse<SummaryResponse>> {
    return this.get<SummaryResponse>(API_ROUTES.FINANCIAL.SUMMARY);
  }
  async getWorkingCapital(): Promise<APIResponse<WorkingCapitalResponse>> {
    return this.get<WorkingCapitalResponse>(API_ROUTES.FINANCIAL.WORKING_CAPITAL);
  }
  async getWallet(): Promise<APIResponse<WalletResponse>> {
    return this.get<WalletResponse>(API_ROUTES.FINANCIAL.WALLET);
  }
  async getRecentTransactions(): Promise<APIResponse<RecentTransactionResponse>> {
    return this.get<RecentTransactionResponse>(API_ROUTES.FINANCIAL.RECENT_TRANSACTIONS);
  }
  async getScheduledTransfers(): Promise<APIResponse<ScheduledTransferResponse>> {
    return this.get<ScheduledTransferResponse>(API_ROUTES.FINANCIAL.SCHEDULED_TRANSACTIONS);
  }
}

const financialAPI = new FinancialAPI();
export default financialAPI;
