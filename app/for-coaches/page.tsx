import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import ForCoachesContent from '@/components/ForCoachesContent'

export const metadata = {
  title: 'For Coaches — Logos',
  description:
    'Stop spending sessions on symptoms. Logos gives you a complete map of your client\'s interior before the first deep conversation — core archetypes, ego patterns, and 70+ trait dimensions.',
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
