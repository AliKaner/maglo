import { Icon } from '@/shared/components/';
import Link from 'next/link';
import styles from './LinkButton.module.scss';

export interface LinkButtonProps {
  to: string;
  text: string;
  isHighlighted?: boolean;
}

const LinkButton = ({ to, text, isHighlighted }: LinkButtonProps) => {
  return (
    <Link href={to} className={styles.linkButton}>
      {text}
      <span className={styles.highlightIcon}>{isHighlighted && <Icon name="Highlight46" />}</span>
    </Link>
  );
};

export default LinkButton;
