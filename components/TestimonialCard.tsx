'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  delay?: number
}

export default function TestimonialCard({
  quote,
  name,
  location,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      // Double-Bezel outer shell
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-xl)',
        padding: '6px',
      }}
    >
      {/* Double-Bezel inner core */}
      <div
        style={{
          background: 'var(--bg-surface)',
          borderRadius: 'calc(var(--radius-xl) - 6px)',
          padding: '2rem',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 1px 3px rgba(27,58,107,0.05)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {/* Stars */}
        <div style={{ display: 'flex', gap: '3px' }}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="var(--blue-electric)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 0.5L7.39 4.26L11.5 4.64L8.5 7.22L9.43 11.25L6 9.15L2.57 11.25L3.5 7.22L0.5 4.64L4.61 4.26L6 0.5Z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'var(--text-body)',
            flex: 1,
            margin: 0,
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--blue-deep)',
              marginBottom: '0.125rem',
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-ghost)',
            }}
          >
            {location}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
