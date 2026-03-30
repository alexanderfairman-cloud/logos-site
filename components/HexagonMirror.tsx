'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import CTAButton from './CTAButton'
import TrustLine from './TrustLine'

// ─── Hexagon geometry ─────────────────────────────────────────────────────────
const HEX_ORIGINS: { x: number; y: number }[] = [
  { x:   0, y: -55 }, // 12 o'clock
  { x:  52, y: -27 }, // 2 o'clock
  { x:  52, y:  27 }, // 4 o'clock
  { x:   0, y:  55 }, // 6 o'clock
  { x: -52, y:  27 }, // 8 o'clock
  { x: -52, y: -27 }, // 10 o'clock
]

const HEX_ROTATIONS   = [0, 14, -10, 6, -16, 12]

const HEX_BACKGROUNDS = [
  'linear-gradient(135deg, rgba(74,144,217,0.38) 0%, rgba(180,210,255,0.55) 100%)',
  'linear-gradient(135deg, rgba(123,159,212,0.34) 0%, rgba(180,210,255,0.48) 100%)',
  'linear-gradient(135deg, rgba(27,58,107,0.28)  0%, rgba(100,150,220,0.45) 100%)',
  'linear-gradient(135deg, rgba(74,144,217,0.38) 0%, rgba(180,210,255,0.55) 100%)',
  'linear-gradient(135deg, rgba(123,159,212,0.34) 0%, rgba(180,210,255,0.48) 100%)',
  'linear-gradient(135deg, rgba(27,58,107,0.28)  0%, rgba(100,150,220,0.45) 100%)',
]

const HEX_BORDERS = [
  'rgba(74,144,217,0.50)',
  'rgba(123,159,212,0.44)',
  'rgba(27,58,107,0.36)',
  'rgba(74,144,217,0.50)',
  'rgba(123,159,212,0.44)',
  'rgba(27,58,107,0.36)',
]

// ─── Framework label config (position + drift direction toward center) ────────
// Labels sit at the true outer edges matching their paired hexagon.
// dx/dy is intentionally small so they dissolve BEFORE reaching center.
const FRAMEWORK_LABELS = [
  { label: 'Big Five',         top: '22%', left: '2%',   dx:  8, dy:  4 },
  { label: 'Enneagram',        top: '20%', right: '2%',  dx: -8, dy:  4 },
  { label: 'Jung',             top: '72%', left: '2%',   dx:  8, dy: -4 },
  { label: 'Attachment',       top: '72%', right: '2%',  dx: -8, dy: -4 },
  { label: 'Locus of Control', top: '46%', left: '1%',   dx:  8, dy:  0 },
  { label: 'Dark Triad',       top: '46%', right: '1%',  dx: -8, dy:  0 },
]

// ─── Animated framework label ─────────────────────────────────────────────────
function FrameworkLabel({
  label,
  top,
  left,
  right,
  dx,
  dy,
  scrollYProgress,
  className,
}: {
  label: string
  top: string
  left?: string
  right?: string
  dx: number
  dy: number
  scrollYProgress: MotionValue<number>
  className?: string
}) {
  // Hold at edges until 32%, drift small distance + dissolve by 48% — never reach center
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.32, 0.48],
    [0, 0.90, 0.90, 0],
  )
  const x = useTransform(scrollYProgress, [0.32, 0.50], ['0vw', `${dx}vw`])
  const y = useTransform(scrollYProgress, [0.32, 0.50], ['0vh', `${dy}vh`])

  return (
    <motion.span
      className={className}
      style={{
        position:      'absolute',
        ...(left  ? { left  } : {}),
        ...(right ? { right } : {}),
        top,
        fontFamily:    "'Plus Jakarta Sans', sans-serif",
        fontSize:      'clamp(0.75rem, 1.4vw, 0.9375rem)',
        fontWeight:    600,
        color:         'var(--blue-deep)',
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        whiteSpace:    'nowrap',
        pointerEvents: 'none',
        opacity,
        x,
        y,
        zIndex:        6,
      }}
    >
      {label}
    </motion.span>
  )
}

