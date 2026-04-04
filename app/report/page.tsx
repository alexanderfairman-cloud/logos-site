import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Begin Your Logos Assessment — Logos',
  description:
    'Your Personal Codex Report is ready. Complete the Logos assessment to receive your full 30+ page portrait.',
}

const reveals = [
  'Your three core archetypes and what they mean for your fulfillment and purpose',
  'Your Enneagram type and the specific ego patterns shaping your decisions',
  'Your complete trait profile across 70+ dimensions, including your highest strengths and your most important growth edges',
  'Your zone of genius — the unique combination of traits that generates your greatest natural impact',
  'Your attachment style and how it shapes your closest relationships',
  'A specific, actionable growth roadmap',
]

export default function ReportPage() {
  return (
    <>
      <NavPill />
      <main>
        <section
          style={{
            paddingTop: 'calc(5rem + 80px)',
            paddingBottom: 'var(--space-3xl)',
            background: 'var(--bg-ground)',
            minHeight: '100dvh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '5rem',
                alignItems: 'center',
              }}
              className="report-hero-grid"
            >
              {/* Copy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p className="eyebrow">The Report</p>
                <h1 className="display-xl">Your Personal Codex Report.</h1>
                <p className="body-lg">
                  A 30+ page portrait of your zone of genius, your growth edges,
                  your core values, and the most direct path to the life you want.
                </p>

                {/* Reveal list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--blue-electric)',
                    }}
                  >
                    What your report reveals
                  </p>
                  {reveals.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '9999px',
                          background: 'var(--blue-electric)',
                          flexShrink: 0,
                          marginTop: '0.55rem',
                        }}
                      />
                      <p className="body-md">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Steps */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '6px',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--bg-surface)',
                      borderRadius: 'calc(var(--radius-xl) - 6px)',
                      padding: '1.75rem 2rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--blue-mid)',
                      }}
                    >
                      How to begin
                    </p>
                    {[
                      { n: '01', t: 'Complete the Logos assessment.', b: 'Allow approximately 45 minutes.' },
                      { n: '02', t: 'Receive your full Personal Codex Report.', b: 'Available for instant download.' },
                    ].map((s) => (
                      <div key={s.n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <p
                          style={{
                            fontFamily: "'Clash Display', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            color: 'var(--blue-electric)',
                            opacity: 0.45,
                            letterSpacing: '-0.01em',
                            flexShrink: 0,
                            width: '2rem',
                          }}
                        >
                          {s.n}
                        </p>
                        <div>
                          <p className="body-md" style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{s.t}</p>
                          <p className="body-sm">{s.b}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <CTAButton href="https://su.vc/logosreport" size="lg" id="report-cta">
                    Begin Your Logos Assessment
                  </CTAButton>
                  <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
                    Built on 40+ peer-reviewed studies. No two profiles are alike.
                  </p>
                </div>
              </div>

              {/* Decorative report visual */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ReportMockup />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .report-hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  )
}

function ReportMockup() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '260px',
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-xl)',
        padding: '6px',
        boxShadow: '0 32px 80px rgba(74,144,217,0.12), 0 4px 16px rgba(27,58,107,0.06)',
      }}
    >
      <div
        style={{
          background: 'var(--bg-surface)',
          borderRadius: 'calc(var(--radius-xl) - 6px)',
          padding: '2rem 1.5rem',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.95)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 600,
              fontSize: '1.25rem',
              color: 'var(--blue-deep)',
              letterSpacing: '-0.02em',
            }}
          >
            Personal Codex
          </p>
          <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>Your complete portrait</p>
        </div>
        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-hairline)' }} />
        {/* Placeholder rings visual */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '1rem' }}>
          <div style={{ position: 'relative', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {[42, 30, 18].map((r, i) => (
              <div
                key={r}
                style={{
                  position: 'absolute',
                  width: r * 2,
                  height: r * 2,
                  borderRadius: '9999px',
                  border: `${i === 2 ? 2 : 1.2}px solid`,
                  borderColor: i === 0 ? 'var(--ring-outer)' : i === 1 ? 'var(--ring-mid)' : 'var(--ring-core)',
                }}
              />
            ))}
            <div style={{ width: 8, height: 8, borderRadius: '9999px', background: 'var(--blue-deep)' }} />
          </div>
        </div>
        {/* Content lines */}
        {[80, 60, 72, 50].map((w, i) => (
          <div
            key={i}
            style={{
              height: '6px',
              width: `${w}%`,
              background: i % 2 === 0 ? 'var(--border-hairline)' : 'var(--blue-pale)',
              borderRadius: '9999px',
            }}
          />
        ))}
      </div>
    </div>
  )
}
