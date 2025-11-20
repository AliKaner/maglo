import { Button } from '@/shared/components';
import styles from './Error.module.scss';
import { ErrorProps } from './Error.types';


const Error = ({ message, onRetry }: ErrorProps) => {

  return (
    <div className={styles.error}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.message}>{message}</p>
      <div className={styles.button}>{onRetry && <Button text="Try again" variant="primary" onClick={onRetry} />}</div>
    </div>
  );
};

export default Error;
