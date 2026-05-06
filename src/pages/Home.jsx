import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

const SHOW_CONTACT = true
const WHATSAPP_URL = 'https://wa.me/5582993707473'

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
              {SHOW_CONTACT && (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Fale conosco
                </a>
              )}
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
      {SHOW_CONTACT && (
        <section className="section section-alt" id="contato">
          <div className="container">
            <div className="contact-wrapper">
              <h2 className="contact-title">Tem um projeto em mente?</h2>
              <p className="contact-sub">
                Nos conte o que você precisa. Respondemos rápido e sem enrolação.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +55 (82) 99370-7473
              </a>
              <a
                href="mailto:rogabsolutions@gmail.com"
                className="contact-email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                rogabsolutions@gmail.com
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
