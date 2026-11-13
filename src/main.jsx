import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import './styles.css';

const routes = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'sobre-mi', label: 'Sobre mí', href: '/sobre-mi' },
  { id: 'proyectos', label: 'Proyectos', href: '/proyectos' },
  { id: 'trayectoria', label: 'Trayectoria', href: '/trayectoria' },
  { id: 'contacto', label: 'Contacto', href: '/contacto' },
];

const projects = [
  { name: 'Maczanita', type: 'Experiencia laboral · Proyecto privado', description: 'Proyecto interno realizado durante mi trabajo en Maczanita. La demo no es pública por las políticas de la empresa.', stack: ['Sistema interno', 'Asistente IA', 'Acceso restringido'], gallery: [{ src: '/images/maczanita-project.png', label: 'Acceso' }, { src: '/images/maczanita-dashboard.png', label: 'Dashboard' }, { src: '/images/maczanita-assistant.png', label: 'Asistente IA' }], color: 'mint', icon: 'workflow', private: true },
  { name: 'JOSETEC', type: 'Sistema de gestión', description: 'Plataforma para coordinar reparaciones electrónicas: órdenes de servicio, roles, seguimiento de estado y comunicación con clientes.', stack: ['Flask', 'SQLAlchemy', 'SQLite', 'JavaScript'], url: 'https://projectjtec-1.onrender.com/', color: 'blue', icon: 'workflow' },
  { name: 'Gestión de reservas', type: 'Aplicación web · Full stack', description: 'Flujo de registro y gestión de reservas pensado para pequeños negocios y profesionales independientes.', stack: ['Python', 'Flask', 'SQLite', 'JavaScript'], url: 'https://sistema-de-reservas-16rb.onrender.com/', color: 'mint', icon: 'calendar' },
  { name: 'LivePersona', type: 'Simulador interactivo', description: 'Espacio privado de reflexión personal para registrar momentos, reconocer temas importantes y explorar ejercicios breves de bienestar. Las notas se guardan en el dispositivo del usuario.', stack: ['React', 'Tailwind CSS', 'JavaScript'], url: 'https://live-personasimulator.netlify.app/', color: 'mint', icon: 'sliders' },
  { name: 'Toque Mágico', type: 'Juego web', description: 'Juego arcade de reflejos con rondas cronometradas, objetivos dinámicos y una interfaz diseñada para jugar desde el navegador.', stack: ['React', 'Tailwind CSS', 'JavaScript'], url: 'https://magic-touch-game.netlify.app/', color: 'orange', icon: 'spark' },
  { name: 'PERFECT ESTETIC', type: 'Sitio para negocio real', description: 'Presencia digital para servicios de medicina estética y boutique de cabello, organizada para facilitar el descubrimiento y contacto.', stack: ['JavaScript', 'HTML', 'Tailwind CSS'], url: 'https://medicina-perfect-estetic.vercel.app/', color: 'violet', icon: 'layers' },
  { name: 'SaludPlus', type: 'Bienestar personal', description: 'Aplicación para registrar y visualizar hábitos de bienestar como el sueño, la actividad física y el peso.', stack: ['Python', 'Flask', 'SQLite', 'JavaScript'], url: 'https://saludplus-bozc.onrender.com/', color: 'blue', icon: 'activity' },
];

const skills = [
  { name: 'JavaScript', group: 'Frontend', level: 'Avanzado' }, { name: 'React', group: 'Frontend', level: 'Intermedio' },
  { name: 'Tailwind CSS', group: 'Frontend', level: 'Intermedio' }, { name: 'Python', group: 'Backend', level: 'Intermedio' },
  { name: 'Flask', group: 'Backend', level: 'Intermedio' }, { name: 'SQLAlchemy', group: 'Backend', level: 'Intermedio' },
  { name: 'MySQL', group: 'Datos', level: 'Intermedio' }, { name: 'SQLite', group: 'Datos', level: 'Intermedio' },
  { name: 'SQL Server', group: 'Datos', level: 'Básico' }, { name: 'Java', group: 'Lenguajes', level: 'Básico' },
];

