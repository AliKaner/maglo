import cn from 'classnames';

import styles from './SummaryCardGroup.module.scss';

const SummaryCardGroupSkeleton = () => {
  return (
    <div className={styles.skeletonGroup}>
      {[1, 2, 3].map((index: number) => (
        <div key={index} className={cn(styles.skeletonCard, 'skeleton-shimmer')}>
          <div className={cn(styles.skeletonIcon, 'skeleton-shimmer')} />
          <div className={styles.skeletonInfo}>
            <div className={cn(styles.skeletonTitle, 'skeleton-shimmer')} />
            <div className={cn(styles.skeletonPrice, 'skeleton-shimmer')} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCardGroupSkeleton;
