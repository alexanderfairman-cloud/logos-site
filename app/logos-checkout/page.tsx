import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Begin Your Logos — Checkout',
  description:
    'Complete your order to begin the Logos assessment and receive your full Personal Codex Report.',
}

const benefits = [
  {
    title: 'Understand your Keys to Fulfillment',
    body: 'Understand your deepest core motivators and sources of happiness so you can experience deep fulfillment.',
  },
  {
    title: "Discover and Transform your Sabotage Patterns",
    body: "Get insights into the exact patterns that prevent you from accessing your full happiness and success — and that cause the majority of friction in your personal relationships.",
  },
  {
    title: 'Map your Personal Genius',
    body: 'Understand the exact zone of genius you possess and leverage it for maximum impact in your professional career.',
  },
  {
    title: 'Complete Insights into your Character',
    body: 'Map your levels of all 70+ core character traits to get a complete picture of your strengths and weaknesses and zone of genius.',
  },
]

const deliverables = [
  {
    title: 'Full Logos Assessment',
    body: 'Walk through the most powerful personality instrument on earth to get a complete picture of your strengths, your zone of genius, and where you are holding yourself back.',
  },
  {
    title: 'Personal Codex Report',
    body: 'A 30+ page report detailing your exact strengths, your growth edges, your next best steps, and the path to your goals.',
  },
]

const trust = [
  'Used by coaches and leaders on over 4 continents',
  'No two profiles are alike',
  '100% Secure and Safe Payments',
]

export default function IndividualCheckoutPage() {
  return (
    <>
      <NavPill />
      <main
        style={{
          minHeight: '100dvh',
          background: 'var(--bg-ground)',
          paddingTop: 'calc(3rem + 80px)',
          paddingBottom: 'var(--space-3xl)',
        }}
      >
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            {/* Heading */}
            <div style={{ textAlign: 'center', maxWidth: 600, marginInline: 'auto' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                Begin Your Logos
              </p>
              <h1 className="display-md">Your Journey of Self Discovery Happens Here.</h1>
              <p
                className="body-lg"
                style={{ marginTop: '1rem', color: 'var(--text-muted)' }}
              >
                The Logos Assessment will empower you to understand yourself at a depth most people never reach.
              </p>
            </div>

            {/* Two-column layout: benefits + order card */}
            <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '2.5rem', alignItems: 'start' }}>

              {/* Left — Benefits + Deliverables */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Benefits */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color: 'var(--blue-electric)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    The Logos Assessment will empower you to:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {benefits.map((b, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '9999px',
                            background: 'var(--blue-electric)',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '0.15rem',
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: '0.9375rem',
                              color: 'var(--blue-deep)',
                              marginBottom: '0.25rem',
                            }}
                          >
                            {b.title}
                          </p>
                          <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{b.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
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
                      padding: '1.5rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
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
                        marginBottom: '1rem',
                      }}
                    >
                      When you purchase you will receive:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {deliverables.map((d, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '9999px',
                              background: 'var(--blue-mid)',
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: '0.2rem',
                            }}
                          >
                            <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                color: 'var(--blue-deep)',
                                marginBottom: '0.2rem',
                              }}
                            >
                              {d.title}
                            </p>
                            <p className="body-sm" style={{ color: 'var(--text-muted)' }}>{d.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div
                      style={{
                        marginTop: '1.25rem',
                        paddingTop: '1.25rem',
                        borderTop: '1px solid var(--border-hairline)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase' as const,
                          color: 'var(--blue-deep)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Our promise to you
                      </p>
                      <p className="body-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>
                        If you complete your assessment and read your report — and you don&rsquo;t feel this has clarified your zone of genius and given you accurate feedback on your next level of personal growth — we will refund you your money within 72 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '6px',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--bg-surface)',
                      borderRadius: 'calc(var(--radius-xl) - 6px)',
                      padding: '1.5rem 1.75rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.875rem',
                    }}
                  >
                    <p
                      className="body-md"
                      style={{ fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.65 }}
                    >
                      &ldquo;I believe that I now have a view of what is possible in my life,
                      understand my true mission better, and have the questions and guidance I need
                      to see that vision fully executed.&rdquo;
                    </p>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'var(--blue-deep)',
                        }}
                      >
                        Bryan T.
                      </p>
                      <p className="body-sm">San Diego, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Sticky Order card */}
              <div style={{ position: 'sticky', top: '6rem' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '6px',
                    boxShadow: '0 24px 64px rgba(74,144,217,0.10), 0 4px 16px rgba(27,58,107,0.05)',
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
                    {/* Order line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '1rem',
                        borderBottom: '1px solid var(--border-hairline)',
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Clash Display', sans-serif",
                          fontWeight: 500,
                          fontSize: '1rem',
                          color: 'var(--blue-deep)',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.3,
                        }}
                      >
                        Logos Assessment &amp; Personal Codex Report
                      </p>
                      <p
                        style={{
                          fontFamily: "'Clash Display', sans-serif",
                          fontWeight: 700,
                          fontSize: '1.5rem',
                          color: 'var(--blue-electric)',
                          flexShrink: 0,
                          marginLeft: '1rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        $38
                      </p>
                    </div>

                    <CTAButton
                      href="https://buy.stripe.com/eVq00j48D9ofgf25ssfIs1c"
                      size="lg"
                      id="individual-checkout-cta"
                    >
                      Complete Your Order
                    </CTAButton>

                    <p
                      className="body-sm"
                      style={{ textAlign: 'center', color: 'var(--text-ghost)' }}
                    >
                      We respect your privacy and information. Questions?{' '}
                      <a
                        href="mailto:support@experiencelogos.com"
                        style={{ color: 'var(--blue-electric)' }}
                      >
                        support@experiencelogos.com
                      </a>
                    </p>

                    {/* Trust signals */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        paddingTop: '0.5rem',
                        borderTop: '1px solid var(--border-hairline)',
                      }}
                    >
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
