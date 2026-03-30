import type { Metadata } from 'next'
import './globals.css'

const DOMAIN = 'https://experiencelogos.com'

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Logos — The Best Personality Models in a Single Assessment',
    template: '%s | Logos',
  },
  description:
    'The Logos Assessment synthesizes the Big Five, Enneagram, Myers-Briggs, Attachment Theory, and more into a single transformative portrait of who you are and how you lead.',
  keywords: [
    'personality assessment', 'leadership assessment', 'self knowledge',
    'enneagram', 'big five', 'myers-briggs', 'archetypes', 'executive coaching',
    'Logos assessment', 'psychological models',
  ],
  openGraph: {
    title: 'Logos — The Best Personality Models in a Single Assessment',
    description: 'The most comprehensive personality assessment for leaders and coaches who want genuine self-knowledge — 70+ traits across 6 leading frameworks.',
    type: 'website',
    url: DOMAIN,
    siteName: 'Logos',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Logos — The World\'s Best Psychological Models in a Single Assessment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logos — The Best Personality Models in a Single Assessment',
    description: 'The most comprehensive personality assessment for leaders and coaches who want genuine self-knowledge.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: DOMAIN,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Logos',
  url: DOMAIN,
  logo: `${DOMAIN}/logos-icon.png`,
  description: 'The Logos Personality Assessment — the most comprehensive assessment tool for depth, self-knowledge, and leadership transformation.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@experiencelogos.com',
    contactType: 'customer support',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

