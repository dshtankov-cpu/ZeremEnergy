import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Zerem Energy | Industrial Power Solutions in Israel', template: '%s | Zerem Energy' },
  description: 'Industrial generator rental and temporary power solutions across Israel, from 100 kVA to multi-megawatt systems with delivery, installation, fuel supply and technical support.',
  alternates: { canonical: '/' },
  applicationName: 'Zerem Energy',
  authors: [{ name: 'Zerem Energy', url: siteUrl }],
  creator: 'Zerem Energy',
  publisher: 'Zerem Energy',
  category: 'Industrial Energy Services',
  keywords: ['generator rental Israel', 'industrial generator rental', 'temporary power solutions Israel', 'diesel generator rental', 'multi-megawatt power'],
  icons: { icon: '/brand/zerem-symbol.png' },
  openGraph: {
    type: 'website',
    locale: 'en_IL',
    url: '/',
    siteName: 'Zerem Energy',
    title: 'Zerem Energy | Industrial Power Solutions in Israel',
    description: 'Industrial generator rental and complete temporary power solutions across Israel, from 100 kVA to multi-megawatt systems.',
    images: [{ url: '/images/power-facility.png', width: 1672, height: 941, alt: 'Industrial temporary power generation system' }],
  },
  twitter: { card: 'summary_large_image', title: 'Zerem Energy | Industrial Power Solutions in Israel', description: 'Industrial generator rental and complete temporary power solutions across Israel.', images: ['/images/power-facility.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
