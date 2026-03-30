export const metadata = {
  title: 'Impact on Employee Performance',
  description:
    'How will your leadership impact employee performance? Logos predicts how your traits drive team motivation and output — weighted toward transformational leadership and agreeableness research.',
  openGraph: {
    title: 'Impact on Employee Performance | Logos',
    description: 'Discover how your leadership traits will drive your team\'s motivation, output, and performance — backed by transformational leadership science.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
  alternates: { canonical: 'https://experiencelogos.com/employee-perf' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
