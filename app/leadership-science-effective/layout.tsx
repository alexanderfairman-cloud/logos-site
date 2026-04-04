export const metadata = {
  title: 'Leadership Effectiveness',
  description:
    'How good are you at generating positive outcomes for your organization? Logos scores your leadership effectiveness using transformational leadership research, Big Five conscientiousness, and more.',
  openGraph: {
    title: 'Leadership Effectiveness Score | Logos',
    description: 'Measure your ability to generate positive organizational outcomes, weighted toward transformational leadership and conscientiousness.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://www.welcometologos.com/leadership-science-effective' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
