import ProfileDropdown from '../ProfileDropdown';
import { IconButton } from '@/shared/components';
import { useUserStore } from '@/shared/stores/useUserStore';
import styles from './Header.module.scss';

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { user } = useUserStore();
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.actions}>
        <IconButton icon="Search24" onClick={undefined} label="Search" />
        <IconButton icon="Bing24" onClick={undefined} label="Bing" />
        <ProfileDropdown name={user?.fullName} avatarUrl={undefined} />
      </div>
    </div>
  );
};

export default Header;
