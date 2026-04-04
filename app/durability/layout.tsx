export const metadata = {
  title: 'Leadership Durability',
  description:
    'How durable will you be under stressful leadership conditions? Logos assesses your resilience, assertiveness, and emotional stability under high-pressure leadership environments.',
  openGraph: {
    title: 'Leadership Durability Score | Logos',
    description: 'Predict your staying power under pressure — scored from secure attachment, resilience, assertiveness, and low neuroticism research.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.welcometologos.com/durability' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
