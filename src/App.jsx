import { useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, CarFront, Check,
  ChevronRight, Cloud, Code2, Database, Download, ExternalLink,
  GitBranch, GraduationCap, MapPin, Menu,
  ShieldCheck, Sparkles, X,
} from 'lucide-react';
import './App.css';

const base = import.meta.env.BASE_URL;
const projectLinks = [
  {
    id: '01', type: 'OPEN SOURCE / SECURITY', name: 'JWT Authentication Library',
    descriptor: 'Security made reusable.',
    summary: 'A lightweight Java library for stateless JWT authentication in Spring Boot applications. Includes token utilities, request filtering, custom claims and role-based authority support.',
    tags: ['Java', 'Spring Security', 'JWT', 'Maven'],
    href: 'https://github.com/nikhilesh273/java-authentication',
    cta: 'Explore the code', visual: 'auth',
  },
  {
    id: '02', type: 'OPEN SOURCE / RESERVATIONS', name: 'Parking Reservation API',
    descriptor: 'A smarter way to park.',
    summary: 'A RESTful reservation service with time-window availability, concurrent booking protection, vehicle validation, dynamic pricing and paginated slot search.',
    tags: ['Java 17', 'Spring Boot', 'JPA', 'H2'],
    href: 'https://github.com/nikhilesh273/parcking-reservation',
    cta: 'Explore the code', visual: 'parking',
  },
  {
    id: '03', type: 'LIVE WEBSITE / WAYANAD', name: 'Heartenza Services',
    descriptor: 'Local help, beautifully simple.',
    summary: 'A live Wayanad service website connecting people with travel planning, home assistance, and family support through a clear, approachable experience.',
    tags: ['Live website', 'Travel', 'Local services'],
    href: 'https://heartenzaservices.com/',
    cta: 'Visit the website', visual: 'heartenza',
  },
];
const caseStudies = [
  { no: '04', name: 'Commerce & Order Management', category: 'E-COMMERCE / STORILABS', text: 'Spring Boot cart, checkout and order services, with Shopify, Amazon and ShopWired integrations through Kafka. Supported a GCP to Azure migration and Jenkins delivery.' },
  { no: '05', name: 'Hotel Booking Platform', category: 'HOSPITALITY / ILMORA', text: 'PostgreSQL-backed hotel search, availability, bookings and administration, integrated with Next.js and Razorpay payment workflows.' },
  { no: '06', name: 'HIREQ HR Platform', category: 'HR TECH / MICROSERVICES', text: 'Secured HR APIs with Spring Security, Eureka service discovery, API Gateway routing and AWS deployment.' },
  { no: '07', name: 'Learning Applications', category: 'EDTECH / SAAS', text: 'Group-management and examination modules at uviQo, plus learning-management backend services and frontend API integration at Ilmora.' },
];
const experience = [
  { period: 'APR 2026 — NOW', company: 'Ilmora AI Solutions', role: 'Software Developer', place: 'Calicut, Kerala', text: 'Building Spring Boot services for hotel booking and learning management. Working across PostgreSQL schemas, payments, inventory, authentication, Next.js API integration and AWS deployments with Docker and GitHub Actions.' },
  { period: 'FEB 2023 — OCT 2025', company: 'Storilabs System Technologies', role: 'Software Developer', place: 'Calicut, Kerala', text: 'Developed commerce and order-management microservices; integrated Shopify, Amazon and ShopWired through Kafka; optimized cart and checkout; supported a GCP to Azure migration and production troubleshooting.' },
  { period: 'SEP 2021 — FEB 2023', company: 'uviQo Technologies', role: 'Software Developer', place: 'Trivandrum, Kerala', text: 'Built SaaS education and HR applications, modular Java services, reusable libraries, group-management and examination modules, and AWS/Docker delivery pipelines.' },
];
const technology = [
  { category: 'BACKEND', items: [
    ['Java', 'devicon-java-plain colored'], ['Spring Boot', 'devicon-spring-original colored'],
    ['Spring Security', 'devicon-spring-original colored'], ['Hibernate', 'devicon-hibernate-plain colored'],
    ['REST APIs', 'devicon-fastapi-plain colored'], ['Python / FastAPI', 'devicon-python-plain colored'],
  ] },
  { category: 'DATA & CLOUD', items: [
    ['PostgreSQL', 'devicon-postgresql-plain colored'], ['MongoDB', 'devicon-mongodb-plain colored'],
    ['MySQL', 'devicon-mysql-plain colored'], ['Apache Kafka', 'devicon-apachekafka-original colored'],
    ['AWS', 'devicon-amazonwebservices-plain-wordmark colored'], ['Azure', 'devicon-azure-plain colored'],
  ] },
  { category: 'FRONTEND & DELIVERY', items: [
    ['React', 'devicon-react-original colored'], ['Next.js', 'devicon-nextjs-plain'],
    ['JavaScript', 'devicon-javascript-plain colored'], ['Docker', 'devicon-docker-plain colored'],
    ['Jenkins', 'devicon-jenkins-line colored'], ['GitHub Actions', 'devicon-githubactions-plain colored'],
  ] },
];
const softwareTools = [
  ['IntelliJ IDEA', 'devicon-intellij-plain colored'], ['Postman', 'devicon-postman-plain colored'],
  ['Docker', 'devicon-docker-plain colored'], ['VS Code', 'devicon-vscode-plain colored'],
  ['Git', 'devicon-git-plain colored'], ['Eclipse', 'devicon-eclipse-plain colored'],
  ['Maven', 'devicon-maven-plain colored'], ['Gradle', 'devicon-gradle-original colored'],
  ['Jira', 'devicon-jira-plain colored'], ['GitHub', 'devicon-github-original'],
];

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .7, delay, ease: [.2,.7,.2,1] }}>{children}</motion.div>;
}

