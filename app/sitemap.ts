import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.welcometologos.com'
  const now = new Date()

  const marketingPages = [
    '',                          // home
    '/for-leaders',
    '/for-coaches',
    '/logos-teams',
    '/for-compatibility',
    '/logos-training',
    '/logos-checkout',
    '/logos-privacy',
    '/logos-terms',
  ]

  const sciencePages = [
    '/science-overlal',
    '/leadership-science-effective',
    '/leadership-science-perceived',
    '/durability',
    '/leadership-science-ethics',
    '/employee-perf',
    '/leadership-science-engagement',
    '/leadership-science-innovation',
  ]

  return [
    ...marketingPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...sciencePages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
