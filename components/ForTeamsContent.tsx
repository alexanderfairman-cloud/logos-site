'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const sections = [
  {
    tag: 'Shared language',
    headline: 'Stop guessing why your people do what they do.',
    body: 'Logos gives every team member a precise picture of their core archetypes, their ego patterns, and their full trait profile. When your team shares a common language for what drives motivation, what triggers defensiveness, and what unlocks contribution, conflict becomes workable and collaboration becomes real.',
  },
  {
    tag: 'Leader clarity',
    headline: 'Know what each person needs — not what you assume.',
    body: 'Most leaders manage to a general model of motivation. Logos gives you the specific map for each individual on your team — what genuinely fulfills them, where their ego patterns create friction, and what their highest contribution looks like. The result is leadership that lands.',
  },
  {
    tag: 'Communication',
    headline: 'Say the right thing to the right person, every time.',
    body: 'Logos generates a coach report for every employee based on their core values, ego patterns, and trait profile — giving leaders a precise guide to communicating powerfully with each individual. Every message, every piece of feedback, and every conversation is shaped to land fully with the person receiving it.',
  },
  {
    tag: 'Conflict resolution',
    headline: 'See the dynamic beneath the disagreement.',
    body: 'Most team conflicts are two people with different core archetypes and ego patterns trying to solve the same problem from fundamentally different value systems. Logos makes those dynamics visible. When the real dynamic is named, resolution happens faster and trust builds rather than erodes.',
  },
  {
    tag: 'Chemistry and teamwork',
    headline: 'Understand every working relationship in your organization.',
    body: 'Logos AI generates a unique chemistry and teamwork report for your team, revealing how each pairing and grouping of people interact at the level of values, ego patterns, and traits. You will know exactly where your strongest working relationships are, where friction is likely to emerge, and how to optimize every collaboration for maximum performance.',
  },
  {
    tag: 'Culture of depth',
    headline: 'The competitive advantage most organizations never find.',
    body: 'A team that understands itself at the level Logos enables does not need a retreat or a workshop to sustain it. Depth of self-knowledge and shared language for growth become part of how the team operates, not a one-time event. That culture is the hardest thing for competitors to replicate.',
  },
]

/* ── Overlapping rings illustration ────────────────────────────────────── */
function TeamsIllustration() {
  const figures = [
    { cx: 80,  cy: 85 },
    { cx: 160, cy: 85 },
    { cx: 240, cy: 85 },
    { cx: 120, cy: 155 },
    { cx: 200, cy: 155 },
  ]

  return (
    <svg
      viewBox="0 0 320 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 340, opacity: 0.93 }}
    >
      <defs>
        <radialGradient id="tFigGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#EAF1FB" />
          <stop offset="100%" stopColor="#C8DCF5" />
        </radialGradient>
        <radialGradient id="tIntersect" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8DCFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4A90D9" stopOpacity="0" />
        </radialGradient>
        <filter id="tGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer rings overlapping */}
      {figures.map((f, i) => (
        <circle key={`or${i}`} cx={f.cx} cy={f.cy} r={30}
          stroke="rgba(74,144,217,0.14)" strokeWidth="1" fill="none" />
      ))}
      {figures.map((f, i) => (
        <circle key={`mr${i}`} cx={f.cx} cy={f.cy} r={20}
          stroke="rgba(74,144,217,0.22)" strokeWidth="0.8" fill="none" />
      ))}

      {/* Intersection glow — center cluster */}
      <circle cx={160} cy={120} r={28} fill="url(#tIntersect)" filter="url(#tGlow)" />
      <circle cx={160} cy={120} r={8} fill="rgba(200,225,255,0.95)" filter="url(#tGlow)" />
      <circle cx={160} cy={120} r={4} fill="white" />

      {/* Figures */}
      {figures.map((f, i) => (
        <g key={i}>
          <circle cx={f.cx} cy={f.cy - 14} r={9}
            fill="url(#tFigGrad)" stroke="rgba(74,144,217,0.28)" strokeWidth="0.8" />
          <rect x={f.cx - 11} y={f.cy - 2} width={22} height={26} rx={11}
            fill="url(#tFigGrad)" stroke="rgba(74,144,217,0.20)" strokeWidth="0.7" />
        </g>
      ))}
    </svg>
  )
}

/* ── Fade-up animation helper ───────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

export default function ForTeamsContent() {
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
            background: 'radial-gradient(ellipse, rgba(74,144,217,0.09) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container">
          <div
            className="teams-hero-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
          >
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
            >
              <p className="eyebrow">For Teams</p>
              <h1 className="display-xl">
                High Performance is Built on Depth of Understanding.
              </h1>
              <p className="body-lg">
                The teams that consistently outperform understand each other at a
                level most organizations never reach. Logos builds that foundation by
                giving every team member precise self-knowledge and every leader
                clarity on what each person genuinely needs to do their best work.
              </p>
              <div>
                <CTAButton href="mailto:support@experiencelogos.com" size="lg" id="teams-hero-cta">
                  Talk to the Logos Team
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
              <TeamsIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Four content sections ─────────────────────────────────────────── */}
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
                className="teams-section-row"
              >
                {/* Number + tag — left on even, right on odd */}
                {i % 2 === 0 && (
                  <div className="teams-num-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}>
                    <NumTag number={i + 1} tag={s.tag} />
                  </div>
                )}

                {/* Copy */}
                <div className="teams-copy-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h2 className="display-md">{s.headline}</h2>
                  <p className="body-lg">{s.body}</p>
                </div>

                {/* Number + tag — right on odd */}
                {i % 2 !== 0 && (
                  <div className="teams-num-col" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem', alignItems: 'flex-end' }}>
                    <NumTag number={i + 1} tag={s.tag} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proof pull quote ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              maxWidth: '640px',
              marginInline: 'auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.5,
                color: 'var(--text-primary)',
              }}
            >
              &ldquo;A culture of depth is not a soft benefit. It is the
              competitive advantage most organizations never find.&rdquo;
            </p>
            {/* Logos wordmark below */}
            <p
              style={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--blue-electric)',
              }}
            >
              Logos
            </p>
          </motion.div>
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
            <p className="eyebrow">Get started</p>
            <h2 className="display-md" style={{ textAlign: 'center' }}>
              Ready to build the kind of team that consistently outperforms?
            </h2>
            <CTAButton href="mailto:support@experiencelogos.com" size="lg" id="teams-bottom-cta">
              Talk to the Logos Team
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .teams-hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .teams-section-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          /* Always show num label above copy, regardless of DOM order */
          .teams-num-col {
            order: -1 !important;
            align-items: flex-start !important;
          }
          .teams-copy-col { order: 0 !important; }
        }
      `}</style>
    </>
  )
}

function NumTag({ number, tag }: { number: number; tag: string }) {
  return (
    <>
      <p
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: '3rem',
          fontWeight: 600,
          color: 'var(--blue-electric)',
          opacity: 0.18,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}
      >
        {String(number).padStart(2, '0')}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '9999px',
            background: 'var(--blue-mid)',
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase' as const,
            color: 'var(--blue-mid)',
          }}
        >
          {tag}
        </p>
      </div>
    </>
  )
}
