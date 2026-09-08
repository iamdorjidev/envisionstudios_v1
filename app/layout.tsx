import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SITE } from '@/lib/content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const description =
  'Affordable web and software development in Auckland, New Zealand. I build business websites, custom web applications and business systems — booking, invoicing, dashboards and payments — for small businesses, startups and individuals.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'enVision Studio — Affordable Web & Software Development in Auckland',
    template: '%s — enVision Studio',
  },
  description,
  applicationName: SITE.name,
  authors: [{ name: 'Thinley Dorji' }],
  keywords: [
    'web development Auckland',
    'affordable web developer Auckland',
    'website development New Zealand',
    'custom web application developer',
    'business systems developer Auckland',
    'booking system developer',
    'small business website Auckland',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'enVision Studio — Affordable Web & Software Development',
    description,
    url: SITE.url,
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'enVision Studio — Affordable Web & Software Development',
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
  '@type': 'ProfessionalService',
  name: SITE.name,
  description,
  url: SITE.url,
  email: SITE.email,
  areaServed: [
    { '@type': 'City', name: 'Auckland' },
    { '@type': 'Country', name: 'New Zealand' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Auckland', addressCountry: 'NZ' },
  founder: { '@type': 'Person', name: 'Thinley Dorji', jobTitle: 'Software Developer' },
  makesOffer: [
    'Business websites',
    'Custom web applications',
    'Business management systems',
    'Booking & payment solutions',
    'Website maintenance',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
