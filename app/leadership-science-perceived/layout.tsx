export const metadata = {
  title: 'Perceived Leadership Score',
  description:
    'How will your teams perceive you as a leader? Logos measures how subordinates, colleagues, and stakeholders will rate your leadership based on transformational leadership, empathy, decisiveness, and more.',
  openGraph: {
    title: 'Perceived Leadership Score | Logos',
    description: 'See how your leadership is perceived by others — scored from transformational leadership, agreeableness, emotional attunement, and assertiveness research.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://experiencelogos.com/leadership-science-perceived' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
