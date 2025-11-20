'use client';

import cn from 'classnames';
import { Fragment, useRef } from 'react';

import MenuItem, { type MenuItemProps } from '@/features/dashboard/components/MenuItem';
import { FOOTER_MENU_ITEMS, MENU_ITEMS } from '@/features/dashboard/constants';
import { Icon } from '@/shared/components';
import { useOutsideClick } from '@/shared/hooks/useOutsideClick';

import styles from './Sidebar.module.scss';

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useOutsideClick(sidebarRef, () => {
    if (isOpen) onClose();
  });

  const renderMenuItems = (items: MenuItemProps[]) => {
    return items.map((item: MenuItemProps) => {
      return <MenuItem key={item.title} {...item} />;
    });
  };

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Fragment>
      {isOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={onClose}
          onKeyDown={handleBackdropKeyDown}
          aria-label="Close sidebar"
        />
      )}
      <div ref={sidebarRef} className={cn(styles.sidebar, isOpen && styles.open)}>
        <div className={styles.body}>
          <div className={styles.logo}>
            <Icon name="Logo" />
          </div>
          <div className={styles.menu}>{renderMenuItems(MENU_ITEMS)}</div>
        </div>
        <div className={styles.footer}>{renderMenuItems(FOOTER_MENU_ITEMS)}</div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
