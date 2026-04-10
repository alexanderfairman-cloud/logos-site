'use client'

import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const sections = [
  { id: 's1',  num: '01', heading: 'Eligibility' },
  { id: 's2',  num: '02', heading: 'Nature of the Assessment' },
  { id: 's3',  num: '03', heading: 'No Guaranteed Accuracy' },
  { id: 's4',  num: '04', heading: 'Not a Basis for Major Decisions' },
  { id: 's5',  num: '05', heading: 'No Professional Relationship' },
  { id: 's6',  num: '06', heading: 'Limitation of Liability' },
  { id: 's7',  num: '07', heading: 'Indemnification' },
  { id: 's8',  num: '08', heading: 'Assumption of Risk' },
  { id: 's9',  num: '09', heading: 'Intellectual Property' },
  { id: 's10', num: '10', heading: 'Privacy & Data Use' },
  { id: 's11', num: '11', heading: 'Refund Policy' },
  { id: 's12', num: '12', heading: 'Governing Law & Disputes' },
  { id: 's13', num: '13', heading: 'Amendments' },
  { id: 's14', num: '14', heading: 'Entire Agreement' },
]

export default function TermsPage() {
  const [activeId, setActiveId] = useState<string>('plain-english')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const targets = document.querySelectorAll('[data-section]')
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute('data-section') ?? '')
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    targets.forEach((t) => observerRef.current?.observe(t))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <NavPill />

      {/* ── HERO ── */}
      <div
        style={{
          background: 'var(--blue-deep)',
          paddingTop: 'calc(4rem + 100px)',
          paddingBottom: '5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle radial glow */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(74,144,217,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <p
            className="eyebrow"
            style={{
              color: 'rgba(74,144,217,0.9)',
              marginBottom: '1.25rem',
              letterSpacing: '0.22em',
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem',
            }}
          >
            Terms of Service
            <br />
            <span style={{ color: 'var(--blue-mid)', fontWeight: 300 }}>& Liability Release</span>
          </h1>
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.06em',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Effective Date: April 2026 &nbsp;·&nbsp; Version 1.0
          </p>
        </div>
      </div>

      {/* ── LAYOUT ── */}
      <main style={{ background: 'var(--bg-ground)', minHeight: '60vh' }}>
        <div
          className="container tos-layout"
          style={{
            paddingTop: '4rem',
            paddingBottom: '6rem',
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '0 4rem',
            alignItems: 'start',
            maxWidth: '1100px',
          }}
        >
          {/* ── SIDEBAR ── */}
          <aside className="tos-sidebar" style={{ position: 'sticky', top: '7rem' }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-ghost)',
                marginBottom: '1rem',
              }}
            >
              On this page
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <SidebarLink id="plain-english" label="Plain-English Summary" active={activeId} />
              {sections.map((s) => (
                <SidebarLink
                  key={s.id}
                  id={s.id}
                  label={`${s.num}. ${s.heading}`}
                  active={activeId}
                />
              ))}
            </nav>
          </aside>

          {/* ── CONTENT ── */}
          <div style={{ minWidth: 0 }}>

            {/* Plain English Box */}
            <div
              id="plain-english"
              data-section="plain-english"
              style={{
                background: 'var(--blue-pale)',
                border: '1px solid var(--border-glass)',
                borderLeft: '4px solid var(--blue-electric)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                padding: '2rem 2.25rem',
                marginBottom: '3rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--blue-electric)',
                  marginBottom: '1rem',
                }}
              >
                What this means in plain English
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginBottom: '0.75rem' }}>
                The Logos Assessment is a personal development tool designed to help you understand
                yourself more deeply. It is <strong>not</strong> a clinical diagnosis, a medical test, or a
                substitute for professional therapy or counseling. Your results reflect how you answered
                the questions — they are a mirror, not a verdict.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)' }}>
                By using Logos, you agree that you are taking responsibility for how you interpret and
                apply your results. We believe in your intelligence and your agency. These terms exist
                to be honest with you about what Logos is — and what it is not.
              </p>
            </div>

            {/* Quick Reference Table */}
            <div
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '3.5rem',
              }}
            >
              <div
                style={{
                  background: 'var(--blue-deep)',
                  padding: '0.875rem 1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '1rem',
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', letterSpacing: '0.06em' }}>Section</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', letterSpacing: '0.06em' }}>Purpose</span>
              </div>
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '1rem',
                    padding: '0.7rem 1.25rem',
                    background: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--blue-pale)',
                    borderBottom: '1px solid var(--border-hairline)',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--blue-glow)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? 'var(--bg-surface)' : 'var(--blue-pale)' }}
                >
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--blue-deep)' }}>
                    {s.num}. {s.heading}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {tableRow(s.id)}
                  </span>
                </a>
              ))}
            </div>

            {/* ── SECTION 1 ── */}
            <TosSection id="s1" num="01" heading="Eligibility">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                You must be at least 18 years of age to use the Logos Assessment independently.
                Individuals between the ages of 13 and 17 may use Logos only with the express written consent
                of a parent or legal guardian, who agrees to these Terms on their behalf. By accessing or
                using Logos, you represent and warrant that you meet these eligibility requirements.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos is intended for use by individuals located in jurisdictions where such personal
                development tools are lawfully permitted. If you are accessing Logos from outside the United
                States, you are responsible for compliance with your local laws and regulations.
              </p>
            </TosSection>

            {/* ── SECTION 2 ── */}
            <TosSection id="s2" num="02" heading="Nature of the Assessment — What Logos Is and Is Not">
              <WarningBox label="⚠ Important Notice">
                The Logos Assessment is a personal development and self-reflection tool. It is{' '}
                <strong>not</strong> a clinical, psychological, psychiatric, or medical diagnostic instrument.
              </WarningBox>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                The Logos Assessment integrates established personality frameworks — including the Big Five,
                the Enneagram, Jungian archetypes, and attachment theory — alongside original dimensions
                developed by the Logos creators. It is designed to surface patterns, strengths, and growth
                opportunities to support self-understanding and personal development.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos explicitly does not:
              </p>
              <TosUl items={[
                'Diagnose any mental health condition, personality disorder, or psychological illness',
                'Constitute or replace professional therapy, counseling, psychiatry, or medical treatment',
                'Provide clinical assessment of any kind',
                'Create a therapist-client, doctor-patient, or fiduciary relationship of any kind',
                'Guarantee that results reflect an objective or permanent truth about your personality',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                If you are experiencing a mental health crisis, emotional distress, or symptoms that concern
                you, please contact a licensed mental health professional or crisis service immediately.
              </p>
            </TosSection>

            {/* ── SECTION 3 ── */}
            <TosSection id="s3" num="03" heading="No Guaranteed Accuracy">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                The Logos Assessment is based entirely on your self-reported responses. As such, results may
                be influenced by your mood, current life circumstances, level of self-awareness, or the
                honesty and consistency with which you interpret and answer the questions.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos makes no warranty — express or implied — that your results are:
              </p>
              <TosUl items={[
                'Accurate, complete, or free from error',
                'Predictive of future behavior, performance, or outcomes',
                'Consistent across different administrations of the assessment',
                'Universally applicable across all cultures, contexts, or populations',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Results should be understood as one perspective on who you are — a starting point for
                reflection and conversation, not a final or authoritative profile. Logos encourages you to
                engage with your results critically and in dialogue with coaches, mentors, or trusted others.
              </p>
            </TosSection>

            {/* ── SECTION 4 ── */}
            <TosSection id="s4" num="04" heading="Not a Basis for Major Life Decisions">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                You agree that you will not rely solely on your Logos Assessment results as the basis for
                making significant life decisions, including but not limited to:
              </p>
              <TosUl items={[
                'Career changes, hiring decisions, or professional recommendations',
                'Medical or mental health treatment decisions',
                'Significant relationship decisions, including marriage, separation, or legal matters',
                'Financial planning, investment decisions, or legal agreements',
                'Decisions affecting the welfare of others, including children or dependents',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos results may be one valuable input among many in your decision-making process. You
                assume full and sole responsibility for any actions you take — or fail to take — based on
                your results or any coaching, commentary, or interpretation provided through the Logos platform.
              </p>
            </TosSection>

            {/* ── SECTION 5 ── */}
            <TosSection id="s5" num="05" heading="No Professional Relationship Created">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Use of the Logos Assessment or any Logos platform — including access to Logos-trained AI
                tools, written reports, or sessions with Logos-affiliated coaches — does not create a
                professional relationship of any kind. Specifically:
              </p>
              <TosUl items={[
                'No therapist-client relationship is created',
                'No doctor-patient relationship is created',
                'No attorney-client relationship is created',
                'No fiduciary relationship of any kind is created',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos coaches and advisors, where applicable, are not acting as licensed clinicians, medical
                professionals, or legal advisors. Any coaching conversations are for developmental and
                motivational purposes only.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                If a Logos-affiliated coach is a licensed mental health professional, their licensure does
                not extend to their role within the Logos platform. Sessions conducted through Logos are not
                clinical services.
              </p>
            </TosSection>

            {/* ── SECTION 6 ── */}
            <TosSection id="s6" num="06" heading="Limitation of Liability">
              <WarningBox label="⚠ Please Read Carefully">
                <p>
                  To the maximum extent permitted by applicable law, Logos and its founders, directors,
                  employees, contractors, coaches, and affiliated parties shall not be liable for any
                  indirect, incidental, special, consequential, emotional, or punitive damages arising
                  from your use of the assessment or platform.
                </p>
                <p style={{ marginTop: '0.625rem' }}>
                  In no event shall Logos' total liability to you exceed the amount you actually paid for
                  the service giving rise to the claim. If you used a free version of the assessment,
                  Logos' total liability is zero.
                </p>
              </WarningBox>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                This limitation applies regardless of the theory of liability — whether in contract, tort,
                negligence, strict liability, or otherwise — and even if Logos has been advised of the
                possibility of such damages.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Some jurisdictions do not allow the exclusion of certain warranties or limitation of
                liability for certain types of damages. In such jurisdictions, Logos' liability shall be
                limited to the greatest extent permitted by law.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                The Logos platform and assessment are provided "as is" and "as available," without warranty
                of any kind — express, implied, or statutory — including without limitation any implied
                warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </TosSection>

            {/* ── SECTION 7 ── */}
            <TosSection id="s7" num="07" heading="Indemnification">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                You agree to defend, indemnify, and hold harmless Logos and its founders, directors,
                officers, employees, contractors, coaches, licensors, and agents from and against any and
                all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees)
                arising from or related to:
              </p>
              <TosUl items={[
                'Your use or misuse of the Logos Assessment or platform',
                'Your violation of these Terms of Service',
                'Any action you take — or fail to take — based on your assessment results',
                'Any third-party claim arising from your use of Logos',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos reserves the right, at its own expense, to assume exclusive defense and control of any
                matter subject to indemnification by you, in which case you agree to cooperate fully with
                Logos in asserting any available defenses.
              </p>
            </TosSection>

            {/* ── SECTION 8 ── */}
            <TosSection id="s8" num="08" heading="Assumption of Risk">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                By using the Logos Assessment, you explicitly acknowledge that:
              </p>
              <TosUl items={[
                'You understand the assessment is a self-reflection and personal development tool, not a clinical or diagnostic instrument',
                'You understand results may vary and are not guaranteed to be accurate or complete',
                'You voluntarily choose to participate with full awareness of the assessment\'s limitations',
                'You accept sole responsibility for how you interpret, share, and act upon your results',
                'You have read, understood, and agreed to these Terms of Service in their entirety',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                This assumption of risk is a material part of the agreement between you and Logos. Without
                it, Logos would not be able to offer this service.
              </p>
            </TosSection>

            {/* ── SECTION 9 ── */}
            <TosSection id="s9" num="09" heading="Intellectual Property">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                The Logos Assessment, including its frameworks, formulas, scoring methodologies, archetypes,
                trait definitions, report formats, AI systems, and all associated content, is the proprietary
                intellectual property of Logos and its founders. All rights are reserved.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Your results are provided for your personal use only. You may not:
              </p>
              <TosUl items={[
                'Reproduce, distribute, or commercially exploit the Logos framework or methodology',
                'Reverse-engineer the scoring system or formulas',
                'Use Logos content to create competing products or services',
                'Share your full report in a manner that commercially benefits a third party',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                You retain ownership of your personal data and responses. By submitting your responses, you
                grant Logos a limited, non-exclusive license to use anonymized, aggregated data for research
                and improvement of the assessment.
              </p>
            </TosSection>

            {/* ── SECTION 10 ── */}
            <TosSection id="s10" num="10" heading="Privacy & Data Use">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos takes your privacy seriously. Your assessment responses and results are handled in
                accordance with our{' '}
                <Link href="/logos-privacy" style={{ color: 'var(--blue-electric)', textDecoration: 'underline' }}>
                  Privacy Policy
                </Link>. Key points include:
              </p>
              <TosUl items={[
                'Your individual results are confidential and will not be sold to third parties',
                'Anonymized, aggregated data may be used for research and assessment refinement',
                'If you share your results with a coach or manager through the Logos platform, those parties will have access to your report',
                'You may request deletion of your data at any time by contacting us at support@experiencelogos.com',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos complies with applicable data protection laws, including the California Consumer
                Privacy Act (CCPA). California residents have specific rights regarding their personal data;
                please refer to our Privacy Policy for details.
              </p>
            </TosSection>

            {/* ── SECTION 11 ── */}
            <TosSection id="s11" num="11" heading="Refund Policy">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Given the immediate delivery of assessment results, Logos operates under the following
                refund policy:
              </p>
              <TosUl items={[
                'Refunds are available within 24 hours of purchase if the assessment has not yet been started',
                'Once the assessment has been completed and results delivered, no refund will be issued',
                'In cases of documented technical failure preventing access to results, Logos will provide either a full refund or complimentary re-access at its discretion',
                'Refund requests must be submitted to support@experiencelogos.com and include your order confirmation number',
              ]} />
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos reserves the right to modify this refund policy at any time. Changes will be reflected
                in an updated version of these Terms.
              </p>
            </TosSection>

            {/* ── SECTION 12 ── */}
            <TosSection id="s12" num="12" heading="Governing Law & Dispute Resolution">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                These Terms of Service shall be governed by and construed in accordance with the laws of the
                State of California, United States, without regard to conflict of law principles.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                <strong>Arbitration Agreement:</strong> Any dispute, controversy, or claim arising out of or
                relating to these Terms or your use of Logos — except for claims seeking injunctive or other
                equitable relief — shall be resolved by binding individual arbitration administered by the
                American Arbitration Association (AAA) under its Consumer Arbitration Rules. Arbitration
                shall take place in California.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                <strong>Class Action Waiver:</strong> You and Logos agree that all claims shall be brought
                in your individual capacity only, and not as a plaintiff or class member in any purported
                class action, collective action, or representative proceeding. The arbitrator may not
                consolidate more than one person's claims.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                You may opt out of the arbitration agreement within 30 days of first accepting these Terms
                by sending written notice to{' '}
                <a href="mailto:support@experiencelogos.com" style={{ color: 'var(--blue-electric)' }}>
                  support@experiencelogos.com
                </a>.
              </p>
            </TosSection>

            {/* ── SECTION 13 ── */}
            <TosSection id="s13" num="13" heading="Amendments">
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos reserves the right to modify these Terms of Service at any time. When we make
                material changes, we will update the "Effective Date" at the top of this document and,
                where possible, notify users via email or prominent notice on the platform.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Your continued use of the Logos Assessment after any changes constitutes your acceptance of
                the revised Terms. If you do not agree to the updated Terms, you must discontinue use of
                the platform.
              </p>
            </TosSection>

            {/* ── SECTION 14 ── */}
            <TosSection id="s14" num="14" heading="Entire Agreement" last>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                These Terms of Service, together with our Privacy Policy and any applicable coach
                agreements, constitute the entire agreement between you and Logos with respect to your use
                of the assessment and platform. They supersede all prior or contemporaneous agreements,
                representations, or understandings, whether oral or written.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the
                remaining provisions shall continue in full force and effect.
              </p>
              <p className="body-md" style={{ color: 'var(--text-body)', marginTop: '1rem' }}>
                Logos' failure to enforce any right or provision of these Terms shall not constitute a
                waiver of that right or provision.
              </p>
            </TosSection>

            {/* Contact strip */}
            <div
              style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--blue-pale)',
                border: '1px solid var(--border-glass)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'var(--blue-deep)',
                  marginBottom: '0.5rem',
                }}
              >
                Questions about these Terms?
              </p>
              <p className="body-sm">
                Reach us at{' '}
                <a
                  href="mailto:support@experiencelogos.com"
                  style={{ color: 'var(--blue-electric)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                >
                  support@experiencelogos.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        /* Responsive layout */
        @media (max-width: 900px) {
          .tos-layout {
            grid-template-columns: 1fr !important;
          }
          .tos-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

/* ──────────────────────────────────────────────
   Sub-components
────────────────────────────────────────────── */

function SidebarLink({ id, label, active }: { id: string; label: string; active: string }) {
  const isActive = active === id
  return (
    <a
      href={`#${id}`}
      style={{
        display: 'block',
        fontSize: '0.775rem',
        color: isActive ? 'var(--blue-electric)' : 'var(--text-muted)',
        padding: '5px 0 5px 12px',
        borderLeft: `2px solid ${isActive ? 'var(--blue-electric)' : 'var(--border-hairline)'}`,
        lineHeight: 1.45,
        transition: 'color 0.2s, border-color 0.2s',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = 'var(--blue-deep)'
          ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--blue-mid)'
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'
          ;(e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--border-hairline)'
        }
      }}
    >
      {label}
    </a>
  )
}

function TosSection({
  id,
  num,
  heading,
  children,
  last,
}: {
  id: string
  num: string
  heading: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div
      id={id}
      data-section={id}
      style={{ marginBottom: last ? 0 : '3.5rem', paddingTop: '0.5rem' }}
    >
      <div style={{ marginBottom: '0.25rem' }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--blue-electric)',
            display: 'block',
            marginBottom: '0.375rem',
          }}
        >
          Section {num}
        </span>
        <h2
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
            fontWeight: 500,
            color: 'var(--blue-deep)',
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
            paddingBottom: '0.875rem',
            borderBottom: '1px solid var(--border-hairline)',
          }}
        >
          {heading}
        </h2>
      </div>
      {children}
    </div>
  )
}

function TosUl({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: '1rem 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: 'flex',
            gap: '0.75rem',
            fontSize: '0.9rem',
            color: 'var(--text-body)',
            lineHeight: 1.7,
            paddingLeft: '0',
          }}
        >
          <span style={{ color: 'var(--blue-electric)', flexShrink: 0, marginTop: '0.1em', fontWeight: 300 }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function WarningBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#FDF6E3',
        border: '1px solid rgba(184,151,58,0.35)',
        borderLeft: '4px solid #B8973A',
        borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
        padding: '1.375rem 1.75rem',
        marginTop: '1rem',
      }}
    >
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#B8973A',
          marginBottom: '0.625rem',
        }}
      >
        {label}
      </p>
      <div style={{ fontSize: '0.875rem', color: '#5A4A1A', lineHeight: 1.75 }}>{children}</div>
    </div>
  )
}

function tableRow(id: string): string {
  const map: Record<string, string> = {
    s1:  'Who may use the Logos Assessment',
    s2:  'What Logos is and is not',
    s3:  'Self-reported limitations and variability',
    s4:  'Appropriate use of your results',
    s5:  'We are not your therapist or advisor',
    s6:  'Cap on our legal responsibility',
    s7:  'Your agreement to hold us harmless',
    s8:  'Your voluntary acknowledgment',
    s9:  'Ownership of the Logos framework',
    s10: 'How your responses are handled',
    s11: 'When refunds are available',
    s12: 'California law and arbitration',
    s13: 'How we update these terms',
    s14: 'This document is the complete agreement',
  }
  return map[id] ?? ''
}
