'use client';

import { Icon, Spinner } from '@/shared/components';

import styles from './AppLoader.module.scss';

const AppLoader = () => {
  return (
    <div className={styles.appLoader}>
      <div className={styles.content}>
        <Icon name="Logo" className={styles.logo} />
        <Spinner size="large" color="secondary" />
      </div>
    </div>
  );
};

export default AppLoader;
