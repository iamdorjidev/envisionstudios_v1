import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { SITE } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-display',
});

const description =
  'Websites and business systems that get Auckland businesses more customers. I design and build things that turn visitors into enquiries and make it easier to win and keep the work — one developer, based in Auckland.';

const title = 'Websites & Business Systems for Auckland Businesses';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${title} — enVision Studio`,
    template: '%s — enVision Studio',
  },
  description,
  applicationName: SITE.name,
  authors: [{ name: 'Thinley Dorji' }],
  keywords: [
    'web developer Auckland',
    'website designer Auckland',
    'business systems developer Auckland',
    'custom web application developer',
    'small business website Auckland',
    'booking system developer Auckland',
    'website development New Zealand',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${title} — enVision Studio`,
    description,
    url: SITE.url,
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} — enVision Studio`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0a1723',
  colorScheme: 'light dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneHref.replace('tel:', ''),
  areaServed: [
    { '@type': 'City', name: 'Auckland' },
    { '@type': 'Country', name: 'New Zealand' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Auckland', addressCountry: 'NZ' },
  founder: { '@type': 'Person', name: 'Thinley Dorji', jobTitle: 'Software Developer' },
  // TODO: add real social/profile URLs here (sameAs: [...]) once they exist —
  // intentionally omitted rather than invented.
  makesOffer: [
    'Business Websites',
    'Business Systems',
    'Ongoing Support',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
