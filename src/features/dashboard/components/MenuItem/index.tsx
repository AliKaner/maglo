'use client';

import cn from 'classnames';

import { Icon } from '@/shared/components';
import { IconName } from '@/shared/components/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MenuItem.module.scss';

export interface MenuItemProps {
  title: string;
  icon: IconName;
  to: string;
}

const MenuItem = ({ title, icon, to }: MenuItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === to;

  return (
    <Link key={title} className={cn(styles.menuItem, isActive && styles.active)} href={to}>
      <Icon name={icon} />
      <span>{title}</span>
    </Link>
  );
};

export default MenuItem;
