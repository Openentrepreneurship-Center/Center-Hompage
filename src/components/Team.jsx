import { team } from '../data/teamData'

function TeamCard({ member }) {
  return (
    <div
      className="team-card"
      data-aos="fade-up"
      {...(member.aosDelay ? { 'data-aos-delay': member.aosDelay } : {})}
    >
      <div className="team-image">
        <img src={member.image} alt={member.name} />
        <div className="team-overlay">
          <div className="team-social">
            <a href="#"><i className="fas fa-envelope"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fas fa-graduation-cap"></i></a>
          </div>
        </div>
      </div>
      <div className="team-info">
        <h3 className="team-name">{member.name}</h3>
        <p className="team-position">{member.position}</p>
        <p className="team-focus">{member.focus}</p>
        <div className="team-tags">
          {member.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Team() {
  return (
    <section id="team" className="team-section">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-up">
          <span className="title-highlight">Research</span> Team
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          기술 혁신을 이끄는 전문가 팀
        </p>
      </div>

      <div className="team-grid">
        {team.map(member => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}

export default Team
