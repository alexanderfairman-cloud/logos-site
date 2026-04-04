export const metadata = {
  title: 'Leadership Ethics Score',
  description:
    'How strong are your ethics and how likely are you to foment organizational conflict? Logos evaluates your ethical integrity through Big Five agreeableness, humility, and the Dark Triad research.',
  openGraph: {
    title: 'Leadership Ethics Score | Logos',
    description: 'Assess your ethical leadership — scored from agreeableness, humility, secure attachment, and inverse Dark Triad (narcissism, Machiavellianism, psychopathy) research.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.welcometologos.com/leadership-science-ethics' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