const certificates = [
  { name: 'Hackathon BCP 2026', detail: 'Tercera edición · Junio 2026', image: '/images/hackathon-bcp-2026.jpg' },
  { name: 'Hackathon RIMAC 2025', detail: 'Healthcare & Data · Nov 2025', image: '/images/Hackaton.png' },
  { name: 'Cisco: Introducción a Redes', detail: 'Cisco · Jul 2025', image: '/images/CCNA.jpeg' },
  { name: 'Cisco: Introducción a la Ciencia de Datos', detail: 'Cisco · Nov 2025', image: '/images/CCNA2.png' },
];

const pdf = '/assets/Currículum Vitae CV_Jorge Aparicio.pdf';

function Icon({ name, size = 20, strokeWidth = 1.7 }) {
  const paths = {
    arrow: <><path d="M7 17 17 7M7 7h10v10" /></>,
    arrowRight: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></>,
    workflow: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M10 6h4a2 2 0 0 1 2 2v6"/><path d="M14 18h-4a2 2 0 0 1-2-2v-2"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01"/></>,
    sliders: <><path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 6h4"/></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.1L19 22l-1.1-2.9L15 18l2.9-1.2L19 14Z"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    activity: <><path d="M3 12h4l3-8 4 16 3-8h4"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.7 1.2 15 3a13 13 0 0 0-7 0C5.3 1.2 3.2 1.5 3.2 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 1.7 8.7c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 7 18.1V22"/></>,
    linkedin: <><path d="M4 9v11M4 4v.01M9 20v-6.2a4 4 0 0 1 8 0V20M9 10v10"/><rect x="2" y="2" width="20" height="20" rx="4"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 19v2h16v-2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></>,
    terminal: <><path d="m4 17 6-5-6-5m8 10h8"/></>,
    file: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M13 2v7h7M8 15h8M8 18h5"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.code}</svg>;
}

function Header({ active }) {
  const [open, setOpen] = useState(false);
  return <header className="topbar"><div className="topbar-inner">
    <a className="brand" href="/" aria-label="Jorge Aparicio, inicio"><span className="brand-mark">JA<span>.</span></span><span className="brand-label">JORGE APARICIO<small>SOFTWARE ENGINEERING</small></span></a>
    <nav className="nav-desktop" aria-label="Navegación principal">{routes.map((r) => <a key={r.id} href={r.href} className={active === r.id ? 'active' : ''}>{r.label}</a>)}</nav>
    <a href="/contacto" className="topbar-cta">Hablemos <Icon name="arrow" size={16} /></a>
    <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}><Icon name={open ? 'close' : 'menu'} size={22} /></button>
  </div>{open && <nav className="nav-mobile" aria-label="Navegación móvil">{routes.map((r) => <a key={r.id} href={r.href} onClick={() => setOpen(false)}>{r.label}<Icon name="arrow" size={16} /></a>)}</nav>}</header>;
}

function Eyebrow({ children }) { return <div className="eyebrow"><span />{children}</div>; }
function SectionHeading({ eyebrow, title, copy }) { return <div className="section-heading"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }

