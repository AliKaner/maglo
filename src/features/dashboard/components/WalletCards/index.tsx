import { Card, CreditCard, Icon } from '@/shared/components';

import { useWallet } from '@/features/dashboard/hooks';
import { WalletCard, WalletNetworkType } from '@/shared/types/api/FinancialService';
import styles from './WalletCards.module.scss';
import WalletCardsSkeleton from './WalletCardsSkeleton';

const WalletCards = () => {
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
          />
        ))}
      </div>
    );
  };

  return (
    <Card
      title="Wallet"
      isCompact
      gap="small"
      hasViewAll={false}
      headerActions={
        <span className={styles.headerActions}>
          <Icon name="ThreeDots22" />
        </span>
      }
    >
      {renderContent()}
    </Card>
  );
};

export default WalletCards;
