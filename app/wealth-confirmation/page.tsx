import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Your Wealth Report Begins Here — Logos',
  description: 'Complete the Logos assessment to generate your Wealth Report.',
}

export default function WealthConfirmationPage() {
  return (
    <>
      <NavPill />
      <main style={{ minHeight: '100dvh', background: 'var(--bg-ground)', display: 'flex', alignItems: 'center', paddingTop: 'calc(3rem + 80px)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container" style={{ maxWidth: 520, textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ width: 52, height: 52, borderRadius: '9999px', background: 'linear-gradient(135deg, var(--blue-pale), rgba(200,220,255,0.5))', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-glass)', boxShadow: '0 0 40px rgba(74,144,217,0.18)' }}>
              <div style={{ width: 16, height: 16, borderRadius: '9999px', background: 'var(--blue-electric)', boxShadow: '0 0 20px rgba(74,144,217,0.6)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h1 className="display-md">Your Wealth Report begins here.</h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Complete the Logos assessment below and your Wealth Report will be generated from your results. Allow approximately 45 minutes and answer as honestly as you can.
              </p>
            </div>

            <CTAButton href="https://assessment.experiencelogos.com" size="lg" id="wealth-confirm-cta">
              Begin My Assessment
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
