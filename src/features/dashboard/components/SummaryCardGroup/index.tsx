'use client';

import SummaryCard from '@/features/dashboard/components/SummaryCard';

import { useFinancialSummary } from '@/features/dashboard/hooks';
import SummaryCardGroupSkeleton from '@/features/dashboard/components/SummaryCardGroup/SummaryCardGroupSkeleton';
import styles from './SummaryCardGroup.module.scss';
import { type SummaryCardProps } from '@/features/dashboard/components/SummaryCard';

const SummaryCardGroup = () => {
  const { summaryCards, isLoading } = useFinancialSummary();

  const renderContent = () => {
    if (isLoading) return <SummaryCardGroupSkeleton />;

    return summaryCards.map((item: SummaryCardProps) => <SummaryCard key={item.title} {...item} />);
  };

  return <div className={styles.summaryCardGroup}>{renderContent()}</div>;
};

export default SummaryCardGroup;
