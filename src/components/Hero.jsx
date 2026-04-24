import { useEffect, useRef } from 'react'

function Hero() {
  const particlesRef = useRef(null)

  // Create particle animation
  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const style = document.createElement('style')
    style.id = 'particle-keyframes'
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0); opacity: 0.2; }
        25% { transform: translate(20px, -30px); opacity: 0.6; }
        50% { transform: translate(-15px, 20px); opacity: 0.3; }
        75% { transform: translate(30px, 10px); opacity: 0.8; }
      }
    `
    if (!document.getElementById('particle-keyframes')) {
      document.head.appendChild(style)
    }

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement('div')
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = Math.random() * 3 + 1
      const duration = Math.random() * 20 + 10
      particle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(200, 16, 46, 0.8), transparent);
        border-radius: 50%;
        animation: float ${duration}s infinite ease-in-out;
        animation-delay: ${Math.random() * 5}s;
      `
      container.appendChild(particle)
    }

    return () => {
      const injected = document.getElementById('particle-keyframes')
      if (injected) document.head.removeChild(injected)
    }
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="particle-container" id="particles" ref={particlesRef}></div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          엔터프라이즈 AI 시스템으로<br />
          <span className="highlight">기업의 AX</span>를<br />
          함께 실현합니다
        </h1>
        <p className="hero-subtitle">
          AX 산학협력을 통한 기업-대학 간 오픈이노베이션 &amp; 오픈앙트레프레너십
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" onClick={e => scrollTo(e, 'projects')}>
            <span>프로젝트 보기</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#about" className="btn btn-secondary" onClick={e => scrollTo(e, 'about')}>
            <span>센터 소개</span>
            <i className="fas fa-info-circle"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
