"use client"

import Image from 'next/image'
import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion"

function ChaoticWord({
  word,
  startX,
  startY,
  scrollYProgress,
  index
}: {
  word: string
  startX: number
  startY: number
  scrollYProgress: MotionValue<number>
  index: number
}) {
  // We perfectly parallel this array structure with the Clarity1 headline (0.05 to 0.20)
  const x = useTransform(scrollYProgress, [0.05, 0.20], [`${startX}vw`, "0vw"])
  const y = useTransform(scrollYProgress, [0.05, 0.20], [`${startY}vh`, "0vh"])
  const filter = useTransform(scrollYProgress, [0.05, 0.20], ["blur(0px)", "blur(8px)"])
  // Fade in at the start line (0 to 0.05), then completely evaporate organically alongside the headline bloom (0.05 to 0.20)
  const opacity = useTransform(scrollYProgress, [0.0, 0.05, 0.20], [0, 0.35, 0])
  const scale = useTransform(scrollYProgress, [0.05, 0.20], [1, 0.5])
  const rotate = useTransform(scrollYProgress, [0.05, 0.20], [`${(index % 4) * 15 - 20}deg`, "0deg"])

  return (
    <motion.span
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        translateX: '-50%', translateY: '-50%',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--blue-deep)', // Control the opacity directly with framed arrays, not native color transparency
        fontSize: `${2.5 + (index % 3)}rem`,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        x, y, filter, opacity, scale, rotate
      }}
    >
      {word}
    </motion.span>
  )
}

function PositiveWord({
  word,
  endX,
  endY,
  scrollYProgress,
  index
}: {
  word: string
  endX: number
  endY: number
  scrollYProgress: MotionValue<number>
  index: number
}) {
  // Explode outward exactly in sync with Clarity2 (0.70 to 0.85)
  const x = useTransform(scrollYProgress, [0.70, 0.85], ["0vw", `${endX}vw`])
  const y = useTransform(scrollYProgress, [0.70, 0.85], ["0vh", `${endY}vh`])
  const filter = useTransform(scrollYProgress, [0.70, 0.85], ["blur(1px)", "blur(4px)"])
  const opacity = useTransform(scrollYProgress, [0.65, 0.70, 0.85, 0.96, 0.99], [0, 0, 0.40, 0.40, 0])
  const scale = useTransform(scrollYProgress, [0.70, 0.85], [0.5, 0.9])
  const rotate = useTransform(scrollYProgress, [0.70, 0.85], ["0deg", `${(index % 4) * 12 - 18}deg`])

  return (
    <motion.span
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        translateX: '-50%', translateY: '-50%',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--blue-electric)', // A slightly more electric blue for the positive explosive words
        fontSize: `${2.2 + (index % 3)}rem`,
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        x, y, filter, opacity, scale, rotate
      }}
    >
      {word}
    </motion.span>
  )
}

