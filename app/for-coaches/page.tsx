import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import ForCoachesContent from '@/components/ForCoachesContent'

export const metadata = {
  title: 'For Coaches — Logos',
  description:
    "Logos gives you a complete map of your client's interior before the first deep conversation. Get started for $39, no subscription.",
}

export default function ForCoachesPage() {
  return (
    <>
      <NavPill />
      <main>
        <ForCoachesContent />
      </main>
      <Footer />
    </>
  )
}
