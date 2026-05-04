import { Link } from 'react-router-dom'

const ACCENTS = [
  { bar: '#3a7ca5', iconBg: '#d6eaf8', emoji: '💡' },
  { bar: '#6dbaaa', iconBg: '#d4efe9', emoji: '🏡' },
  { bar: '#7c6dbf', iconBg: '#e8e4f8', emoji: '📊' },
  { bar: '#bf8a3a', iconBg: '#f8ecd4', emoji: '🎓' },
]

export default function ProjectCard({ project, index }) {
  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <article className="project-card animate-on-scroll">
      <div className="project-card-accent" style={{ background: accent.bar }} />

      <div className="project-card-header">
        <div className="project-card-icon" style={{ background: accent.iconBg }}>
          {accent.emoji}
        </div>
        <span className="project-category">{project.category}</span>
      </div>

      <div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-short-desc">{project.shortDescription}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-card-footer">
        <Link to={`/projetos/${project.slug}`} className="btn btn-outline">
          Ver mais →
        </Link>
      </div>
    </article>
  )
}
