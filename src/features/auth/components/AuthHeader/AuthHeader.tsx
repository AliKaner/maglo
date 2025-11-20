import styles from './AuthHeader.module.scss';
import { IAuthHeader } from './AuthHeader.types';

const AuthHeader = (props: IAuthHeader) => {
  const { title, subtitle } = props;

  return (
    <header className={styles.authHeader}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
};

export default AuthHeader;
