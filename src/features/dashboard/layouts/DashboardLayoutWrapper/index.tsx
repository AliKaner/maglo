'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Header from '@/features/dashboard/components/Header';
import Sidebar from '../../components/Sidebar';
import { MENU_ITEMS } from '@/features/dashboard/constants';
import { Icon } from '@/shared/components';

import styles from './DashboardLayoutWrapper.module.scss';

export interface DashboardLayoutWrapperProps {
  children: React.ReactNode;
}

const DashboardLayoutWrapper = ({ children }: DashboardLayoutWrapperProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();
  const currentMenuItem = MENU_ITEMS.find(item => item.to === pathName);
  const currentPageTitle = currentMenuItem?.title || MENU_ITEMS[0].title;

  const handleToggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={styles.dashboardLayoutWrapper}>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <button className={styles.menuButton} onClick={handleToggleSidebar} aria-label="Toggle menu">
        <Icon name="Menu" />
      </button>
      <div className={styles.content}>
        <Header title={currentPageTitle} />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayoutWrapper;
