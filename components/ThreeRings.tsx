'use client'

import { motion } from 'framer-motion'
import RingDiagram from './RingDiagram'
import AnimatedCompass from './AnimatedCompass'

const rings = [
  {
    title: 'Layer 1 — The Core',
    subtitle: 'Align your life choices with your intrinsic motivators',
    body: 'Logos reveals the core values that generate fulfillment for you. By aligning your choices with these core values, you will be clear, energized, and able to let go of inauthentic distractions.',
    color: 'var(--blue-deep)',
    image: '/images/core_compass.png',
  },
  {
    title: 'Layer 2 — The Middle',
    subtitle: 'Understand your ego patterning — and transcend it',
    body: 'Logos reveals how the conditioning you experienced growing up shapes how you show up today. Some of these patterns are helpful and others are quietly costing you. Logos not only names them but shows you how to transcend them so you can be a better human.',
    color: 'var(--blue-mid)',
    image: '/images/ego_mask.png',
  },
  {
    title: 'Layer 3 — The Outer',
    subtitle: 'Discover and develop your full traits profile',
    body: "Logos doesn't just provide a complete picture of your strengths and weaknesses. It helps you identify exactly how to develop the 1–2 weaknesses that will help you achieve your major goals.",
    color: 'var(--blue-electric)',
    image: '/images/radar_chart.png',
  },
]

export default function ThreeRings() {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)', paddingBottom: '3rem' }}>
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
            The Logos model
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
                    // AnimatedCompass uses absolute positioned children (labels + card)
                    // that must overflow the container — so no overflow:hidden here
                    overflow: i === 0 ? 'visible' : 'hidden',
                    direction: 'ltr',
                  }}
                >
                  {i === 0 ? (
                    <AnimatedCompass />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={ring.image}
                      alt={`${ring.title} Graphic`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                    />
                  )}
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


        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ring-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 2.5rem !important;
          }
          .rings-stack {
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
