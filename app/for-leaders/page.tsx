import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import TrustLine from '@/components/TrustLine'
import TestimonialCard from '@/components/TestimonialCard'
import RingDiagram from '@/components/RingDiagram'
import ForIndividualsContent from '@/components/ForIndividualsContent'

export const metadata = {
  title: 'For Individuals — Logos',
  description:
    'The shortest path to the life you actually want. Logos maps your unique motivational architecture and coaches you toward your goals with precision.',
}

export default function ForIndividualsPage() {
  return (
    <>
      <NavPill />
      <main>
        <ForIndividualsContent />
      </main>
      <Footer />
    </>
  )
}
