'use client';

import cn from 'classnames';

import { useUserStore } from '@/shared/stores/useUserStore';
import { Card } from '@/shared/components';
import { formatDate } from '@/shared/utils/date';

import styles from './SettingsPageContent.module.scss';

const SettingsPageContent = () => {
  const { user } = useUserStore();

  if (!user) {
    return (
      <div className={styles.settingsPageContent}>
        <Card title="Settings">
          <div className={styles.noUser}>No user data available</div>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.settingsPageContent}>
      <Card title="Settings" showViewAll={false} isFullHeight>
        <div className={styles.settingsContent}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Profile Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Full Name</span>
                <span className={styles.value}>{user.fullName}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{user.email}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Role</span>
                <span className={styles.value}>{user.role}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Status</span>
                <span className={cn(styles.value, styles.status, user.isActive && styles.active)}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Account Details</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>User ID</span>
                <span className={styles.value}>{user.id}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Last Login</span>
                <span className={styles.value}>{formatDate(user.lastLoginAt, undefined, 'long')}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Last Login IP</span>
                <span className={styles.value}>{user.lastLoginIP}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Account Created</span>
                <span className={styles.value}>{formatDate(user.createdAt, undefined, 'long')}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPageContent;
