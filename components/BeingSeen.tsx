'use client'

import { motion } from 'framer-motion'

export default function BeingSeen() {
  return (
    <section
      className="section"
      style={{ background: 'var(--bg-tinted)', overflow: 'hidden' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.75rem',
            maxWidth: '700px',
            marginInline: 'auto',
          }}
        >
          <p className="eyebrow">Being seen</p>

          <h2 className="display-md">
            How does it know?
          </h2>

          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: 'var(--text-muted)', maxWidth: '560px' }}
          >
            Logos reveals the motivations that have been driving your life,
            often without a name, and the patterns beneath the surface that
            can be harnessed to unlock more of your full potential.
          </motion.p>

          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: 'var(--text-body)', maxWidth: '560px' }}
          >
            We designed Logos to give you the experience of being deeply
            seen — so you can recognize your own potential and take the
            best next step in your life.
          </motion.p>
        </motion.div>

        {/* Decorative ring element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Iris / eye motif — concentric glass circles suggesting depth */}
          <div
            style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {[200, 150, 100, 60, 28].map((d, i) => (
              <div
                key={d}
                style={{
                  position: 'absolute',
                  width: d,
                  height: d,
                  borderRadius: '9999px',
                  border: `1px solid`,
                  borderColor:
                    i === 0
                      ? 'rgba(74,144,217,0.12)'
                      : i === 1
                      ? 'rgba(74,144,217,0.18)'
                      : i === 2
                      ? 'rgba(74,144,217,0.25)'
                      : i === 3
                      ? 'var(--blue-mid)'
                      : 'var(--blue-deep)',
                  background:
                    i === 4
                      ? 'var(--blue-deep)'
                      : 'transparent',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
