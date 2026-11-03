import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Welcome to Logos — Begin Your Assessment',
  description:
    'Congratulations and welcome to Logos. Begin the most powerful personality assessment on earth.',
}

export default function BeginPortalPage() {
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
        <div className="container" style={{ maxWidth: 580, textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2.25rem',
            }}
          >
            {/* Glow ornament */}
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '9999px',
                background: 'var(--blue-pale)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-glass)',
                boxShadow: '0 0 50px var(--blue-glow)',
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '9999px',
                  background: 'var(--blue-electric)',
                  boxShadow: '0 0 20px rgba(74,144,217,0.7)',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                Know Thyself
              </p>
              <h1 className="display-md">Congratulations, and welcome to Logos.</h1>

              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                You are about to receive three things: the most precise and powerful
                personality assessment on earth, a 60-minute one-on-one Clarity Creation
                Session with our team to understand your results and map the shortest path to
                your goals, and a 30+ page Personal Codex Report detailing the most valuable
                insights into your character.
              </p>

              <p className="body-md" style={{ color: 'var(--text-ghost)' }}>
                Begin your assessment below. When you finish, you will be invited to book your
                call with our team to reveal your results.
              </p>
            </div>

            <CTAButton
              href="https://welcometologos.com/report"
              size="lg"
              id="begin-portal-cta"
            >
              Begin the Logos
            </CTAButton>

            <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
              Questions? Contact us at{' '}
              <a
                href="mailto:support@welcometologos.com"
                style={{ color: 'var(--blue-electric)' }}
              >
                support@welcometologos.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
