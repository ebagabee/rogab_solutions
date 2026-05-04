import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const SERVICES = [
  {
    icon: '🖥️',
    name: 'Desenvolvimento Web e Mobile',
    desc: 'Do protótipo até a produção — sistemas web e apps mobile completos, escaláveis e bem construídos.',
  },
  {
    icon: '🔧',
    name: 'Sustentação de Sistemas',
    desc: 'Manutenção corretiva e evolutiva de sistemas existentes, sob demanda e com SLA definido.',
  },
  {
    icon: '🔒',
    name: 'Segurança',
    desc: 'Análise de vulnerabilidades, hardening e implementação de boas práticas de segurança em aplicações.',
  },
  {
    icon: '🤖',
    name: 'Chatbot',
    desc: 'Automação de atendimento com bots inteligentes integrados a IA generativa e fluxos personalizados.',
  },
  {
    icon: '⚡',
    name: 'Automações',
    desc: 'Eliminação de processos manuais repetitivos com scripts, integrações e fluxos automatizados.',
  },
]

const VALUES = [
  { icon: '🎯', title: 'Foco no resultado', desc: 'Entregamos o que importa: software que funciona e gera valor.' },
  { icon: '⏱️', title: 'Agilidade', desc: 'Ciclos curtos, entregas frequentes e tempo recorde.' },
  { icon: '💎', title: 'Qualidade absoluta', desc: 'Código limpo, testado e pronto para escalar.' },
  { icon: '🤝', title: 'Transparência', desc: 'Comunicação direta e honesta em cada etapa do projeto.' },
]

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>●</span> Software House
            </div>
            <h1 className="hero-title">
              Entregamos solução<br />
              em <em>tempo recorde</em><br />
              e com <em>qualidade absoluta.</em>
            </h1>
            <p className="hero-sub">
              Da ideia ao deploy — desenvolvemos sistemas web e mobile com foco em resultado,
              agilidade e código que dura.
            </p>
            <div className="hero-actions">
              <Link to="#projetos" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Ver Projetos →
              </Link>
              <Link to="#contato" className="btn btn-ghost" onClick={(e) => {
                e.preventDefault()
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre ────────────────────────────────────────── */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <span className="section-label">Sobre nós</span>
              <h2 className="section-title">Uma fábrica de software orientada a resultado</h2>
              <p className="section-sub">
                A Rogab Solutions nasceu com um propósito claro: transformar ideias em produtos digitais
                de alta qualidade, no menor tempo possível. Somos uma equipe técnica enxuta e focada,
                que entrega do MVP à produção com responsabilidade e transparência.
              </p>

              <div className="sobre-values" style={{ marginTop: '32px' }}>
                {VALUES.map((v) => (
                  <div key={v.title} className="value-card animate-on-scroll">
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sobre-visual">
              {[
                { icon: '🚀', number: '4+', label: 'Projetos entregues' },
                { icon: '📐', number: '100%', label: 'Do protótipo ao deploy' },
                { icon: '⚡', number: '5', label: 'Serviços especializados' },
              ].map((s) => (
                <div key={s.label} className="stat-card animate-on-scroll">
                  <div className="stat-icon">{s.icon}</div>
                  <div>
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Serviços ─────────────────────────────────────── */}
      <section className="section section-alt" id="servicos">
        <div className="container">
          <span className="section-label">O que fazemos</span>
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-sub">
            Atuamos em toda a cadeia de desenvolvimento de software — da concepção ao pós-lançamento.
          </p>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.name} className="service-card animate-on-scroll">
                <span className="service-icon">{s.icon}</span>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projetos ─────────────────────────────────────── */}
      <section className="section" id="projetos">
        <div className="container">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">Projetos desenvolvidos</h2>
          <p className="section-sub">
            Cada projeto é resultado de uma parceria real — problemas reais resolvidos com tecnologia bem aplicada.
          </p>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ──────────────────────────────────────── */}
      <section className="section section-alt" id="contato">
        <div className="container">
          <div className="contact-wrapper">
            <h2 className="contact-title">Tem um projeto em mente?</h2>
            <p className="contact-sub">
              Nos conte o que você precisa. Respondemos rápido e sem enrolação.
            </p>
            <a href="mailto:contato@rogabsolutions.com.br" className="contact-email">
              ✉️ contato@rogabsolutions.com.br
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
