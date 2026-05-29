import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'What is VC', href: '#what-is-vc' },
  { label: 'Tools', href: '#tools' },
  { label: 'Cases', href: '#cases' },
  { label: 'Guide', href: '#guide' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-dark-900/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleClick('#hero')}>
            <span className="text-2xl font-orbitron font-bold gradient-text">YouthBox</span>
            <span className="hidden sm:inline text-xs text-neon-cyan border border-neon-cyan/30 rounded-full px-2 py-0.5">
              VibeCoding
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:text-neon-cyan cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? 'text-neon-cyan'
                    : 'text-txt-secondary'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-txt-secondary hover:text-neon-cyan transition-colors cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5 animate-fade-in-up">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? 'text-neon-cyan bg-neon-cyan/10'
                    : 'text-txt-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