function ProjectCard({ project, featured = false, showGallery = true }) {
  const [preview, setPreview] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState(0);
  useEffect(() => {
    if (!preview) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') setPreview(null); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [preview]);
  return <article className={`project-card tone-${project.color} ${featured ? 'project-featured' : ''} ${project.gallery ? 'project-maczanita' : ''}`}>
    {showGallery && project.gallery && <div className="project-gallery"><button type="button" className="gallery-screen" onClick={() => setPreview(project.gallery[selectedScreen])} aria-label={`Ampliar captura: ${project.gallery[selectedScreen].label}`}><img src={project.gallery[selectedScreen].src} alt={`Maczanita · ${project.gallery[selectedScreen].label}`} loading="lazy" decoding="async"/><span><Icon name="arrow" size={14}/></span></button><div className="gallery-tabs" role="tablist" aria-label="Capturas del proyecto Maczanita">{project.gallery.map((image,index)=><button type="button" role="tab" aria-selected={selectedScreen===index} className={selectedScreen===index?'selected':''} key={image.src} onClick={()=>setSelectedScreen(index)}>{image.label}</button>)}</div></div>}
    <div className="project-details">
    <div className="project-top"><span className="project-symbol"><Icon name={project.icon} size={22}/></span><span className="project-type">{project.type}</span>{project.url ? <a className="project-open" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}><Icon name="arrow" size={17}/></a> : <span className="project-open private-mark" title="Proyecto privado"><Icon name="lock" size={15}/></span>}</div>
    <h3>{project.name}</h3><p>{project.description}</p>
    <div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
    <div className="project-links">{project.url ? <><a className="text-link" href={project.url} target="_blank" rel="noreferrer">Abrir demo <Icon name="arrowRight" size={16}/></a><a className="text-link code-link" href="https://github.com/Japaricio2004" target="_blank" rel="noreferrer"><Icon name="github" size={15}/> Ver código</a></> : showGallery ? <span className="private-label"><Icon name="lock" size={14}/> Acceso restringido por confidencialidad</span> : <a className="text-link" href="/proyectos">Ver desarrollo y capturas en Proyectos <Icon name="arrowRight" size={16}/></a>}</div>
    </div>
    {preview && createPortal(<div className="image-viewer" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setPreview(null); }}><div className="image-viewer-panel" role="dialog" aria-modal="true" aria-label={`Captura: ${preview.label}`}><button type="button" className="image-viewer-close" onClick={() => setPreview(null)} aria-label="Cerrar imagen"><Icon name="close" size={20}/></button><img src={preview.src} alt={`Captura del proyecto Maczanita: ${preview.label}`}/><span>{preview.label} · Maczanita</span></div></div>, document.body)}
  </article>;
}

function Home() {
  return <main className="page-shell home-page">
    <section className="hero">
      <div className="hero-copy"><Eyebrow>PORTAFOLIO · LIMA, PERÚ</Eyebrow><h1>Construyo software<br/><span>con intención.</span></h1><p className="hero-lead">Soy Jorge Aparicio, estudiante de Ingeniería de Software. Diseño y desarrollo productos web que convierten necesidades reales en soluciones claras, útiles y bien estructuradas.</p>
        <div className="hero-actions"><a className="button button-primary" href="/proyectos">Explorar proyectos <Icon name="arrowRight"/></a><a className="button button-quiet" href="/contacto">Conversemos <Icon name="arrow" size={17}/></a></div>
        <div className="hero-meta"><span className="availability"><i/>Abierto a oportunidades</span><span>Noveno ciclo · USIL</span></div>
      </div>
      <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="code-window"><div className="window-bar"><span/><span/><span/><small>jorge.ts</small></div><pre><code><span className="code-purple">const</span> <span className="code-blue">engineer</span> = {'{'}<br/>  focus: <span className="code-green">'software'</span>,<br/>  mindset: <span className="code-green">'systems'</span>,<br/>  build: <span className="code-yellow">(idea)</span> =&gt; solution,<br/>{'}'};<br/><br/><span className="code-comment">// siempre aprendiendo</span><br/><span className="code-purple">while</span> (curious) {'{'}<br/>  engineer.build();<br/>{'}'}</code></pre><div className="window-status"><span><i/> All systems curious</span><span>UTF-8</span></div></div><div className="orbit-label orbit-label-a"><Icon name="code" size={16}/>Full stack</div><div className="orbit-label orbit-label-b"><Icon name="activity" size={16}/>Data minded</div></div>
    </section>
    <div className="ticker"><span>DESARROLLO WEB</span><b>✳</b><span>BASES DE DATOS</span><b>✳</b><span>DISEÑO DE SISTEMAS</span><b>✳</b><span>APRENDIZAJE CONTINUO</span></div>
    <section className="content-section"><SectionHeading eyebrow="TRABAJO SELECCIONADO" title="Ideas convertidas en producto" copy="Proyectos donde la lógica, la experiencia de usuario y el propósito trabajan juntos."/><div className="project-grid featured-grid">{projects.filter(p => ['JOSETEC','Maczanita','PERFECT ESTETIC'].includes(p.name)).map((p) => <ProjectCard key={p.name} project={p} featured={false} showGallery={false}/>)}</div><a className="section-link" href="/proyectos">Ver todos los proyectos <Icon name="arrowRight"/></a></section>
    <section className="principles-section"><div><Eyebrow>MI FORMA DE TRABAJAR</Eyebrow><h2>Buen software empieza<br/>con buenas preguntas.</h2></div><div className="principles-grid"><article><span>01</span><h3>Entender el problema</h3><p>Antes de elegir herramientas, aclaro quién lo necesita y qué debe mejorar.</p></article><article><span>02</span><h3>Diseñar el sistema</h3><p>Modelo datos, flujos y componentes para que cada pieza tenga un propósito.</p></article><article><span>03</span><h3>Iterar con criterio</h3><p>Construyo, valido y refino con atención a la claridad, el rendimiento y el detalle.</p></article></div></section>
    <section className="skills-band"><div><Eyebrow>CAJA DE HERRAMIENTAS</Eyebrow><h2>Tecnología con propósito.</h2></div><div className="skill-cloud">{skills.slice(0,8).map(s=><span key={s.name}>{s.name}</span>)}</div><a className="text-link" href="/sobre-mi">Conoce mi perfil <Icon name="arrowRight"/></a></section>
  </main>;
}

