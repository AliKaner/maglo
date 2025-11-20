import cn from 'classnames';

import styles from './TransferItemsGroup.module.scss';

const TransferItemsGroupSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((index: number) => (
        <div key={index} className={styles.skeletonItem}>
          <div className={styles.skeletonDetails}>
            <div className={cn(styles.skeletonAvatar, 'skeleton-shimmer')} />
            <div className={styles.skeletonInfo}>
              <div className={cn(styles.skeletonName, 'skeleton-shimmer')} />
              <div className={cn(styles.skeletonDate, 'skeleton-shimmer')} />
            </div>
          </div>
          <div className={cn(styles.skeletonAmount, 'skeleton-shimmer')} />
        </div>
      ))}
    </>
  );
};

export default TransferItemsGroupSkeleton;
