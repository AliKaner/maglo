'use client';

import { useScheduledTransfers } from '@/features/dashboard/hooks';
import { Card } from '@/shared/components';

import styles from './TransferItemsGroup.module.scss';
import TransferItemsGroupSkeleton from './TransferItemsGroupSkeleton';
import TransferItem from '@/features/dashboard/components/TransferItem';

const TransferItemsGroup = () => {
  const { data, isLoading } = useScheduledTransfers();

  const renderContent = () => {
    if (isLoading || !data) return <TransferItemsGroupSkeleton />;

    return data.transfers.map(item => (
      <TransferItem key={item.id} avatar={item.image} name={item.name} amount={item.amount} date={item.date} />
    ));
  };

  return (
    <Card title="Scheduled Transfers" isCompact>
      <div className={styles.transferItemsGroup}>{renderContent()}</div>
    </Card>
  );
};

export default TransferItemsGroup;
