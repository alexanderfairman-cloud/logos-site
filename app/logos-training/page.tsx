'use client'

import { motion } from 'framer-motion'
import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import TestimonialCard from '@/components/TestimonialCard'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' } as const,
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
}

const promises = [
  {
    title: 'Immediately understand each client.',
    body: 'Logos reveals each of your clients\u2019 strengths and weaknesses across every dimension \u2014 before your first session together.',
  },
  {
    title: 'Prevent client breakdowns.',
    body: 'Stay two steps ahead of every client and diffuse self-sabotage or deflection before it ever happens.',
  },
  {
    title: 'Reveal the path of transformation.',
    body: 'Understand the roots of your client\u2019s challenges instantly and guide them into lasting transformation with precision.',
  },
]

const insights = [
  'The level of overall personal development your client has already done and how receptive they will be to coaching',
  'Whether or not this client can afford your services',
  'The core drivers that determine what this client is truly motivated by',
  'A crystal clear picture of their zone of genius \u2014 the area where they create the most natural value in the world',
  'The exact weaknesses that will cause them to self-sabotage in life and business',
  'A stack of questions and curriculum customized to their profile that will create transformation',
]

const differentiators = [
  'Other tests give your clients a type shared with millions of others. Logos produces over 1.4 trillion possible unique profiles \u2014 so every client gets a portrait that is genuinely theirs.',
  'Other tests are static. Logos is designed to track and reflect your client\u2019s growth over time, giving you and your client a living map of their development rather than a snapshot from a single moment.',
  'Other tests rely on self-report, which research has shown to be the least reliable form of psychometric measurement. Logos uses the Tru-Value System \u2014 a forced-choice methodology that overcomes self-deception by requiring respondents to make difficult choices about what genuinely matters to them, rather than rating themselves on a scale.',
]

const steps = [
  {
    number: '01',
    title: 'Register and complete the Logos assessment.',
    body: 'Deep self-inquiry begins here.',
  },
  {
    number: '02',
    title: 'Attend the live training and receive your full 30+ page Custom Coach Report.',
    body: 'Your zone of genius, your growth edges, your values, and the shortest path to your aspirations.',
  },
  {
    number: '03',
    title: 'Decide if Logos can help you serve your clients at a deeper level.',
    body: 'If you are ready, we can set you up with your own custom-branded coach portal.',
  },
]

const testimonials = [
  {
    quote: 'Logos is an amazing tool for coaches and clients alike. It zones in on underdeveloped areas that immediately offer the coach and subject areas of focus for inspired action.',
    name: 'Annie Canning',
    location: 'Coach, NZ',
  },
  {
    quote: 'We choose Logos for our clients at NLC because it provides a depth of knowledge and insight unlike anything else in the marketplace. Logos gets deep into the layers of the subconscious and spotlights the hidden nuances that intrinsically motivate each person\u2019s strengths, weaknesses, and values \u2014 with astonishing accuracy.',
    name: 'Kristen Abercrombie',
    location: 'Next-Level Coaches',
  },
  {
    quote: 'I do a lot of this stuff for a living, but this is really good. It\u2019s taking me to spaces where I\u2019ve never been before.',
    name: 'Paul Lloyd',
    location: 'Work In Teams',
  },
]

export default function LogosTrainingPage() {
  return (
    <>
      <NavPill />
      <main>
        {/* Lead capture / Hero */}
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
              height: '400px',
              borderRadius: '9999px',
              background: 'radial-gradient(ellipse, rgba(74,144,217,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
            >
              <p className="eyebrow">Free Training for Coaches</p>
              <h1 className="display-xl">
                Transform Your Clients&rsquo; Lives Faster with the World&rsquo;s Most
                Comprehensive Personality Tool.
              </h1>
              <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 580 }}>
                Receive your Free Logos Coaching Report to Accelerate Client Results{' '}
                <span style={{ color: 'var(--blue-mid)', fontWeight: 600 }}>($38 Value)</span>
              </p>
              <CTAButton href="#register" size="lg" id="training-hero-cta">
                Sign Up and Take Your Logos Here
              </CTAButton>

              {/* Attendance gift */}
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1.25rem 2rem',
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <p className="body-sm" style={{ color: 'var(--blue-deep)' }}>
                  <strong>Customized Attendance Gift ($38 Value):</strong> Receive your own
                  personalized Logos Coach Report that makes your coaching genius and your
                  greatest challenge crystal clear.
                </p>
                <p className="body-sm" style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  Live Debrief Workshop &mdash; Date and time to be confirmed.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three core promises */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="display-md">Three things Logos makes possible.</h2>
            </motion.div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
              }}
              className="promises-grid"
            >
              {promises.map((p, i) => (
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
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.875rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Clash Display', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.0625rem',
                        color: 'var(--blue-deep)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </p>
                    <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What you will instantly see */}
        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                  Instant insight
                </p>
                <h2 className="display-md">What you will instantly be able to see.</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {insights.map((item, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '9999px',
                        background: 'var(--blue-electric)',
                        flexShrink: 0,
                        marginTop: '0.55rem',
                      }}
                    />
                    <p className="body-md" style={{ color: 'var(--text-body)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Logos was built */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <p className="eyebrow">The origin</p>
              <h2 className="display-md">You are already a good coach. We built a tool to make your work even more powerful.</h2>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                Logos is the most precise personality assessment on earth. It was built for
                coaches, by coaches. It empowers you to discover what every client needs before
                they ever get on the phone \u2014 and makes your job more effective and more
                enjoyable.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)' }}>
                Five years of research across every major personality system ever created. Over
                10,000 clients and students served. One question that started it all: what if
                there was a single test that could reveal who someone really is and what they
                each need?
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)' }}>
                That question became Logos. You just send your client the link, receive their
                custom report, and you are ready to go. The only way to fully understand what
                it makes possible is to experience it yourself \u2014 which is why we give it
                to you free when you attend.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What makes Logos different */}
        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <h2 className="display-md">What makes Logos different.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {differentiators.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: '2px solid var(--blue-electric)',
                      paddingLeft: '1.5rem',
                    }}
                  >
                    <p className="body-lg" style={{ color: 'var(--text-body)' }}>
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three-step process */}
        <section className="section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="display-md">The three-step process for coaches.</h2>
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
                  transition={{ ...fadeUp.transition, delay: i * 0.12 }}
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
                        opacity: 0.5,
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

        {/* Testimonials */}
        <section className="section" style={{ background: 'var(--bg-ground)' }}>
          <div className="container">
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
                >
                  <TestimonialCard
                    quote={t.quote}
                    name={t.name}
                    location={t.location}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="register"
          className="section"
          style={{ background: 'var(--bg-surface)', textAlign: 'center' }}
        >
          <div className="container" style={{ maxWidth: 560 }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}
            >
              <h2 className="display-md">Are you ready to experience clarity?</h2>
              <CTAButton href="#register" size="lg" id="training-bottom-cta">
                Sign Up Now
              </CTAButton>
              <p className="body-sm" style={{ color: 'var(--text-ghost)' }}>
                Questions?{' '}
                <a
                  href="mailto:support@welcometologos.com"
                  style={{ color: 'var(--blue-electric)' }}
                >
                  support@welcometologos.com
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .promises-grid { grid-template-columns: 1fr !important; }
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
