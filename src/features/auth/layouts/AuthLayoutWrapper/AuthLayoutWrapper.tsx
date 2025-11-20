'use client';

import { Icon } from '@/shared/components';
import Image from 'next/image';
import styles from './AuthLayoutWrapper.module.scss';
import { type IAuthLayoutWrapper } from './AuthLayoutWrapper.types';

const AuthLayoutWrapper = ({ children }: IAuthLayoutWrapper) => {
  return (
    <div className={styles.authLayoutWrapper}>
      <section className={styles.content}>
        <div className={styles.header}>
          <Icon name="Logo" />
        </div>
        <div className={styles.body}>{children}</div>
      </section>
      <aside className={styles.image}>
        <Image src="/auth.webp" alt="A hand holding a coin" fill />
      </aside>
    </div>
  );
};

export default AuthLayoutWrapper;
