import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Welcome to Logos — Your Assessment Awaits',
  description: 'Congratulations and welcome to Logos. Your assessment is ready.',
}

export default function ReportConfirmationPage() {
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
        <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {/* Glow node */}
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '9999px',
                background: 'var(--blue-pale)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-glass)',
                boxShadow: '0 0 40px var(--blue-glow)',
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '9999px',
                  background: 'var(--blue-electric)',
                  boxShadow: '0 0 20px rgba(74,144,217,0.6)',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h1 className="display-md">Congratulations, and welcome to Logos.</h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                You are about to receive your complete Logos assessment and your full Personal
                Codex Report — a portrait of your zone of genius, your ego patterns, your core
                archetypes, and the most direct path to your goals.
              </p>
              <p className="body-md" style={{ color: 'var(--text-ghost)' }}>
                Click below to begin your assessment. Your report will be available for instant
                download on the final screen.
              </p>
            </div>

            <CTAButton
              href="https://s.pointerpro.com/logosreporting"
              size="lg"
              id="report-confirm-cta"
            >
              Begin Your Logos
            </CTAButton>

            <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
              Questions? Contact us at{' '}
              <a
                href="mailto:support@experiencelogos.com"
                style={{ color: 'var(--blue-electric)' }}
              >
                support@experiencelogos.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
