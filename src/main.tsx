import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  CloudSun,
  Database,
  Earth,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  Layers3,
  Leaf,
  Mail,
  Map,
  MapPin,
  Menu,
  Network,
  Radar,
  Satellite,
  Search,
  ShieldCheck,
  Sprout,
  Truck,
  X,
} from 'lucide-react';
import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import './style.css';

type IconType = typeof Map;

type PageMeta = {
  title: string;
  description: string;
};

const services: { title: string; icon: IconType; desc: string; items: string[] }[] = [
  {
    title: 'GIS & Spatial Analysis',
    icon: Layers3,
    desc: 'Turn complex geographic datasets into clear, defensible decisions.',
    items: ['Spatial data analysis', 'Site suitability modelling', 'Network and accessibility analysis', 'Land-use and land-cover mapping', 'Spatial decision support'],
  },
  {
    title: 'Remote Sensing & Earth Observation',
    icon: Satellite,
    desc: 'Monitor change on the ground with insight from above.',
    items: ['Satellite image analysis', 'Vegetation and crop monitoring', 'Environmental change detection', 'Flood and drought monitoring', 'Land-cover classification'],
  },
  {
    title: 'Web GIS & Software Development',
    icon: Network,
    desc: 'Make spatial information accessible through intuitive digital products.',
    items: ['Interactive web maps', 'GIS dashboards', 'Spatial databases', 'Custom GIS applications', 'Location-based information systems'],
  },
  {
    title: 'AI & Geospatial Automation',
    icon: BrainCircuit,
    desc: 'Reduce repetition and keep spatial work moving.',
    items: ['Spatial analysis support', 'Map production workflows', 'Reporting automation', 'Custom geospatial tools', 'Process improvement'],
  },
  {
    title: 'Environmental & Climate Intelligence',
    icon: CloudSun,
    desc: 'Understand environmental change and plan for greater resilience.',
    items: ['Flood-risk assessment', 'Environmental monitoring', 'Climate data analysis', 'Watershed and drainage analysis', 'Disaster risk mapping'],
  },
  {
    title: 'Land, Infrastructure & Asset Intelligence',
    icon: Building2,
    desc: 'Understand physical assets, terrain and infrastructure in context.',
    items: ['Terrain and topographic analysis', 'Infrastructure mapping', 'Asset inventory systems', 'Property and location intelligence', 'UAV and photogrammetry solutions, subject to licensing'],
  },
];

const industries: { title: string; icon: IconType; desc: string }[] = [
  { title: 'Agriculture & Agritech', icon: Sprout, desc: 'Crop health, land suitability and precision agriculture.' },
  { title: 'Environment & Climate', icon: Leaf, desc: 'Environmental monitoring and climate resilience.' },
  { title: 'Urban Planning & Smart Cities', icon: Building2, desc: 'Evidence-led urban development and spatial planning.' },
  { title: 'Government & Public Sector', icon: Globe2, desc: 'Data-driven public services and policy decisions.' },
  { title: 'Real Estate & Property', icon: MapPin, desc: 'Site intelligence and property location analysis.' },
  { title: 'Transport & Logistics', icon: Truck, desc: 'Routing, accessibility and network optimisation.' },
  { title: 'Infrastructure & Utilities', icon: Factory, desc: 'Asset mapping and infrastructure intelligence.' },
  { title: 'NGOs & Development', icon: Handshake, desc: 'Programme mapping and location-based impact insights.' },
  { title: 'Research & Education', icon: GraduationCap, desc: 'Applied geospatial research and learning tools.' },
];

const products = [
  {
    name: 'GeoReportAI',
    status: 'Flagship concept · In development',
    desc: 'A reporting concept for turning geospatial analysis into clear, decision-ready outputs.',
    icon: BrainCircuit,
  },
  {
    name: 'GeoRisk',
    status: 'Proposed solution',
    desc: 'Spatial risk intelligence for environmental hazards, exposure and disaster planning.',
    icon: ShieldCheck,
  },
  {
    name: 'GeoFarm',
    status: 'Proposed solution',
    desc: 'Earth observation and location intelligence for crop monitoring and agricultural decisions.',
    icon: Sprout,
  },
  {
    name: 'GeoAsset',
    status: 'Proposed solution',
    desc: 'A spatial workspace for mapping, tracking and managing infrastructure assets.',
    icon: Database,
  },
];

