import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Analytics } from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hirekader.com'),
  title: {
    default: 'Abdul Kader | Google Ads for Home Service Businesses',
    template: '%s | Abdul Kader',
  },
  description: 'Expert Google Ads management for home service businesses. Generate more leads and grow your business with strategic online advertising.',
  keywords: [
    'Google Ads',
    'Home Service Ads',
    'Plumber Google Ads',
    'HVAC Google Ads',
    'Google Ads Management',
    'Lead Generation',
    'Digital Marketing',
    'Home Service Marketing',
  ],
  authors: [{ name: 'Abdul Kader' }],
  creator: 'Abdul Kader',
  publisher: 'Abdul Kader',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hirekader.com',
    siteName: 'Abdul Kader - Google Ads for Home Service Businesses',
    title: 'Abdul Kader | Google Ads for Home Service Businesses',
    description: 'Expert Google Ads management for home service businesses. Generate more leads and grow your business.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Kader - Google Ads Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Kader | Google Ads for Home Service Businesses',
    description: 'Expert Google Ads management for home service businesses.',
    images: ['/og-image.png'],
    creator: '@hirekader',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
