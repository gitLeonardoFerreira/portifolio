import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { projects, findProject } from './data/projects.js'
import { portraits } from './data/portraits.js'
import { buildWhatsAppUrl, CONTACT_EMAIL } from './lib/contact.js'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h16m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloudMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 74 42" fill="none" aria-hidden="true">
      <path
        d="M3 31c4-9 12-14 21-12C28 9 37 4 46 9c5 3 8 7 9 12 8-1 14 3 16 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M11 36h51" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function HashScroll() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
  return null
}

function Header() {
  const { pathname } = useLocation()
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname !== '/') return
    function updateActive() {
      let current = 'inicio'
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.42) {
          current = id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [pathname])

  return (
    <header className="site-header">
      <div className="header-inner site-container">
        <Link
          className="brand"
          to="/#inicio"
          aria-label="léo. — Leonardo Barbosa, voltar ao início"
          onClick={() => setOpen(false)}
        >
          <CloudMark className="brand-cloud" />
          <span>
            léo<span className="brand-dot">.</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={() => setOpen(false)}
              className={pathname === '/' && active === id ? 'is-active' : ''}
              aria-current={pathname === '/' && active === id ? 'location' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" to="/#contato">
          Vamos conversar <ArrowIcon diagonal />
        </Link>
      </div>
    </header>
  )
}

function Reveal({ children, className = '', as = 'div' }) {
  const Element = as
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      node?.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <Element ref={ref} className={`reveal ${className}`}>
      {children}
    </Element>
  )
}

function OrbitArt() {
  const [perspective, setPerspective] = useState(0)
  const [turning, setTurning] = useState(false)
  const current = portraits[perspective]
  const next = portraits[(perspective + 1) % portraits.length]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') setTurning(true)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  function turnPortrait() {
    if (turning) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPerspective((index) => (index + 1) % portraits.length)
      return
    }
    setTurning(true)
  }

  function finishTurn(event) {
    if (event.propertyName !== 'transform' || event.target !== event.currentTarget) return
    setPerspective((index) => (index + 1) % portraits.length)
    setTurning(false)
  }

  return (
    <div
      className="orbit-art has-portrait"
      data-perspective={perspective}
      aria-label="Retratos interativos de Leonardo"
    >
      <span className="sky-sun" aria-hidden="true" />
      <svg className="sky-cloud" viewBox="0 0 620 410" fill="none" aria-hidden="true">
        <path
          d="M110 375c-48 0-85-35-85-79 0-42 33-75 75-79 8-75 63-128 133-128 45 0 87 20 114 55 21-16 45-24 73-24 69 0 124 54 124 121 31 12 51 41 51 72 0 35-29 62-65 62H110Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="portrait-stage">
        <div
          className={`portrait-turn ${turning ? 'is-turning' : ''}`}
          onTransitionEnd={finishTurn}
        >
          <img
            className="orbit-portrait portrait-front"
            src={current.src}
            alt={current.alt}
            fetchPriority={perspective === 0 ? 'high' : undefined}
          />
          <img className="orbit-portrait portrait-back" src={next.src} alt="" />
        </div>
      </div>
      <div className="orbit-controls">
        <div className="orbit-caption">
          <span>{String(perspective + 1).padStart(2, '0')} / 03 POSES</span>
          <strong>{current.label}</strong>
        </div>
        <button
          type="button"
          className="orbit-next"
          aria-label={`Mudar pose, atual: ${current.label}`}
          disabled={turning}
          onClick={turnPortrait}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="hero-stars" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="live-dot" /> DISPONÍVEL PARA ESTÁGIO · SÃO PAULO / REMOTO
          </div>
          <h1 className="hero-title">
            <span>LEONARDO</span>
            <span>
              BARBOSA<span className="hero-period">.</span>
            </span>
          </h1>
          <p className="hero-kicker">
            Ideias no ar. <em>Código no mundo real.</em>
          </p>
          <p className="hero-description">
            Estudante de Engenharia de Software. Crio soluções em Python, web e IA, com interesse
            crescente em cloud security.
          </p>
          <div className="hero-actions">
            <Link to="/#projetos" className="button button-primary">
              Conheça meus projetos <ArrowIcon diagonal />
            </Link>
          </div>
        </div>
        <OrbitArt />
      </div>
      <div className="site-container hero-foot">
        <span>PORTFÓLIO / 2026</span>
        <span>
          ROLE PARA EXPLORAR <span className="scroll-line" />
        </span>
      </div>
    </section>
  )
}

