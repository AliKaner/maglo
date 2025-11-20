import { LinkButton } from '@/shared/components';

import styles from './AuthNavigation.module.scss';
import { IAuthNavigation } from './AuthNavigation.types';

const AuthNavigation = ({ text, linkText, to }: IAuthNavigation) => {
  return (
    <div className={styles.authNavigation}>
      <span className={styles.authNavigationText}>{text}</span>
      <LinkButton to={to} text={linkText} isHighlighted />
    </div>
  );
};

export default AuthNavigation;
