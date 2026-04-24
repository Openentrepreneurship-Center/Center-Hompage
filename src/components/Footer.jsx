const scrollTo = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            <img src="/ppt-images/image4-logo.png" alt="오픈앙트레프레너십센터 로고" className="footer-logo-img" />
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li><a href="#about" onClick={e => scrollTo(e, '#about')}>센터 소개</a></li>
                <li><a href="#team" onClick={e => scrollTo(e, '#team')}>연구팀</a></li>
                <li><a href="#projects" onClick={e => scrollTo(e, '#projects')}>프로젝트</a></li>
                <li><a href="#location" onClick={e => scrollTo(e, '#location')}>오시는 길</a></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Centre for Open Entrepreneurship, Sogang University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
