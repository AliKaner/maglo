'use client';

import cn from 'classnames';
import { useMemo } from 'react';

import { Icon } from '@/shared/components';
import { formatPercentage } from '@/shared/utils/percentage';
import { formatPrice } from '@/shared/utils/price';

import { type IconName } from '@/shared/components/Icon';
import { Trend } from '@/shared/types/api/FinancialService';
import styles from './SummaryCard.module.scss';
import { type Price } from '@/shared/types/currency/types';
import { type Change } from '@/shared/types/api/FinancialService';

export interface SummaryCardProps {
  title: string;
  price: Price;
  isFeatured?: boolean;
  icon: IconName;
  change?: Change;
}

const SummaryCard = ({ title, price, icon, change, isFeatured }: SummaryCardProps) => {
  const changeDetails = useMemo(() => {
    if (!change) return null;

    const isTrendUp = change.trend === Trend.UP;
    const changedAmount = (price.amount * change.percentage) / 100;
    const trendIcon: IconName = isTrendUp ? 'ChartUp20' : 'ChartDown20';

    return {
      isTrendUp,
      formattedPercentage: formatPercentage(change.percentage),
      formattedChangedAmount: formatPrice(changedAmount, price.currency),
      trendIcon,
    };
  }, [change, price]);

  const formattedPrice = useMemo(() => formatPrice(price.amount, price.currency), [price]);

  return (
    <div className={cn(styles.summaryCard, isFeatured && styles.featured)}>
      <div className={styles.icon}>
        <span className={styles.defaultIcon}>
          <Icon name={icon} />
        </span>
        {changeDetails && (
          <span className={styles.trendIcon}>
            <Icon name={changeDetails.trendIcon} />
          </span>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>
          {changeDetails && (
            <small className={cn(styles.percentage, !changeDetails.isTrendUp && styles.down)}>
              {changeDetails.formattedPercentage}
            </small>
          )}
          <span className={styles.defaultPrice}>{formattedPrice}</span>
          {changeDetails && <span className={styles.changedPrice}>{changeDetails.formattedChangedAmount}</span>}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
