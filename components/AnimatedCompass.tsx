'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ARCHETYPES = [
  "Sage", "Warrior", "Magician", "Outlaw",
  "Everyman", "Lover", "Jester", "Caregiver",
  "Creator", "Ruler", "Seeker", "Innocent"
]

// The Sage is at index 0 = 0 degrees (12 o'clock / North)
// The needle needs to spin and LAND at 0 degrees.
// We start at -120deg and spin ~1200deg total, landing at 0.
// That's: -120 + 1080 = 960 (not 0). So: spin 1200 - 120 = 1080 rounds + landing = let's do 4 full rotations (1440deg) from 30deg start → lands at 30+1440=1470 → 1470 % 360 = 30 (NOT right).
// The trick: we want to end at 0. So endAngle = 0. We start at e.g. -300deg (arbitrary non-north).
// We animate from -300 to (4*360 + 0) = 1440. So the needle travels 1740 deg total, ending at 0 (North).
// In CSS: use @keyframes that goes from -300deg to 1440deg. That's a very visible spin and lands at exactly 0.

export default function AnimatedCompass() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<'idle' | 'spinning' | 'locked'>('idle')

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let fired = false

    const trigger = () => {
      if (fired) return
      fired = true
      // Small pause so user sees the compass static for a beat before spinning
      setTimeout(() => {
        setPhase('spinning')
        setTimeout(() => {
          setPhase('locked')
        }, 3600)
      }, 300)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          trigger()
          observer.disconnect()
        }
      },
      // Very low threshold — fires as soon as any part of the compass is visible
      { threshold: 0.05 }
    )

    observer.observe(el)

    // Hard fallback: if the observer never fires within 5s, force it anyway
    const fallback = setTimeout(trigger, 5000)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  const isInView = phase !== 'idle'
  const isSpinning = phase === 'spinning'
  const isLocked = phase === 'locked'

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── CSS animation keyframes ── */}
      <style>{`
        @keyframes compass-spin {
          from { transform: rotate(-300deg); }
          to   { transform: rotate(1440deg); }
        }
        .needle-spinning {
          animation: compass-spin 3.5s cubic-bezier(0.25, 0.1, 0.05, 1) forwards;
        }
        .needle-locked {
          transform: rotate(0deg);
        }
        @keyframes sage-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .sage-locked {
          animation: sage-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* ── Ambient glow ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          inset: '-20%',
          background: 'radial-gradient(circle at center, rgba(74,144,217,0.12) 0%, transparent 60%)',
          borderRadius: '9999px',
          pointerEvents: 'none',
        }}
      />

      {/* ── Compass Base SVG ── */}
      <motion.svg
        viewBox="0 0 300 300"
        style={{ width: '100%', height: '100%', overflow: 'visible', position: 'absolute' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <radialGradient id="compassFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(200,225,255,0.15)" />
          </radialGradient>
        </defs>

        {/* Outer decorative ring */}
        <circle cx="150" cy="150" r="142" fill="none" stroke="rgba(27,58,107,0.10)" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="134" fill="none" stroke="rgba(74,144,217,0.08)" strokeWidth="1" strokeDasharray="3 9" />

        {/* Main compass face */}
        <circle cx="150" cy="150" r="110" fill="url(#compassFill)" stroke="rgba(27,58,107,0.18)" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(74,144,217,0.2)" strokeWidth="0.75" />

        {/* Major tick marks (every 30deg = 12 archetypes) */}
        {ARCHETYPES.map((_, i) => (
          <line
            key={`major-${i}`}
            x1="150" y1="42" x2="150" y2="54"
            stroke="rgba(27,58,107,0.35)"
            strokeWidth="2"
            transform={`rotate(${i * 30} 150 150)`}
          />
        ))}

        {/* Minor tick marks (every 15deg) */}
        {[...Array(24)].map((_, i) => (
          i % 2 !== 0 && (
            <line
              key={`minor-${i}`}
              x1="150" y1="46" x2="150" y2="52"
              stroke="rgba(27,58,107,0.15)"
              strokeWidth="0.75"
              transform={`rotate(${i * 15} 150 150)`}
            />
          )
        ))}

        {/* Compass rose petal shape */}
        <polygon
          points="150,60 158,140 150,160 142,140"
          fill="var(--blue-deep)"
          opacity="0.85"
        />
        <polygon
          points="150,160 158,140 150,240 142,140"
          fill="var(--blue-mid)"
          opacity="0.4"
        />
        <polygon
          points="60,150 140,142 160,150 140,158"
          fill="var(--blue-deep)"
          opacity="0.2"
        />
        <polygon
          points="240,150 160,142 140,150 160,158"
          fill="var(--blue-deep)"
          opacity="0.2"
        />

        {/* Center bezel */}
        <circle cx="150" cy="150" r="12" fill="white" stroke="rgba(74,144,217,0.5)" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="5" fill="var(--blue-deep)" />

        {/* Lock glow ring — only when locked */}
        {isLocked && (
          <circle
            cx="150" cy="150" r="110"
            fill="none"
            stroke="var(--blue-electric)"
            strokeWidth="1.5"
            opacity="0.4"
          />
        )}
      </motion.svg>

      {/* ── Archetype Labels ── */}
      {ARCHETYPES.map((arc, i) => {
        const isSage = arc === 'Sage'
        const angleDeg = i * 30
        const angleRad = (angleDeg - 90) * (Math.PI / 180) // -90 so 0deg = top
        // Radius for label placement (as % of container)
        const r = 0.38 // 38% of box radius
        const x = 50 + r * 100 * Math.cos(angleRad)
        const y = 50 + r * 100 * Math.sin(angleRad)

        return (
          <motion.div
            key={arc}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isInView ? (isSage && isLocked ? 1 : 0.35) : 0,
            }}
            transition={{
              duration: 1.0,
              delay: isInView ? 0.3 : 0,
            }}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 5,
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: isSage && isLocked ? '0.75rem' : '0.5625rem',
                fontWeight: isSage && isLocked ? 700 : 500,
                color: isSage && isLocked ? 'var(--blue-electric)' : 'var(--blue-deep)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                whiteSpace: 'nowrap',
                transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                textShadow: isSage && isLocked ? '0 0 16px rgba(74,144,217,0.5)' : 'none',
              }}
              className={isSage && isLocked ? 'sage-locked' : ''}
            >
              {arc}
            </span>
          </motion.div>
        )
      })}

      {/* ── Spinning Needle ── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100px',
          height: '100px',
          marginLeft: '-50px',
          marginTop: '-50px',
          zIndex: 10,
          pointerEvents: 'none',
          // Apply transform origin at center
          transformOrigin: '50px 50px',
        }}
        className={
          isSpinning ? 'needle-spinning' :
          isLocked ? 'needle-locked' : ''
        }
      >
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0px 4px 8px rgba(27,58,107,0.30))' }}>
          {/* North-pointing triangle */}
          <polygon points="50,8 56,50 50,62 44,50" fill="var(--blue-deep)" />
          {/* South counter-weight */}
          <polygon points="50,62 54,50 50,88 46,50" fill="var(--blue-mid)" opacity="0.55" />
          {/* Center pin */}
          <circle cx="50" cy="50" r="8" fill="white" stroke="rgba(74,144,217,0.7)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="3.5" fill="var(--blue-deep)" />
        </svg>
      </div>

      {/* ── Lock line pointing to Sage (north) after lock ── */}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: '12%',
            left: '50%',
            width: '2px',
            height: '10%',
            background: 'linear-gradient(to top, var(--blue-electric), transparent)',
            transform: 'translateX(-50%)',
            transformOrigin: 'bottom',
            zIndex: 8,
            borderRadius: '2px',
          }}
        />
      )}

      {/* ── Sage Info Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
        animate={{
          opacity: isLocked ? 1 : 0,
          y: isLocked ? 0 : 16,
          filter: isLocked ? 'blur(0px)' : 'blur(8px)',
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '4%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(74,144,217,0.2)',
          borderRadius: '16px',
          padding: '1rem 1.25rem',
          boxShadow: '0 16px 40px rgba(27,58,107,0.10), inset 0 1px 0 rgba(255,255,255,1)',
          zIndex: 20,
          width: '80%',
          maxWidth: '280px',
          textAlign: 'left',
          pointerEvents: isLocked ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isLocked ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 300 }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue-electric)', flexShrink: 0 }}
          />
          <span style={{
            fontSize: '0.5625rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-ghost)',
          }}>
            Primary Archetype Identified
          </span>
        </div>
        <p style={{
          fontFamily: "'Clash Display', sans-serif",
          fontWeight: 600,
          fontSize: '1.125rem',
          color: 'var(--blue-deep)',
          lineHeight: 1.1,
          marginBottom: '5px',
        }}>
          The Sage
        </p>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.75rem',
          color: 'var(--text-body)',
          lineHeight: 1.55,
          margin: 0,
        }}>
          Deeply motivated by truth, wisdom, and understanding the core mechanics of how things work.
        </p>
      </motion.div>

    </div>
  )
}
