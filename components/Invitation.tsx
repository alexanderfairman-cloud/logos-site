'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import TrustLine from './TrustLine'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote:
      "Having the opportunity to be guided into seeing my highest self is a gift. I believe that I now have a view of what is possible in my life, understand my true mission better, and have the questions and guidance I need to see that vision fully executed.",
    name: 'Bryan T.',
    location: 'San Diego, CA',
  },
  {
    quote:
      "Clear, concise, and helpful. In a realm where so many products involve a lot of time commitment, it is powerful to have such a quick and potent download to clarify one's path.",
    name: 'Jordan B.',
    location: 'San Rafael, CA',
  },
  {
    quote:
      "Logos gets deep into the layers of the subconscious and spotlights the hidden nuances that intrinsically motivate each person's strengths, weaknesses, and values — with astonishing accuracy.",
    name: 'Kristen Abercrombie',
    location: 'Next-Level Coaches',
  },
]

export default function Invitation() {
  return (
    <>
      {/* Testimonials section */}
      <section className="section" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <p className="eyebrow">What clients say</p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
            className="testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* Invitation / CTA section */}
      <section
        className="section"
        style={{
          background: 'var(--bg-surface)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              maxWidth: '600px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow">Start now</p>

            <h2
              className="display-lg"
              style={{ textAlign: 'center' }}
            >
              Take the next step in your self knowledge and growth.
            </h2>

            <p
              className="display-md"
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 400,
                color: 'var(--blue-electric)',
                marginTop: '-0.5rem',
              }}
            >
              Here it is.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '0.5rem',
              }}
            >
              <CTAButton href="/logos-checkout" size="lg" id="bottom-cta">
                Begin Your Logos
              </CTAButton>
              <CTAButton href="/for-leaders" size="lg" variant="outline">
                Learn More
              </CTAButton>
            </div>

            <TrustLine centered />

            {/* Trust badges */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              {[
                '40+ peer-reviewed studies',
                '70+ traits measured',
                '40+ countries',
              ].map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '9999px',
                      background: 'var(--blue-electric)',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
