import cn from 'classnames';

import styles from './WorkingCapitalChart.module.scss';

const WorkingCapitalChartSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={cn(styles.skeletonChart, 'skeleton-shimmer')} />
    </div>
  );
};

export default WorkingCapitalChartSkeleton;
