import styles from './FieldsContainer.module.scss';
import { IFieldsContainer } from './FieldsContainer.types';

const FieldsContainer = ({ children }: IFieldsContainer) => {
  return <div className={styles.fieldsContainer}>{children}</div>;
};

export default FieldsContainer;
