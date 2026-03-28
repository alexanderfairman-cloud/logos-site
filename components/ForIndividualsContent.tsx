'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import TrustLine from './TrustLine'
import TestimonialCard from './TestimonialCard'
import RingDiagram from './RingDiagram'

const contentSections = [
  {
    ring: 'Ring 1 — The Core',
    ringColor: 'var(--blue-deep)',
    headline: 'Discover Your Best Path Forward.',
    sectionTag: 'Clarify Purpose in Striking Clarity',
    body: 'Logos identifies your core archetypes — the specific experiences and environments that generate your deepest motivation and joy. When your work and relationships express these archetypes, you feel unstoppable. When they don\'t, no external success quite fills the gap.',
  },
  {
    ring: 'Ring 2 — The Middle',
    ringColor: 'var(--blue-mid)',
    headline: 'See the patterns beneath your decisions.',
    sectionTag: 'What Has Been Running Your Life',
    body: 'Most of your behavioral patterns were formed before you were twenty. Some of them are your greatest strengths. Others have been quietly costing you relationships, opportunities, and years. Logos names each one so you can choose which to keep and which to release.',
  },
  {
    ring: 'Ring 3 — The Outer',
    ringColor: 'var(--blue-electric)',
    headline: 'Know exactly where to lean in and where to grow.',
    sectionTag: 'Know Your Unique Strengths',
    body: 'Logos measures over 70 traits across every dimension of your personality. Each strength carries a gift and a cost, and Logos maps both with precision. You receive a clear, specific growth roadmap rather than a general description.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Complete the Logos assessment.',
    body: 'Deep self-inquiry begins here. Allow approximately 45 minutes in a quiet place.',
  },
  {
    number: '02',
    title: 'Join your Logos Revelation Call.',
    body: 'A trained Logos expert walks you through your results in a one-hour session. Your portrait comes alive in conversation.',
  },
  {
    number: '03',
    title: 'Receive your Personal Codex Report.',
    body: 'A 30+ page portrait of your zone of genius, your growth edges, your core values, and your fastest path forward.',
  },
  {
    number: '04',
    title: 'Join your community.',
    body: 'Connect with growth-oriented leaders and receive personalized introductions based on your profile.',
  },
]

const testimonials = [
  {
    quote:
      "Having the opportunity to be guided into seeing my highest self is a gift. I now have a view of what is possible in my life, understand my true mission better, and have the questions and guidance I need to see that vision fully executed.",
    name: 'Bryan T.',
    location: 'San Diego, CA',
  },
  {
    quote:
      "Clear, concise, and helpful. In a realm where so many products involve a lot of time commitment, it is powerful to have such a quick and potent download to clarify one's path and make necessary adjustments.",
    name: 'Jordan B.',
    location: 'San Rafael, CA',
  },
  {
    quote:
      "The experience has helped me to understand how I can step more fully into my power and truth. Thank you James and Jara — I appreciate you both and the Logos process immensely.",
    name: 'Saskia C.',
    location: 'Auckland, NZ',
  },
]

export default function ForIndividualsContent() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(5rem + 80px)',
          paddingBottom: 'var(--space-3xl)',
          background: 'var(--bg-ground)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            borderRadius: '9999px',
            background: 'radial-gradient(ellipse, rgba(74,144,217,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
            >
              <p className="eyebrow">For Individuals</p>

              <h1 className="display-xl">
                The Shortest Path to the Life You Actually Want.
              </h1>

              <p className="body-lg">
                Logos maps your unique motivational architecture, your ego
                patterns, and your full trait profile, then coaches you toward
                your goals with precision. Collapse years of struggle into just months.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <CTAButton href="/logos-checkout" size="lg" id="individuals-hero-cta">
                    Begin Your Logos &mdash; $38
                  </CTAButton>
                </div>
                <TrustLine />
              </div>
            </motion.div>

            {/* Right — ring diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <RingDiagram animated={false} size={400} showLabels />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three content sections */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {contentSections.map((section, i) => (
              <motion.div
                key={section.ring}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1.4fr' : '1.4fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                }}
                className="content-row"
              >
                {/* Ring indicator column */}
                {i % 2 === 0 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RingSingle color={section.ringColor} index={i} />
                  </div>
                )}

                {/* Copy */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '9999px',
                        background: section.ringColor,
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
                        color: section.ringColor,
                      }}
                    >
                      {section.ring}
                    </p>
                  </div>
                  <h2 className="display-md">{section.headline}</h2>
                  <p className="body-lg">{section.body}</p>
                </div>

                {/* Ring indicator column — right-side items */}
                {i % 2 !== 0 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <RingSingle color={section.ringColor} index={i} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
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
              The process
            </p>
            <h2 className="display-md">
              Four steps to the clearest picture of yourself you&rsquo;ve ever
              had.
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}
            className="steps-grid"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                // Double-Bezel
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '6px',
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    borderRadius: 'calc(var(--radius-xl) - 6px)',
                    padding: '2rem 1.5rem',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '100%',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontSize: '2rem',
                      fontWeight: 600,
                      color: 'var(--blue-electric)',
                      letterSpacing: '-0.02em',
                      opacity: 0.35,
                    }}
                  >
                    {step.number}
                  </p>
                  <h3 className="headline" style={{ fontSize: '1.0625rem' }}>
                    {step.title}
                  </h3>
                  <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
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
              <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section"
        style={{ background: 'var(--bg-ground)', textAlign: 'center' }}
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
              maxWidth: '520px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow">Begin now</p>
            <h2 className="display-md" style={{ textAlign: 'center' }}>
              You&rsquo;ve always known there was more to understand about
              yourself.
            </h2>
            <CTAButton href="/logos-checkout" size="lg" id="individuals-bottom-cta">
              Begin Your Logos — $38
            </CTAButton>
            <p className="body-sm">
              Your full Personal Codex Report, delivered within 48 hours of
              completing your assessment.
            </p>
            <TrustLine centered />
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .content-row { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}

// Small ring illustration for section decorators
function RingSingle({ color, index }: { color: string; index: number }) {
  const sizes = [120, 80, 44]
  return (
    <div
      style={{
        position: 'relative',
        width: '160px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {sizes.map((s, i) => (
        <div
          key={s}
          style={{
            position: 'absolute',
            width: s,
            height: s,
            borderRadius: '9999px',
            border: `${i === 2 ? 2 : 1.5}px solid`,
            borderColor:
              i < index
                ? `${color}22`
                : i === index
                ? color
                : `${color}66`,
            background: i === 2 ? `${color}12` : 'transparent',
          }}
        />
      ))}
    </div>
  )
}
