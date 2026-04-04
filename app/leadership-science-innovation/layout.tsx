export const metadata = {
  title: 'Innovation Leadership Score',
  description:
    'How will you personally drive creative problem-solving at your organization? Logos scores your innovation potential from Big Five openness to experience, imaginative thinking, and creative archetypes research.',
  openGraph: {
    title: 'Innovation Leadership Score | Logos',
    description: 'Measure your capacity to drive innovation — scored from openness to experience, imaginative thinking, and Explorer, Magician, and Creator archetypes.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.welcometologos.com/leadership-science-innovation' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
