"use client"

import Image from 'next/image'
import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function FogToClarity() {
  const containerRef = useRef<HTMLElement>(null)

  // Rock-solid manual scroll tracker
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return
      const progress = -rect.top / scrollableDistance
      scrollYProgress.set(Math.max(0, Math.min(1, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [scrollYProgress])

  // ── HEADLINE 1: "where you are today" — active from 0.05 → 0.45 ──
  const h1Opacity  = useTransform(scrollYProgress, [0.05, 0.18, 0.44, 0.56], [0, 1, 1, 0])
  const h1Blur     = useTransform(scrollYProgress, [0.05, 0.18, 0.44, 0.56], ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'])
  const h1Scale    = useTransform(scrollYProgress, [0.05, 0.18], [0.88, 1])

  // ── BG 1: Hiker at base — fades in, then fades out ──
  const bg1Opacity = useTransform(scrollYProgress, [0.0, 0.12, 0.44, 0.56], [0, 0.5, 0.5, 0])

  // ── HEADLINE 2: "To where you want to go tomorrow" — active from 0.62 → end ──
  const h2Opacity  = useTransform(scrollYProgress, [0.60, 0.75], [0, 1])
  const h2Blur     = useTransform(scrollYProgress, [0.60, 0.75], ['blur(12px)', 'blur(0px)'])
  const h2Scale    = useTransform(scrollYProgress, [0.60, 0.75], [0.88, 1])

  // ── BG 2: Hiker at summit — fades in ──
  const bg2Opacity = useTransform(scrollYProgress, [0.55, 0.70], [0, 0.5])

  // ── EYEBROW: fades in with headline 1 ──
  const eyebrowOpacity = useTransform(scrollYProgress, [0.05, 0.20, 0.44, 0.56], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="fog-clarity-root"
      style={{ position: 'relative', zIndex: 20, height: '360vh', width: '100%', backgroundColor: 'var(--bg-ground)' }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky', top: 0, left: 0,
        height: '100dvh', width: '100%',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>

        {/* ── Background 1: Hiker at trail base (fades in/out) ── */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            opacity: bg1Opacity,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/images/hiker_ascending_2d.png"
            alt="Hiker approaching a geometric mountain"
            fill
            unoptimized
            style={{ objectFit: 'contain', objectPosition: 'right bottom' }}
            priority
          />
        </motion.div>

        {/* ── Background 2: Hiker at summit (fades in) ── */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            opacity: bg2Opacity,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/images/hiker_summit_2d.png"
            alt="Hiker triumphant at the summit of a geometric mountain"
            fill
            unoptimized
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </motion.div>

        {/* ── Headline 1 + Eyebrow ── */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            zIndex: 30,
            textAlign: 'center',
            width: '100%',
            maxWidth: '860px',
            padding: '0 2rem',
            opacity: h1Opacity,
            filter: h1Blur,
            scale: h1Scale,
            pointerEvents: 'none',
          }}
        >
          {/* Eyebrow */}
          <motion.p
            style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              marginBottom: '1.25rem',
              opacity: eyebrowOpacity,
            }}
          >
            Optimized for Coaching
          </motion.p>

          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            margin: 0,
            color: 'var(--blue-deep)',
          }}>
            Logos helps you go from<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>where you are today...</span>
          </h2>
        </motion.div>

        {/* ── Headline 2 ── */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            translateX: '-50%', translateY: '-50%',
            zIndex: 30,
            textAlign: 'center',
            width: '100%',
            maxWidth: '860px',
            padding: '0 2rem',
            opacity: h2Opacity,
            filter: h2Blur,
            scale: h2Scale,
            pointerEvents: 'none',
          }}
        >
          <h2 style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            margin: 0,
            color: 'var(--blue-deep)',
          }}>
            To where you want to<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>go tomorrow.</span>
          </h2>
        </motion.div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .fog-clarity-root {
            height: 200vh !important;
          }
        }
      `}</style>
    </section>
  )
}
