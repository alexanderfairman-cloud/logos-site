'use client'

import { motion } from 'framer-motion'
import RingDiagram from './RingDiagram'

const rings = [
  {
    title: 'Ring 1 — The Core',
    subtitle: 'Discover your intrinsic motivators.',
    body: 'Your core archetypes are the specific experiences that generate your deepest fulfillment and motivation. Logos identifies them precisely so you stop chasing what looks right and start building toward what genuinely is.',
    color: 'var(--blue-deep)',
    image: '/images/core_compass.png',
  },
  {
    title: 'Ring 2 — The Middle',
    subtitle: 'Understand your ego patterning and conditioning',
    body: 'The structures your life built around your core. Some are your greatest strengths. Others are quietly costing you. Logos names them so you can choose which to keep and which to transform.',
    color: 'var(--blue-mid)',
    image: '/images/ego_mask.png',
  },
  {
    title: 'Ring 3 — The Outer',
    subtitle: 'Your full traits profile',
    body: 'The complete picture of your skills, your strengths, and the shadows that limit them. Logos maps both so you know exactly where to lean in and where to grow.',
    color: 'var(--blue-electric)',
    image: '/images/radar_chart.png',
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

        {/* Stacked Layout — Alternating image and text block rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }} className="rings-stack">
          {rings.map((ring, i) => {
            const isImageLeft = i % 2 === 0
            return (
              <div
                key={ring.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  direction: isImageLeft ? 'ltr' : 'rtl',
                }}
                className="ring-row"
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    width: '100%',
                    maxWidth: '500px',
                    margin: '0 auto',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    direction: 'ltr',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={ring.image}
                    alt={`${ring.title} Graphic`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                  />
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', direction: 'ltr' }}
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
                  <h3 className="headline" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--blue-deep)' }}>{ring.subtitle}</h3>
                  <p className="body-md" style={{ color: 'inherit' }}>{ring.body}</p>
                </motion.div>
              </div>
            )
          })}

          {/* Alignment callout appended natively below the stack */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '2rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(230, 243, 255, 0.4), rgba(245, 250, 255, 0.8))',
              borderRadius: '24px',
              border: '1px solid rgba(74, 144, 255, 0.15)',
              borderLeft: '4px solid var(--blue-electric)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: '800px',
              margin: '2rem auto 0 auto',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1rem',
                color: 'var(--blue-deep)',
                lineHeight: 1.65,
                fontWeight: 500
              }}
            >
              When all three layers point in the same direction, that is the
              experience of being completely and undeniably yourself.
            </p>
          </motion.div>
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
