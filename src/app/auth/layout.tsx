import { Suspense, type PropsWithChildren } from 'react';

import AuthLayoutWrapper from '@/features/auth/layouts/AuthLayoutWrapper';
import { AppLoader } from '@/shared/components';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <AuthLayoutWrapper>
      <Suspense fallback={<AppLoader />}>{children}</Suspense>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;
