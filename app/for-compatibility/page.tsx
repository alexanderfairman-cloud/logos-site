import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import ForCouplesContent from '@/components/ForCouplesContent'

export const metadata = {
  title: 'For Couples — Logos',
  description:
    'The most honest conversation you will ever have about each other. Logos reveals the motivations, ego patterns, and traits each of you brings to the relationship.',
}

export default function ForCouplesPage() {
  return (
    <>
      <NavPill />
      <main>
        <ForCouplesContent />
      </main>
      <Footer />
    </>
  )
}