function About() {
  const [certificate, setCertificate] = useState(null);
  return <main className="page-shell">
    <section className="page-intro about-intro"><div><Eyebrow>PERFIL PROFESIONAL</Eyebrow><h1>Curiosidad técnica.<br/><span>Impacto humano.</span></h1><p>Estudio Ingeniería de Software en la Universidad San Ignacio de Loyola. Me interesa construir soluciones web completas, conectar datos con decisiones y seguir aprendiendo cómo se diseñan sistemas confiables.</p><div className="intro-tags"><span><Icon name="pin" size={15}/> Lima, Perú</span><span><Icon name="globe" size={15}/> Español · Inglés intermedio</span></div></div><div className="portrait-wrap"><div className="portrait-frame"><img src="/images/ImagenPortafolio.jpeg" alt="Retrato de Jorge Aparicio"/></div><div className="portrait-note"><span>ENFOQUE ACTUAL</span><strong>Full stack &amp; datos</strong></div></div></section>
    <section className="content-section"><SectionHeading eyebrow="FORTALEZAS" title="Un perfil que conecta disciplinas"/><div className="strength-grid"><article><Icon name="layers"/><h3>Desarrollo full stack</h3><p>Me gusta recorrer el producto completo: interfaz, lógica de negocio y persistencia.</p></article><article><Icon name="workflow"/><h3>Pensamiento sistémico</h3><p>Organizo problemas en flujos, responsabilidades y datos que se puedan mantener.</p></article><article><Icon name="activity"/><h3>Orientación a las personas</h3><p>La solución importa cuando es clara y mejora de verdad el trabajo de alguien.</p></article></div></section>
    <section className="content-section cert-section"><SectionHeading eyebrow="APRENDIZAJE EN MARCHA" title="Certificaciones y experiencias" copy="Conocimientos ampliados en redes, datos y trabajo colaborativo."/><div className="cert-grid">{certificates.map((cert) => <button className="cert-card" key={cert.name} onClick={() => setCertificate(cert)}><span className="cert-thumb"><img src={cert.image} loading="lazy" decoding="async" alt=""/><span className="cert-zoom"><Icon name="arrow" size={17}/></span></span><span className="cert-copy"><strong>{cert.name}</strong><small>{cert.detail}</small></span></button>)}</div></section>
    {certificate && <div className="modal-backdrop" role="presentation" onClick={(e)=>{if(e.target===e.currentTarget)setCertificate(null)}}><section className="cert-modal" role="dialog" aria-modal="true" aria-label={certificate.name}><button className="modal-close" onClick={()=>setCertificate(null)} aria-label="Cerrar"><Icon name="close"/></button><img src={certificate.image} alt={certificate.name}/><p>{certificate.name} · {certificate.detail}</p></section></div>}
  </main>;
}

