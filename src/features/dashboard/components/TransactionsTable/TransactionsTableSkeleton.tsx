import { Fragment } from 'react';

import cn from 'classnames';

import styles from './TransactionsTable.module.scss';

const TransactionsTableSkeleton = () => {
  return (
    <Fragment>
      {[1, 2, 3].map((index: number) => (
        <tr key={index} className={styles.skeletonRow}>
          <td className={styles.skeletonCell}>
            <div className={cn(styles.skeletonContent, styles.name)}>
              <div className={cn(styles.skeletonAvatar, 'skeleton-shimmer')} />
              <div className={styles.skeletonText}>
                <div className={cn(styles.skeletonName, 'skeleton-shimmer')} />
                <div className={cn(styles.skeletonBusiness, 'skeleton-shimmer')} />
              </div>
            </div>
          </td>
          <td className={styles.skeletonCell}>
            <div className={cn(styles.skeletonContent, styles.centered, 'skeleton-shimmer')} />
          </td>
          <td className={styles.skeletonCell}>
            <div className={cn(styles.skeletonContent, styles.centered, 'skeleton-shimmer')} />
          </td>
          <td className={styles.skeletonCell}>
            <div className={cn(styles.skeletonContent, styles.centered, 'skeleton-shimmer')} />
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default TransactionsTableSkeleton;