function SectionHeading({ index, label, title, intro }) {
  return (
    <div className="section-heading">
      <span className="section-index">
        {index} / {label}
      </span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function ProjectVisual({ project }) {
  if (project.slug === 'rastro')
    return (
      <div className="visual visual-rastro" aria-hidden="true">
        <span className="visual-label">FLUXO / 001</span>
        <div className="rastro-line">
          <span className="rastro-node node-on">
            01<small>PEDIDO</small>
          </span>
          <span className="rastro-connector" />
          <span className="rastro-node node-on">
            02<small>ACEITE</small>
          </span>
          <span className="rastro-connector" />
          <span className="rastro-node">
            03<small>CONFIRMAÇÃO</small>
          </span>
        </div>
        <div className="rastro-ticket">
          <span className="ticket-status">
            <i /> EM ANDAMENTO
          </span>
          <strong>
            Próximo passo,
            <br />
            sempre visível.
          </strong>
          <span className="ticket-id"># RST — 042</span>
        </div>
      </div>
    )
  if (project.slug === 'smart-file-organizer')
    return (
      <div className="visual visual-organizer" aria-hidden="true">
        <span className="visual-label">AUTOMAÇÃO / 002</span>
        <div className="folder-card folder-card-back">
          <span>downloads/</span>
          <strong>42 arquivos</strong>
        </div>
        <div className="folder-card folder-card-front">
          <span>organizados/</span>
          <strong>
            ✓ documentos
            <br />✓ imagens
            <br />✓ código
          </strong>
        </div>
        <div className="organizer-arrow">
          <ArrowIcon diagonal />
        </div>
        <span className="visual-bottom-label">DRY RUN: PRÉVIA ANTES DE MOVER</span>
      </div>
    )
  return (
    <div className="visual visual-freight" aria-hidden="true">
      <span className="visual-label">INTEGRAÇÃO / 003</span>
      <div className="freight-route">
        <span className="route-point route-start" />
        <span className="route-dash" />
        <span className="route-point route-end" />
      </div>
      <div className="freight-value">
        <small>DISTÂNCIA + TRANSPORTE</small>
        <strong>R$ ?</strong>
      </div>
      <span className="visual-bottom-label">REACT → API → RESULTADO</span>
    </div>
  )
}

function ProjectCard({ project }) {
  function moveGlow(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }
  return (
    <Reveal as="article" className={`project-card project-card-${project.color}`}>
      <Link
        to={`/projetos/${project.slug}`}
        className="project-card-link"
        onPointerMove={moveGlow}
        aria-label={`Ver estudo de caso do projeto ${project.title}`}
      >
        <div className="project-card-copy">
          <span className="project-number">
            {project.number} <span className="project-separator" /> {project.eyebrow}
          </span>
          <div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
          <div className="project-bottom">
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="round-arrow">
              <ArrowIcon diagonal />
            </span>
          </div>
        </div>
        <ProjectVisual project={project} />
      </Link>
    </Reveal>
  )
}

function ProjectsSection() {
  return (
    <section id="projetos" className="projects-section section-anchor">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="01"
            label="O QUE EU CONSTRUO"
            title={
              <>
                Projetos com
                <br />
                <em>propósito.</em>
              </>
            }
            intro="Da organização de arquivos a fluxos de equipe: cada projeto é uma chance de transformar uma pergunta em software útil."
          />
        </Reveal>
        <div className="project-stack">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="projects-outro">
          Cada linha tem uma história. <span>Explore as decisões por trás dos projetos.</span>
        </p>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="sobre" className="about-section section-anchor">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            index="02"
            label="SOBRE MIM"
            title={
              <>
                Curiosidade que
                <br />
                <em>vira construção.</em>
              </>
            }
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-statement">
            <CloudMark className="about-cloud" />
            <p>
              Gosto de entender <em>como as coisas funcionam</em> — e de encontrar um jeito mais
              claro, seguro e útil de fazê-las acontecer.
            </p>
          </Reveal>
          <Reveal className="about-details">
            <p>
              Sou Leonardo Barbosa, estudante do 2º semestre de Engenharia de Software na FIAP, em
              São Paulo. Tenho me dedicado a backend Python, aplicações web e automação. Também
              estudo IA e caminho para a área de cloud security.
            </p>
            <p>
              Antes do código, trabalhei coordenando entregas e operações criativas. Essa
              experiência me ensinou a lidar com prioridades, colaborar e transformar demandas
              abertas em próximos passos concretos — algo que hoje levo para o desenvolvimento de
              software.
            </p>
            <div className="about-facts">
              <div>
                <span>BASE</span>
                <strong>São Paulo, SP</strong>
              </div>
              <div>
                <span>FORMAÇÃO</span>
                <strong>Engenharia de Software · FIAP</strong>
              </div>
              <div>
                <span>OBJETIVO</span>
                <strong>Estágio · presencial, híbrido ou remoto</strong>
              </div>
            </div>
            <a
              className="text-link about-resume"
              href={`${import.meta.env.BASE_URL}Leonardo_Barbosa_Curriculo.pdf`}
              download
            >
              Baixar currículo <ArrowIcon diagonal />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section className="journey-section">
      <div className="site-container journey-grid">
        <Reveal>
          <span className="section-index">03 / TRAJETÓRIA</span>
          <h2>
            O próximo
            <br />
            <em>horizonte.</em>
          </h2>
          <p>
            Uma base de engenharia, projetos práticos e uma direção de estudo: construir sistemas
            que sejam cada vez mais confiáveis.
          </p>
        </Reveal>
        <div className="journey-list">
          <Reveal as="article" className="journey-item">
            <span>AGORA</span>
            <div>
              <h3>Engenharia de Software</h3>
              <p>FIAP · 2º semestre · conclusão prevista em 2029</p>
            </div>
            <span className="journey-symbol">
              <ArrowIcon diagonal />
            </span>
          </Reveal>
          <Reveal as="article" className="journey-item">
            <span>PRÁTICA</span>
            <div>
              <h3>Backend e automação</h3>
              <p>Python, APIs, dados e interfaces que ajudam a resolver problemas reais.</p>
            </div>
            <span className="journey-symbol">
              <ArrowIcon diagonal />
            </span>
          </Reveal>
          <Reveal as="article" className="journey-item">
            <span>DIREÇÃO</span>
            <div>
              <h3>Cloud security</h3>
              <p>
                Interesse em nuvem, proteção de sistemas e pensamento de segurança desde o início.
              </p>
            </div>
            <span className="journey-symbol">
              <ArrowIcon diagonal />
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const url = buildWhatsAppUrl({ name, company, message })
    window.location.assign(url)
  }

  return (
    <section id="contato" className="contact-section section-anchor">
      <div className="contact-glow" aria-hidden="true" />
      <div className="site-container contact-grid">
        <Reveal className="contact-copy">
          <span className="section-index">04 / CONTATO</span>
          <h2>
            Uma boa ideia
            <br />
            começa com
            <br />
            <em>uma conversa.</em>
          </h2>
          <p>
            Tem uma oportunidade de estágio ou um projeto para discutir? Me conte o que você está
            construindo.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
            {CONTACT_EMAIL} <ArrowIcon diagonal />
          </a>
        </Reveal>
        <Reveal className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-top">
              <span>ENVIAR UMA MENSAGEM</span>
              <CloudMark />
            </div>
            <label htmlFor="contact-name">Seu nome</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Como posso te chamar?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={80}
              required
            />
            <label htmlFor="contact-company">
              Empresa <span>(opcional)</span>
            </label>
            <input
              id="contact-company"
              name="organization"
              autoComplete="organization"
              placeholder="De onde você fala?"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              maxLength={100}
            />
            <label htmlFor="contact-message">Sua mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Conte um pouco sobre a oportunidade ou sua ideia..."
              rows="4"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={1200}
              required
            />
            <button type="submit" className="button button-primary form-submit">
              Continuar no WhatsApp <ArrowIcon diagonal />
            </button>
            <p className="form-note">
              A conversa abre no WhatsApp para você revisar e enviar a mensagem.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <Link className="footer-brand" to="/#inicio">
          léo<span>.</span>
        </Link>
        <p>Feito com curiosidade, código e um pouco de céu.</p>
        <div className="footer-links">
          <a
            href="https://github.com/gitLeonardoFerreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowIcon diagonal />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-barbosa-102615-"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowIcon diagonal />
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}>
            E-mail <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="site-container footer-base">
        <span>© {new Date().getFullYear()} LEONARDO BARBOSA</span>
        <Link to="/#inicio">VOLTAR AO TOPO</Link>
      </div>
    </footer>
  )
}

function Home() {
  useEffect(() => {
    document.title = 'Leonardo Barbosa — Engenharia de Software'
  }, [])
  return (
    <>
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const project = findProject(slug)
  useEffect(() => {
    document.title = project
      ? `${project.title} — Leonardo Barbosa`
      : 'Projeto não encontrado — Leonardo Barbosa'
  }, [project])
  if (!project) return <NotFound />
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  return (
    <>
      <main className="case-study">
        <div className="case-hero">
          <div className="site-container">
            <Link className="back-link" to="/#projetos">
              ← Voltar aos projetos
            </Link>
            <div className="case-heading">
              <span className="eyebrow">
                {project.number} / {project.eyebrow}
              </span>
              <h1>
                {project.title}
                <span>.</span>
              </h1>
              <p>{project.description}</p>
            </div>
            <div className="case-meta">
              <div>
                <span>TIPO</span>
                <strong>{project.eyebrow.split(' · ')[0]}</strong>
              </div>
              <div>
                <span>TECNOLOGIAS</span>
                <strong>{project.tags.join(' · ')}</strong>
              </div>
              <div>
                <span>ESTADO</span>
                <strong>{project.status}</strong>
              </div>
            </div>
            <ProjectVisual project={project} />
          </div>
        </div>
        <div className="site-container case-content">
          <div className="case-intro">
            <span className="section-index">VISÃO GERAL</span>
            <p>{project.summary}</p>
            <a
              className="button button-outline"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código no GitHub <ArrowIcon diagonal />
            </a>
          </div>
          <div className="case-story">
            <article className="case-story-row">
              <span>01 / O PROBLEMA</span>
              <div>
                <h2>O ponto de partida.</h2>
                <p>{project.problem}</p>
              </div>
            </article>
            <article className="case-story-row">
              <span>02 / A SOLUÇÃO</span>
              <div>
                <h2>O que construí.</h2>
                <p>{project.solution}</p>
                <div
                  className="journey-flow"
                  aria-label={`Etapas do projeto: ${project.journey.join(', ')}`}
                >
                  {project.journey.map((step, index) => (
                    <span key={step}>
                      <small>{String(index + 1).padStart(2, '0')}</small>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            <article className="case-story-row">
              <span>03 / DECISÕES</span>
              <div>
                <h2>Por dentro do projeto.</h2>
                <div className="decision-list">
                  {project.decisions.map((decision) => (
                    <div key={decision.title}>
                      <h3>{decision.title}</h3>
                      <p>{decision.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="case-story-row">
              <span>04 / APRENDIZADO</span>
              <div>
                <h2>O que levo daqui.</h2>
                <p>{project.learning}</p>
                <p className="case-note">{project.note}</p>
              </div>
            </article>
          </div>
        </div>
        <div className="case-next">
          <div className="site-container">
            <span>PRÓXIMO PROJETO</span>
            <Link to={`/projetos/${next.slug}`}>
              {next.title} <ArrowIcon diagonal />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada — Leonardo Barbosa'
  }, [])
  return (
    <>
      <main className="not-found site-container">
        <span className="section-index">404 / SEM SINAL</span>
        <h1>Essa página saiu de órbita.</h1>
        <p>Vamos voltar para um caminho conhecido?</p>
        <Link className="button button-primary" to="/#inicio">
          Voltar ao início <ArrowIcon diagonal />
        </Link>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <HashScroll />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <div id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
