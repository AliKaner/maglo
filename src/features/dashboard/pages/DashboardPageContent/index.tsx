'use client';

import SummaryCardGroup from '@/features/dashboard/components/SummaryCardGroup';
import TransactionsTable from '@/features/dashboard/components/TransactionsTable';
import TransferItemsGroup from '@/features/dashboard/components/TransferItemsGroup';
import WorkingCapitalChart from '@/features/dashboard/components/WorkingCapitalChart';
import WalletCards from '@/features/dashboard/components/WalletCards';

import styles from './DashboardPageContent.module.scss';

const DashboardPageContent = () => {
  return (
    <div className={styles.dashboardPageContent}>
      <section className={styles.mainContent}>
        <SummaryCardGroup />
        <WorkingCapitalChart />
        <TransactionsTable />
      </section>
      <aside className={styles.sideContent}>
        <WalletCards />
        <TransferItemsGroup />
      </aside>
    </div>
  );
};

export default DashboardPageContent;
