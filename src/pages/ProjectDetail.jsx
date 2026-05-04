import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const ACCENTS = [
  { color: '#3a7ca5', light: '#d6eaf8' },
  { color: '#6dbaaa', light: '#d4efe9' },
  { color: '#7c6dbf', light: '#e8e4f8' },
  { color: '#bf8a3a', light: '#f8ecd4' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) {
    return (
      <div className="detail-page">
        <div className="not-found">
          <div className="not-found-icon">🔍</div>
          <h2>Projeto não encontrado</h2>
          <p>O projeto que você procura não existe ou foi removido.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
            ← Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  const accent = ACCENTS[index % ACCENTS.length]

  return (
    <div className="detail-page">
      {/* ── Hero ────────────────────────────────── */}
      <section className="detail-hero" style={{ borderTop: `4px solid ${accent.color}` }}>
        <div className="container">
          <div className="detail-back">
            <Link to="/" className="btn btn-ghost">
              ← Voltar aos projetos
            </Link>
          </div>

          <div className="detail-meta">
            <span
              className="project-category"
              style={{ background: accent.light, borderColor: accent.color + '44', color: accent.color }}
            >
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-short">{project.shortDescription}</p>
        </div>
      </section>

      {/* ── Body ────────────────────────────────── */}
      <section className="detail-body">
        <div className="container">
          <div className="detail-grid">
            {/* Main content */}
            <div>
              <h2 className="detail-section-title">Sobre o projeto</h2>
              <p className="detail-description">{project.description}</p>

              <h2 className="detail-section-title">Desafio & solução</h2>
              <div className="detail-challenge">
                {project.challenge}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <div className="detail-card">
                <h3 className="detail-section-title">Tecnologias</h3>
                <div className="tech-list">
                  {project.techs.map((tech) => (
                    <div key={tech} className="tech-item">
                      <span className="tech-dot" style={{ background: accent.color }} />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-card">
                <h3 className="detail-section-title">Categoria</h3>
                <div className="detail-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div
                className="detail-card"
                style={{ background: accent.light, borderColor: accent.color + '33' }}
              >
                <p style={{ fontSize: '0.88rem', color: '#607080', lineHeight: 1.65 }}>
                  Este projeto foi desenvolvido pela equipe Rogab Solutions com foco em qualidade
                  e entrega ágil. Para saber mais, entre em contato.
                </p>
                <Link
                  to="/#contato"
                  className="btn btn-primary"
                  style={{ marginTop: '16px', background: accent.color, width: '100%', justifyContent: 'center' }}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = '/#contato'
                  }}
                >
                  Fale conosco
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
