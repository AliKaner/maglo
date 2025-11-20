import type { Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import '@/styles/globals.scss';

import { gordita, kumbhSans } from '@/fonts';
import Providers from '@/shared/lib/providers';

const DEPLOYMENT_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maglo-nine.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYMENT_URL),
  title: {
    default: 'Maglo – Finance Tracker Platform',
    template: '%s | Maglo',
  },
  description: 'Monitor balances, plan transfers, and track capital with Maglo.',
  keywords: ['finance tracker', 'personal finance', 'cash flow dashboard', 'Maglo', 'budgeting'],
  applicationName: 'Maglo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Maglo – Finance Tracker Platform',
    description: 'Monitor balances, plan transfers, and track capital with Maglo.',
    siteName: 'Maglo',
    images: [
      {
        url: '/auth.webp',
        width: 1200,
        height: 630,
        alt: 'Maglo finance dashboard preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maglo – Finance Tracker Platform',
    description: 'Monitor balances, plan transfers, and track capital with Maglo.',
    images: ['/auth.webp'],
  },
  manifest: '/manifest.webmanifest',
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
