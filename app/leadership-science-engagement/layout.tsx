export const metadata = {
  title: 'Employee Engagement & Retention Score',
  description:
    'How engaged will your teams be given your leadership? Logos predicts your impact on team commitment and retention using transformational leadership, secure attachment, and Dark Triad research.',
  openGraph: {
    title: 'Employee Engagement & Retention Score | Logos',
    description: 'Predict your impact on team engagement and retention — scored from transformational leadership, secure attachment, agreeableness, and inverse narcissism research.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://experiencelogos.com/leadership-science-engagement' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
