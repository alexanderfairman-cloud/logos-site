export const metadata = {
  title: 'Overall Leadership Score',
  description:
    'Discover how your personality translates into overall leadership capacity. Logos synthesizes 70+ traits across transformational leadership, Big Five, Enneagram, and Attachment Theory to give you a comprehensive leadership score.',
  openGraph: {
    title: 'Overall Leadership Score | Logos',
    description: 'A comprehensive score of your leadership capacity, built from 70+ traits across six leading psychological frameworks.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://experiencelogos.com/science-overlal' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
