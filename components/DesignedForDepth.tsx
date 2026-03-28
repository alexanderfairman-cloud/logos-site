"use client"

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export default function DesignedForDepth() {
  const containerRef = useRef<HTMLElement>(null)
  
  // A bulletproof custom scroll tracker that ignores Next.js ancestor overflow bugs
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const scrollableDistance = rect.height - window.innerHeight
      
      if (scrollableDistance <= 0) return
      
      // Calculate percentage scrolled from top to bottom
      const progress = -rect.top / scrollableDistance
      
      // Clamp strictly between 0 and 1
      scrollYProgress.set(Math.max(0, Math.min(1, progress)))
    }

    // Passive listener for silky smooth 60FPS updates avoiding React renders
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [scrollYProgress])

  // Fade IN State 1 as the section locks into place (0.0 to 0.15), hold until 0.40, then fade OUT (0.40 to 0.55)
  const state1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.40, 0.55], [0, 1, 1, 0])
  
  // Crossfade Zone: 55% to 75% fades in State 2.
  const state2Opacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  return (
    <section ref={containerRef} style={{ position: 'relative', width: '100%', height: '300vh', background: 'var(--bg-surface)', zIndex: 20 }}>
      {/* Sticky layout bounds */}
      <div style={{ position: 'sticky', top: 0, left: 0, width: '100%', height: '100dvh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        <div className="container" style={{ width: '100%', position: 'relative' }}>
          <div
            className="label-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'center',
            }}
          >
            
            {/* Left Column (Copy) */}
            <div style={{ position: 'relative', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
              
              {/* STATE 1 TEXT */}
              <motion.div 
                style={{ position: 'absolute', top: '50%', left: 0, right: 0, translateY: '-50%', opacity: state1Opacity, display: 'flex', flexDirection: 'column', gap: '1.75rem', pointerEvents: 'none' }}
              >
                <p className="eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, fontSize: '0.6875rem', color: 'var(--text-ghost)' }}>
                  Built for Complexity
                </p>
                <h2 className="display-md" style={{ fontFamily: 'serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#111111' }}>
                  Other assessments don't do you justice.
                </h2>
              </motion.div>

              {/* STATE 2 TEXT */}
              <motion.div 
                style={{ position: 'absolute', top: '50%', left: 0, right: 0, translateY: '-50%', opacity: state2Opacity, display: 'flex', flexDirection: 'column', gap: '1.75rem', pointerEvents: 'none' }}
              >
                <p className="eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, fontSize: '0.6875rem', color: 'var(--text-ghost)' }}>
                  Built for Complexity
                </p>
                <h2 className="display-md" style={{ fontFamily: 'serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#111111' }}>
                  Logos was designed for depth.
                </h2>
                <p className="body-lg" style={{ fontFamily: 'sans-serif', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6, color: '#555555' }}>
                  Logos measures over 70 distinct traits across every dimension of your personality, revealing the undeniable pattern of who you are. No two profiles are alike.
                </p>
              </motion.div>

            </div>

            {/* Right Column (Visualizer) */}
            <div className="shell" style={{ margin: '0 auto', width: '100%', maxWidth: '500px' }}>
              <div className="core" style={{ 
                padding: 0, position: 'relative', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '2rem',
                filter: 'invert(1) drop-shadow(0 10px 30px rgba(0,0,0,0.05))' 
              }}>
                {/* State 1: 4 Points */}
                <motion.div style={{ position: 'absolute', inset: -1, zIndex: 1, backgroundColor: '#ff8800', opacity: state1Opacity }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/4_points_constellation.png" alt="4 traits schematic" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                </motion.div>

                {/* State 2: 70 Points Face */}
                <motion.div style={{ position: 'absolute', inset: -1, zIndex: 2, backgroundColor: '#ff8800', opacity: state2Opacity }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/70_points_face.png" alt="70 traits complex face topology" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
        
      </div>

      <style>{`
        @media (max-width: 768px) {
          .label-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
