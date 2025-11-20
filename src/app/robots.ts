import type { MetadataRoute } from 'next';

const DEPLOYMENT_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maglo-nine.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/dashboard/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/'],
      },
    ],
    sitemap: `${DEPLOYMENT_URL}/sitemap.xml`,
    host: DEPLOYMENT_URL,
  };
}
