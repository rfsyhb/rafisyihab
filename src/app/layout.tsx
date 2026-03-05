import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'rfsyhb',
    template: 'rfsyhb | %s',
  },
  description: 'just a personal website',
  openGraph: {
    title: 'rfsyhb',
    description: 'just a personal website',
    url: 'https://rfsyhb.vercel.app',
    siteName: 'rfsyhb',
    images: [
      {
        url: 'https://rfsyhb.vercel.app/images/pink_laptop.png',
        width: 1200,
        height: 630,
        alt: 'rfsyhb',
      },
    ],
    locale: 'en-US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <Navigation />
        <main className="flex-1 flex">{children}</main>
      </body>
    </html>
  );
}

