import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-24');
  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1, images: [`${siteUrl}/images/power-facility.png`] },
    { url: `${siteUrl}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/generator-rental`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/temporary-power`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
