'use client';

import { useScheduledTransfers } from '@/features/dashboard/hooks/useScheduledTransfers';
import { Card } from '@/shared/components';
import { formatDate } from '@/shared/utils/date';
import { formatPrice } from '@/shared/utils/price';
import NameBusiness from '@/features/dashboard/components/NameBusiness';
import cn from 'classnames';

import styles from './InvoicesPageContent.module.scss';
import InvoicesTableSkeleton from './InvoicesTableSkeleton';

const InvoicesPageContent = () => {
  const { data, isLoading } = useScheduledTransfers();

  const headers = ['NAME', 'DATE', 'AMOUNT', 'STATUS'];

  const renderContent = () => {
    if (isLoading || !data) return <InvoicesTableSkeleton />;

    return data?.transfers.map(transfer => (
      <tr key={transfer.id}>
        <td className={styles.td}>
          <NameBusiness name={transfer.name} business="" image={transfer.image} />
        </td>
        <td className={cn(styles.td, styles.alignCenter)}>{formatDate(transfer.date, undefined, 'short')}</td>
        <td className={cn(styles.td, styles.alignCenter)}>{formatPrice(transfer.amount)}</td>
        <td className={cn(styles.td, styles.alignCenter)}>
          <span className={cn(styles.status, styles[transfer.status.toLowerCase()])}>{transfer.status}</span>
        </td>
      </tr>
    ));
  };

  return (
    <div className={styles.invoicesPageContent}>
      <Card title="Invoices" showViewAll={false} isFullHeight>
        <div className={styles.invoicesTable}>
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
    </div>
  );
};

export default InvoicesPageContent;
