import { Kumbh_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const kumbhSans = Kumbh_Sans({
  variable: '--font-kumbh-sans',
  subsets: ['latin'],
});

export const gordita = localFont({
  src: [
    {
      path: './gordita/Gordita-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './gordita/Gordita-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gordita',
  display: 'swap',
  preload: true,
});
