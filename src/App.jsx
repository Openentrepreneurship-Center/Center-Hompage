import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Team from './components/Team'
import About from './components/About'
import News from './components/News'
import Location from './components/Location'
import Footer from './components/Footer'
import Modal from './components/Modal'
import BackToTop from './components/BackToTop'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.5s'
    setTimeout(() => {
      document.body.style.opacity = '1'
    }, 100)
    document.body.style.overflowX = 'hidden'
    document.documentElement.style.overflowX = 'hidden'

    console.log('%c오픈앙트레프레너십센터', 'font-size: 24px; font-weight: bold; color: #C8102E;')
    console.log('%cCentre for Open Entrepreneurship - Sogang University', 'font-size: 14px; color: #666;')
    console.log('%c기술과 혁신을 통한 창업·연구·산업의 경계를 허물다', 'font-size: 12px; color: #999;')
  }, [])

  // Scroll animation observer (AOS-like)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])


  return (
    <>
      <Navbar />
      <Hero />
      <Projects onProjectClick={setSelectedProject} />
      <Team />
      <About />
      <News />
      <Location />
      <Footer />
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BackToTop />
    </>
  )
}

export default App
