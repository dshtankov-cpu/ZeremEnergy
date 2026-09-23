import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Generator Rental & Power Solutions in Israel | Zerem Energy',
  description: 'Industrial generator rental and temporary power solutions across Israel, from 100 kVA to multi-megawatt systems with delivery, installation, fuel supply and technical support.',
  icons: { icon: '/brand/zerem-symbol.png' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
