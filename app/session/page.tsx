import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Your Logos Revelation Call is Scheduled',
  description: 'Before your call, complete the Logos assessment below.',
}

export default function SessionPage() {
  return (
    <>
      <NavPill />
      <main style={{ minHeight: '100dvh', background: 'var(--bg-ground)', display: 'flex', alignItems: 'center', paddingTop: 'calc(3rem + 80px)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container" style={{ maxWidth: 580, textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Thread visual */}
            <svg viewBox="0 0 80 50" fill="none" style={{ width: 80 }}>
              <circle cx="18" cy="25" r="13" fill="var(--blue-pale)" stroke="rgba(74,144,217,0.3)" strokeWidth="1" />
              <circle cx="62" cy="25" r="13" fill="var(--blue-pale)" stroke="rgba(74,144,217,0.3)" strokeWidth="1" />
              <line x1="31" y1="25" x2="49" y2="25" stroke="url(#sessThread)" strokeWidth="1.2" />
              <defs>
                <linearGradient id="sessThread" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A90D9" />
                  <stop offset="100%" stopColor="#7B9FD4" />
                </linearGradient>
              </defs>
            </svg>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="eyebrow">Preparation</p>
              <h1 className="display-md">Your Logos Revelation Call is Scheduled.</h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Before your call, complete the Logos assessment below. Your coach will receive your results before your session and will guide you through what they reveal.
              </p>
              <p className="body-md" style={{ color: 'var(--text-ghost)' }}>
                Allow approximately 45 minutes to complete the assessment. Answer honestly — your coach is here to help you make sense of it, not to judge it.
              </p>
            </div>

            <CTAButton href="https://assessment.welcometologos.com" size="lg" id="session-cta">
              Begin My Assessment
            </CTAButton>

            <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
              If you need to reschedule your call, contact your coach directly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
