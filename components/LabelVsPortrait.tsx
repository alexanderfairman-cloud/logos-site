'use client'

import { motion } from 'framer-motion'

const MAX = 70

const assessments = [
  { name: 'Myers-Briggs (MBTI)', value: 4,  label: '4 traits',    isLogos: false },
  { name: 'DISC',                value: 4,  label: '4 traits',    isLogos: false },
  { name: 'Big Five (OCEAN)',    value: 5,  label: '5 traits',    isLogos: false },
  { name: 'Enneagram',           value: 9,  label: '9 traits',    isLogos: false },
  { name: 'StrengthsFinder',     value: 34, label: '34 themes',   isLogos: false },
  { name: 'Logos',               value: 70, label: '70+ traits',  isLogos: true  },
]

function TraitBar({
  value,
  label,
  isLogos,
  delay,
}: {
  value: number
  label: string
  isLogos: boolean
  delay: number
}) {
  const pct = (value / MAX) * 100

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1, minWidth: 0 }}>
      {/* Track */}
      <div
        style={{
          flex: 1,
          height: isLogos ? 10 : 7,
          borderRadius: 9999,
          background: 'var(--border-hairline)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fill */}
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: isLogos ? 1.1 : 0.7,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 9999,
            background: isLogos
              ? 'linear-gradient(90deg, var(--blue-mid) 0%, var(--blue-electric) 100%)'
              : 'rgba(27, 58, 107, 0.22)',
            boxShadow: isLogos ? '0 0 12px rgba(74,144,217,0.35)' : 'none',
          }}
        />
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: isLogos ? '0.9375rem' : '0.8125rem',
          fontWeight: isLogos ? 700 : 400,
          color: isLogos ? 'var(--blue-electric)' : 'var(--text-ghost)',
          whiteSpace: 'nowrap',
          minWidth: '6.5ch',
          textAlign: 'right',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function LabelVsPortrait() {
  return (
    <section
      className="section"
      style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="label-grid"
        >
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            <p className="eyebrow">70+ traits measured</p>

            <h2 className="display-md">
              Logos is designed for depth.
            </h2>

            <p className="body-lg">
              Other assessments were never designed to reveal the complexity of
              who you really are. Logos measures over 70 distinct traits across
              every dimension of your personality, and no two profiles are alike.
            </p>
          </motion.div>

          {/* Right — animated bar chart card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="shell">
              <div className="core" style={{ padding: 0 }}>

                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid var(--border-hairline)',
                  }}
                >
                  {['Assessment', 'Scope'].map((h) => (
                    <span
                      key={h}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--text-ghost)',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Rows */}
                {assessments.map((row, i) => (
                  <motion.div
                    key={row.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: row.isLogos ? '1.125rem 1.5rem' : '0.875rem 1.5rem',
                      borderBottom:
                        i < assessments.length - 1
                          ? '1px solid var(--border-hairline)'
                          : 'none',
                      background: row.isLogos ? 'var(--blue-pale)' : 'transparent',
                    }}
                  >
                    {/* Name */}
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: row.isLogos ? '1rem' : '0.9375rem',
                        fontWeight: row.isLogos ? 700 : 400,
                        color: row.isLogos ? 'var(--blue-deep)' : 'var(--text-body)',
                        minWidth: '10ch',
                        flexShrink: 0,
                      }}
                    >
                      {row.name}
                    </span>

                    {/* Bar */}
                    <TraitBar
                      value={row.value}
                      label={row.label}
                      isLogos={row.isLogos}
                      delay={0.3 + i * 0.07}
                    />
                  </motion.div>
                ))}

                {/* Footer note */}
                <p
                  style={{
                    padding: '0.875rem 1.5rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-ghost)',
                    fontStyle: 'italic',
                    borderTop: '1px solid var(--border-hairline)',
                  }}
                >
                  Because that&rsquo;s closer to how many dimensions it actually takes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .label-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
