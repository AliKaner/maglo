'use client';

import { useAuth } from '@/features/auth/hooks';
import { useEffect, useRef } from 'react';
import styles from './SignOutPageContent.module.scss';

const SignOutPageContent = () => {
  const hasLoggedOut = useRef(false);

  const { logout } = useAuth();

  useEffect(() => {
    if (hasLoggedOut.current) return;
    logout();
    hasLoggedOut.current = true;
  }, []);

  return (
    <section className={styles.signOutPageContent}>
      <div className={styles.content}>
        <h1>Signing out...</h1>
        <p>Please wait while we log you out.</p>
      </div>
    </section>
  );
};

export default SignOutPageContent;
