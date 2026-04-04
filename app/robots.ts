import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/logos-auto-report-checkoutz2hb1fcn/',
        '/logos-beginvxfjdasj/',
        '/logos-checkoutqjt4p1sc/',
        '/logos-individuals-beginti1cj4e4/',
        '/logos-report-confirmationa2u8jwdt/',
        '/logos-coaches-confirmation/',
        '/wealth-confirmation/',
        '/session/',
      ],
    },
    sitemap: 'https://experiencelogos.com/sitemap.xml',
  }
}