// ─── Sacred geometry SVG ──────────────────────────────────────────────────────
// All coordinates in a 200×200 viewBox, pointy-top hexagon
const O  = [[100,10],[177.9,55],[177.9,145],[100,190],[22.1,145],[22.1,55]] as const
const M  = [[100,46],[146.7,73],[146.7,127],[100,154],[53.3,127],[53.3,73]]  as const
const IN = [[100,73],[123.4,86.5],[123.4,113.5],[100,127],[76.6,113.5],[76.6,86.5]] as const

function pts(arr: readonly (readonly [number, number])[]) {
  return arr.map(([x, y]) => `${x},${y}`).join(' ')
}

function GeometricHex() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <radialGradient id="hexBg" cx="50%" cy="55%" r="60%">
          <stop offset="0%"   stopColor="#5BC8FF" stopOpacity="0.95" />
          <stop offset="35%"  stopColor="#2A8FE8" stopOpacity="1"    />
          <stop offset="75%"  stopColor="#1860C8" stopOpacity="1"    />
          <stop offset="100%" stopColor="#0D3FA0" stopOpacity="1"    />
        </radialGradient>
        <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="centerGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="hexClip"><polygon points={pts(O)} /></clipPath>
      </defs>

      <polygon points={pts(O)} fill="url(#hexBg)" />

      <g clipPath="url(#hexClip)">
        {/* Spokes: center → outer */}
        {O.map(([x, y], i) => (
          <line key={`sp${i}`} x1={100} y1={100} x2={x} y2={y}
            stroke="rgba(255,255,255,0.22)" strokeWidth="0.6" />
        ))}
        {/* Outer star-of-David */}
        <polygon points={`${O[0].join(',')},${O[2].join(',')},${O[4].join(',')}`}
          fill="none" stroke="rgba(180,230,255,0.55)" strokeWidth="0.7" />
        <polygon points={`${O[1].join(',')},${O[3].join(',')},${O[5].join(',')}`}
          fill="none" stroke="rgba(180,230,255,0.55)" strokeWidth="0.7" />
        {/* Mid hexagon */}
        <polygon points={pts(M)} fill="none" stroke="rgba(200,235,255,0.45)" strokeWidth="0.65" />
        {/* Mid triangles */}
        <polygon points={`${M[0].join(',')},${M[2].join(',')},${M[4].join(',')}`}
          fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="0.55" />
        <polygon points={`${M[1].join(',')},${M[3].join(',')},${M[5].join(',')}`}
          fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="0.55" />
        {/* Cross: outer → mid */}
        {O.map(([ox, oy], i) => (
          <line key={`cr${i}`} x1={ox} y1={oy} x2={M[i][0]} y2={M[i][1]}
            stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
        ))}
        {/* Inner hexagon */}
        <polygon points={pts(IN)} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
        {/* Inner triangles */}
        <polygon points={`${IN[0].join(',')},${IN[2].join(',')},${IN[4].join(',')}`}
          fill="none" stroke="rgba(255,255,255,0.60)" strokeWidth="0.8" />
        <polygon points={`${IN[1].join(',')},${IN[3].join(',')},${IN[5].join(',')}`}
          fill="none" stroke="rgba(255,255,255,0.60)" strokeWidth="0.8" />
        {/* Spokes: center → mid */}
        {M.map(([x, y], i) => (
          <line key={`ms${i}`} x1={100} y1={100} x2={x} y2={y}
            stroke="rgba(255,255,255,0.20)" strokeWidth="0.55" />
        ))}
        {/* Cross: mid → inner */}
        {M.map(([mx, my], i) => (
          <line key={`mi${i}`} x1={mx} y1={my} x2={IN[i][0]} y2={IN[i][1]}
            stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
        ))}
        {/* Glowing nodes */}
        {O.map(([x, y], i) => (
          <circle key={`on${i}`} cx={x} cy={y} r={2.2}
            fill="rgba(200,235,255,0.85)" filter="url(#nodeGlow)" />
        ))}
        {M.map(([x, y], i) => (
          <circle key={`mn${i}`} cx={x} cy={y} r={2}
            fill="rgba(255,255,255,0.88)" filter="url(#nodeGlow)" />
        ))}
        {IN.map(([x, y], i) => (
          <circle key={`in${i}`} cx={x} cy={y} r={2.8}
            fill="white" filter="url(#nodeGlow)" />
        ))}
        <circle cx={100} cy={100} r={5} fill="white" filter="url(#centerGlow)" />
        <circle cx={100} cy={100} r={2.5} fill="white" />
      </g>

      <polygon points={pts(O)} fill="none" stroke="rgba(160,220,255,0.80)" strokeWidth="1.2" />
      <polygon points={pts(O)} fill="none" stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.6" strokeDasharray="4 8" />
    </svg>
  )
}

