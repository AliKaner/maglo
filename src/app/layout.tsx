import type { Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import '@/styles/globals.scss';

import { gordita, kumbhSans } from '@/fonts';
import Providers from '@/shared/lib/providers';

export const metadata: Metadata = {
  title: 'Maglo - Finance Tracker Platform',
  description: 'Maglo Is Your Ultimate Finance Tracker Platform',
};

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${gordita.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