const nav = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Products & Solutions', '/products'],
  ['Projects', '/projects'],
  ['Insights', '/insights'],
  ['Contact Us', '/contact'],
] as const;

const EMAIL = 'info@geovatechnologies.com';

const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'GEOVA Technologies | Geospatial Intelligence',
    description: 'GEOVA Technologies helps organisations turn geospatial data into clearer decisions through GIS, remote sensing and practical digital tools.',
  },
  '/about': {
    title: 'About GEOVA Technologies',
    description: 'Learn about GEOVA Technologies, our mission and our practical approach to geospatial decision support.',
  },
  '/services': {
    title: 'GEOVA Services | GIS & Earth Observation',
    description: 'Explore GEOVA services in GIS, spatial analysis, remote sensing and practical geospatial decision-support.',
  },
  '/industries': {
    title: 'Industries We Support',
    description: 'GEOVA supports agriculture, climate resilience, planning, infrastructure and public sector organisations with location intelligence.',
  },
  '/products': {
    title: 'Products & Solutions',
    description: 'Discover geospatial product concepts and solutions for risk, agriculture, infrastructure, reporting and operational decision-making.',
  },
  '/projects': {
    title: 'Projects & Workstreams',
    description: 'Explore GEOVA project themes and the kinds of geospatial challenges the team helps organisations address.',
  },
  '/insights': {
    title: 'Insights & Ideas',
    description: 'Read thoughtful geospatial insight pieces on decision-making, sustainability, climate and digital transformation.',
  },
  '/contact': {
    title: 'Contact GEOVA Technologies',
    description: 'Request a consultation with GEOVA Technologies to discuss your geospatial challenge, product idea or decision-support requirement.',
  },
  '/careers': {
    title: 'Careers & Partnerships',
    description: 'Explore opportunities to collaborate with GEOVA on geospatial research, product partnerships and applied decision-support work.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description: 'Read how GEOVA handles contact form submissions, data minimisation and privacy expectations for website enquiries.',
  },
  '/terms': {
    title: 'Terms of Service',
    description: 'Review the basic terms governing use of the GEOVA website, contact channels and general informational content.',
  },
};

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="GEOVA Technologies home">
      <img className="brand-logo" src="/geova-logo.png" alt="GEOVA Technologies — Geospatial Intelligence" width="180" height="144" />
    </Link>
  );
}

