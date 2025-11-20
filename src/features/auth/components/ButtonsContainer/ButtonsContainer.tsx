import styles from './ButtonsContainer.module.scss';
import { IButtonsContainer } from './ButtonsContainer.types';

const ButtonsContainer = ({ children }: IButtonsContainer) => {
  return <div className={styles.buttonsContainer}>{children}</div>;
};

export default ButtonsContainer;
