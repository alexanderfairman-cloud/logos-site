'use client'

import { motion } from 'framer-motion'
import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
}

const positiveTraits = [
  'Transformational Leadership (extra weight)',
  'Big Five: Agreeableness',
  'Logos: Trust',
  'Logos: Dutifulness (Responsibility)',
  'Logos: Initiative',
  'Logos: Decisiveness (Confidence)',
  'Logos: Emotional Attunement',
  'Logos: Assertiveness',
  'Logos: Resilience',
]

const negativeTraits = [
  'Big Five: Neuroticism',
  'Dark Triad: Psychopathy',
]

const studies = [
  {
    trait: 'Transformational Leadership',
    citations: [
      'Leaders who provided feedback and set clear goals were rated higher on transformational leadership and perceived to be more effective. Ilies, R., Morgeson, F. P., & Nahrgang, J. D. (2009). The Leadership Quarterly, 20(3).',
    ],
  },
  {
    trait: 'Initiative',
    citations: [
      'Leaders who were proactive and took initiative were rated higher on transformational leadership and perceived to be more effective. Sosik, J. J., Kahai, S. S., & Piovoso, M. J. (2015). Journal of Leadership and Organizational Studies, 22(2).',
    ],
  },
  {
    trait: 'Trust',
    citations: [
      'Leaders high in the trust facet of agreeableness tend to be trusting, cooperative, and supportive of their team members. This fosters a positive and harmonious work environment and encourages team members to trust and rely on their leader. Bono, J. E., & Judge, T. A. (2003). Journal of Applied Psychology, 90(2).',
    ],
  },
  {
    trait: 'Decisiveness (Confidence)',
    citations: [
      'Leaders who demonstrated self-confidence and decisiveness were rated higher on transformational leadership and perceived to be more effective. Hmieleski, K. M., Cole, M. S., & Baron, R. A. (2015). Journal of Management, 41(6).',
    ],
  },
  {
    trait: 'Emotional Attunement',
    citations: [
      'Leaders who used inclusive language and showed empathy toward their followers were rated higher on transformational leadership and perceived to be more effective. Bono, J. E., Foldes, H. J., Vinson, G. T., & Muros, J. P. (2007). Journal of Applied Psychology, 92(5).',
    ],
  },
  {
    trait: 'Assertiveness',
    citations: [
      'Lower assertiveness leads to individual inability to stand for themselves in the face of increased organizational demands. Alarcon, G. (2011). Journal of Vocational Behavior, 79.',
    ],
  },
]

const testimonials = [
  { quote: 'Having the opportunity to be guided into seeing my highest self is a gift. I now have a view of what is possible in my life, understand my true mission better, and have the questions and guidance I need to see that vision fully executed.', name: 'Bryan T.', location: 'San Diego, CA' },
  { quote: 'Clear, concise, and helpful. In a realm where so many products involve a lot of time commitment, it is powerful to have such a quick and potent download to clarify one\'s path and make necessary adjustments.', name: 'Jordan B.', location: 'San Rafael, CA' },
  { quote: 'The experience has helped me to understand how I can step more fully into my power and truth. Thank you James and Jara — I appreciate you both and the Logos process immensely.', name: 'Saskia C.', location: 'Auckland, NZ' },
]

export default function PerceivedLeadershipPage() {
  return (
    <>
      <NavPill />
      <main>
        <section style={{ paddingTop: 'calc(5rem + 80px)', paddingBottom: 'var(--space-3xl)', background: 'var(--bg-ground)', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '360px', borderRadius: '9999px', background: 'radial-gradient(ellipse, rgba(74,144,217,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="container" style={{ maxWidth: 820 }}>
            <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="eyebrow">Science</p>
              <h1 className="display-xl">Perceived Leadership</h1>
              <p className="body-lg" style={{ maxWidth: 600 }}>How will your teams perceive you as a leader?</p>
              <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px', maxWidth: 720 }}>
                <div style={{ background: 'var(--bg-surface)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '1.75rem 2rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--blue-mid)' }}>Team Commentary</p>
                  <p className="body-md" style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>This score gives insights into how subordinates, colleagues, and other stakeholders will perceive your leadership. A key component involves both decisiveness and empathy in proper amounts, indicating that individuals perceive leaders to be most effective when they possess a balance between both.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="traits-grid">
              <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '9999px', background: 'var(--blue-electric)' }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'var(--blue-electric)' }}>Traits that positively impact this score</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
                  <div style={{ background: 'var(--bg-ground)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '1.5rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {positiveTraits.map((t, i) => (<div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}><div style={{ width: 5, height: 5, borderRadius: '9999px', background: 'var(--blue-electric)', flexShrink: 0, marginTop: '0.45rem' }} /><p className="body-sm">{t}</p></div>))}
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '9999px', background: '#C27B7B' }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#C27B7B' }}>Traits that negatively impact this score</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
                  <div style={{ background: 'var(--bg-ground)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '1.5rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {negativeTraits.map((t, i) => (<div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}><div style={{ width: 5, height: 5, borderRadius: '9999px', background: '#C27B7B', flexShrink: 0, marginTop: '0.45rem' }} /><p className="body-sm">{t}</p></div>))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div><p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Research</p><h2 className="display-md">Studies Referenced</h2></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {studies.map((s, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }} style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '0.9375rem', color: 'var(--blue-deep)', letterSpacing: '-0.01em' }}>{s.trait}</p>
                    {s.citations.map((c, j) => <p key={j} className="body-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}>{c}</p>)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}><p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The process</p><h2 className="display-md">How Logos works</h2></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[{ number: '01', title: 'Complete the Logos assessment.' }, { number: '02', title: 'Receive your Personal Codex Report — a 30-page report detailing your zone of genius, your ego structure, your strengths and weaknesses, and the shortest path to reach your aspirations.' }].map((s, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
                    <div style={{ background: 'var(--bg-ground)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '1.75rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 700, fontSize: '2rem', color: 'var(--blue-electric)', letterSpacing: '-0.04em', opacity: 0.4, flexShrink: 0 }}>{s.number}</p>
                      <p style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '1rem', color: 'var(--blue-deep)', letterSpacing: '-0.01em', lineHeight: 1.4, paddingTop: '0.5rem' }}>{s.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}><CTAButton href="/logos-auto-report-checkoutz2hb1fcn" size="lg" id="perceived-cta">Begin Your Logos — $38</CTAButton></div>
            </motion.div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container">
            <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p className="eyebrow">What people are saying</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="testimonials-grid">
              {testimonials.map((t, i) => (
                <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-xl)', padding: '6px' }}>
                  <div style={{ background: 'var(--bg-surface)', borderRadius: 'calc(var(--radius-xl) - 6px)', padding: '1.75rem', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                    <p className="body-md" style={{ fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.65 }}>&ldquo;{t.quote}&rdquo;</p>
                    <div><p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: '0.875rem', color: 'var(--blue-deep)' }}>{t.name}</p><p className="body-sm" style={{ color: 'var(--text-ghost)' }}>{t.location}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--bg-surface)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: 520 }}>
            <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
              <h2 className="display-md">Are you ready to experience clarity?</h2>
              <CTAButton href="/logos-auto-report-checkoutz2hb1fcn" size="lg" id="perceived-bottom-cta">Begin Your Logos</CTAButton>
            </motion.div>
          </div>
        </section>
      </main>
      <style>{`@media (max-width: 768px) { .traits-grid { grid-template-columns: 1fr !important; } .testimonials-grid { grid-template-columns: 1fr !important; } }`}</style>
      <Footer />
    </>
  )
}
