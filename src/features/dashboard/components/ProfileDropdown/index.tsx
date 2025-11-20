import Image from 'next/image';

import { Icon } from '@/shared/components';
import styles from './ProfileDropdown.module.scss';

export interface ProfileDropdownProps {
  name?: string;
  avatarUrl?: string;
}

const ProfileDropdown = ({ name, avatarUrl }: ProfileDropdownProps) => {
  return (
    <div className={styles.profileDropdown}>
      <div className={styles.profileInfo}>
        <span className={styles.profileImage}>
          <Image src={avatarUrl || '/profile.webp'} alt="Profile" fill sizes="40px" />
        </span>
        <span className={styles.profileName}>{name || 'Loading...'}</span>
      </div>
      <Icon name="Dropdown18" />
    </div>
  );
};

export default ProfileDropdown;
