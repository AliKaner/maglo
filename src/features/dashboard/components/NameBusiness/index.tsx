'use client';

import Image from 'next/image';
import { useState } from 'react';

import styles from './NameBusiness.module.scss';

export interface NameBusinessProps {
  name: string;
  business: string;
  image?: string;
}

const NameBusiness = ({ name, business, image }: NameBusinessProps) => {
  const [imageError, setImageError] = useState(false);
  const renderAvatar = () => {
    if (image && !imageError) {
      return <Image unoptimized src={image} alt={name} width={40} height={40} onError={() => setImageError(true)} />;
    }

    return name.charAt(0);
  };

  return (
    <div className={styles.nameBusiness}>
      <div className={styles.avatar}>{renderAvatar()}</div>
      <div className={styles.texts}>
        <div className={styles.name}>{name}</div>
        <div className={styles.business}>{business}</div>
      </div>
    </div>
  );
};

export default NameBusiness;