function Projects() {
  const [filter, setFilter] = useState('Todos');
  const filters = ['Todos','Full stack','Frontend','Producto'];
  const shown = projects.filter((p) => filter==='Todos' || (filter==='Full stack' ? p.stack.some(s=>['Flask','Python','SQLite'].includes(s)) : filter==='Frontend' ? p.stack.some(s=>['HTML','HTML5','JavaScript','React'].includes(s)) : p.type.toLowerCase().includes('negocio') || p.type.toLowerCase().includes('productividad')));
  return <main className="page-shell projects-page"><section className="page-intro projects-intro"><div><Eyebrow>PORTAFOLIO DE INGENIERÍA</Eyebrow><h1>Proyectos con<br/><span>problemas reales.</span></h1><p>Una selección de aplicaciones, sistemas de gestión y experiencias web. Cada proyecto es una oportunidad para pensar el flujo completo, desde la necesidad hasta la implementación.</p></div><div className="project-count"><strong>{String(projects.length).padStart(2,'0')}</strong><span>PROYECTOS<br/>SELECCIONADOS</span><Icon name="terminal" size={28}/></div></section>
    <div className="filter-row" role="group" aria-label="Filtrar proyectos">{filters.map(f=><button className={filter===f?'selected':''} onClick={()=>setFilter(f)} key={f}>{f}<span>{f==='Todos'?String(projects.length).padStart(2,'0'):String(projects.filter((p)=>f==='Full stack'?p.stack.some(s=>['Flask','Python','SQLite'].includes(s)):f==='Frontend'?p.stack.some(s=>['HTML','HTML5','JavaScript','React'].includes(s)):p.type.toLowerCase().includes('negocio')||p.type.toLowerCase().includes('productividad')).length).padStart(2,'0')}</span></button>)}</div>
    <div className="project-grid all-projects">{shown.map((project)=> <ProjectCard key={project.name} project={project} featured={project.featured}/>)}</div>
    <section className="engineering-note"><Icon name="code" size={23}/><div><strong>Ingeniería detrás de la interfaz</strong><p>Mis proyectos combinan modelado de datos, flujos de usuario y decisiones de implementación. Explora las demos para ver cada solución en acción.</p></div></section>
  </main>;
}

