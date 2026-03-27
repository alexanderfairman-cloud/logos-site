'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const sections = [
  {
    tag: 'See each other clearly',
    headline: 'Most relationship problems are not communication problems.',
    body: "They are two people with different core archetypes and different ego structures responding to the same situation from completely different internal maps. Logos makes both maps visible so you can finally see each other clearly rather than through the lens of assumption.",
  },
  {
    tag: 'Understand your differences',
    headline: 'Your differences are not the problem. Not understanding them is.',
    body: "Logos identifies where your archetypes align and where they diverge, where your ego patterns complement each other and where they create friction, and where your combined trait profiles create genuine chemistry. Understanding the architecture of your dynamic changes everything.",
  },
  {
    tag: 'Grow together',
    headline: 'Relationships grow when both people grow.',
    body: "Logos gives each of you a precise individual growth roadmap and a clear picture of how your growth paths interact. The result is not just better understanding — it is a shared foundation for building a relationship that keeps deepening rather than plateauing.",
  },
]

/* ── Two-figure illustration with overlapping rings ─────────────────────── */
function CouplesIllustration() {
  return (
    <svg
      viewBox="0 0 300 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 300, opacity: 0.93 }}
    >
      <defs>
        <radialGradient id="cfig1" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#EAF1FB" />
          <stop offset="100%" stopColor="#C8DCF5" />
        </radialGradient>
        <radialGradient id="cfig2" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F0EEFF" />
          <stop offset="100%" stopColor="#D0C8F0" />
        </radialGradient>
        <radialGradient id="cIntersect" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.95)" />
          <stop offset="100%" stopColor="rgba(74,144,217,0)" />
        </radialGradient>
        <filter id="cGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left figure rings */}
      <circle cx="105" cy="110" r="65" stroke="rgba(27,58,107,0.10)" strokeWidth="1" fill="none" />
      <circle cx="105" cy="110" r="45" stroke="rgba(74,144,217,0.18)" strokeWidth="1" fill="none" />
      <circle cx="105" cy="110" r="26" stroke="rgba(74,144,217,0.28)" strokeWidth="1.2" fill="none" />

      {/* Right figure rings */}
      <circle cx="195" cy="110" r="65" stroke="rgba(27,58,107,0.10)" strokeWidth="1" fill="none" />
      <circle cx="195" cy="110" r="45" stroke="rgba(123,100,200,0.16)" strokeWidth="1" fill="none" />
      <circle cx="195" cy="110" r="26" stroke="rgba(123,100,200,0.26)" strokeWidth="1.2" fill="none" />

      {/* Intersection glow */}
      <ellipse cx="150" cy="110" rx="22" ry="30" fill="url(#cIntersect)" filter="url(#cGlow)" />
      <circle cx="150" cy="110" r="5.5" fill="rgba(215,230,255,0.98)" filter="url(#cGlow)" />
      <circle cx="150" cy="110" r="2.5" fill="white" />

      {/* Left figure */}
      <circle cx="105" cy="68" r="16" fill="url(#cfig1)" stroke="rgba(74,144,217,0.30)" strokeWidth="1" />
      <rect x="84" y="89" width="42" height="50" rx="21" fill="url(#cfig1)" stroke="rgba(74,144,217,0.22)" strokeWidth="0.8" />

      {/* Right figure */}
      <circle cx="195" cy="68" r="16" fill="url(#cfig2)" stroke="rgba(123,100,200,0.28)" strokeWidth="1" />
      <rect x="174" y="89" width="42" height="50" rx="21" fill="url(#cfig2)" stroke="rgba(123,100,200,0.20)" strokeWidth="0.8" />
    </svg>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

export default function ForCouplesContent() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 'calc(5rem + 80px)',
          paddingBottom: 'var(--space-3xl)',
          background: 'var(--bg-ground)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '400px',
            borderRadius: '9999px',
            background: 'radial-gradient(ellipse, rgba(74,144,217,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container">
          <div
            className="couples-hero-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
          >
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
            >
              <p className="eyebrow">For Couples</p>
              <h1 className="display-xl">
                The Most Honest Conversation You Will Ever Have About Each Other.
              </h1>
              <p className="body-lg">
                Logos reveals the specific motivations, ego patterns, and traits that
                each of you brings to the relationship. When you understand each other
                at this level of depth, the dynamic between you stops being a mystery
                and starts being workable.
              </p>
              <div>
                <CTAButton href="/logos-checkout" size="lg" id="couples-hero-cta">
                  Begin Your Logos Compatibility Assessment
                </CTAButton>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CouplesIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Three content sections ─────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {sections.map((s, i) => (
              <motion.div
                key={s.tag}
                {...fadeUp}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? '1fr 1.6fr' : '1.6fr 1fr',
                  gap: '4rem',
                  alignItems: 'start',
                }}
                className="couples-section-row"
              >
                {i % 2 === 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}>
                    <RingPair index={i} />
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--blue-electric)', flexShrink: 0 }} />
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--blue-electric)',
                      }}
                    >
                      {s.tag}
                    </p>
                  </div>
                  <h2 className="display-md">{s.headline}</h2>
                  <p className="body-lg">{s.body}</p>
                </div>
                {i % 2 !== 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem', alignItems: 'flex-end' }}>
                    <RingPair index={i} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-ground)', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              maxWidth: '520px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow">Begin together</p>
            <h2 className="display-md" style={{ textAlign: 'center' }}>
              Ready to understand each other at a level most couples never reach?
            </h2>
            <CTAButton href="/logos-checkout" size="lg" id="couples-bottom-cta">
              Begin Your Logos Compatibility Assessment
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .couples-hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .couples-section-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </>
  )
}

/* Small pair-of-rings visual for section decorators */
function RingPair({ index }: { index: number }) {
  const colors = ['var(--blue-deep)', 'var(--blue-mid)', 'var(--blue-electric)']
  const color = colors[index % colors.length]
  return (
    <svg viewBox="0 0 100 70" fill="none" style={{ width: 100, opacity: 0.7 }}>
      {[16, 10, 5].map((r, i) => (
        <circle key={i} cx="35" cy="35" r={r}
          stroke={color} strokeWidth={i === 0 ? 1 : 1.5} fill="none" strokeOpacity={0.4 + i * 0.2} />
      ))}
      {[16, 10, 5].map((r, i) => (
        <circle key={i} cx="65" cy="35" r={r}
          stroke={color} strokeWidth={i === 0 ? 1 : 1.5} fill="none" strokeOpacity={0.4 + i * 0.2} />
      ))}
      <circle cx="50" cy="35" r="4" fill={color} fillOpacity="0.5" />
      <circle cx="50" cy="35" r="2" fill={color} />
    </svg>
  )
}
