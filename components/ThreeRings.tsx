'use client'

import { motion } from 'framer-motion'
import RingDiagram from './RingDiagram'

const rings = [
  {
    title: 'Ring 1 — The Core',
    subtitle: 'Discover what you were made for',
    body: 'Your core archetypes are the specific experiences that generate your deepest fulfillment and motivation. Logos identifies them precisely so you stop chasing what looks right and start building toward what genuinely is.',
    color: 'var(--blue-deep)',
  },
  {
    title: 'Ring 2 — The Middle',
    subtitle: 'Understand your ego patterning and conditioning',
    body: 'The structures your life built around your core. Some are your greatest strengths. Others are quietly costing you. Logos names them so you can choose which to keep and which to transform.',
    color: 'var(--blue-mid)',
  },
  {
    title: 'Ring 3 — The Outer',
    subtitle: 'Your full traits profile',
    body: 'The complete picture of your skills, your strengths, and the shadows that limit them. Logos maps both so you know exactly where to lean in and where to grow.',
    color: 'var(--blue-electric)',
  },
]

export default function ThreeRings() {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: '600px',
            marginInline: 'auto',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>
            Three layers of self
          </p>
          <h2 className="display-md">
            Logos reveals you in three layers, each one essential.
          </h2>
          <p className="body-lg" style={{ marginTop: '1.25rem', color: 'var(--text-muted)' }}>
            The transformation happens when all three align.
          </p>
        </motion.div>

        {/* Two-column layout — diagram left, ring descriptions right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="rings-grid"
        >
          {/* Ring diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <RingDiagram animated size={420} showLabels />
          </motion.div>

          {/* Ring descriptions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {rings.map((ring, i) => (
              <motion.div
                key={ring.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                {/* Ring colour mark */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      background: ring.color,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: ring.color,
                    }}
                  >
                    {ring.title}
                  </p>
                </div>
                <h3 className="headline">{ring.subtitle}</h3>
                <p className="body-md">{ring.body}</p>
              </motion.div>
            ))}

            {/* Alignment callout */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '1.25rem 1.5rem',
                background: 'var(--blue-pale)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--blue-electric)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: 'var(--blue-deep)',
                  lineHeight: 1.65,
                }}
              >
                When all three layers point in the same direction, that is the
                experience of being completely and undeniably yourself.
              </p>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  color: 'var(--blue-mid)',
                  lineHeight: 1.65,
                }}
              >
                &ldquo;When what you love, how you&rsquo;re wired, and what
                you&rsquo;re great at all point in the same direction — that is
                the experience of purpose.&rdquo;
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rings-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
