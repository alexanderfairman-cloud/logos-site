import type { Metadata } from 'next'
import TermsContent from './TermsContent'

export const metadata: Metadata = {
  title: 'Terms of Service & Liability Release — Logos',
  description:
    'Read the Logos Terms of Service. Understand how our personality assessment works, its limitations, and what you agree to by using the platform.',
  openGraph: {
    title: 'Terms of Service — Logos',
    description:
      'Logos Assessment Terms of Service: eligibility, liability release, arbitration, and your rights as a user.',
    url: 'https://welcometologos.com/logos-terms',
  },
}

export default function TermsPage() {
  return <TermsContent />
}
