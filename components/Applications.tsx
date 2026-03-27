'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const audiences = [
  {
    label: 'For the Individual',
    headline: 'Finally know what genuinely fulfills you.',
    body: 'After you complete your Logos assessment, Logos will coach you toward your goals using a precise growth roadmap. It guides you to make specific, clear changes to the way you live so you can reach your full potential.',
    proof: 'In 90 days, most Logos clients report a measurable shift in direction, decision-making, and self-understanding.',
    href: '/for-leaders',
    cta: 'Start Your Journey',
    accent: 'var(--blue-deep)',
    bg: 'var(--blue-pale)',
  },
  {
    label: 'For the Coach',
    headline: 'See your client at the deepest level before the first session.',
    body: 'Logos gives you a complete picture of your client\'s core archetypes, ego patterns, and full trait profile before the first deep conversation. Sessions go deeper faster, and the breakthroughs hold.',
    proof: 'The deepest transformation happens when someone is truly seen. Logos gives you the map.',
    href: '/for-coaches',
    cta: 'Apply as a Coach',
    accent: 'var(--blue-electric)',
    bg: 'rgba(74,144,217,0.06)',
  },
  {
    label: 'For Teams',
    headline: 'Build the team that consistently outperforms.',
    body: 'Logos gives every team member precise self-knowledge and gives leaders clarity on what each person needs to do their best work. The result is a shared language for depth that turns a group into a genuinely high-performing team.',
    proof: 'A culture of depth is a competitive advantage.',
    href: '/logos-teams',
    cta: 'Explore for Teams',
    accent: 'var(--blue-mid)',
    bg: 'rgba(123,159,212,0.08)',
  },
]

export default function Applications() {
  return (
    <section className="section" style={{ background: 'var(--bg-ground)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            maxWidth: '560px',
            marginInline: 'auto',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>
            Built for every context
          </p>
          <h2 className="display-md">
            Logos reveals the best path forward to your goals and dreams.
          </h2>
        </motion.div>

        {/* Three audience cards — Double-Bezel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="apps-grid"
        >
          {audiences.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              // Double-Bezel outer shell
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-xl)',
                padding: '6px',
              }}
            >
              {/* Double-Bezel inner core */}
              <div
                style={{
                  background: card.bg,
                  borderRadius: 'calc(var(--radius-xl) - 6px)',
                  padding: '2rem 1.75rem',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Label pill */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.625rem',
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: card.accent,
                    background: 'rgba(255,255,255,0.7)',
                    border: `1px solid ${card.accent}22`,
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                  }}
                >
                  {card.label}
                </span>

                <h3 className="headline" style={{ color: 'var(--blue-deep)' }}>
                  {card.headline}
                </h3>

                <p className="body-md">{card.body}</p>

                <p
                  style={{
                    fontSize: '0.8125rem',
                    fontStyle: 'italic',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {card.proof}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <CTAButton href={card.href} size="sm" variant="outline">
                    {card.cta}
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
