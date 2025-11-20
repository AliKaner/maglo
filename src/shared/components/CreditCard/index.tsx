import cn from 'classnames';

import { Icon } from '@/shared/components';

import { WalletNetworkType } from '@/shared/types/api/FinancialService';
import styles from './CreditCard.module.scss';

export type CreditCardVariant = 'default' | 'other';

export interface CreditCardProps {
  cardNumber: string;
  bank: string;
  isDefault?: boolean;
  name: string;
  expiryMonth: number;
  expiryYear: number;
  variant?: CreditCardVariant;
  network?: WalletNetworkType;
}


const CreditCard = ({ cardNumber, bank, expiryMonth, expiryYear, isDefault, network }: CreditCardProps) => {
  const splitedBank = bank.split(' | ');
  const logo = splitedBank[0] + '.';
  const bankName = splitedBank[1];

  return (
    <div className={cn(styles.creditCard, isDefault ? styles.default : styles.other)}>
      <div className={styles.header}>
        <p className={styles.logo}>{logo}</p>
        <div className={styles.separator} />
        <p className={styles.bank}>{bankName}</p>
      </div>
      <div className={styles.chipRow}>
        <Icon name={isDefault ? 'Chip30' : 'Chip24'} />
        <Icon name="Wifi34" />
      </div>
      <div className={isDefault ? styles.cardNumber : styles.cardNumberShort}>{cardNumber}</div>
      <p className={styles.expiryDate}>
        {String(expiryMonth).padStart(2, '0')}/{String(expiryYear).slice(-2)}
      </p>
      <div className={styles.cardTypeLogo}>
        <Icon name={network === WalletNetworkType.VISA ? 'Visa20' : 'MasterCard36'} />
      </div>
    </div>
  );
};

export default CreditCard;
