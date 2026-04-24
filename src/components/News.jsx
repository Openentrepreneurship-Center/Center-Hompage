const newsItems = [
  {
    year: '2026',
    label: '히포크랏랩스 × 서강대 박현규 교수 연구실 AI 개발 MoU 체결',
    sub: '의료 STT/SOAP AI 기능 개발 및 고도화를 위한 업무협약 | 2026.04.01',
    img: '/ppt-images/image17.jpg',
    source: 'MoU',
    url: 'https://www.dailymedi.com/news/news_view.php?wr_id=935239',
    urlLabel: '데일리메디',
  },
  {
    year: '2026',
    label: 'LG CNS × 박현규 교수 연구팀 Agentic AI 평가 솔루션 공동 개발',
    sub: 'Agentic AI 평가 솔루션 아이디어톤 | 2026.02.25',
    img: '/ppt-images/lgcns-ideathon.png',
    source: 'LG CNS',
    imgPosition: 'center center',
  },
  {
    year: '2026',
    label: '국내외 AI 산업동향 인터뷰 — "AI 없는 개발은 침몰하는 배"',
    sub: '디지털데일리 | 박현규 서강대학교 기술경영전문대학원 교수',
    img: '/ppt-images/image14.jpg',
    source: '디지털데일리',
    url: 'https://www.ddaily.co.kr/page/view/2026031715504122119',
    urlLabel: '디지털데일리',
  },
  {
    year: '2025',
    label: '더그림엔터테인먼트 × 서강대 박현규 교수 연구실 AI 개발 MoU 체결',
    sub: 'K-웹툰 맞춤형 AI 시스템 개발 및 학습데이터 구축 | 2025.12.12',
    img: '/ppt-images/image15.jpg',
    source: 'MoU',
    url: 'https://marketin.edaily.co.kr/News/Read?newsId=04687126645387256',
    urlLabel: '이데일리',
  },
  {
    year: '2025',
    label: 'LG CNS AI 생산성 공동연구 언론 보도 — 개발 생산성 26% 향상 검증',
    sub: 'ZDNET Korea | "AI 개발툴도 강하다…LG CNS, AIND로 엔터프라이즈 승부수" | 2026.02.11',
    img: '/ppt-images/image12.jpg',
    source: 'ZDNET Korea',
    url: 'https://zdnet.co.kr/view/?no=20260211100416',
    urlLabel: 'ZDNET',
    extraLinks: [
      { label: '다음뉴스', url: 'https://v.daum.net/v/UOVPdekLYc' },
      { label: '디지털데일리', url: 'https://www.ddaily.co.kr/page/view/2026021110073163811' },
    ],
  },
  {
    year: '2025',
    label: '현대모비스 스마트 캐빈 AI 기술기획 수주 및 AI 교육 수행',
    sub: '인공지능 공동창업자 과정 | 서강대학교 STARTIUM',
    img: '/ppt-images/image13.jpeg',
    source: '현대모비스',
  },
]

function News() {
  return (
    <section id="news" className="news-section">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-up">
          뉴스룸 <span className="title-highlight">News &amp; Press</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          센터의 최신 소식과 언론 보도
        </p>
      </div>

      <div className="news-grid">
        {newsItems.map((item, i) => {
          const CardTag = item.url ? 'a' : 'div'
          const cardProps = item.url
            ? {
                href: item.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {}
          return (
            <CardTag
              key={i}
              className={`news-card${item.url ? ' news-card-link' : ''}`}
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
              {...cardProps}
            >
              <div className="news-card-img">
                <img
                  src={item.img}
                  alt={item.label}
                  style={item.imgPosition ? { objectPosition: item.imgPosition } : {}}
                />
                <div className="news-card-overlay">
                  <span className="news-source-badge">{item.source}</span>
                </div>
              </div>
              <div className="news-card-body">
                <span className="news-year-tag">{item.year}</span>
                <p className="news-label">{item.label}</p>
                <p className="news-sub">{item.sub}</p>
                {(item.urlLabel || item.extraLinks) && (
                  <div className="news-links">
                    {item.urlLabel && (
                      <span className="news-link-chip news-link-primary">
                        <i className="fas fa-external-link-alt"></i>
                        {item.urlLabel}
                      </span>
                    )}
                    {item.extraLinks &&
                      item.extraLinks.map((lnk) => (
                        <a
                          key={lnk.url}
                          href={lnk.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="news-link-chip"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          {lnk.label}
                        </a>
                      ))}
                  </div>
                )}
              </div>
            </CardTag>
          )
        })}
      </div>
    </section>
  )
}

export default News
