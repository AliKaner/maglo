'use client';

import { Icon } from '@/shared/components';
import styles from './DateDropdown.module.scss';

export interface DateDropdownProps {
  timeRange: string;
}

const DateDropdown = ({ timeRange }: DateDropdownProps) => {
  const handleTimeRange = () => {
    switch (timeRange) {
      case 'last6Months':
        return 'Last 6 Months';
      default:
        return timeRange;
    }
  };

  return (
    <div className={styles.dateDropdown}>
      {handleTimeRange()}
      <Icon name="ChevronDown18" />
    </div>
  );
};

export default DateDropdown;
