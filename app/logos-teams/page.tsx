import NavPill from '@/components/NavPill'
import Footer from '@/components/Footer'
import ForTeamsContent from '@/components/ForTeamsContent'

export const metadata = {
  title: 'For Teams — Logos',
  description:
    'High performance is built on depth of understanding. Logos gives every team member precise self-knowledge and every leader clarity on what each person genuinely needs.',
}

export default function ForTeamsPage() {
  return (
    <>
      <NavPill />
      <main>
        <ForTeamsContent />
      </main>
      <Footer />
    </>
  )
}
