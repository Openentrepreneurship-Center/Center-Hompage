import { useState, useEffect } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#about', label: 'About' },
  { href: '#news', label: 'News' },
  { href: '#location', label: 'Location' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      const sections = document.querySelectorAll('section[id]')
      const scrollPos = window.scrollY + 150
      sections.forEach(section => {
        const top = section.offsetTop
        const height = section.offsetHeight
        const id = section.getAttribute('id')
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-logo">
          <img
            src="/ppt-images/image4-logo.png"
            alt="서강대학교 오픈앙트레프레너십센터 로고"
            className="logo-image"
          />
        </div>

        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link"
                style={activeSection === item.href.slice(1) ? { color: 'var(--primary-red)' } : {}}
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <span
            style={menuOpen ? { transform: 'rotate(45deg) translate(8px, 8px)' } : {}}
          />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span
            style={menuOpen ? { transform: 'rotate(-45deg) translate(8px, -8px)' } : {}}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