export default function FogToClarity() {
  const containerRef = useRef<HTMLElement>(null)
  
  // Custom rock-solid scroll tracker that completely bypasses offset/hydration layout bugs
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const scrollableDistance = rect.height - window.innerHeight
      
      if (scrollableDistance <= 0) return
      
      const progress = -rect.top / scrollableDistance
      // Clamp strictly between 0 and 1
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

  // ── BACKGROUND IMAGES ──
  const bg2Opacity = useTransform(scrollYProgress, [0.70, 0.85, 0.96, 0.99], [0, 1.0, 1.0, 0])

  // ── THE EYEBROW: "Optimized for Coaching" ──
  // Stays anchored for the entire sequence, dissolving gracefully at the absolute end block
  const eyebrowOpacity = useTransform(scrollYProgress, [0.05, 0.20, 0.96, 0.99], [0, 1, 1, 0])

  // ── THE CLARITY 1: "Logos is the shortest path from where you are today..."
  // Synced precisely to fade in as the fog physically collapses inward. Fades back out early to create narrative distance.
  const clarity1Opacity = useTransform(scrollYProgress, [0.05, 0.20, 0.45, 0.55], [0, 1, 1, 0])
  const clarity1Blur = useTransform(scrollYProgress, [0.05, 0.20], ["blur(18px)", "blur(0px)"])
  const clarity1Scale = useTransform(scrollYProgress, [0.05, 0.20], [0.8, 1])
  const clarity1Y = useTransform(scrollYProgress, [0.05, 0.20], [40, 0])

  // ── THE CLARITY 2: "to where you want to go tomorrow."
  // Waits patiently in the void until 0.70 to dramatically bloom, entirely fading out at completion
  const clarity2Opacity = useTransform(scrollYProgress, [0.70, 0.85, 0.96, 0.99], [0, 1, 1, 0])
  const clarity2Blur = useTransform(scrollYProgress, [0.70, 0.85], ["blur(18px)", "blur(0px)"])
  const clarity2Scale = useTransform(scrollYProgress, [0.70, 0.85], [0.8, 1])
  const clarity2Y = useTransform(scrollYProgress, [0.70, 0.85], [40, 0])

  const chaoticData = [
    { text: "Burnout", startX: -38, startY: -35 },
    { text: "Plateau", startX: 35, startY: -42 },
    { text: "Overwhelm", startX: -42, startY: 25 },
    { text: "Friction", startX: 45, startY: 30 },
    { text: "What's Next?", startX: -18, startY: -45 },
    { text: "Complexity", startX: 15, startY: 48 },
    { text: "Doubt", startX: -35, startY: 40 },
    { text: "Exhaustion", startX: 25, startY: -18 },
    { text: "Misalignment", startX: 48, startY: 5 },
    { text: "Static", startX: -48, startY: -10 },
  ]

  const positiveData = [
    { text: "Purpose", endX: -35, endY: -30 },
    { text: "Alignment", endX: 30, endY: -38 },
    { text: "Clarity", endX: -38, endY: 20 },
    { text: "Vision", endX: 40, endY: 25 },
    { text: "Growth", endX: -15, endY: -40 },
    { text: "Flow", endX: 20, endY: 42 },
    { text: "Integration", endX: -30, endY: 35 },
    { text: "Trajectory", endX: 20, endY: -15 },
    { text: "Insight", endX: 42, endY: 8 },
    { text: "Momentum", endX: -42, endY: -15 },
  ]

  return (
    <section ref={containerRef} style={{ position: 'relative', zIndex: 20, height: '600vh', width: '100%', backgroundColor: 'var(--bg-ground)', color: '#111' }}>
      {/* Sticky container that stays fixed while scrolling through the section */}
      <div style={{ position: 'sticky', top: 0, left: 0, display: 'flex', height: '100dvh', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* Background 2: The Clear Path */}
        <motion.div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: bg2Opacity }}>
          <Image 
            src="/images/fog_clear_path.png"
            alt="A perfectly clear structural vector"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center', mixBlendMode: 'multiply' }}
          />
        </motion.div>
        
        {/* Foreground lighting bump */}
        <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.7), transparent 80%)' }} />

        {/* --- GLOBAL EYEBROW --- */}
        <motion.div 
          style={{
            position: 'absolute', top: '35%', left: '50%', translateX: '-50%', translateY: '-50%',
            zIndex: 40, opacity: eyebrowOpacity, pointerEvents: 'none'
          }}
        >
          <span style={{ 
            fontSize: '13px', fontWeight: 600, letterSpacing: '0.3em', 
            textTransform: 'uppercase', color: 'var(--text-muted)' 
          }}>
            Optimized for Coaching
          </span>
        </motion.div>

        {/* --- THE FOG LAYER (Phase 1) --- */}
        {chaoticData.map((data, i) => (
          <ChaoticWord 
            key={data.text} 
            word={data.text} 
            startX={data.startX} 
            startY={data.startY} 
            scrollYProgress={scrollYProgress} 
            index={i} 
          />
        ))}

        {/* --- THE RADIATION LAYER (Phase 2) --- */}
        {positiveData.map((data, i) => (
          <PositiveWord 
            key={data.text} 
            word={data.text} 
            endX={data.endX} 
            endY={data.endY} 
            scrollYProgress={scrollYProgress} 
            index={i} 
          />
        ))}

        {/* --- THE CLARITY LAYER 1 --- */}
        <motion.div 
          style={{
            position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%',
            zIndex: 30, display: 'flex', width: '100%', maxWidth: '820px', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem', textAlign: 'center',
            opacity: clarity1Opacity,
            filter: clarity1Blur,
            scale: clarity1Scale,
            y: clarity1Y,
            pointerEvents: 'none'
          }}
        >
          <h2 className="display-md" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
            Logos helps you go from<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--blue-deep)' }}>where you are today...</span>
          </h2>
        </motion.div>

        {/* --- THE CLARITY LAYER 2 --- */}
        <motion.div 
          style={{
            position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%',
            zIndex: 30, display: 'flex', width: '100%', maxWidth: '820px', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem', textAlign: 'center',
            opacity: clarity2Opacity,
            filter: clarity2Blur,
            scale: clarity2Scale,
            y: clarity2Y,
            pointerEvents: 'none'
          }}
        >
          <h2 className="display-md" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
            To where you want to<br/>
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--blue-deep)' }}>go tomorrow.</span>
          </h2>
        </motion.div>
        
      </div>
    </section>
  )
}
