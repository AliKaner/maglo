'use client';

import { useWallet } from '@/features/dashboard/hooks/useWallet';
import { Card, CreditCard } from '@/shared/components';
import { WalletCard, WalletNetworkType } from '@/shared/types/api/FinancialService';
import { Icon } from '@/shared/components';

import styles from './MyWalletsPageContent.module.scss';
import WalletCardsSkeleton from '@/features/dashboard/components/WalletCards/WalletCardsSkeleton';

const MyWalletsPageContent = () => {
  const { data, isLoading } = useWallet();

  const renderContent = () => {
    if (isLoading && !data) return <WalletCardsSkeleton />;

    return (
      <div className={styles.creditCardContainer}>
        {data?.map((card: WalletCard) => (
          <CreditCard
            key={card.id}
            cardNumber={card.cardNumber}
            name={card.name}
            expiryMonth={card.expiryMonth}
            expiryYear={card.expiryYear}
            bank={card.bank}
            network={card.network as WalletNetworkType}
            isDefault={card.isDefault}
            isDetail
          />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.myWalletsPageContent}>
      <Card
        title="My Wallets"
        isCompact
        gap="small"
        showViewAll={false}
        isFullHeight
        headerActions={
          <span className={styles.headerActions}>
            <Icon name="ThreeDots22" />
          </span>
        }
      >
        {renderContent()}
      </Card>
    </div>
  );
};

export default MyWalletsPageContent;
