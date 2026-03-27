import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Logos — The Best Personality Models in a Single Assessment',
  description:
    'The Logos Personality Assessment: the most comprehensive assessment tool for depth and transformation.',
  keywords: 'personality assessment, self knowledge, archetypes, enneagram, big five, leadership, Logos',
  openGraph: {
    title: 'Logos — The Best Personality Models in a Single Assessment',
    description: 'The Logos Personality Assessment: the most comprehensive assessment tool for depth and transformation.',
    type: 'website',
    url: 'https://experiencelogos.com',
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
      </head>
      <body>{children}</body>
    </html>
  )
}
