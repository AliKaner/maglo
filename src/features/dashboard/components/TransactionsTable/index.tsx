'use client';

import cn from 'classnames';

import NameBusiness from '../NameBusiness';
import { formatDate } from '@/shared/utils/date';
import { formatPrice } from '@/shared/utils/price';

import { useRecentTransactions } from '@/features/dashboard/hooks';
import { Card } from '@/shared/components';
import styles from './TransactionsTable.module.scss';
import TransactionsTableSkeleton from './TransactionsTableSkeleton';

interface TransactionsTableProps {
  showViewAll?: boolean;
  isFullHeight?: boolean;
}

const TransactionsTable = ({ showViewAll = true, isFullHeight = false }: TransactionsTableProps) => {
  const { data, isLoading } = useRecentTransactions();

  const headers = ['NAME/BUSINESS', 'TYPE', 'AMOUNT', 'DATE'];

  const renderContent = () => {
    if (isLoading || !data) return <TransactionsTableSkeleton />;

    return data?.transactions.map(transaction => (
      <tr key={transaction.id}>
        <td className={styles.td}>
          <NameBusiness name={transaction.name} business={transaction.business} image={transaction.image} />
        </td>
        <td className={cn(styles.td, styles.alignCenter)}>{transaction.type}</td>
        <td className={cn(styles.td, styles.alignCenter)}>{formatPrice(Number(transaction.amount) * -1)}</td>
        <td className={cn(styles.td, styles.alignCenter)}>{formatDate(transaction.date, undefined, 'short')}</td>
      </tr>
    ));
  };

  return (
    <Card
      title={`${showViewAll ? 'Recent Transactions' : 'Transactions'}`}
      showViewAll={showViewAll}
      isFullHeight={isFullHeight}
    >
      <div className={cn(styles.transactionsTable, { [styles.fullHeight]: isFullHeight })}>
        <table className={styles.table}>
          <colgroup>
            <col className={styles.nameColumn} />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className={styles.thead}>
            <tr>
              {headers.map((header, index) => (
                <th key={header} className={index === 0 ? styles.alignLeft : styles.alignCenter}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tbody}>{renderContent()}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default TransactionsTable;