// ─── Single glass hexagon ─────────────────────────────────────────────────────
function GlassHex({ index, scrollYProgress }: {
  index: number
  scrollYProgress: MotionValue<number>
}) {
  const { x: ox, y: oy } = HEX_ORIGINS[index]
  const x       = useTransform(scrollYProgress, [0, 0.65], [`${ox}vw`, '0vw'])
  const y       = useTransform(scrollYProgress, [0, 0.65], [`${oy}vh`, '0vh'])
  const scale   = useTransform(scrollYProgress, [0, 0.42, 0.70], [1, 0.82, 0.05])
  const opacity = useTransform(scrollYProgress, [0, 0.52, 0.72], [0.95, 0.85, 0])
  const rotate  = useTransform(scrollYProgress, [0, 0.65], [HEX_ROTATIONS[index], 0])

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        translateX: '-50%', translateY: '-50%',
        x, y, scale, opacity, rotate,
        width:  'clamp(120px, 22vw, 280px)',
        height: 'clamp(120px, 22vw, 280px)',
        clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
        background:    HEX_BACKGROUNDS[index],
        border:        `1px solid ${HEX_BORDERS[index]}`,
        boxShadow:     'inset 0 1px 1px rgba(255,255,255,0.70), 0 8px 40px rgba(74,144,217,0.14)',
        willChange:    'transform, opacity',
        zIndex:        2,
      }}
    />
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HexagonMirror() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ['start start', 'end end'],
  })

  // ── H1: "The World's Best Psychological Models."
  // Fades in, holds, and fades completely out into an absolute blank screen at warp speed to clear the DOM
  const h1Opacity = useTransform(scrollYProgress, [0.0, 0.04, 0.076, 0.126], [0, 1, 1, 0])
  const h1Y       = useTransform(scrollYProgress, [0.0, 0.04, 0.076, 0.126], [30, 0, 0, -30]) // Departs natively UPward

  // ── H2: "in a single assessment."
  // Triggers smoothly and directly out of the H1 vanishing threshold (0.15) with zero lag time
  const h2Opacity = useTransform(scrollYProgress, [0.126, 0.20, 0.70, 0.80], [0, 1, 1, 0])
  const h2Y       = useTransform(scrollYProgress, [0.126, 0.20], [30, 0]) // Drifts natively UPward into the center

  // ── Central geometric hex — starts small as H2 rises, grows to full at end
  // Phase 1: materialises at 55% opacity/38% scale as H2 enters
  // Phase 2: holds subtly behind H2 (background presence)
  // Phase 3: blooms to full size after H2 exits
  const mirrorScale   = useTransform(
    scrollYProgress,
    [0.15, 0.30, 0.60, 0.80],
    [0.10, 0.38, 0.38, 1.00],
  )
  const mirrorOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.28, 0.60, 0.80],
    [0,    0.55, 0.55, 1.00],
  )

  // ── Outer glow halo — follows the hexagon
  const glowOpacity = useTransform(
    scrollYProgress,
    [0.20, 0.32, 0.60, 0.85],
    [0, 0.40, 0.40, 0.90],
  )
  const glowScale = useTransform(
    scrollYProgress,
    [0.20, 0.35, 0.60, 0.85],
    [0.35, 0.85, 0.85, 1.40],
  )

  // ── Bottom hero text + CTA (final phase)
  const eyebrowOpacity  = useTransform(scrollYProgress, [0.72, 0.82], [0, 1])
  const headlineOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1])
  const headlineY       = useTransform(scrollYProgress, [0.75, 0.85], [36, 0])
  const ctaOpacity      = useTransform(scrollYProgress, [0.80, 0.90], [0, 1])
  const ctaY            = useTransform(scrollYProgress, [0.80, 0.90], [24, 0])

  // ── Scroll indicator
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <div ref={containerRef} style={{ height: '340vh', position: 'relative' }} className="hexmirror-root">
      <div style={{
        position: 'sticky', top: 0,
        height: '100dvh', minHeight: '100dvh',
        overflow: 'hidden',
        background: 'var(--bg-ground)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Ambient pearlescent glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(180,215,255,0.14) 0%, transparent 70%)',
        }} />

        {/* ── Animated framework labels (drift + dissolve as H2 rises) ─── */}
        {FRAMEWORK_LABELS.map(({ label, top, left, right, dx, dy }) => (
          <FrameworkLabel
            key={label}
            label={label} top={top}
            left={left} right={right}
            dx={dx} dy={dy}
            scrollYProgress={scrollYProgress}
            className="framework-label-item"
          />
        ))}

        {/* ── Six glass hexagons ──────────────────────────────────────── */}
        {HEX_ORIGINS.map((_, i) => (
          <GlassHex key={i} index={i} scrollYProgress={scrollYProgress} />
        ))}

        {/* ── Outer glow halo (behind the geometric hex) ─────────────── */}
        <motion.div style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width:  'clamp(300px, 52vw, 680px)',
          height: 'clamp(300px, 52vw, 680px)',
          borderRadius: '9999px',
          background: 'radial-gradient(ellipse, rgba(74,144,255,0.22) 0%, rgba(74,144,217,0.10) 45%, transparent 70%)',
          scale:   glowScale,
          opacity: glowOpacity,
          filter:  'blur(5px)',
          zIndex:  3,
          pointerEvents: 'none',
        }} />

        {/* ── Logos logo image (seed → full bloom) ──────────────────── */}
        <motion.div className="mirror-icon" style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width:  'clamp(140px, 22vw, 300px)',
          height: 'clamp(140px, 22vw, 300px)',
          scale:   mirrorScale,
          opacity: mirrorOpacity,
          willChange: 'transform, opacity',
          zIndex:  4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos-icon.png"
            alt="Logos"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </motion.div>

        {/* ── H1 centered ────────────────────────────────────────────── */}
        <motion.div className="hero-headline" style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width: '100%', maxWidth: '820px',
          paddingInline: '2rem', textAlign: 'center',
          opacity: h1Opacity, y: h1Y,
          zIndex: 8, pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily:    "'Clash Display', sans-serif",
            fontWeight:    600,
            fontSize:      'clamp(2rem, 5.5vw, 4.25rem)',
            lineHeight:    1.05,
            letterSpacing: '-0.03em',
            color:         'var(--blue-deep)',
          }}>
            The World&rsquo;s Best<br />Psychological<br className="mobile-only-break" /> Models.
          </p>
        </motion.div>

        {/* ── H2 centered ────────────────────────────────────────────── */}
        <motion.div className="hero-headline" style={{
          position: 'absolute', top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
          width: '100%', maxWidth: '820px',
          paddingInline: '2rem', textAlign: 'center',
          opacity: h2Opacity, y: h2Y,
          zIndex: 8, pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily:    "'Clash Display', sans-serif",
            fontWeight:    600,
            fontStyle:     'italic',
            fontSize:      'clamp(1.75rem, 5vw, 3.75rem)',
            lineHeight:    1.08,
            letterSpacing: '-0.025em',
            color:         'var(--blue-deep)',
          }}>
            in a single<br />assessment.
          </p>
        </motion.div>

        {/* ── Bottom hero text + CTA (final phase) ───────────────────── */}
        <motion.div className="hero-bottom-cta" style={{
          position: 'absolute',
          bottom: 'clamp(3rem, 8vh, 5.5rem)',
          left: '50%', translateX: '-50%',
          width: '100%', maxWidth: '680px',
          paddingInline: '1.5rem',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '1.125rem',
          textAlign: 'center', zIndex: 10,
        }}>
          <motion.p className="eyebrow" style={{ opacity: eyebrowOpacity }}>
            Built on 40+ peer-reviewed studies
          </motion.p>
          <motion.h1 className="display-lg"
            style={{ opacity: headlineOpacity, y: headlineY, textAlign: 'center' }}>
            The Best Personality Models<br />in a Single Assessment.
          </motion.h1>
          <motion.p className="body-lg"
            style={{ opacity: ctaOpacity, y: ctaY, maxWidth: '52ch', color: 'var(--text-muted)' }}>
            The Big Five, the Enneagram, Jungian archetypes, attachment theory,
            and transformational leadership research are unified into one system.
            Built on over 40 peer-reviewed studies.
          </motion.p>
          <motion.div style={{
            opacity: ctaOpacity, y: ctaY,
            display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center',
          }}>
            <CTAButton href="/logos-checkout" size="lg" id="hero-cta">
              Begin Your Logos
            </CTAButton>
            <CTAButton href="/report" size="lg" variant="outline" id="hero-report-cta">
              See the Report
            </CTAButton>
          </motion.div>
          <motion.div style={{ opacity: ctaOpacity }}>
            <TrustLine centered />
          </motion.div>

          {/* ── Mobile-only: static framework label strip ── */}
          <motion.div
            className="mobile-framework-strip"
            style={{ opacity: ctaOpacity, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.375rem', marginTop: '0.25rem' }}
          >
            {['Big Five', 'Enneagram', 'Jung', 'Attachment', 'Locus of Control', 'Dark Triad'].map((name) => (
              <span key={name} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.5625rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                background: 'rgba(27,58,107,0.05)',
                border: '1px solid rgba(27,58,107,0.10)',
                borderRadius: '9999px',
                padding: '0.2rem 0.6rem',
              }}>{name}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ────────────────────────────────────────── */}
        <motion.div style={{
          position: 'absolute', bottom: '1.375rem',
          left: '50%', translateX: '-50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.5rem', opacity: indicatorOpacity,
          zIndex: 10, pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.625rem', letterSpacing: '0.20em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            fontWeight: 600,
          }}>
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: 2, height: 32,
              background: 'linear-gradient(to bottom, var(--blue-electric), rgba(74,144,217,0.10))',
              borderRadius: '9999px',
            }}
          />
        </motion.div>
      </div>
      <style>{`
        /* ── Mobile tweaks ── */
        .mobile-framework-strip { display: none; }
        .mobile-only-break { display: none; }

        @media (max-width: 640px) {
          .mobile-only-break { display: inline !important; }
          .hero-headline {
            top: 50% !important;
          }
          .hexmirror-root {
            height: 300vh !important;
          }
          /* Scale framework labels down on mobile instead of hiding */
          .framework-label-item {
            font-size: 9px !important;
            letter-spacing: 0.08em !important;
          }
          /* Hide the large central icon on mobile — it covers CTAs */
          .mirror-icon {
            display: none !important;
          }
          .hero-bottom-cta {
            bottom: 1.5rem !important;
            padding-inline: 1.25rem !important;
          }
          /* Show the static framework pill strip only on mobile */
          .mobile-framework-strip {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .framework-label-item {
            font-size: 10px !important;
            letter-spacing: 0.08em !important;
          }
          .mirror-icon {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
