import { formatDate } from '@/shared/utils/date';
import { formatPrice } from '@/shared/utils/price';
import Image from 'next/image';
import { useState } from 'react';
import styles from './TransferItem.module.scss';

export interface TransferItemProps {
  avatar?: string;
  name: string;
  amount: string | number;
  date: string;
}

const TransferItem = ({ avatar, name, amount, date }: TransferItemProps) => {
  const [imageError, setImageError] = useState(false);

  const renderAvatar = () => {
    if (avatar && !imageError) {
      return <Image unoptimized src={avatar} alt={name} width={40} height={40} onError={() => setImageError(true)} />;
    }

    return name.charAt(0);
  };

  return (
    <div className={styles.transferItem}>
      <div className={styles.details}>
        <div className={styles.avatar}>{renderAvatar()}</div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.date}>{formatDate(date, undefined, 'long')}</div>
        </div>
      </div>
      <div className={styles.amount}>{formatPrice(amount)}</div>
    </div>
  );
};

export default TransferItem;
