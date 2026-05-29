import { useEffect, useRef } from 'react'
import ParticleBg from './components/ParticleBg'
import Navbar from './components/Navbar'
import SectionHero from './components/SectionHero'
import SectionWhatIsVC from './components/SectionWhatIsVC'
import SectionTools from './components/SectionTools'
import SectionCases from './components/SectionCases'
import SectionGuide from './components/SectionGuide'
import SectionCTA from './components/SectionCTA'

function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            // Optionally unobserve after triggering for performance
            // observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])
}

function App() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen bg-dark-900">
      {/* Particle Background Layer */}
      <ParticleBg />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content - Scrollable Sections */}
      <main className="relative z-10">
        <SectionHero />
        <SectionWhatIsVC />
        <SectionTools />
        <SectionCases />
        <SectionGuide />
        <SectionCTA />
      </main>
    </div>
  )
}

export default App
