import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Begin Your Logos Report — Checkout',
  description: 'Complete your order to receive the Logos Personal Codex Report.',
}

const reveals = [
  'Your three core archetypes and what they mean for your fulfillment and purpose',
  'Your Enneagram type and the specific ego patterns shaping your decisions',
  'Your complete trait profile across 70+ dimensions, including your highest strengths and your most important growth edges',
  'Your zone of genius — the unique combination of traits that generates your greatest natural impact',
  'Your attachment style and how it shapes your closest relationships',
  'AI powered custom coaching to help you reach your goals faster',
  'A specific, actionable growth roadmap',
]

const trust = [
  'Used by coaches and leaders on over 4 continents',
  'No two profiles are alike',
  'Instant download upon completion',
]

export default function ReportCheckoutPage() {
  return (
    <>
      <NavPill />
      <main
        style={{
          minHeight: '100dvh',
          background: 'var(--bg-ground)',
          display: 'flex',
          alignItems: 'flex-start',
          paddingTop: 'calc(3rem + 80px)',
          paddingBottom: 'var(--space-2xl)',
        }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                Checkout
              </p>
              <h1 className="display-md">Begin Your Logos.</h1>
              <p
                className="body-lg"
                style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}
              >
                Complete your order to start the Logos assessment and receive your full Personal
                Codex Report.
              </p>
            </div>

            {/* What your report reveals */}
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
                  padding: '2rem',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--blue-mid)',
                  }}
                >
                  What your report reveals
                </p>
                {reveals.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '9999px',
                        background: 'var(--blue-electric)',
                        flexShrink: 0,
                        marginTop: '0.5rem',
                      }}
                    />
                    <p className="body-sm">{item}</p>
                  </div>
                ))}

                <div style={{ height: '1px', background: 'var(--border-hairline)' }} />

                {/* Order summary */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: 'var(--blue-deep)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Your Personal Codex Report
                  </p>
                  <p
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      color: 'var(--blue-deep)',
                    }}
                  >
                    $38
                  </p>
                </div>

                <CTAButton
                  href="https://buy.stripe.com/eVq00j48D9ofgf25ssfIs1c"
                  size="lg"
                  id="report-checkout-cta"
                >
                  Complete Your Order
                </CTAButton>

                <p
                  className="body-sm"
                  style={{ textAlign: 'center', color: 'var(--text-ghost)' }}
                >
                  Secure checkout. Questions?{' '}
                  <a
                    href="mailto:support@experiencelogos.com"
                    style={{ color: 'var(--blue-electric)' }}
                  >
                    support@experiencelogos.com
                  </a>
                </p>
              </div>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {trust.map((t, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '9999px',
                      background: 'var(--blue-mid)',
                      flexShrink: 0,
                    }}
                  />
                  <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
