import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

export const metadata = {
  title: 'Logos Wealth Report — Your Relationship with Money',
  description: 'The Logos Wealth Report reveals the personality traits, ego patterns, and core archetypes that shape the way you earn, spend, save, and grow wealth.',
}

const reveals = [
  'The specific ego patterns driving your financial decisions beneath your awareness',
  'The core archetypes that shape what you believe you deserve and what you are willing to pursue',
  'The traits that are your greatest financial assets and the ones creating your greatest friction',
  'A clear, specific roadmap for shifting your financial behavior from the inside out',
]

export default function WealthReportPage() {
  return (
    <>
      <NavPill />
      <main style={{ background: 'var(--bg-ground)', paddingTop: 'calc(5rem + 80px)', paddingBottom: 'var(--space-3xl)' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Accent stripe — gold-blue iridescence */}
            <div style={{ width: 48, height: 4, borderRadius: '9999px', background: 'linear-gradient(90deg, #1B3A6B, #4A90D9, #C8DCFF)', opacity: 0.7 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="eyebrow">Wealth Report</p>
              <h1 className="display-xl">Your Relationship with Money Is a Mirror of Your Inner Architecture.</h1>
              <p className="body-lg">
                The Logos Wealth Report reveals the specific personality traits, ego patterns, and core archetypes that shape the way you earn, spend, save, and grow wealth. Understanding this architecture is the first step to changing it.
              </p>
            </div>

            {/* Why your patterns feel hard to change */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p className="eyebrow">Why your financial patterns feel so hard to change</p>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Your money behavior is not a habit. It is a structure. The way you relate to money was shaped by the same ego patterns and core archetypes that shape everything else about you. Logos maps that structure precisely, revealing whether your financial patterns are an expression of your strengths or a limitation of your shadows.
              </p>
            </div>

            {/* Reveals card */}
            <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
              <div style={{ background: 'var(--bg-surface)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '2.5rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--blue-electric)' }}>
                  What the Wealth Report reveals
                </p>
                {reveals.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '9999px', background: 'var(--blue-electric)', flexShrink: 0, marginTop: '0.55rem' }} />
                    <p className="body-md">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <CTAButton href="/logos-checkoutqjt4p1sc" size="lg" id="wealth-cta">
                Get Your Logos Wealth Report — $38
              </CTAButton>
              <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>Your report will be ready within 48 hours of completing the assessment.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
