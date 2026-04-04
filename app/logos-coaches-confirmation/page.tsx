import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Congratulations — Welcome to Logos Training',
  description:
    'You are registered. Complete your Logos assessment and add the training to your calendar.',
}

export default function CoachesConfirmationPage() {
  return (
    <>
      <NavPill />
      <main
        style={{
          minHeight: '100dvh',
          background: 'var(--bg-ground)',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'calc(3rem + 80px)',
          paddingBottom: 'var(--space-2xl)',
        }}
      >
        <div className="container" style={{ maxWidth: 580 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h1 className="display-md">Congratulations, and welcome to Logos.</h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                You have two steps to complete before the training.
              </p>
            </div>

            {/* Step 1 */}
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
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '9999px',
                      background: 'var(--blue-pale)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'var(--blue-electric)',
                    }}
                  >
                    1
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.0625rem',
                        color: 'var(--blue-deep)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Complete your Logos assessment now.
                    </p>
                    <p className="body-sm">
                      Your report will be emailed to you before the workshop so you arrive
                      ready to dive deep.
                    </p>
                  </div>
                </div>
                <CTAButton
                  href="https://welcometologos.com/session"
                  size="md"
                  id="coaches-confirm-take-logos"
                >
                  Take the Logos Here
                </CTAButton>
              </div>
            </div>

            {/* Step 2 */}
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
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '9999px',
                      background: 'var(--blue-pale)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'var(--blue-electric)',
                    }}
                  >
                    2
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.0625rem',
                        color: 'var(--blue-deep)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Add the training to your calendar.
                    </p>
                    <p className="body-sm">So you do not miss it.</p>
                  </div>
                </div>
                <CTAButton
                  href="#calendar"
                  size="md"
                  id="coaches-confirm-calendar"
                  variant="outline"
                >
                  Add to Your Calendar
                </CTAButton>
              </div>
            </div>

            <p
              className="body-sm"
              style={{ color: 'var(--text-ghost)', textAlign: 'center' }}
            >
              Questions? Contact us at{' '}
              <a
                href="mailto:support@experiencelogos.com"
                style={{ color: 'var(--blue-electric)' }}
              >
                support@experiencelogos.com
              </a>
            </p>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                color: 'var(--blue-mid)',
                textAlign: 'center',
              }}
            >
              Know Thyself
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