function SectionTitle({ index, label, children, aside }) {
  return <div className="section-title"><div className="section-title-main"><span className="section-kicker"><b>{index}</b> / {label}</span><h2>{children}</h2></div>{aside && <p>{aside}</p>}</div>;
}

function BrandIcon({ name, icon }) {
  return <span className="brand-icon"><i className={icon} aria-hidden="true" /><span>{name}</span></span>;
}

function ProjectArt({ type }) {
  if (type === 'auth') return <div className="project-art art-auth" aria-hidden="true">
    <div className="auth-grid"/><div className="auth-token"><ShieldCheck size={57} strokeWidth={1.25}/><span>ACCESS GRANTED</span><b>•••• •••• 2048</b></div>
    <div className="auth-pulse pulse-a"/><div className="auth-pulse pulse-b"/><span className="art-corner">SECURE CONNECTION / 01</span>
  </div>;
  if (type === 'parking') return <div className="project-art art-parking" aria-hidden="true">
    <div className="parking-plan"><span>P01</span><span className="occupied"><CarFront size={36}/></span><span>P03</span><span className="selected"><CarFront size={36}/><b>RESERVED</b></span><span>P05</span><span>P06</span></div>
    <div className="parking-float"><span className="parking-led"/> 12 SLOTS AVAILABLE</div><span className="art-corner">SMART RESERVATION / 02</span>
  </div>;
  return <div className="project-art art-heartenza" aria-hidden="true">
    <div className="landscape sun"/><div className="landscape hill hill-back"/><div className="landscape hill hill-front"/><div className="heartenza-card"><span>Wayanad, Kerala</span><strong>Closer to<br/>what matters.</strong><i>↗</i></div><span className="art-corner">PEOPLE · PLACE · PEACE OF MIND</span>
  </div>;
}

