import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Logos Privacy Policy',
  description: 'Privacy policy for welcometologos.com.',
}

const sections = [
  {
    heading: 'Introduction',
    body: `At welcometologos.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by welcometologos.com and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and collected in welcometologos.com. This policy is not applicable to any information collected offline or via channels other than this website.`,
  },
  {
    heading: 'Consent',
    body: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
  },
  {
    heading: 'Information We Collect',
    body: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and attachments you may send us, and any other information you may choose to provide.

When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
  },
  {
    heading: 'How We Use Your Information',
    body: `We use the information we collect to:

• Provide, operate, and maintain our website
• Improve, personalize, and expand our website
• Understand and analyze how you use our website
• Develop new products, services, features, and functionality
• Communicate with you, either directly or through one of our partners, including for customer service, updates, and marketing purposes
• Send you emails
• Find and prevent fraud`,
  },
  {
    heading: 'Log Files',
    body: `welcometologos.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring and exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information.`,
  },
  {
    heading: 'Cookies and Web Beacons',
    body: `welcometologos.com uses cookies to store information including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the user experience by customizing web page content based on visitors' browser type and other information.`,
  },
  {
    heading: 'Third Party Privacy Policies',
    body: `welcometologos.com's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of third-party ad servers for more detailed information.

You can choose to disable cookies through your individual browser options.`,
  },
  {
    heading: 'CCPA Privacy Rights (Do Not Sell My Personal Information)',
    body: `Under the CCPA, California consumers have the right to:

• Request that a business disclose the categories and specific pieces of personal data it has collected about consumers
• Request that a business delete any personal data about the consumer that a business has collected
• Request that a business that sells a consumer's personal data not sell the consumer's personal data

If you make a request, we have one month to respond. To exercise any of these rights, please contact us.`,
  },
  {
    heading: 'GDPR Data Protection Rights',
    body: `Every user is entitled to the following:

• The right to access: you have the right to request copies of your personal data
• The right to rectification: you have the right to request that we correct any information you believe is inaccurate
• The right to erasure: you have the right to request that we erase your personal data, under certain conditions
• The right to restrict processing: you have the right to request that we restrict the processing of your personal data, under certain conditions
• The right to object to processing: you have the right to object to our processing of your personal data, under certain conditions
• The right to data portability: you have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions

If you make a request, we have one month to respond. To exercise any of these rights, please contact us.`,
  },
  {
    heading: "Children's Information",
    body: `welcometologos.com does not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child provided this kind of information on our website, please contact us immediately and we will promptly remove such information from our records.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavPill />
      <main
        style={{
          paddingTop: 'calc(4rem + 80px)',
          paddingBottom: 'var(--space-3xl)',
          background: 'var(--bg-ground)',
        }}
      >
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h1 className="display-lg">Logos Privacy Policy</h1>
              <p className="body-md" style={{ color: 'var(--text-muted)' }}>
                Logos is committed to protecting your personal information and being
                transparent about how we use it.
              </p>
            </div>

            {/* Sections */}
            {sections.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '2rem',
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: 'var(--blue-deep)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.heading}
                </h2>
                {s.body.split('\n\n').map((para, j) => (
                  <p
                    key={j}
                    className="body-md"
                    style={{
                      color: 'var(--text-body)',
                      whiteSpace: 'pre-line',
                      lineHeight: 1.7,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}

            {/* Contact */}
            <div
              style={{
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '2rem',
              }}
            >
              <p className="body-md" style={{ color: 'var(--text-muted)' }}>
                Contact:{' '}
                <a
                  href="mailto:support@welcometologos.com"
                  style={{ color: 'var(--blue-electric)' }}
                >
                  support@welcometologos.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
