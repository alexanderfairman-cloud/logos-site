'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface RingDiagramProps {
  /** Animate rings in via scroll (true) or just display statically (false) */
  animated?: boolean
  /** Size in px of the outermost ring diameter */
  size?: number
  /** Show ring labels */
  showLabels?: boolean
}

export default function RingDiagram({
  animated = true,
  size = 480,
  showLabels = true,
}: RingDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })

  // Each ring expands and fades in sequentially
  const ring3Scale = useTransform(scrollYProgress, [0, 0.4], [0.3, 1])
  const ring3Opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])

  const ring2Scale = useTransform(scrollYProgress, [0.2, 0.6], [0.3, 1])
  const ring2Opacity = useTransform(scrollYProgress, [0.2, 0.55], [0, 1])

  const ring1Scale = useTransform(scrollYProgress, [0.45, 0.85], [0.3, 1])
  const ring1Opacity = useTransform(scrollYProgress, [0.45, 0.8], [0, 1])

  // Alignment glow — appears last
  const glowOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1])
  const glowScale = useTransform(scrollYProgress, [0.75, 1], [0.8, 1.1])

  const ringOuter = size
  const ringMid = size * 0.66
  const ringCore = size * 0.36

  const ringStyle = (diameter: number, color: string, borderWidth = 2): React.CSSProperties => ({
    position: 'absolute',
    width: diameter,
    height: diameter,
    borderRadius: '9999px',
    border: `${borderWidth}px solid ${color}`,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  })

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: size,
        height: size,
        maxWidth: '100%',
        margin: '0 auto',
      }}
      aria-label="Three-layer model: Core, Middle (Ego), and Outer (Traits)"
    >
      {/* Outer Ring — Ring 3: Traits (frosted white-blue with electric edges) */}
      <motion.div
        style={{
          ...ringStyle(ringOuter, 'var(--blue-electric)', 1.5),
          scale: animated ? ring3Scale : 1,
          opacity: animated ? ring3Opacity : 1,
          background: 'rgba(74, 144, 217, 0.04)',
        }}
      />

      {/* Mid Ring — Ring 2: Ego Patterns (cornflower/periwinkle) */}
      <motion.div
        style={{
          ...ringStyle(ringMid, 'var(--blue-mid)', 1.5),
          scale: animated ? ring2Scale : 1,
          opacity: animated ? ring2Opacity : 1,
          background: 'rgba(123, 159, 212, 0.06)',
        }}
      />

      {/* Core Ring — Ring 1: Archetypes (deep sapphire — still, luminous) */}
      <motion.div
        style={{
          ...ringStyle(ringCore, 'var(--blue-deep)', 2),
          scale: animated ? ring1Scale : 1,
          opacity: animated ? ring1Opacity : 1,
          background: 'rgba(27, 58, 107, 0.08)',
        }}
      />

      {/* Alignment glow — the convergence moment */}
      <motion.div
        style={{
          position: 'absolute',
          width: ringCore * 0.6,
          height: ringCore * 0.6,
          borderRadius: '9999px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(74,144,217,0.6) 0%, rgba(123,159,212,0.3) 50%, transparent 100%)',
          scale: animated ? glowScale : 1,
          opacity: animated ? glowOpacity : 0.7,
          filter: 'blur(1px)',
        }}
      />

      {/* Labels */}
      {showLabels && (
        <>
          {/* Ring 1 label */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none',
              opacity: animated ? ring1Opacity : 1,
            }}
          >
            <p style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: 'var(--blue-deep)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              The Core
            </p>
          </motion.div>

          {/* Ring 2 label — positioned at top of middle ring */}
          <motion.div
            style={{
              position: 'absolute',
              top: `calc(50% - ${ringMid / 2}px - 1.5rem)`,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              pointerEvents: 'none',
              opacity: animated ? ring2Opacity : 1,
            }}
          >
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 500,
              color: 'var(--blue-mid)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Ego Patterns
            </p>
          </motion.div>

          {/* Ring 3 label — positioned at top of outer ring */}
          <motion.div
            style={{
              position: 'absolute',
              top: `calc(50% - ${ringOuter / 2}px - 1.5rem)`,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              pointerEvents: 'none',
              opacity: animated ? ring3Opacity : 1,
            }}
          >
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 500,
              color: 'var(--blue-electric)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Traits &amp; Strengths
            </p>
          </motion.div>
        </>
      )}
    </div>
  )
}
