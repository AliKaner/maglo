import DashboardLayoutWrapper from '@/features/dashboard/layouts/DashboardLayoutWrapper';
import { AppLoader } from '@/shared/components';
import { Suspense, type PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardLayoutWrapper>
      <Suspense fallback={<AppLoader />}>{children}</Suspense>
    </DashboardLayoutWrapper>
  );
};

export default DashboardLayout;
