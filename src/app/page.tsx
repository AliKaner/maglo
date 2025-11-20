'use client';

import { AppLoader } from '@/shared/components';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  
  if (!hydrated) return null;

  return <AppLoader />;
};

export default MainPage;
