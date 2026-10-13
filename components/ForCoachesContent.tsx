'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const COACH_CHECKOUT_URL = 'https://buy.stripe.com/eVq00j48D9ofgf25ssfIs1c'
const APPLY_FORM_URL = 'https://s.pointerpro.com/logoscoachform'

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

interface CoachSection {
  tag: string
  headline: string
  body: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
    maxWidth?: number
  }
}

const sections: CoachSection[] = [
  {
    tag: 'Know your client',
    headline: "See what's actually driving their behavior.",
    body: "Logos reveals the specific archetypes that generate your client's deepest motivation, the ego patterns running their decisions beneath the surface, and the precise traits where their genius lives and where their growth is waiting. You will know more about your client from their report than from months of exploratory conversation.",
    image: {
      src: '/coaches/06-fulfillment-motivation.jpg',
      alt: "The Fulfillment card showing a client's three archetypes and the question to ask about each.",
      width: 626,
      height: 366,
      maxWidth: 626,
    },
  },
  {
    tag: 'Identify self-sabotage',
    headline: 'Name the pattern before it derails them.',
    body: "Logos exposes your client's ego blind spots with pinpoint accuracy (the perfectionism, the need for approval, the avoidance) and explains exactly how to help them gain awareness and prevent the same cycles from repeating. You stop guessing and start working with the real dynamic.",
    image: {
      src: '/coaches/07-shadow-patterns.jpg',
      alt: 'Three named shadow patterns for a client, each with the question that opens it up.',
      width: 305,
      height: 426,
      maxWidth: 320,
    },
  },
  {
    tag: 'Build a roadmap',
    headline: 'Give every client a specific path, not a general direction.',
    body: "Logos maps each client's weakest developmental traits alongside their strongest ones and gives you a clear framework for months of focused growth work. You will never reach the third month of an engagement and wonder what to do next.",
    image: {
      src: '/coaches/08-journey-commitments.jpg',
      alt: "A client's open commitments with due dates in the Journey tab.",
      width: 779,
      height: 248,
      maxWidth: 779,
    },
  },
  {
    tag: 'Manage every client',
    headline: 'Manage all your clients in one place, easily.',
    body: 'Every client you have ever run a Logos for sits in one list: their archetypes, their type, their open commitments, and the last thing that changed. Open any of them and the whole picture is there.',
    image: {
      src: '/coaches/05-all-clients-dashboard.jpg',
      alt: 'The Clients screen showing a patch of client cards with archetype and type.',
      width: 504,
      height: 332,
      maxWidth: 504,
    },
  },
  {
    tag: 'Your AI analyst',
    headline: 'An AI analyst trained in the depths of coaching expertise.',
    body: "It has read your client's full Logos and the goal they set. Ask it to prepare you for a session, find the words to open with, or name the most powerful way to support this particular person, and it answers from their profile, not from generalities.",
    image: {
      src: '/coaches/02-ai-coach-chat.jpg',
      alt: 'The Logos AI chat preparing a coach for an upcoming session.',
      width: 426,
      height: 506,
      maxWidth: 400,
    },
  },
]

