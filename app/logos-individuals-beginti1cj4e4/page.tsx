import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Your Order is Confirmed — Logos',
  description: 'Welcome to Logos. Your assessment is ready whenever you are.',
}

export default function IndividualConfirmationPage() {
  return (
    <>
      <NavPill />
      <main style={{ minHeight: '100dvh', background: 'var(--bg-ground)', display: 'flex', alignItems: 'center', paddingTop: 'calc(3rem + 80px)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Confirmation glow */}
            <div style={{ width: 56, height: 56, borderRadius: '9999px', background: 'var(--blue-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)', boxShadow: '0 0 40px var(--blue-glow)' }}>
              <div style={{ width: 18, height: 18, borderRadius: '9999px', background: 'var(--blue-electric)', boxShadow: '0 0 24px rgba(74,144,217,0.6)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="eyebrow">Order confirmed</p>
              <h1 className="display-md">Your order is confirmed.</h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Welcome to Logos. Your assessment is ready whenever you are.
              </p>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Before you begin, find 45 uninterrupted minutes. The depth of your results depends on the honesty of your answers.
              </p>
            </div>

            <CTAButton href="https://assessment.welcometologos.com" size="lg" id="individual-confirm-cta">
              Start My Logos Now
            </CTAButton>

            <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
              Questions? Contact us at{' '}
              <a href="mailto:support@welcometologos.com" style={{ color: 'var(--blue-electric)' }}>
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
