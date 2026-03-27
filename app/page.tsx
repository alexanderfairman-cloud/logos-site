import NavPill from '@/components/NavPill'
import HexagonMirror from '@/components/HexagonMirror'
import LabelVsPortrait from '@/components/LabelVsPortrait'
import BeingSeen from '@/components/BeingSeen'
import ThreeRings from '@/components/ThreeRings'
import Applications from '@/components/Applications'
import Invitation from '@/components/Invitation'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <NavPill />

      <main>
        {/* Scene 1 — Hexagon Mirror hero (300vh sticky scroll) */}
        <HexagonMirror />

        {/* Scene 1B — Label vs Portrait */}
        <LabelVsPortrait />

        {/* Scene 2 — Being Seen */}
        <BeingSeen />

        {/* Scene 3 — The Three Rings */}
        <ThreeRings />

        {/* Scene 4 — Applications (Individual / Coach / Teams) */}
        <Applications />

        {/* Scene 5 — Testimonials + Invitation / CTA */}
        <Invitation />
      </main>

      <Footer />
    </>
  )
}
