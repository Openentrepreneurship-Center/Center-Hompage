import { useState, useEffect, useRef } from 'react'

const stats = [
  { target: 20, label: '고객사' },
  { target: 40, label: '성공 프로젝트' },
  { target: 10, label: '석박사 학생' },
]

const features = [
  {
    icon: 'fas fa-code',
    title: 'AI 개발',
    desc: '기업용 AI 솔루션을 기획·개발·구축합니다.',
    clients: 'LG CNS, 히포크랏랩스 등',
    img: '/ppt-images/image8.jpg',
    aosDelay: '',
  },
  {
    icon: 'fas fa-flask',
    title: 'AI 연구',
    desc: 'AI 도입 생산성 등 산업계 이슈를 연구합니다.',
    clients: 'LG CNS, STEPI 등',
    img: '/ppt-images/image10.jpg',
    aosDelay: '100',
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'AI 교육 & 컨설팅',
    desc: 'AI 기술 교육과 컨설팅을 수행합니다.',
    clients: '현대모비스, 장은재단 등',
    img: '/ppt-images/image11.jpeg',
    aosDelay: '200',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Open Innovation',
    desc: '기업-대학 간 오픈이노베이션 & 오픈앙트레프레너십을 활성화합니다.',
    clients: 'AX 산학협력',
    img: '/ppt-images/image13.jpeg',
    aosDelay: '300',
  },
]

const partners = [
  { name: 'LG CNS',              logo: '/ppt-images/image5.jpg' },
  { name: 'Hippocrat Labs',      logo: '/ppt-images/image6.jpg' },
  { name: 'The Grimm Entertainment', logo: '/ppt-images/image7.jpg' },
]

function StatCounter({ target, label }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">
        {started && count >= target ? `${target}+` : count}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-up">
          오픈앙트레프레너십센터 <span className="title-highlight">연구실 소개</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <p className="about-lead">
            서강대학교 오픈앙트레프레너십센터는{' '}
            <strong>엔터프라이즈 AI 시스템을 기획·개발·구축</strong>하여 기업의{' '}
            <strong>AX(AI Transformation)</strong>를 지원하는 실무지향적 연구실입니다.
          </p>
          <p className="about-body">
            AX 산학협력을 통해 기업-대학 간{' '}
            <strong>오픈이노베이션 &amp; 오픈앙트레프레너십</strong>을 활성화합니다.
            소속 석·박사 과정생은 기업 대상 AI 프로젝트에 주도적으로 참여하고
            산학 인턴십을 수료할 수 있는{' '}
            <strong>성과중심적 연구실</strong>입니다.
          </p>
          <div className="about-stats">
            {stats.map(stat => (
              <StatCounter key={stat.label} target={stat.target} label={stat.label} />
            ))}
          </div>

          {/* 산학 인턴십 파트너사 */}
          <div className="partner-logos-label">재학생 및 졸업생 인턴십 수료 대표 기업</div>
          <div className="partner-logos">
            {partners.map(p => (
              <div key={p.name} className="partner-logo-item">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
        </div>

        <div className="about-images" data-aos="fade-left">
          <div className="image-grid">
            <div className="grid-item large">
              <img src="/ppt-images/image3.jpg" alt="서강대학교 오픈앙트레프레너십센터 공간" />
            </div>
            <div className="grid-item">
              <img src="/ppt-images/image11.jpeg" alt="AI 교육 현장" />
            </div>
            <div className="grid-item">
              <img src="/ppt-images/image13.jpeg" alt="기업 AI 컨설팅 세미나" />
            </div>
          </div>
        </div>
      </div>

      {/* 인턴십 수료식 쇼케이스 */}
      <div className="internship-showcase" data-aos="fade-up">
        <div className="internship-showcase-text">
          <span className="internship-eyebrow">Industry-Academic Program</span>
          <h3>
            산학 인턴십 수료 <span className="title-highlight">Internship Completion</span>
          </h3>
          <p>센터에 소속된 석·박사 과정생은 기업 대상 AI 프로젝트에 주도적으로 참여하고 산학 인턴십을 수료할 수 있는 성과중심적 연구실입니다.</p>
          <ul className="internship-highlights">
            <li><i className="fas fa-check-circle"></i> 기업 실무형 AI 프로젝트 주도 수행</li>
            <li><i className="fas fa-check-circle"></i> 산업 파트너사 공식 인턴십 수료 인증</li>
            <li><i className="fas fa-check-circle"></i> 성과 중심의 실전 연구개발 경험</li>
          </ul>
        </div>
        <figure className="internship-photo" data-aos="zoom-in" data-aos-delay="100">
          <img src="/ppt-images/internship-2.jpg" alt="LG CNS 산학 인턴십 수료식 - 단체 기념" />
          <figcaption>LG CNS 산학 인턴십 수료식 · 단체 기념</figcaption>
        </figure>
      </div>

      <div className="about-features-header" data-aos="fade-up">
        <h3>주요 연구개발 분야 <span className="title-highlight">Scope of R&amp;D</span></h3>
      </div>

      <div className="about-features">
        {features.map(feature => (
          <div
            key={feature.title}
            className="feature-card"
            data-aos="flip-left"
            {...(feature.aosDelay ? { 'data-aos-delay': feature.aosDelay } : {})}
          >
            <div className="feature-card-img">
              <img src={feature.img} alt={feature.title} />
            </div>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <p className="feature-clients"><i className="fas fa-building"></i> {feature.clients}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
