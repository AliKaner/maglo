
import cn from 'classnames';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ id, label, error, ...rest }: InputProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} className={cn(styles.inputField, error && styles.error)} />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