function SectionHead({ eyebrow, title, desc, light = false }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className={'section-head ' + (light ? 'light' : '')}>
      <span className="eyebrow"><span className="dash" />{eyebrow}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function ButtonLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return (
    <Link to={to} className={'btn ' + (secondary ? 'btn-outline' : 'btn-teal')}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}

function ScrollAndSeo() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    const meta = pageMeta[location.pathname] ?? pageMeta['/'];
    document.title = meta.title;

    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => {
        if (key === 'name') {
          element.setAttribute('name', value);
        } else if (key === 'property') {
          element.setAttribute('property', value);
        } else {
          element.setAttribute(key, value);
        }
      });
    };

    setMeta('meta[name="description"]', { name: 'description', content: meta.description });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: window.location.origin + location.pathname });
  }, [location.pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="header">
      <div className="container navwrap">
        <Logo />
        <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
          {nav.map(([name, path]) => (
            <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {name}
            </NavLink>
          ))}
          <Link className="mobile-project" to="/contact">
            Request a consultation <ArrowRight size={15} />
          </Link>
        </nav>
        <Link className="btn btn-teal nav-cta" to="/contact">
          Request a consultation <ArrowUpRight size={16} />
        </Link>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Turning spatial data into practical insight for stronger operational decisions.</p>
          <a className="footer-location" href="https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya" target="_blank" rel="noopener noreferrer">
            <MapPin size={15} /> Nairobi, Kenya · Serving Africa and beyond
          </a>
        </div>
        <div>
          <h4>Explore</h4>
          {nav.slice(1, 5).map(([name, path]) => (
            <Link key={path} to={path}>{name}</Link>
          ))}
        </div>
        <div>
          <h4>Company</h4>
          {[
            ['Projects', '/projects'],
            ['Insights', '/insights'],
            ['Careers & Partnerships', '/careers'],
            ['Contact', '/contact'],
          ].map(([name, path]) => (
            <Link key={path} to={path}>{name}</Link>
          ))}
        </div>
        <div>
          <h4>Start a conversation</h4>
          <p>Have a geospatial challenge or product idea? We would love to hear about it.</p>
          <Link className="footer-talk" to="/contact">
            Contact our team <ArrowUpRight size={16} />
          </Link>
          <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <small>Email address requires mailbox activation by GEOVA.</small>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} GEOVA Technologies. All rights reserved.</span>
        <span className="legal-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="hero-pill"><span className="pulse" /> NAIROBI · GEOSPATIAL CONSULTING · DECISION SUPPORT</div>
          <h1>
            GEOSPATIAL
            <br />
            <span>INTELLIGENCE</span>
            <br />
            FOR BETTER DECISIONS<span className="period">.</span>
          </h1>
          <p>
            We help organisations interpret complex spatial data and turn it into clear, actionable decisions. From risk mapping and environmental monitoring to GIS systems and digital delivery, GEOVA brings together AI and software engineering with domain expertise.
          </p>
          <p className="hero-tagline">Built for clarity, trust and action.</p>
          <div className="hero-actions">
            <ButtonLink to="/contact">Request a consultation</ButtonLink>
            <ButtonLink to="/services" secondary>Explore our expertise</ButtonLink>
          </div>
          <div className="hero-proof">
            <span><span className="proof-line" /> BASED IN NAIROBI, KENYA</span>
            <span>GIS · EARTH OBSERVATION · SOFTWARE · DECISION SUPPORT</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="geo-ring ring1" />
          <div className="geo-ring ring2" />
          <div className="geo-center">
            <MapPin size={32} />
          </div>
          <span className="map-pin p1" />
          <span className="map-pin p2" />
          <span className="map-pin p3" />
          <div className="data-float float-top">
            <Search size={14} />
            <span><strong>24/7</strong> Monitoring</span>
          </div>
          <div className="data-float float-bottom">
            <BarChart3 size={14} />
            <span><strong>Decision</strong> Ready</span>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="container">
          <span>Trusted geospatial advisory</span>
          <span>Evidence, objectivity, clarity</span>
          <span>Built for real-world decisions</span>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-left">
            <SectionHead eyebrow="WHY GEOVA" title="Location intelligence that supports better decisions." desc="We work with organisations that need clarity in uncertain, dynamic environments. GEOVA brings together geospatial science, practical software design and grounded analysis to support action with confidence." />
          </div>
          <div className="intro-right rich-copy">
            <p>
              Whether you are planning infrastructure, monitoring environmental risk, tracking performance or designing a digital product,
              geospatial insight should reduce uncertainty rather than add complexity.
            </p>
            <p>
              Our model is practical and trust-led: map the realities on the ground, combine evidence from multiple sources and turn that
              information into clear, operational recommendations.
            </p>
            <Link className="text-link" to="/about">
              Discover our approach <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHead eyebrow="OUR CAPABILITIES" title="Strategic services for data-rich decision-making." desc="We help clients build geospatial insight from complex and fragmented information sets." />
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <div className="service-top">
                    <span className="service-icon"><Icon size={22} /></span>
                    <span className="service-index">{service.title.split(' ')[0]}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="mini-list">
                    {service.items.map((item) => (
                      <li key={item}><Check size={15} /> {item}</li>
                    ))}
                  </ul>
                  <Link className="text-link" to="/services">
                    Explore service <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="section-end">
            <ButtonLink to="/services">See all services</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <div className="container">
          <SectionHead eyebrow="INDUSTRY FOCUS" title="Solutions built around the realities of each sector." light desc="The challenge is rarely just data; it is context, timing, risk and operational decision-making." />
          <div className="industry-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div key={industry.title} className="industry-item">
                  <Icon size={22} />
                  <strong>{industry.title}</strong>
                  <ArrowRight size={15} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <SectionHead eyebrow="PRODUCTS & SOLUTIONS" title="Emerging platforms for smarter spatial decisions." desc="GEOVA explores product concepts designed to bring location intelligence into everyday decision workflows." />
          <div className="product-layout">
            <div className="flagship">
              <div className="flagship-copy">
                <span className="product-status"><span className="pulse" /> GeoReportAI</span>
                <h3>AI-powered <span>reporting.</span></h3>
                <p>
                  Turn maps, analysis and field insight into clear, useful outputs that help teams move from data to action.
                </p>
                <ButtonLink to="/products">Discover the concept</ButtonLink>
              </div>
              <div className="product-ui" aria-hidden="true">
                <div className="ui-top">
                  <span>GeoReportAI</span>
                  <span className="ui-dots">●●●</span>
                </div>
                <div className="ui-body">
                  <div className="ui-side">
                    <Earth size={15} />
                    <Radar size={15} />
                    <BarChart3 size={15} />
                  </div>
                  <div className="ui-map">
                    <div className="contour contour-a" />
                    <div className="contour contour-b" />
                    <div className="ui-overlay">
                      <strong>Priority risk</strong>
                      <span>Flood exposure pattern</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="solution-stack">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.name} className="mini-product">
                    <div className="mini-top">
                      <span className="mini-icon"><Icon size={19} /></span>
                      <span className="product-status">{product.status}</span>
                    </div>
                    <h4>{product.name}</h4>
                    <p>{product.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section tinted">
        <div className="container">
          <SectionHead eyebrow="OUR METHOD" title="Clear steps from analysis to action." desc="We combine technical rigour with operational clarity so spatial insight is useful in the right moment." />
          <div className="process-grid">
            {[
              ['01', 'Define the decision', 'Align on the question, decision context and required evidence.'],
              ['02', 'Model the evidence', 'Integrate spatial data, remote sensing, operational inputs and risk context.'],
              ['03', 'Assess and visualise', 'Translate complexity into maps, dashboards and scenario-based understanding.'],
              ['04', 'Support the action', 'Deliver recommendations that help teams plan, prioritise and monitor effectiveness.'],
            ].map(([step, title, desc]) => (
              <div key={step} className="process-item">
                <span className="step-num">{step}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta">
          <div>
            <span className="eyebrow"><span className="dash" /> LET'S DISCUSS</span>
            <h2>Need clearer location insight for a decision, project or product?</h2>
          </div>
          <ButtonLink to="/contact">Request a consultation</ButtonLink>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="ABOUT US" title="Geospatial thinking for real-world decisions." desc="GEOVA is a geospatial consultancy helping organisations understand risk, optimise resources and act with confidence." />
      <section className="section">
        <div className="container split-layout">
          <div>
            <h3>Our purpose</h3>
            <p>
              We help clients turn location data into meaningful intelligence. The challenge is often not a lack of data, but the difficulty of
              converting complex information into decisions that are timely, grounded and credible.
            </p>
            <p>
              GEOVA brings together technical capability and practical judgement: geospatial analysis, remote sensing, software design and careful
              workflow thinking with a strong focus on clarity, traceability and decision support.
            </p>
          </div>
          <div className="info-panel">
            <div>
              <strong>Trust-led</strong>
              <span>Clear assumptions, verifiable evidence and defensible recommendations.</span>
            </div>
            <div>
              <strong>Operational</strong>
              <span>Built for action, not just visualisation.</span>
            </div>
            <div>
              <strong>Adaptive</strong>
              <span>Complex decisions need cross-disciplinary thinking and flexible tools.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container timeline-wrap">
          <SectionHead eyebrow="WHAT WE VALUE" title="A practical, evidence-first approach." />
          <div className="value-grid">
            {[
              'Objectivity and transparency in analysis',
              'Decision support for organisations with limited time and high stakes',
              'Clear communication between technical and non-technical teams',
              'Practical tools, applied with domain expertise',
            ].map((value) => (
              <div key={value} className="value-item">
                <Check size={18} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="OUR CAPABILITIES" title="Services designed for spatial complexity." desc="From raw geospatial datasets to decision-ready insight, we support organisations through analysis, software and applied intelligence." />
      <section className="section">
        <div className="container services-grid detail-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card detail-card">
                <div className="detail-heading">
                  <span className="service-icon"><Icon size={22} /></span>
                  <span className="service-index">{service.title.split(' ')[0]}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="mini-list">
                  {service.items.map((item) => (
                    <li key={item}><Check size={15} /> {item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="INDUSTRIES" title="Spatial insight built for context-specific decisions." desc="Our work is shaped by the operational realities of each sector, from climate risk to infrastructure planning and land use decisions." />
      <section className="section">
        <div className="container industry-list">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article key={industry.title} className="industry-card">
                <span className="service-icon"><Icon size={22} /></span>
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="PRODUCTS & SOLUTIONS" title="Ideas and concepts shaped for operational value." desc="GEOVA explores product directions that translate geospatial data into faster, more informed decisions." />
      <section className="section">
        <div className="container product-stack">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.name} className="product-card">
                <div className="mini-top">
                  <span className="mini-icon"><Icon size={19} /></span>
                  <span className="product-status">{product.status}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="PROJECTS" title="Focused on meaningful geospatial challenges." desc="Project work ranges across environmental analysis, planning support, digital mapping and spatial decision support." />
      <section className="section">
        <div className="container projects-grid">
          {[
            ['Spatial risk assessment', 'Mapping exposure, hazard patterns and priorities for climate-sensitive planning.'],
            ['Location intelligence dashboards', 'Turning fragmented operational data into clear operational views for teams and leaders.'],
            ['Geospatial workflows that save time', 'Reducing repetitive analytical work and helping teams get to insight faster.'],
            ['Environmental monitoring', 'Using remote sensing and land data to understand changing conditions over time.'],
          ].map(([title, desc]) => (
            <article key={title} className="project-card">
              <span className="eyebrow"><span className="dash" /> {title}</span>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="INSIGHTS & IDEAS" title="Thoughtful perspectives on geospatial decision-making." desc="Exploring how better evidence, better tools and better communication can improve decision quality in complex environments." />
      <section className="section">
        <div className="container insight-grid">
          {[
            ['Why decision-ready maps matter', 'Good spatial analysis is only useful if it supports real decisions, not just pretty visualisations.'],
            ['Tools that support trust', 'Good analysis still needs clear assumptions, context and evidence, even when software speeds things up.'],
            ['Climate resilience needs better evidence', 'Environmental decisions benefit from location-aware, comparable and transparent information.'],
          ].map(([title, desc]) => (
            <article key={title} className="insight-card">
              <span className="eyebrow"><span className="dash" /> GEOVA NOTE</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span className="text-link">Explore this topic with us <ArrowUpRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', consent: false });
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const nextValue = type === 'checkbox' ? (target as HTMLInputElement).checked : value;

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!form.consent) {
      setStatus({
        type: 'error',
        message: 'Please confirm that you agree to GEOVA storing and using your enquiry details for follow-up.',
      });
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    const subject = `New enquiry from ${form.name || 'website visitor'}`;

    if (!endpoint) {
      const body = [
        `Name: ${form.name || 'Not provided'}`,
        `Email: ${form.email || 'Not provided'}`,
        `Company: ${form.company || 'Not provided'}`,
        '',
        form.message || 'No message provided.',
      ].join('\n');

      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({
        type: 'success',
        message: 'Your email app has been opened. If it did not open, send your message directly to info@geovatechnologies.com.',
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          consent: form.consent,
          source: 'geova-site',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit form.');
      }

      setStatus({ type: 'success', message: 'Thanks for reaching out. We will respond as soon as possible.' });
      setForm({ name: '', email: '', company: '', message: '', consent: false });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'The form could not be submitted right now. Please email info@geovatechnologies.com directly.',
      });
    }
  };

  return (
    <>
      <PageHero eyebrow="CONTACT" title="Start a conversation about your geospatial challenge." desc="Tell us what you are trying to solve, improve or build, and we will guide the next step." />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <h3>We would love to hear from you.</h3>
            <p>
              GEOVA works with organisations that need clearer insight, stronger evidence or a better digital workflow for spatial decisions.
            </p>
            <ul className="contact-list">
              <li><Mail size={16} /> {EMAIL}</li>
              <li><MapPin size={16} /> Nairobi, Kenya · Serving Africa and beyond</li>
            </ul>
            <div className="trust-note">
              <strong>Production-ready contact integration:</strong>
              <span>
                The form uses the configured <code>VITE_CONTACT_ENDPOINT</code> when available. If it is not set, a secure mailto handoff opens the user’s mail client so the enquiry can be sent without exposing secrets in the frontend.
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-row two-up">
              <label>
                <span>Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              <span>Company</span>
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Organisation or project" />
            </label>
            <label>
              <span>How can we help?</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell us about the challenge, opportunity or product direction." required />
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
              <span>I agree that GEOVA may use my details to respond to this enquiry and follow up as needed.</span>
            </label>
            <button className="btn btn-teal" type="submit">Send enquiry</button>
            {status.message ? (
              <p className={'form-status ' + status.type} aria-live="polite">
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </section>
      <CTA />
    </>
  );
}

function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow"><span className="dash" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}

function SimplePage({ eyebrow, title, desc, children }: { eyebrow: string; title: string; desc: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} desc={desc} />
      <section className="section">
        <div className="container simple-page">
          {children}
        </div>
      </section>
      <CTA />
    </>
  );
}

function CareersPage() {
  return (
    <SimplePage
      eyebrow="CAREERS & PARTNERSHIPS"
      title="Work with GEOVA on meaningful geospatial challenges."
      desc="We collaborate with researchers, implementers, founders and organisations that need thoughtful geospatial capability and reliable delivery."
    >
      <div className="info-panel legal-panel">
        <div>
          <strong>For collaborators</strong>
          <span>We welcome partnerships with consulting firms, NGOs, research groups, product teams and public-sector organisations.</span>
        </div>
        <div>
          <strong>For talent</strong>
          <span>Current opportunities are shared only when formally published. We encourage qualified candidates to reach out with a portfolio and relevant experience.</span>
        </div>
        <div>
          <strong>Contact</strong>
          <span>Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with a short introduction, scope and availability.</span>
        </div>
      </div>
    </SimplePage>
  );
}

function PrivacyPage() {
  return (
    <SimplePage
      eyebrow="PRIVACY POLICY"
      title="How GEOVA handles your information."
      desc="This website is intended to inform visitors and collect enquiries in a limited, transparent and minimally intrusive way."
    >
      <div className="legal-copy">
        <p>GEOVA collects contact details only when you submit a form or email us directly. Typical information includes your name, email address, organisation and message content.</p>
        <p>We use that information only to respond to your enquiry, assess fit, and maintain a record of the interaction when necessary for business communication and follow-up.</p>
        <p>We do not sell personal data and we do not rely on hidden data collection for marketing purposes. Any production contact endpoint must use server-side validation, rate limiting and secure storage controls before live data collection is enabled.</p>
        <p>Where a backend is configured, it should retain only the data required for the stated purpose and delete or archive it according to a documented retention schedule.</p>
        <p>For questions about your data, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
      </div>
    </SimplePage>
  );
}

function TermsPage() {
  return (
    <SimplePage
      eyebrow="TERMS OF SERVICE"
      title="Basic terms for using this website."
      desc="This website is provided for informational and business enquiry purposes. It is not a contract for services unless separately agreed in writing."
    >
      <div className="legal-copy">
        <p>GEOVA provides general informational content about geospatial and digital decision-support services, intended to help clients understand our capabilities and enquire about projects.</p>
        <p>All project work, proposals, pricing, and delivery timelines are subject to a separate written agreement. No general website content should be interpreted as a binding offer.</p>
        <p>Users are responsible for ensuring that any information they share is accurate, lawful and appropriate for the purpose of their enquiry.</p>
        <p>GEOVA reserves the right to update content, remove or change features, and refine our service offerings as needed.</p>
      </div>
    </SimplePage>
  );
}

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container cta">
        <div>
          <span className="eyebrow"><span className="dash" /> LET'S DISCUSS</span>
          <h2>Need sharper spatial insight for a real-world decision?</h2>
        </div>
        <ButtonLink to="/contact">Request a consultation</ButtonLink>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container not-found">
          <span className="eyebrow"><span className="dash" /> PAGE NOT FOUND</span>
          <h1>That page does not exist.</h1>
          <p>The link may be outdated or the page may have moved.</p>
          <ButtonLink to="/">Return home</ButtonLink>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAndSeo />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
