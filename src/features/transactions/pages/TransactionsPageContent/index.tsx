import TransactionsTable from '@/features/dashboard/components/TransactionsTable';

import styles from './TransactionsPageContent.module.scss';

const TransactionsPageContent = () => {
  return (
    <div className={styles.transactionsPageContent}>
      <TransactionsTable showViewAll={false} isFullHeight />
    </div>
  );
};

export default TransactionsPageContent;
