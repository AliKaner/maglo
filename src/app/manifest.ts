import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Maglo Finance Tracker Platform',
    short_name: 'Maglo',
    description: 'Monitor balances, plan transfers, and track capital with Maglo.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#c8ee44',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/auth.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'any',
      },
      {
        src: '/profile.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'maskable',
      },
    ],
  };
}
