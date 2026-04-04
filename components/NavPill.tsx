'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CTAButton from './CTAButton'

const navLinks = [
  { label: 'Individuals', href: '/for-leaders' },
  { label: 'Coaches', href: '/for-coaches' },
  { label: 'Teams', href: '/logos-teams' },
  { label: 'Science', href: '/science-overlal' },
]

const menuLinks = [
  { label: 'Individuals', href: '/for-leaders' },
  { label: 'Coaches', href: '/for-coaches' },
  { label: 'Teams', href: '/logos-teams' },
  { label: 'Science', href: '/science-overlal' },
  { label: 'Report', href: '/report' },
  { label: 'Privacy', href: '/logos-privacy' },
]

export default function NavPill() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const hideCheckoutCTA = pathname === '/session'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Floating pill wrapper — fixed, backdrop-blur safe */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-nav)' as any,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1.25rem',
          paddingInline: '1.25rem',
          pointerEvents: 'none',
        }}
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            background: scrolled
              ? 'rgba(253, 252, 250, 0.88)'
              : 'rgba(253, 252, 250, 0.72)',
            border: '1px solid rgba(27, 58, 107, 0.10)',
            borderRadius: '9999px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '0.375rem 0.375rem 0.375rem 1.5rem',
            boxShadow: scrolled
              ? '0 4px 24px rgba(27, 58, 107, 0.08), 0 1px 0 rgba(255,255,255,0.8) inset'
              : '0 2px 12px rgba(27, 58, 107, 0.05)',
            transition: 'box-shadow 0.5s var(--ease-spring), background 0.4s var(--ease-spring)',
            width: '100%',
            maxWidth: '900px',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo wordmark */}
          <Link
            href="/"
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image 
              src="/logos-icon.png"
              alt="Logos"
              width={32}
              height={32}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div
            style={{
              display: 'flex',
              gap: '0',
              alignItems: 'center',
            }}
            className="nav-desktop-links"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  transition: 'color 0.3s var(--ease-spring), background 0.3s var(--ease-spring)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--blue-deep)'
                  e.currentTarget.style.background = 'rgba(27,58,107,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {!hideCheckoutCTA && (
              <div className="nav-cta-desktop">
                <CTAButton href="/logos-checkout" size="sm">Begin Your Logos</CTAButton>
              </div>
            )}

            {/* Hamburger button — mobile only */}
            <button
              id="nav-hamburger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
              className="nav-hamburger"
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                background: open ? 'var(--blue-pale)' : 'transparent',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                flexShrink: 0,
                transition: 'background 0.3s var(--ease-spring)',
                position: 'relative',
              }}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'block',
                  width: '14px',
                  height: '1.5px',
                  background: 'var(--blue-deep)',
                  borderRadius: '9999px',
                  transformOrigin: 'center',
                  position: 'absolute',
                }}
              />
              <motion.span
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  display: 'block',
                  width: '14px',
                  height: '1.5px',
                  background: 'var(--blue-deep)',
                  borderRadius: '9999px',
                  transformOrigin: 'center',
                  position: 'absolute',
                  marginTop: open ? 0 : '10px',
                }}
              />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-overlay"
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 'calc(var(--z-nav) - 1)' as any,
              background: 'rgba(253, 252, 250, 0.94)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
            }}
          >
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    display: 'block',
                    padding: '0.5rem 2rem',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s var(--ease-spring)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue-electric)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.05 + menuLinks.length * 0.07 }}
              style={{ marginTop: '2rem' }}
            >
              <CTAButton href="/logos-checkout" size="lg" onClick={() => setOpen(false)}>
                Begin Your Logos
              </CTAButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-desktop-links { display: flex !important; }
          .nav-cta-desktop { display: block !important; }
        }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
