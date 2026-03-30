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
  'Big Five: Conscientiousness',
  'Big Five: Agreeableness',
  'Logos: Orderliness (Systematic)',
  'Logos: Initiative',
  'Logos: Dutifulness (Responsibility)',
  'Logos: Achievement Striving (Ambitious)',
  'Attachment: Secure Attachment Style',
  'Logos: Deliberative (Discernment)',
  'Enneagram: Type 1, Type 3, Type 8',
  'Logos: Decisiveness (Confidence)',
  'Logos: Emotional Attunement',
  'Logos: Assertiveness',
  'Logos: Resilience',
  'Big Five: Extraversion',
  'Logos: Genuine',
  'Logos: Humility',
  'Big Five: Openness to Experience',
  'Logos: Imaginative',
]

const negativeTraits = [
  'Big Five: Neuroticism',
  'Dark Triad: Psychopathy',
]

const studies = [
  {
    trait: 'Transformational Leadership',
    citations: [
      '"The results of the study suggest that transformational leadership positively and completely predicts job performance." Faiza Manzoor et al. Sustainability (2019).',
      '"Leadership effectiveness, as measured by the achievement of organizational outcomes, is a direct function of a leader\'s transformational behaviors, and is an indirect function of individual differences that work through transformational behaviors. A negative effect of neuroticism on leadership effectiveness was also observed." Flávia Cavazotte et al. Leadership Quarterly, 23 (2012).',
    ],
  },
  {
    trait: 'Initiative',
    citations: [
      'Leaders who were proactive and took initiative were rated higher on transformational leadership and were perceived to be more effective. Sosik, J. J., Kahai, S. S., & Piovoso, M. J. (2015). Journal of Leadership and Organizational Studies, 22(2).',
    ],
  },
  {
    trait: 'Responsibility',
    citations: [
      'Dutiful individuals emphasize fulfilling obligations, being responsible, and following rules. Leaders high in dutifulness are more likely to be dependable and committed to meeting their leadership responsibilities. Hogan, R., & Hogan, J. (1993). Hogan Personality Inventory Manual.',
    ],
  },
  {
    trait: 'Secure Attachment',
    citations: [
      'Secure individuals tend to be nominated as leaders, and leaders\' attachment security is associated with pro-social and follower-empowering leadership styles, leadership effectiveness, and positive outcomes for followers. O. Mayseless et al. Journal of Social and Personal Relationships (2010).',
    ],
  },
  {
    trait: 'Enneagram (Type 3, Type 8, Type 1)',
    citations: [
      'Certain Enneagram types — Type 3 (Achiever), Type 8 (Challenger), and Type 1 (Perfectionist) — were associated with higher levels of job performance. Individuals with these types were more likely to be rated as effective by their superiors and peers. Wong, Chi-Sum and K. S. Law. Leadership Quarterly 13 (2002).',
    ],
  },
  {
    trait: 'Decisiveness (Confidence)',
    citations: [
      'Leaders who demonstrated self-confidence and decisiveness were rated higher on transformational leadership and were perceived to be more effective. Hmieleski, K. M., Cole, M. S., & Baron, R. A. (2015). Journal of Management, 41(6).',
    ],
  },
  {
    trait: 'Assertiveness',
    citations: [
      'Lower assertiveness leads to individual inability to stand for themselves in the face of increased organizational demands. Alarcon, G. (2011). Journal of Vocational Behavior, 79.',
    ],
  },
  {
    trait: 'Humility',
    citations: [
      'Honesty-humility from the HEXACO model is particularly relevant for predicting counterproductive work behaviors and integrity-related outcomes. Ashton, M. C., & Lee, K. (2007). Personality and Social Psychology Review, 11(2).',
    ],
  },
  {
    trait: 'Genuine',
    citations: [
      'Leaders who were skilled at building relationships and networking were rated higher on transformational leadership and were perceived to be more effective. Sosik, J. J., Jung, D. I., & Dinger, S. L. (2013).',
    ],
  },
  {
    trait: 'Big Five: Openness to Experience',
    citations: [
      'A positive correlation exists between Openness to Experience and various indicators of creative achievement, including artistic and scientific creativity. Feist, G. J. (1998). Personality and Social Psychology Review, 2(4).',
    ],
  },
  {
    trait: 'Big Five: Conscientiousness',
    citations: [
      'Executives who scored high in conscientiousness tended to have better job performance, higher job satisfaction, and better overall leadership effectiveness. Barrick, M. R., & Mount, M. K. (1991). Journal of Applied Psychology, 76(1).',
    ],
  },
  {
    trait: 'Orderliness (Systematic)',
    citations: [
      'Leaders high in orderliness tend to create and maintain organized work environments, promoting efficiency and productivity. Judge, T. A., Bono, J. E., & Locke, E. A. (2000). Journal of Applied Psychology, 85(2).',
    ],
  },
  {
    trait: 'Big Five: Agreeableness',
    citations: [
      'Leaders low in agreeableness were associated with lower performance ratings and less effective leadership behaviors. Judge, T. A., Bono, J. E., Ilies, R., & Gerhardt, M. W. (2002). Journal of Applied Psychology, 87(4).',
    ],
  },
  {
    trait: 'Achievement Striving',
    citations: [
      'Leaders high in achievement striving tend to be ambitious, driven, and focused on accomplishing challenging objectives. Managers who were high in achievement striving were more likely to have their teams meet or exceed performance goals. Hogan, R., Curphy, G. J., & Hogan, J. (1994). American Psychologist, 49(6).',
    ],
  },
  {
    trait: 'Deliberation (Discernment)',
    citations: [
      'Leaders high in deliberation are likely to be thorough, thoughtful, and able to make well-informed decisions. Digman, J. M. (1990). Annual Review of Psychology, 41(1).',
    ],
  },
  {
    trait: 'Big Five: Inverse Neuroticism',
    citations: [
      'Conscientiousness and emotional stability (low neuroticism) were consistently related to job performance across various occupations. Barrick, M. R., & Mount, M. K. (1991). Personnel Psychology, 44(1).',
    ],
  },
  {
    trait: 'Emotional Attunement',
    citations: [
      'Leaders who used more inclusive language and showed empathy toward their followers were rated higher on transformational leadership and perceived to be more effective. Bono, J. E., Foldes, H. J., Vinson, G. T., & Muros, J. P. (2007). Journal of Applied Psychology, 92(5).',
    ],
  },
  {
    trait: 'Resilience',
    citations: [
      'Employees with higher levels of resilience were less likely to experience stress-related symptoms and more likely to report higher levels of job satisfaction and organizational commitment. Resilience and Occupational Stress: A Meta-Analytic Review. Work and Stress, vol. 27, no. 1, 2013.',
    ],
  },
  {
    trait: 'Dark Triad: Low Psychopathy',
    citations: [
      'Individuals who score high in narcissism and psychopathy are more likely to engage in counterproductive work behaviors, which could potentially lead to interorganizational conflict. O\'Boyle Jr, E. H., Forsyth, D. R., Banks, G. C., & McDaniel, M. A. (2012). Journal of Applied Psychology, 97(3).',
    ],
  },
  {
    trait: 'Imaginative',
    citations: [
      'Leaders high in the fantasy facet of openness to experience tend to have vivid imaginations and a propensity for creative thinking, contributing to their ability to generate innovative ideas. Judge, T. A., & Piccolo, R. F. (2004). Journal of Applied Psychology, 89(5).',
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'Complete the Logos assessment.',
    body: 'Deep self-inquiry begins here. Allow approximately 45 minutes in a quiet place.',
  },
  {
    number: '02',
    title: 'Join your Logos Revelation Call.',
    body: 'A trained Logos expert walks you through your results in a one-hour session. Your portrait comes alive in conversation.',
  },
  {
    number: '03',
    title: 'Receive your Personal Codex Report.',
    body: 'A 30+ page portrait of your zone of genius, your growth edges, your core values, and your fastest path forward.',
  },
]

const testimonials = [
  {
    quote: 'Having the opportunity to be guided into seeing my highest self is a gift. I now have a view of what is possible in my life, understand my true mission better, and have the questions and guidance I need to see that vision fully executed.',
    name: 'Bryan T.',
    location: 'San Diego, CA',
  },
  {
    quote: 'Clear, concise, and helpful. In a realm where so many products involve a lot of time commitment, it is powerful to have such a quick and potent download to clarify one\'s path and make necessary adjustments.',
    name: 'Jordan B.',
    location: 'San Rafael, CA',
  },
  {
    quote: 'The experience has helped me to understand how I can step more fully into my power and truth. Thank you James and Jara — I appreciate you both and the Logos process immensely.',
    name: 'Saskia C.',
    location: 'Auckland, NZ',
  },
]

export default function ScienceOverallPage() {
  return (
    <>
      <NavPill />
      <main>
        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 'calc(5rem + 80px)',
            paddingBottom: 'var(--space-3xl)',
            background: 'var(--bg-ground)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '360px',
              borderRadius: '9999px',
              background: 'radial-gradient(ellipse, rgba(74,144,217,0.09) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ maxWidth: 820 }}>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <p className="eyebrow">Science</p>
              <h1 className="display-xl">Overall Leadership Score</h1>
              <p className="body-lg" style={{ maxWidth: 600 }}>
                How good is your leadership overall?
              </p>

              {/* Team commentary card */}
              <div
                style={{
                  marginTop: '1rem',
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '6px',
                  maxWidth: 720,
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-surface)',
                    borderRadius: 'calc(var(--radius-xl) - 6px)',
                    padding: '1.75rem 2rem',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
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
                    }}
                  >
                    Team Commentary
                  </p>
                  <p className="body-md" style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                    This score gives a rough overall assessment of an individual&rsquo;s
                    leadership capacity across all available models. It is constructed with a
                    fairly even weighting system, with extra weight given to transformational
                    leadership given its well-established background as the strongest predictor
                    of leadership performance and organizational outcomes. Models with fewer
                    available studies were weighted less to reflect the limits of available
                    research.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Traits ────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
              }}
              className="traits-grid"
            >
              {/* Positive */}
              <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '9999px',
                      background: 'var(--blue-electric)',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color: 'var(--blue-electric)',
                    }}
                  >
                    Traits that positively impact this score
                  </p>
                </div>
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
                      background: 'var(--bg-ground)',
                      borderRadius: 'calc(var(--radius-xl) - 6px)',
                      padding: '1.5rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.625rem',
                    }}
                  >
                    {positiveTraits.map((t, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '9999px',
                            background: 'var(--blue-electric)',
                            flexShrink: 0,
                            marginTop: '0.45rem',
                          }}
                        />
                        <p className="body-sm">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Negative */}
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '9999px',
                      background: '#C27B7B',
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase' as const,
                      color: '#C27B7B',
                    }}
                  >
                    Traits that negatively impact this score
                  </p>
                </div>
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
                      background: 'var(--bg-ground)',
                      borderRadius: 'calc(var(--radius-xl) - 6px)',
                      padding: '1.5rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.625rem',
                    }}
                  >
                    {negativeTraits.map((t, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '9999px',
                            background: '#C27B7B',
                            flexShrink: 0,
                            marginTop: '0.45rem',
                          }}
                        />
                        <p className="body-sm">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Studies ───────────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container" style={{ maxWidth: 820 }}>
            <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Research</p>
                <h2 className="display-md">Studies Referenced</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {studies.map((s, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                    style={{
                      borderTop: '1px solid var(--border-hairline)',
                      paddingTop: '1.5rem',
                      paddingBottom: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.625rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'var(--blue-deep)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {s.trait}
                    </p>
                    {s.citations.map((c, j) => (
                      <p
                        key={j}
                        className="body-sm"
                        style={{ color: 'var(--text-muted)', lineHeight: 1.65 }}
                      >
                        {c}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── How it works (shared template) ───────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The process</p>
              <h2 className="display-md">How Logos works.</h2>
            </motion.div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="steps-grid"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid var(--border-hairline)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '6px',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--bg-ground)',
                      borderRadius: 'calc(var(--radius-xl) - 6px)',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      height: '100%',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 700,
                        fontSize: '2rem',
                        color: 'var(--blue-electric)',
                        letterSpacing: '-0.04em',
                        opacity: 0.4,
                      }}
                    >
                      {s.number}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: 'var(--blue-deep)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </p>
                    <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="eyebrow">What people are saying</p>
          </motion.div>
          <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="testimonials-grid"
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
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
                      padding: '1.75rem',
                      boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      height: '100%',
                    }}
                  >
                    <p
                      className="body-md"
                      style={{ fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.65 }}
                    >
                      &ldquo;{t.quote}&rdquo;
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
                        {t.name}
                      </p>
                      <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section
          className="section"
          style={{ background: 'var(--bg-surface)', textAlign: 'center' }}
        >
          <div className="container" style={{ maxWidth: 520 }}>
            <motion.div
              {...fadeUp}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.75rem',
              }}
            >
              <h2 className="display-md">Are you ready to experience clarity?</h2>
              <CTAButton href="/logos-checkout" size="lg" id="science-overall-cta">
                Begin Your Logos
              </CTAButton>
            </motion.div>
          </div>
        </section>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .traits-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Footer />
    </>
  )
}
