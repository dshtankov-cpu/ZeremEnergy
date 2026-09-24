import type { MetadataRoute } from 'next';
import { industries } from '@/lib/industries';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-24');
  return [
    { url: siteUrl, lastModified, changeFrequency: 'monthly', priority: 1, images: [`${siteUrl}/images/power-facility.png`] },
    { url: `${siteUrl}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/generator-rental`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/services/temporary-power`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    ...industries.map(({ slug }) => ({ url: `${siteUrl}/industries/${slug}`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
