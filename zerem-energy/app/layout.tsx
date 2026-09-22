import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Zerem Energy | Powering Industry. Enabling Growth.', description: 'Temporary and permanent power solutions for industrial and infrastructure projects across the Middle East.', icons: { icon: '/brand/zerem-symbol.png' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
