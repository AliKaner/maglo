import type { MetadataRoute } from 'next';

const DEPLOYMENT_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maglo-nine.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DEPLOYMENT_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${DEPLOYMENT_URL}/auth/sign-in`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${DEPLOYMENT_URL}/auth/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${DEPLOYMENT_URL}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}

