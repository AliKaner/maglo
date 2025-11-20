import cn from 'classnames';

import { Icon } from '@/shared/components';
import styles from './IconButton.module.scss';
import { icons } from '../Icon/svgs';

export type IconName = keyof typeof icons;

export interface IconButtonProps {
  icon: IconName;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}

const IconButton = ({ icon, onClick, disabled, className, label }: IconButtonProps) => {
  return (
    <button onClick={onClick} className={cn(styles.iconButton, disabled && styles.disabled, className)} aria-label={label}>
      <Icon name={icon} />
    </button>
  );
};

export default IconButton;
