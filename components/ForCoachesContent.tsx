'use client'

import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const COACH_CTA = 'https://s.pointerpro.com/logoscoachform'

// The table of frameworks Logos integrates
const frameworks = [
  {
    model: 'Big Five',
    why: 'The most researched and validated personality model in the world',
  },
  {
    model: 'Enneagram',
    why: 'The most useful framework for understanding ego dynamics',
  },
  {
    model: 'Attachment Theory',
    why: 'Proven to predict both relationship outcomes and leadership performance',
  },
  {
    model: 'Locus of Control',
    why: 'Predicts important outcomes in individual success',
  },
  {
    model: 'Dark Triad',
    why: 'Reveals potential blind spots and conflict flags',
  },
  {
    model: 'Jungian Archetypes',
    why: 'The key to understanding intrinsic motivation and fulfillment',
  },
]

const sections = [
  {
    tag: 'Know your client',
    headline: "See what's actually driving their behavior.",
    body: "Logos reveals the specific archetypes that generate your client's deepest motivation, the ego patterns running their decisions beneath the surface, and the precise traits where their genius lives and where their growth is waiting. You will know more about your client from their report than from months of exploratory conversation.",
  },
  {
    tag: 'Identify self-sabotage',
    headline: 'Name the pattern before it derails them.',
    body: "Logos exposes your client's ego blind spots with pinpoint accuracy — the perfectionism, the need for approval, the avoidance — and explains exactly how to help them gain awareness and prevent the same cycles from repeating. You stop guessing and start working with the real dynamic.",
  },
  {
    tag: 'Build a roadmap',
    headline: 'Give every client a specific path, not a general direction.',
    body: "Logos maps each client's weakest developmental traits alongside their strongest ones and gives you a clear framework for months of focused growth work. You will never reach the third month of an engagement and wonder what to do next.",
  },
  {
    tag: 'Transform your onboarding',
    headline: 'Make the first week unforgettable.',
    body: 'The first week of a coaching engagement is the most important. Logos is designed to be part of your opening sequence so clients feel more deeply seen in week one than they have in years. That depth of recognition is what converts a client into a long-term partner.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Apply to see if you qualify.',
    body: 'Qualifying coaches receive their full Logos assessment and debrief at no cost — a $38 value.',
  },
  {
    number: '02',
    title: 'Complete your own Logos.',
    body: 'Experience the tool firsthand. Receive your full debrief and understand what it makes possible.',
  },
  {
    number: '03',
    title: 'Access your coach portal.',
    body: 'Understand how to use Logos with your clients and receive access to your branded coach portal.',
  },
]

const testimonials = [
  {
    quote:
      "Logos is an amazing tool for coaches and clients alike. It provides a robust yet concise analysis of the subject's core character strengths and, more importantly, zones in on underdeveloped areas that immediately offer the coach and subject areas of focus for inspired action.",
    name: 'Annie Canning',
    location: 'Coach, NZ',
  },
  {
    quote:
      "We choose Logos for our clients at NLC because it provides a depth of knowledge and insight unlike anything else in the marketplace. Logos gets deep into the layers of the subconscious and spotlights the hidden nuances that intrinsically motivate each person's strengths, weaknesses, and values — with astonishing accuracy.",
    name: 'Kristen Abercrombie',
    location: 'Next-Level Coaches',
  },
  {
    quote:
      "I do a lot of this stuff for a living, but this is really good. It's taking me to spaces where I've never been before.",
    name: 'Paul Lloyd',
    location: 'Coach, Work In Teams',
  },
]

