import cn from 'classnames';

import styles from './WalletCards.module.scss';

const WalletCardsSkeleton = () => {
  return <div className={cn(styles.skeletonCard, 'skeleton-shimmer')} />;
};

export default WalletCardsSkeleton;