function Resume() {
  return <main className="page-shell resume-page"><section className="page-intro resume-intro"><div><Eyebrow>TRAYECTORIA</Eyebrow><h1>Aprender. Construir.<br/><span>Seguir creciendo.</span></h1><p>Formación en Ingeniería de Software y experiencia orientada a resolver necesidades con tecnología y atención al usuario.</p><a className="button button-primary" href={pdf} download="Currículum Vitae CV_Jorge Aparicio.pdf"><Icon name="download"/> Descargar currículum</a></div><div className="resume-stamp"><Icon name="file" size={30}/><span>CURRÍCULUM<br/><strong>PERFIL TÉCNICO</strong></span></div></section>
    <div className="resume-columns"><div><SectionHeading eyebrow="EXPERIENCIA" title="Trabajo y práctica"/><article className="timeline-item"><span className="timeline-dot"/><small>ATENCIÓN AL CLIENTE · RETENCIÓN</small><h3>Experiencia centrada en personas</h3><p>Atención de incidencias, gestión de retenciones y seguimiento de casos, cuidando una comunicación clara y una resolución eficiente.</p><div className="timeline-tags"><span>Comunicación</span><span>Resolución de problemas</span><span>Servicio</span></div></article><article className="timeline-item"><span className="timeline-dot"/><small>JFC SOLUTIONS E.I.R.L.</small><h3>Practicante · Desarrollador Full Stack Junior</h3><p>Participé en el desarrollo y mantenimiento de sistemas empresariales con React y TypeScript. Integré APIs REST, incluida RENIEC para validar identidad y autocompletar formularios, y colaboré en un chatbot de IA conectado a datos internos para responder consultas operativas.</p><div className="timeline-tags"><span>React · TypeScript</span><span>APIs REST · RENIEC</span><span>Integración de IA</span></div></article><article className="timeline-item"><span className="timeline-dot"/><small>PERFECT ESTETIC</small><h3>Desarrollador Web</h3><p>Desarrollé una plataforma digital para presentar servicios del negocio y facilitar la interacción con clientes, con navegación intuitiva y diseño adaptable a móviles.</p><div className="timeline-tags"><span>Desarrollo web</span><span>Diseño responsive</span><span>Experiencia de usuario</span></div></article><SectionHeading eyebrow="FORMACIÓN" title="Base académica"/><article className="timeline-item"><span className="timeline-dot"/><small>UNIVERSIDAD SAN IGNACIO DE LOYOLA</small><h3>Ingeniería de Software</h3><p>Estudiante de noveno ciclo. Formación en programación, tecnologías web y bases de datos.</p><div className="timeline-tags"><span>En curso</span><span>Lima, Perú</span></div></article></div><aside className="resume-aside"><div className="resume-card"><Eyebrow>COMPETENCIAS</Eyebrow><h3>Stack técnico</h3>{[
      ['Frontend', 'HTML5 · CSS3 · Tailwind CSS · React.js'],
      ['Backend', 'Flask · Django · Supabase · Autenticación y usuarios · APIs REST'],
      ['Lenguajes y entornos', 'JavaScript · TypeScript · Python · Java · Node.js'],
      ['Bases de datos', 'MySQL · SQLite · PostgreSQL'],
      ['Herramientas', 'Vite · Git · GitHub · Postman · VS Code'],
      ['Fundamentos', 'Arquitectura cliente-servidor · JSON · Consumo de APIs'],
      ['Microsoft Office', 'Word · Excel · PowerPoint'],
    ].map(([title, detail]) => <div className="resume-skill" key={title}><strong>{title}</strong><span>{detail}</span></div>)}</div><div className="resume-card resume-language"><Eyebrow>IDIOMAS</Eyebrow><h3>Comunicación</h3><div><span>Español</span><strong>Nativo</strong></div><div><span>Inglés</span><strong>Intermedio</strong></div></div></aside></div>
    <section className="references-section"><SectionHeading eyebrow="REFERENCIAS" title="Referencias profesionales" copy="Personas que pueden compartir referencias sobre mi experiencia laboral."/><div className="references-grid"><article className="reference-card"><span className="reference-mark">EM</span><div><h3>Evelyn Mondragon</h3><p>Recursos Humanos · ABAI Business Solutions</p><a href="tel:+51950050472"><Icon name="phone" size={15}/> +51 950 050 472</a></div></article><article className="reference-card"><span className="reference-mark">JF</span><div><h3>Jhonatan Flores Cuya</h3><p>Director Ejecutivo · JFC Solutions EIRL</p><a href="mailto:jhonatan.flores@gmail.com"><Icon name="mail" size={15}/> jhonatan.flores@gmail.com</a><a href="tel:+51965348683"><Icon name="phone" size={15}/> +51 965 348 683</a></div></article></div></section>
    <details className="resume-pdf"><summary><span><Icon name="file"/> Ver currículum PDF</span><Icon name="arrow"/></summary><iframe title="Vista previa del currículum de Jorge Aparicio" src={pdf} loading="lazy"/></details>
  </main>;
}

