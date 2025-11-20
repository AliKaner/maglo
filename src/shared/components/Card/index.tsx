import cn from 'classnames';

import { Icon } from '@/shared/components';

import styles from './Card.module.scss';

type GapSize = 'small' | 'medium';

export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  isCompact?: boolean;
  hasOverflow?: boolean;
  headerActions?: React.ReactNode;
  gap?: GapSize;
  showViewAll?: boolean;
  isFullHeight?: boolean;
}

const Card = ({ title, children, isCompact, showViewAll = true, headerActions, gap = 'medium', hasOverflow, isFullHeight = false }: CardProps) => {
  return (
    <div className={cn(styles.card, isCompact && styles.compact, isFullHeight && styles.fullHeight)}>
      <div className={styles.cardHeader}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.actions}>
          {headerActions}
          {showViewAll && (
            <span className={styles.viewAll}>
              <span>View All</span> <Icon name="ChevronDown18" />
            </span>
          )}
        </div>
      </div>
      <div className={cn(styles.cardBody, gap && styles[gap], hasOverflow && styles.overflow)}>{children}</div>
    </div>
  );
};

export default Card;