/* ── Fade-up animation helper ───────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
}

/* ── Thread SVG illustration — two figures with iridescent thread ────────── */
function ThreadIllustration() {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 320, opacity: 0.92 }}
    >
      <defs>
        <linearGradient id="threadGrad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#4A90D9" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#C8DCFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#7B9FD4" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="figureGrad" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#EAF1FB" />
          <stop offset="100%" stopColor="#C8DCF5" />
        </radialGradient>
        <filter id="threadGlow" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Figure left — coach */}
      <circle cx="72" cy="80" r="22" fill="url(#figureGrad)" stroke="rgba(74,144,217,0.35)" strokeWidth="1.2" />
      <rect x="46" y="110" width="52" height="60" rx="26" fill="url(#figureGrad)" stroke="rgba(74,144,217,0.25)" strokeWidth="1" />

      {/* Figure right — client */}
      <circle cx="248" cy="80" r="22" fill="url(#figureGrad)" stroke="rgba(123,159,212,0.35)" strokeWidth="1.2" />
      <rect x="222" y="110" width="52" height="60" rx="26" fill="url(#figureGrad)" stroke="rgba(123,159,212,0.25)" strokeWidth="1" />

      {/* Iridescent thread — curved bezier */}
      <path
        d="M 124 120 C 160 90, 185 150, 218 120"
        stroke="url(#threadGrad)"
        strokeWidth="1.4"
        filter="url(#threadGlow)"
      />
      {/* Thread mid glow dot */}
      <circle cx="170" cy="112" r="3.5" fill="rgba(200,220,255,0.95)" filter="url(#threadGlow)" />
      <circle cx="170" cy="112" r="1.8" fill="white" />

      {/* Ring halos around each figure */}
      {[72, 248].map((cx, i) => (
        <circle
          key={i}
          cx={cx} cy={80}
          r={32 + i * 4}
          stroke={i === 0 ? 'rgba(27,58,107,0.12)' : 'rgba(74,144,217,0.10)'}
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  )
}

export default function ForCoachesContent() {
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
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-8%',
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
          <div className="hero-grid-coaches" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
            >
              <p className="eyebrow">For Coaches</p>
              <h1 className="display-xl">
                Stop Spending Sessions on Symptoms. Go Straight to the Source.
              </h1>
              <p className="body-lg">
                Logos gives you a complete map of your client&rsquo;s interior before
                the first deep conversation. Their core archetypes, their ego patterns,
                their full trait profile across 70+ dimensions — all in one report.
                Sessions go deeper faster, and the breakthroughs hold.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <CTAButton href={COACH_CTA} size="lg" id="coaches-hero-cta">
                  Apply for Your Complimentary Logos
                </CTAButton>
                <p
                  className="body-sm"
                  style={{ color: 'var(--text-ghost)' }}
                >
                  Qualifying coaches receive their full assessment and debrief at no cost — a $38 value.
                </p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ThreadIllustration />
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
                transition={{ duration: 0.9, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.6fr',
                  gap: '4rem',
                  alignItems: 'start',
                }}
                className="coaches-section-row"
              >
                {/* Number + tag */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}>
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
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '9999px',
                        background: 'var(--blue-electric)',
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
                        color: 'var(--blue-electric)',
                      }}
                    >
                      {s.tag}
                    </p>
                  </div>
                </div>

                {/* Copy */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h2 className="display-md">{s.headline}</h2>
                  <p className="body-lg">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Framework table ─────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              textAlign: 'center',
              marginBottom: '3.5rem',
              maxWidth: '560px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>What Logos integrates</p>
            <h2 className="display-md">
              Six models. One portrait.
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              Finally, see the truth about your client through the lens of all models combined — without sending them to six different assessments.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            // Double-Bezel outer shell
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
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
              }}
            >
              {frameworks.map((f, i) => (
                <div
                  key={f.model}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '1.5rem',
                    padding: '1.375rem 2rem',
                    borderBottom: i < frameworks.length - 1 ? '1px solid var(--border-hairline)' : 'none',
                    alignItems: 'center',
                  }}
                  className="framework-row"
                >
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: 'var(--blue-deep)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {f.model}
                  </p>
                  <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{f.why}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Differentiator callout */}
          <motion.div
            {...fadeUp}
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              maxWidth: '600px',
              marginInline: 'auto',
            }}
          >
            <p className="pull-quote" style={{ borderLeft: 'none', paddingLeft: 0, textAlign: 'center', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              While ordinary assessments give your client a type shared with millions, Logos produces over 1.4 trillion possible unique profiles. Every debrief is genuinely different.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              maxWidth: '520px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>How it works</p>
            <h2 className="display-md">Three steps to depth.</h2>
          </motion.div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="coaches-steps-grid"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
                    padding: '2rem 1.75rem',
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
                  <h3 className="headline" style={{ fontSize: '1.0625rem' }}>{step.title}</h3>
                  <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg-tinted)' }}>
        <div className="container">
          <motion.div
            {...fadeUp}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <p className="eyebrow">What people are saying</p>
          </motion.div>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="coaches-testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                    padding: '2rem 1.75rem',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    height: '100%',
                  }}
                >
                  <p
                    className="body-md"
                    style={{ fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.65 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: 'var(--blue-deep)',
                      }}
                    >
                      {t.name}
                    </p>
                    <p className="body-sm">{t.location}</p>
                  </div>
                </div>
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
              maxWidth: '560px',
              marginInline: 'auto',
            }}
          >
            <p className="eyebrow">Apply now</p>
            <h2 className="display-md" style={{ textAlign: 'center' }}>
              Ready to take your coaching to the deepest level?
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
              Qualifying coaches receive their full Logos assessment and debrief at no cost — a $38 value — because experiencing it is the only way to understand what it makes possible.
            </p>
            <CTAButton href={COACH_CTA} size="lg" id="coaches-bottom-cta">
              Apply for Your Complimentary Logos
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .coaches-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .coaches-testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-grid-coaches { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .coaches-section-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .coaches-testimonials-grid { grid-template-columns: 1fr !important; }
          .framework-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
        @media (max-width: 480px) {
          .coaches-steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