const steps = [
  {
    number: '01',
    title: 'Get started for $39.',
    body: 'One payment covers your own Logos assessment and report, and opens your coach portal.',
  },
  {
    number: '02',
    title: 'Create your coach account.',
    body: 'Sign up at logosportal.com with the same email you paid with. Your purchase attaches automatically.',
  },
  {
    number: '03',
    title: 'Send your first client their Logos.',
    body: 'Share your branded assessment link. The report, the debrief and the client portal are ready when they finish.',
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

/* ── Cartographic Source Map — tracing symptoms down to the source ────────── */
function SourceMapIllustration() {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.75)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-xl)',
        padding: '8px',
        boxShadow:
          '0 24px 48px -12px rgba(27, 58, 107, 0.08), 0 0 0 1px rgba(74, 144, 217, 0.08)',
        width: '100%',
        maxWidth: '520px',
      }}
    >
      <div
        style={{
          background: 'radial-gradient(ellipse at 65% 55%, #F4F8FD 0%, #FFFFFF 75%)',
          borderRadius: 'calc(var(--radius-xl) - 8px)',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.9)',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 520 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <defs>
            {/* Ambient gradients */}
            <radialGradient id="mapSourceGlow" cx="62%" cy="56%" r="35%">
              <stop offset="0%" stopColor="#4A90D9" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#7B9FD4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#4A90D9" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mapTrailGrad" x1="15%" y1="20%" x2="62%" y2="56%">
              <stop offset="0%" stopColor="#7B9FD4" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#4A90D9" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="sourceNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Pattern for background cartographic grid */}
            <pattern id="cartoGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(74, 144, 217, 0.05)" strokeWidth="0.75" />
              <circle cx="28" cy="0" r="0.8" fill="rgba(74, 144, 217, 0.18)" />
            </pattern>
          </defs>

          {/* Grid background */}
          <rect width="520" height="420" fill="url(#cartoGrid)" />

          {/* Ambient radial glow at the source */}
          <rect width="520" height="420" fill="url(#mapSourceGlow)" />

          {/* Cartographic Coordinate Border & Tick Marks */}
          <g opacity="0.6">
            <line x1="20" y1="20" x2="20" y2="400" stroke="rgba(74, 144, 217, 0.15)" strokeWidth="1" />
            <line x1="500" y1="20" x2="500" y2="400" stroke="rgba(74, 144, 217, 0.15)" strokeWidth="1" />
            <line x1="20" y1="20" x2="500" y2="20" stroke="rgba(74, 144, 217, 0.15)" strokeWidth="1" />
            <line x1="20" y1="400" x2="500" y2="400" stroke="rgba(74, 144, 217, 0.15)" strokeWidth="1" />

            {/* Corner crosses */}
            <path d="M 15 20 H 25 M 20 15 V 25" stroke="#4A90D9" strokeWidth="1" opacity="0.4" />
            <path d="M 495 20 H 505 M 500 15 V 25" stroke="#4A90D9" strokeWidth="1" opacity="0.4" />
            <path d="M 15 400 H 25 M 20 395 V 405" stroke="#4A90D9" strokeWidth="1" opacity="0.4" />
            <path d="M 495 400 H 505 M 500 395 V 405" stroke="#4A90D9" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Topographic Contour Elevation Waves (Interior depth landscape) */}
          {/* Contour 1 — Outermost / Surface */}
          <path
            d="M 35 150 C 70 80, 180 55, 290 65 C 400 75, 475 120, 485 210 C 495 305, 430 365, 320 365 C 190 365, 80 325, 45 250 C 25 205, 18 185, 35 150 Z"
            fill="rgba(74, 144, 217, 0.02)"
            stroke="rgba(74, 144, 217, 0.15)"
            strokeWidth="1"
          />
          <text x="185" y="72" fill="rgba(74, 144, 217, 0.45)" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="0.08em">
            TERRAIN: SURFACE SYMPTOMS
          </text>

          {/* Contour 2 — Defense & Pattern Layer */}
          <path
            d="M 95 180 C 130 115, 215 100, 310 108 C 410 118, 445 160, 455 225 C 465 295, 395 335, 305 330 C 195 325, 115 285, 95 235 Z"
            fill="rgba(74, 144, 217, 0.035)"
            stroke="rgba(74, 144, 217, 0.22)"
            strokeWidth="1"
          />
          <text x="105" y="125" fill="rgba(74, 144, 217, 0.55)" fontSize="8" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" letterSpacing="0.08em">
            EGO STRUCTURES (-40M)
          </text>

          {/* Contour 3 — Archetypal Bedrock */}
          <path
            d="M 160 195 C 190 145, 255 138, 330 148 C 390 156, 415 190, 420 235 C 425 280, 375 302, 300 298 C 220 294, 170 260, 160 225 Z"
            fill="rgba(74, 144, 217, 0.055)"
            stroke="rgba(74, 144, 217, 0.32)"
            strokeWidth="1.1"
          />

          {/* Contour 4 — The Deep Basin */}
          <path
            d="M 225 210 C 245 178, 290 172, 340 180 C 380 188, 390 215, 390 240 C 390 268, 355 278, 310 275 C 260 272, 230 250, 225 230 Z"
            fill="rgba(74, 144, 217, 0.09)"
            stroke="rgba(74, 144, 217, 0.45)"
            strokeWidth="1.2"
          />

          {/* Concentric rings surrounding The Source */}
          <circle cx="320" cy="235" r="72" stroke="rgba(74, 144, 217, 0.16)" strokeWidth="0.8" strokeDasharray="3 4" fill="none" />
          <circle cx="320" cy="235" r="48" stroke="rgba(74, 144, 217, 0.28)" strokeWidth="0.9" strokeDasharray="2 3" fill="none" />
          <circle cx="320" cy="235" r="28" stroke="rgba(74, 144, 217, 0.48)" strokeWidth="1" fill="none" />
          <circle cx="320" cy="235" r="14" stroke="rgba(74, 144, 217, 0.7)" strokeWidth="1.2" fill="none" />

          {/* Crosshairs at The Source */}
          <line x1="320" y1="150" x2="320" y2="320" stroke="rgba(74, 144, 217, 0.2)" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="235" y1="235" x2="405" y2="235" stroke="rgba(74, 144, 217, 0.2)" strokeWidth="0.8" strokeDasharray="4 4" />

          {/* ── The Expedition Trail to The Source ────────────────────────── */}
          {/* Dashed Journey Curve */}
          <path
            d="M 85 110 C 145 160, 110 235, 175 255 C 240 275, 235 180, 280 170 C 305 165, 315 205, 320 235"
            stroke="url(#mapTrailGrad)"
            strokeWidth="2.2"
            strokeDasharray="5 4.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Waypoint 1: Surface Issue */}
          <g>
            <circle cx="85" cy="110" r="5" fill="#FFFFFF" stroke="#4A90D9" strokeWidth="2" />
            <circle cx="85" cy="110" r="2" fill="#4A90D9" />
            <rect x="75" y="76" width="76" height="22" rx="4" fill="rgba(255, 255, 255, 0.92)" stroke="rgba(74, 144, 217, 0.25)" strokeWidth="0.8" />
            <text x="82" y="87" fill="#1B3A6B" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              01 SYMPTOM
            </text>
            <text x="82" y="94" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              Avoidance &amp; Burnout
            </text>
          </g>

          {/* Waypoint 2: Ego Dynamic */}
          <g>
            <circle cx="175" cy="255" r="5" fill="#FFFFFF" stroke="#4A90D9" strokeWidth="2" />
            <circle cx="175" cy="255" r="2" fill="#4A90D9" />
            <rect x="130" y="272" width="90" height="22" rx="4" fill="rgba(255, 255, 255, 0.92)" stroke="rgba(74, 144, 217, 0.25)" strokeWidth="0.8" />
            <text x="136" y="283" fill="#1B3A6B" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              02 EGO PATTERN
            </text>
            <text x="136" y="290" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              Approval Loop (Type 3)
            </text>
          </g>

          {/* Waypoint 3: Shadow Archetype */}
          <g>
            <circle cx="280" cy="170" r="5" fill="#FFFFFF" stroke="#4A90D9" strokeWidth="2" />
            <circle cx="280" cy="170" r="2" fill="#4A90D9" />
            <rect x="238" y="136" width="88" height="22" rx="4" fill="rgba(255, 255, 255, 0.92)" stroke="rgba(74, 144, 217, 0.25)" strokeWidth="0.8" />
            <text x="244" y="147" fill="#1B3A6B" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              03 SHADOW DYNAMIC
            </text>
            <text x="244" y="154" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              The Cynical Sage
            </text>
          </g>

          {/* Waypoint 4: THE SOURCE (Origin Node) */}
          <g filter="url(#sourceNodeGlow)">
            {/* Outer halo */}
            <circle cx="320" cy="235" r="10" fill="rgba(74, 144, 217, 0.25)" />
            {/* 4-point diamond star / compass jewel */}
            <path
              d="M 320 221 L 324 235 L 334 235 L 325 239 L 328 250 L 320 242 L 312 250 L 315 239 L 306 235 L 316 235 Z"
              fill="#2563EB"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            {/* Bright center beacon */}
            <circle cx="320" cy="235" r="3.5" fill="#FFFFFF" />
          </g>

          {/* Target Flag / Callout for The Source */}
          <g>
            {/* Leader line from source to badge */}
            <line x1="320" y1="222" x2="350" y2="195" stroke="#2563EB" strokeWidth="1.2" />
            <circle cx="350" cy="195" r="1.5" fill="#2563EB" />
            {/* Badge container */}
            <rect
              x="345"
              y="160"
              width="145"
              height="40"
              rx="6"
              fill="#FFFFFF"
              stroke="#2563EB"
              strokeWidth="1.2"
              filter="drop-shadow(0 4px 12px rgba(37, 99, 235, 0.15))"
            />
            <circle cx="359" cy="174" r="3" fill="#2563EB" />
            <text x="367" y="177" fill="#1B3A6B" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" letterSpacing="0.06em">
              THE SOURCE
            </text>
            <text x="358" y="191" fill="#4A90D9" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">
              Early Life Experience
            </text>
          </g>

          {/* ── Cartographic Accents & Compass ────────────────────────────── */}
          {/* Compass rose in top-right */}
          <g transform="translate(450, 48) scale(0.65)" opacity="0.75">
            <circle cx="30" cy="30" r="26" stroke="#4A90D9" strokeWidth="0.8" strokeDasharray="2 3" fill="none" />
            <circle cx="30" cy="30" r="18" stroke="#4A90D9" strokeWidth="0.6" fill="none" />
            <line x1="30" y1="2" x2="30" y2="58" stroke="#4A90D9" strokeWidth="0.9" />
            <line x1="2" y1="30" x2="58" y2="30" stroke="#4A90D9" strokeWidth="0.9" />
            {/* Compass needle */}
            <polygon points="30,8 34,30 30,34 26,30" fill="#2563EB" />
            <polygon points="30,52 34,30 30,26 26,30" fill="#CBD5E1" />
            <text x="30" y="3" textAnchor="middle" fill="#1B3A6B" fontSize="7" fontWeight="800" fontFamily="'Plus Jakarta Sans', sans-serif">
              N
            </text>
          </g>

          {/* Top-left Cartographic Header Badge */}
          <g transform="translate(32, 34)">
            <rect x="0" y="0" width="130" height="22" rx="11" fill="rgba(74, 144, 217, 0.08)" stroke="rgba(74, 144, 217, 0.2)" strokeWidth="0.8" />
            <circle cx="10" cy="11" r="3" fill="#2563EB" />
            <text x="18" y="14" fill="#1B3A6B" fontSize="7.5" fontWeight="700" letterSpacing="0.08em" fontFamily="'Plus Jakarta Sans', sans-serif">
              INTERIOR TERRAIN MAP
            </text>
          </g>

          {/* Bottom-left Scale Ruler */}
          <g transform="translate(35, 385)" opacity="0.75">
            <line x1="0" y1="0" x2="140" y2="0" stroke="#4A90D9" strokeWidth="1" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="#4A90D9" strokeWidth="1" />
            <line x1="45" y1="-2" x2="45" y2="2" stroke="#4A90D9" strokeWidth="0.8" />
            <line x1="90" y1="-2" x2="90" y2="2" stroke="#4A90D9" strokeWidth="0.8" />
            <line x1="140" y1="-3" x2="140" y2="3" stroke="#4A90D9" strokeWidth="1" />
            <text x="0" y="9" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              SURFACE
            </text>
            <text x="45" y="9" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              EGO
            </text>
            <text x="90" y="9" fill="#7B9FD4" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif">
              TRAITS
            </text>
            <text x="140" y="9" fill="#2563EB" fontSize="6.5" fontWeight="700" fontFamily="'Plus Jakarta Sans', sans-serif">
              SOURCE
            </text>
          </g>

          {/* Bottom-right Dimensions Spec Badge */}
          <g transform="translate(360, 380)">
            <text x="130" y="0" textAnchor="end" fill="#7B9FD4" fontSize="7" fontFamily="'Plus Jakarta Sans', sans-serif">
              GRID: 70+ DIMENSIONS
            </text>
            <text x="130" y="9" textAnchor="end" fill="#1B3A6B" fontSize="7.5" fontWeight="600" fontFamily="'Plus Jakarta Sans', sans-serif">
              ACCURACY: 1.4 TRILLION
            </text>
          </g>
        </svg>
      </div>
    </div>
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
                their full trait profile across 70+ dimensions, all in one report.
                Sessions go deeper faster, and the breakthroughs hold.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <CTAButton href={COACH_CHECKOUT_URL} size="lg" id="coaches-hero-cta">
                  Get started for $39
                </CTAButton>
                <p
                  className="body-sm"
                  style={{ color: 'var(--text-ghost)' }}
                >
                  One payment. Your own Logos and your coach portal. After payment you will create your account; use the same email you paid with.
                </p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ display: 'flex', justifyContent: 'center' }}
              className="coaches-hero-illustration"
            >
              <SourceMapIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Six content sections ─────────────────────────────────────────── */}
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
                  gridTemplateColumns: s.image
                    ? '160px minmax(0, 1.15fr) minmax(0, 1.25fr)'
                    : '160px minmax(0, 2fr)',
                  gap: '3.5rem',
                  alignItems: 'start',
                }}
                className={`coaches-section-row ${!s.image ? 'coaches-section-row--no-image' : ''}`}
              >
                {/* Number + tag */}
                <div className="coaches-section-num-tag" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.25rem' }}>
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
                <div
                  className="coaches-section-copy"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: !s.image ? '680px' : undefined,
                  }}
                >
                  <h2 className="display-md">{s.headline}</h2>
                  <p className="body-lg">{s.body}</p>
                </div>

                {/* Image in Double-Bezel frame */}
                {s.image && (
                  <div className="coaches-section-media" style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid var(--border-hairline)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '6px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                        width: '100%',
                        maxWidth: s.image.maxWidth ? `min(100%, ${s.image.maxWidth}px)` : `min(100%, ${s.image.width}px)`,
                      }}
                    >
                      <div
                        style={{
                          background: 'var(--bg-surface)',
                          borderRadius: 'calc(var(--radius-xl) - 6px)',
                          overflow: 'hidden',
                          boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                          display: 'block',
                          lineHeight: 0,
                        }}
                      >
                        <Image
                          src={s.image.src}
                          alt={s.image.alt}
                          width={s.image.width}
                          height={s.image.height}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                          style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            borderRadius: 'calc(var(--radius-xl) - 6px)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>The most comprehensive assessment ever constructed</p>
            <h2 className="display-md">
              All the most powerful models in a single tool.
            </h2>
            <p className="body-lg" style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              Finally, see the truth about your client through the lens of all models combined, without sending them to six different assessments.
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
            <p className="eyebrow">Get started</p>
            <h2 className="display-md" style={{ textAlign: 'center' }}>
              Ready to take your coaching to the deepest level?
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
              Your own Logos assessment and your coach portal are one $39 payment away.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <CTAButton href={COACH_CHECKOUT_URL} size="lg" id="coaches-bottom-cta">
                Get started for $39
              </CTAButton>
              <p
                className="body-sm"
                style={{ color: 'var(--text-ghost)', textAlign: 'center' }}
              >
                One payment. Your own Logos and your coach portal. After payment you will create your account; use the same email you paid with.
              </p>
            </div>
            <a
              href={APPLY_FORM_URL}
              className="body-sm"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                marginTop: '0.5rem',
                transition: 'color 0.2s ease',
              }}
            >
              Prefer to apply for a complimentary Logos first? Apply here.
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .coaches-section-row {
            grid-template-columns: 140px minmax(0, 1fr) minmax(0, 1.1fr) !important;
            gap: 2rem !important;
          }
          .coaches-section-row--no-image {
            grid-template-columns: 140px minmax(0, 1.8fr) !important;
          }
        }
        @media (max-width: 900px) {
          .coaches-steps-grid { grid-template-columns: 1fr 1fr !important; }
          .coaches-testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-grid-coaches { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .coaches-hero-illustration { display: none !important; }
          .coaches-section-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .coaches-section-row--no-image { grid-template-columns: 1fr !important; }
          .coaches-section-media { justify-content: flex-start !important; }
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
