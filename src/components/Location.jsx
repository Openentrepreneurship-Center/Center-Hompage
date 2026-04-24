function Location() {
  return (
    <section id="location" className="location-section">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-highlight">Location</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          찾아오시는 길
        </p>
      </div>

      <div className="location-content">
        <div className="location-map" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5949887583247!2d126.93657731559397!3d37.55093197980199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98f2f2e1a3a3%3A0x3e9f38f8c7c5b7c1!2z7ISc6rCV64yA7ZWZ6rWQIOuwseuyhOujqCAzNQ!5e0!3m2!1sko!2skr!4v1625481234567!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="서강대학교 위치"
          />
        </div>

        <div className="location-info" data-aos="fade-left">
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>주소</h3>
              <p>
                04107 서울특별시 마포구 백범로 35<br />
                서강대학교 BW관 502호
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-subway"></i>
            </div>
            <div className="info-content">
              <h3>대중교통</h3>
              <p>
                경의·중앙선 서강대역 1번 출구 도보 5분<br />
                지하철 2호선 신촌역 1번 출구 도보 15분<br />
                버스: 서강대학교 정문 하차
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>연락처</h3>
              <p>
                이메일: jinoo0306@gmail.com<br />
                연락처: 010-9936-4161
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