function HoverPortrait() {
  const x = useMotionValue(0), y = useMotionValue(0), rotateY = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 110, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 110, damping: 18 });
  const smoothRotate = useSpring(rotateY, { stiffness: 110, damping: 18 });
  const reduce = useReducedMotion();
  function move(event) {
    if (reduce) return;
    const box = event.currentTarget.getBoundingClientRect();
    const dx = (event.clientX - box.left) / box.width - .5;
    const dy = (event.clientY - box.top) / box.height - .5;
    x.set(dx * 26); y.set(dy * 18); rotateY.set(dx * 5);
  }
  function reset() { x.set(0); y.set(0); rotateY.set(0); }
  return <div className="hero-character-wrap" onPointerMove={move} onPointerLeave={reset}>
    <div className="hero-disc"/><div className="hero-character-outline"/>
    <motion.img className="hero-character" style={{ x:smoothX, y:smoothY, rotateY:smoothRotate }} src={base+'images/nikhilesh-editorial-cutout.png'} alt="Nikhilesh Babu MT in an editorial portrait" fetchPriority="high"/>
    <div className="hero-character-stamp"><Sparkles size={15}/> CREATIVE ENGINEERING</div>
  </div>;
}

function IllustratedWork() {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 18 });
  const sy = useSpring(y, { stiffness: 80, damping: 18 });
  const reduce = useReducedMotion();
  return <div className="illustration-card" ref={ref} onPointerMove={event => {
    if (reduce) return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - box.left) / box.width - .5) * 16);
    y.set(((event.clientY - box.top) / box.height - .5) * 12);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>
    <motion.img style={{ x:sx, y:sy }} src={base+'images/nikhilesh-illustrated-work.png'} alt="Animated-style illustration of Nikhilesh at a creative workstation" loading="lazy"/>
    <span className="illustration-badge"><span className="badge-spark">✳</span> ALWAYS CURIOUS</span>
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const links = [['About','#about'],['Projects','#projects'],['Experience','#experience'],['Skills','#skills'],['AI outlook','#ai']];
  return <div className="site">
    <motion.div className="progress" style={{ scaleX:progress }}/>
    <header className="header">
      <a className="wordmark" href="#top" aria-label="Nikhilesh Babu, back to top">N<span>·</span>BM</a>
      <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">{links.map(([text,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{text}</a>)}</nav>
      <a className="header-contact" href="#contact">LET'S CONNECT <ArrowUpRight size={16}/></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline"><span>INDEPENDENT THINKING / RELIABLE SYSTEMS</span><span>BASED IN WAYANAD, INDIA ↗</span></div>
        <h1 id="hero-title">PORTFOLIO<span className="hero-title-year">/ 26</span></h1>
        <div className="hero-layout">
          <motion.div className="hero-left" initial={{opacity:0,x:-25}} animate={{opacity:1,x:0}} transition={{delay:.35,duration:.8}}>
            <span className="micro-label">THE DISCIPLINE</span>
            <h2>JAVA /<br/>BACKEND /<br/><em>BEYOND.</em></h2>
            <p>Spring Boot · Microservices<br/>Cloud delivery · Practical AI</p>
            <a className="hero-scroll" href="#projects"><ArrowDown size={20}/><span>SCROLL TO EXPLORE</span></a>
          </motion.div>
          <HoverPortrait/>
          <motion.div className="hero-right" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{delay:.4,duration:.8}}>
            <span className="micro-label">HI, I'M</span>
            <h2>Nikhilesh<br/><em>Babu MT.</em></h2>
            <span className="role-line">SOFTWARE DEVELOPER / BACKEND ENGINEER</span>
            <p>I build the invisible architecture behind digital experiences: resilient APIs, connected services and systems that are ready to grow.</p>
            <div className="hero-metrics"><div><strong>4+</strong><small>YEARS<br/>EXPERIENCE</small></div><div><strong>03</strong><small>COMPANIES<br/>WORKED WITH</small></div><div><strong>05</strong><small>PRODUCT<br/>DOMAINS</small></div></div>
            <a href={base+'documents/Nikhilesh_Babu_Resume.pdf'} target="_blank" rel="noreferrer" className="text-link">DOWNLOAD RÉSUMÉ <Download size={16}/></a>
          </motion.div>
        </div>
        <div className="hero-bottomline"><span>DESIGNING WHAT WORKS. BUILDING WHAT LASTS.</span><span>01 / 07</span></div>
      </section>

      <div className="marquee" aria-label="Areas of expertise"><div>{Array.from({length:2},(_,i)=><span key={i}>JAVA DEVELOPMENT <b>✳</b> SPRING BOOT <b>✳</b> MICROSERVICES <b>✳</b> CLOUD DELIVERY <b>✳</b> SYSTEM DESIGN <b>✳</b> </span>)}</div></div>

      <section id="about" className="section about-section">
        <Reveal><SectionTitle index="01" label="ABOUT ME" aside="Focused on useful technology, built with care from the backend outward.">THE WORK IS<br/><i>IN THE DETAILS.</i></SectionTitle></Reveal>
        <div className="about-layout"><Reveal className="about-lead"><p>Good software should feel simple to the people using it, even when the system behind it is anything but.</p></Reveal><Reveal className="about-copy" delay={.1}><p>I'm a Java backend developer with 4+ years across e-commerce, order management, hospitality, EdTech and HR applications. I turn complex workflows into clear APIs and dependable services.</p><p>My work covers Kafka integrations, database troubleshooting, a GCP to Azure migration, and cloud deployment automation. I enjoy the space where solid engineering meets a better user experience.</p><a className="underlined-link" href="#experience">MORE ABOUT MY JOURNEY <ArrowUpRight size={17}/></a></Reveal></div>
      </section>

      <section id="projects" className="section projects-section">
        <Reveal><SectionTitle index="02" label="FEATURED BUILDS" aside="Open-source experiments, real product work and a live service site.">PROJECTS WITH<br/><i>A PURPOSE.</i></SectionTitle></Reveal>
        <div className="featured-grid">{projectLinks.map((p,i)=><Reveal className="featured-card" key={p.id} delay={i*.07}><a href={p.href} target="_blank" rel="noreferrer" aria-label={p.cta+' for '+p.name}><ProjectArt type={p.visual}/><div className="featured-content"><div className="project-top"><span>{p.id} / {p.type}</span><ArrowUpRight size={21}/></div><h3>{p.name}</h3><strong>{p.descriptor}</strong><p>{p.summary}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><span className="project-cta">{p.cta} <ArrowRight size={17}/></span></div></a></Reveal>)}</div>
        <Reveal className="case-header"><span className="section-kicker"><b>+</b> / PRODUCTION CASE STUDIES</span><p>Selected work from product teams and platforms.</p></Reveal>
        <div className="case-list">{caseStudies.map((p,i)=><Reveal className="case-row" key={p.no} delay={i*.05}><span className="case-number">{p.no}</span><div><span className="case-category">{p.category}</span><h3>{p.name}</h3></div><p>{p.text}</p><ExternalLink size={18}/></Reveal>)}</div>
      </section>

      <section id="experience" className="section experience-section">
        <Reveal><SectionTitle index="03" label="EXPERIENCE" aside="From foundational services to complex commerce and hospitality workflows.">BUILT THROUGH<br/><i>EXPERIENCE.</i></SectionTitle></Reveal>
        <div className="experience-list">{experience.map((job,i)=><Reveal className="experience-row" key={job.company} delay={i*.07}><div className="experience-period"><span className="time-dot"/>{job.period}</div><div className="experience-body"><span className="experience-role">{job.role}</span><h3>{job.company}</h3><p>{job.text}</p></div><span className="experience-location"><MapPin size={14}/>{job.place}</span></Reveal>)}</div>
      </section>

      <section id="skills" className="section skills-section">
        <Reveal><SectionTitle index="04" label="STACK & TOOLS" aside="The languages, systems and everyday tools I reach for to move ideas into production.">TOOLS OF<br/><i>THE TRADE.</i></SectionTitle></Reveal>
        <div className="technology-grid">{technology.map((group,i)=><Reveal className="technology-panel" key={group.category} delay={i*.07}><span className="panel-label">0{i+1} / {group.category}</span><div className="technology-items">{group.items.map(([name,icon])=><BrandIcon key={name} name={name} icon={icon}/>)}</div></Reveal>)}</div>
        <Reveal className="software-panel"><div><span className="panel-label">EVERYDAY DEVELOPMENT TOOLS</span><h3>My workbench<span>.</span></h3><p>From shaping an API to testing and shipping it, these are the tools that keep the workflow moving.</p></div><div className="software-icons">{softwareTools.map(([name,icon])=><BrandIcon key={name} name={name} icon={icon}/>)}</div></Reveal>
        <div className="skill-footnote"><span><GitBranch size={17}/> EVENT-DRIVEN ARCHITECTURE</span><span><Database size={17}/> SCHEMA DESIGN & QUERY OPTIMIZATION</span><span><Cloud size={17}/> CI/CD & CLOUD MIGRATION</span></div>
      </section>

      <section id="ai" className="section ai-section">
        <Reveal><SectionTitle index="05" label="LOOKING FORWARD" aside="Curiosity about what comes next, grounded in the engineering that already works.">HUMAN THINKING.<br/><i>AI MOMENTUM.</i></SectionTitle></Reveal>
        <div className="ai-layout"><Reveal className="ai-art"><div className="ai-orbit orbit-one"/><div className="ai-orbit orbit-two"/><div className="ai-core"><BrainCircuit size={82} strokeWidth={1}/></div><span className="ai-coordinate top">SYSTEMS / INTELLIGENCE</span><span className="ai-coordinate bottom">EXPLORE → VERIFY → BUILD</span></Reveal><Reveal className="ai-copy" delay={.12}><span className="micro-label">MY VIEW OF THE FUTURE</span><h3>AI should make good engineers <em>more capable.</em></h3><p>I'm exploring where AI can make development more effective: clarifying requirements, exploring implementation options, speeding up routine work and helping teams learn faster.</p><p>The important part is still human judgment. I want to pair AI-assisted exploration with code review, security checks, testing and real performance evidence before anything reaches users.</p><div className="ai-pill-row"><span><Sparkles size={16}/> EXPLORE</span><span><ShieldCheck size={16}/> VERIFY</span><span><Code2 size={16}/> SHIP</span></div></Reveal></div>
      </section>

      <section className="section beyond-section">
        <Reveal><SectionTitle index="06" label="BEYOND THE BUILD" aside="A few details about the person behind the services.">ALWAYS<br/><i>CURIOUS.</i></SectionTitle></Reveal>
        <div className="beyond-layout"><IllustratedWork/><Reveal className="beyond-copy"><span className="micro-label">A LITTLE MORE ABOUT ME</span><h3>Learning never<br/>really <em>stops.</em></h3><p>I'm based in Wayanad, Kerala. I earned my B.Sc. in Computer Science from PKKM College of Applied Science (IHRD), Kannur University, and I keep building on that foundation through hands-on product work.</p><div className="credential"><GraduationCap size={19}/><span>B.Sc. Computer Science · Kannur University</span></div><div className="credential"><Check size={19}/><span>Master Microservices with Spring Boot and Spring Cloud · Udemy</span></div><div className="credential"><Check size={19}/><span>Java and SQL certifications · HackerRank</span></div></Reveal></div>
      </section>

      <section id="contact" className="contact-section"><div className="contact-inner"><Reveal><span className="section-kicker"><b>07</b> / LET'S CONNECT</span><h2>HAVE A PROJECT?<br/><i>LET'S TALK.</i></h2><p>Have an API to shape, a platform to scale or an idea worth exploring? I'd love to hear about it.</p><a className="contact-email" href="mailto:nikhilesh273@gmail.com">nikhilesh273@gmail.com <ArrowUpRight size={31}/></a><div className="contact-links"><a href="https://github.com/nikhilesh273" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/nikhilesh-babu-mt" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={15}/></a><a href="tel:+916235353473">+91 62353 53473 <ArrowUpRight size={15}/></a></div></Reveal><div className="contact-watermark" aria-hidden="true">NB</div></div></section>
    </main>
    <footer className="footer"><span>© {new Date().getFullYear()} NIKHILESH BABU MT</span><span>BUILT WITH INTENTION / WAYANAD, INDIA</span><a href="#top">BACK TO TOP <ChevronRight size={16}/></a></footer>
  </div>;
}
