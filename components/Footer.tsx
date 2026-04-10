'use client'

import Link from 'next/link'

const footerNav = [
  {
    label: 'Products',
    links: [
      { label: 'For Individuals', href: '/for-leaders' },
      { label: 'For Coaches', href: '/for-coaches' },
      { label: 'For Teams', href: '/logos-teams' },
    ],
  },
  {
    label: 'Science',
    links: [
      { label: 'Science Overview', href: '/science-overlal' },
      { label: 'Leadership Effectiveness', href: '/leadership-science-effective' },
      { label: 'Perceived Leadership', href: '/leadership-science-perceived' },
      { label: 'Durability', href: '/durability' },
      { label: 'Ethics', href: '/leadership-science-ethics' },
      { label: 'Employee Performance', href: '/employee-perf' },
      { label: 'Employee Engagement', href: '/leadership-science-engagement' },
      { label: 'Innovation', href: '/leadership-science-innovation' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'Begin Your Logos', href: '/logos-checkout' },
      { label: 'Privacy Policy', href: '/logos-privacy' },
      { label: 'Terms of Service', href: '/logos-terms' },
      { label: 'support@experiencelogos.com', href: 'mailto:support@experiencelogos.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-ground)',
        borderTop: '1px solid var(--border-hairline)',
        paddingBlock: '4rem 2.5rem',
      }}
    >
      <div className="container">
        {/* Top section — wordmark + nav columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr repeat(3, auto)',
            gap: '3rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
          className="footer-grid"
        >
          {/* Wordmark block */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '-0.025em',
                color: 'var(--blue-deep)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Logos
            </Link>
            <p
              style={{
                fontSize: '0.8125rem',
              }}
            >
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.label}>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-ghost)',
                  marginBottom: '1rem',
                }}
              >
                {col.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        transition: 'color 0.3s var(--ease-spring)',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--blue-electric)' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: 'var(--text-ghost)' }}>
            Copyright 2025 Logos. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-ghost)' }}>
            Built on over 40 peer-reviewed studies.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > *:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
