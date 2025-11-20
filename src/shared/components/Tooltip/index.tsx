'use client';
import { Fragment } from 'react';

import { formatPrice } from '@/shared/utils/price';

import styles from './Tooltip.module.scss';

export interface HoverPos {
  x: number;
  y: number;
  value: number;
  date: string;
  index: number;
  lineType: string;
  isIncome: boolean;
}

export interface TooltipProps {
  hoverPos: HoverPos | null;
}

const Tooltip = ({ hoverPos }: TooltipProps) => {
  if (!hoverPos) return null;

  return (
    <Fragment>
      <div className={styles.tooltipGradient} style={{ left: hoverPos.x }} />
      <div className={styles.tooltipDate} style={{ left: hoverPos.x }}>
        {hoverPos.date}
      </div>
      <div className={styles.tooltipPoint} style={{ left: hoverPos.x, top: hoverPos.y }}>
        <div className={styles.tooltipPointDot} />
      </div>
      <div className={styles.tooltipValue} style={{ left: hoverPos.x, top: hoverPos.y }}>
        <div className={styles.tooltipValueBox}>
          <span className={styles.tooltipValueText}>{formatPrice(hoverPos.value * 1000, 'TRY')}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Tooltip;
