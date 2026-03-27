'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface CTAButtonProps {
  children: React.ReactNode
  href: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline'
  onClick?: () => void
  id?: string
}

export default function CTAButton({
  children,
  href,
  size = 'md',
  variant = 'primary',
  onClick,
  id,
}: CTAButtonProps) {
  const paddingMap = {
    sm: '0.5rem 1rem 0.5rem 1.25rem',
    md: '0.75rem 0.75rem 0.75rem 1.75rem',
    lg: '1rem 1rem 1rem 2rem',
  }

  const fontSizeMap = {
    sm: '0.8125rem',
    md: '0.9375rem',
    lg: '1.0625rem',
  }

  const iconSizeMap = {
    sm: '1.5rem',
    md: '2rem',
    lg: '2.25rem',
  }

  const isPrimary = variant === 'primary'

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      style={{ display: 'inline-flex' }}
    >
      <Link
        id={id}
        href={href}
        onClick={onClick}
        className="cta-button-inner"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: paddingMap[size],
          borderRadius: '9999px',
          background: isPrimary
            ? 'var(--blue-electric)'
            : 'transparent',
          border: isPrimary
            ? '1px solid transparent'
            : '1px solid var(--border-mid)',
          color: isPrimary ? '#FFFFFF' : 'var(--blue-deep)',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: fontSizeMap[size],
          letterSpacing: '-0.01em',
          textDecoration: 'none',
          boxShadow: isPrimary
            ? '0 2px 12px rgba(74, 144, 217, 0.28), inset 0 1px 0 rgba(255,255,255,0.2)'
            : 'none',
          transition: 'box-shadow 0.4s var(--ease-spring), background 0.4s var(--ease-spring)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span>{children}</span>

        {/* Button-in-Button trailing icon */}
        <motion.span
          className="cta-icon-wrap"
          whileHover={{ x: 2, y: -1, scale: 1.1 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          style={{
            width: iconSizeMap[size],
            height: iconSizeMap[size],
            minWidth: iconSizeMap[size],
            borderRadius: '9999px',
            background: isPrimary
              ? 'rgba(255, 255, 255, 0.2)'
              : 'rgba(27, 58, 107, 0.06)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
              stroke={isPrimary ? '#FFFFFF' : 'var(--blue-deep)'}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </Link>
    </motion.div>
  )
}