function Contact() {
  const channels = [
    { label: 'Correo electrónico', value: 'jorge2946237@gmail.com', href: 'mailto:jorge2946237@gmail.com', icon: 'mail' },
    { label: 'Teléfono · WhatsApp', value: '+51 923 566 301', href: 'https://wa.me/51923566301', icon: 'phone' },
    { label: 'LinkedIn', value: 'Conectemos profesionalmente', href: 'https://www.linkedin.com/in/jorge-luis-aparicio-alvarez-485277211/', icon: 'linkedin' },
    { label: 'GitHub', value: 'Japaricio2004', href: 'https://github.com/Japaricio2004', icon: 'github' },
  ];
  return <main className="page-shell contact-page"><section className="page-intro contact-intro"><div><Eyebrow>CONTACTO</Eyebrow><h1>Hagamos algo<br/><span>que valga la pena.</span></h1><p>¿Tienes una oportunidad, una idea o un reto interesante? Estoy abierto a conversar y explorar cómo puedo aportar.</p><div className="availability large"><i/>Disponible para oportunidades</div></div><div className="contact-orbit"><div className="contact-orbit-inner"><Icon name="mail" size={34}/></div><span className="contact-orbit-chip chip-a">COLABORAR</span><span className="contact-orbit-chip chip-b">CONSTRUIR</span></div></section>
    <section className="contact-layout"><div><Eyebrow>ESCRÍBEME DIRECTAMENTE</Eyebrow><h2>El mejor comienzo<br/>es una conversación.</h2><div className="contact-list">{channels.map(c=><a className="contact-row" href={c.href} key={c.label} target={c.href.startsWith('http')?'_blank':undefined} rel={c.href.startsWith('http')?'noreferrer':undefined}><span className="contact-icon"><Icon name={c.icon} size={20}/></span><span className="contact-text"><small>{c.label}</small><strong>{c.value}</strong></span><Icon name="arrow" size={18}/></a>)}</div></div><aside className="contact-aside"><span className="aside-kicker">01 / 01</span><Icon name="workflow" size={30}/><h3>Claro, directo<br/>y con propósito.</h3><p>Cuéntame brevemente qué tienes en mente. Responderé personalmente en cuanto pueda.</p><span className="contact-time"><Icon name="pin" size={15}/> Lima, Perú · GMT−5</span></aside></section>
  </main>;
}

function routeFromPath(path) {
  const normalized = path.replace(/\/$/, '').toLowerCase();
  const aliases = {
    '': 'inicio', '/': 'inicio', '/index.html': 'inicio', '/index': 'inicio',
    '/sobre-mi': 'sobre-mi', '/sobremi': 'sobre-mi', '/sobremi.html': 'sobre-mi',
    '/proyectos': 'proyectos', '/proyectos.html': 'proyectos',
    '/trayectoria': 'trayectoria', '/cv': 'trayectoria', '/cv.html': 'trayectoria',
    '/contacto': 'contacto', '/contacto.html': 'contacto',
  };
  return aliases[normalized] || 'inicio';
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const active = routeFromPath(path);
  const content = active === 'sobre-mi' ? <About/> : active === 'proyectos' ? <Projects/> : active === 'trayectoria' ? <Resume/> : active === 'contacto' ? <Contact/> : <Home/>;
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a[href]');
      if (!link || link.target || link.origin!==location.origin || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button!==0) return;
      const next = new URL(link.href);
      if (next.pathname.startsWith('/assets/') || next.pathname.startsWith('/images/')) return;
      event.preventDefault(); history.pushState({},'',next.pathname); setPath(next.pathname); window.scrollTo({top:0,behavior:'instant'});
    };
    const pop = () => setPath(location.pathname);
    document.addEventListener('click',handleClick); window.addEventListener('popstate',pop);
    return () => {document.removeEventListener('click',handleClick);window.removeEventListener('popstate',pop)};
  }, []);
  useEffect(()=>{document.title=`${routes.find(r=>r.id===active)?.label||'Inicio'} | Jorge Aparicio`},[active]);
  return <><Header active={active}/>{content}<footer className="site-footer"><span>© 2026 Jorge Aparicio</span><span>Diseñado y desarrollado con intención.</span><a href="/contacto">Hablemos <Icon name="arrow" size={15}/></a></footer></>;
}

createRoot(document.getElementById('root')).render(<App/>);
