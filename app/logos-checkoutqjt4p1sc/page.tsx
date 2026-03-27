import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Begin Your Logos — Checkout',
  description: 'Complete your order to begin the Logos assessment.',
}

export default function GeneralCheckoutPage() {
  return (
    <>
      <NavPill />
      <main style={{ minHeight: '100dvh', background: 'var(--bg-ground)', display: 'flex', alignItems: 'center', paddingTop: 'calc(3rem + 80px)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Checkout</p>
              <h1 className="display-md">Begin Your Logos.</h1>
              <p className="body-lg" style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}>
                Complete your order to start the Logos assessment.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
              <div style={{ background: 'var(--bg-surface)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '2rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 500, fontSize: '1.0625rem', color: 'var(--blue-deep)', letterSpacing: '-0.01em' }}>
                    Logos Assessment &amp; Report
                  </p>
                  <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '1.25rem', color: 'var(--blue-deep)' }}>$38</p>
                </div>
                <div style={{ height: '1px', background: 'var(--border-hairline)' }} />
                <CTAButton href="https://buy.stripe.com/logos" size="lg" id="general-checkout-cta">
                  Complete Your Order
                </CTAButton>
                <p className="body-sm" style={{ textAlign: 'center', color: 'var(--text-ghost)' }}>
                  You will receive your report within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
