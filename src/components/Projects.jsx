import { projects, allReferences } from '../data/projectData'

function ProjectCard({ project, onProjectClick }) {
  return (
    <div
      className="project-card"
      data-aos="zoom-in"
      {...(project.aosDelay ? { 'data-aos-delay': project.aosDelay } : {})}
      onClick={() => onProjectClick(project)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <i className="fas fa-expand"></i>
        </div>
      </div>
      <div className="project-content">
        <div className="project-tag">{project.tag}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-period">
          <i className="fas fa-calendar-alt"></i> {project.period}
        </div>
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t.label}>
              <i className={t.icon}></i> {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function typeClass(type) {
  if (type === '대기업') return 'badge-enterprise'
  if (type === '스타트업') return 'badge-startup'
  if (type === '중소기업') return 'badge-sme'
  if (type === '공공기관') return 'badge-public'
  return ''
}

function Projects({ onProjectClick }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-up">
          수행 중인 <span className="title-highlight">주요 프로젝트</span>
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          현재 기업과 함께 진행 중인 AI 산학협력 프로젝트
        </p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard
            key={project.key}
            project={project}
            onProjectClick={onProjectClick}
          />
        ))}
      </div>

      {/* Key References 전체 이력 테이블 */}
      <div className="references-section" data-aos="fade-up">
        <h3 className="references-title">
          주요 연구개발 이력 <span className="title-highlight">Key References</span>
        </h3>
        <div className="references-table-wrap">
          <table className="references-table">
            <thead>
              <tr>
                <th>기업유형</th>
                <th>고객사명</th>
                <th>과제 내용</th>
                <th>과제기간</th>
              </tr>
            </thead>
            <tbody>
              {allReferences.map((ref, i) => (
                <tr key={i} className={ref.active ? 'ref-active' : ''}>
                  <td>
                    <span className={`ref-badge ${typeClass(ref.type)}`}>{ref.type}</span>
                  </td>
                  <td className="ref-company">{ref.company}</td>
                  <td className="ref-title">{ref.title}</td>
                  <td className="ref-period">
                    {ref.active
                      ? <><span className="active-dot"></span>{ref.period}</>
                      : ref.period}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Projects
