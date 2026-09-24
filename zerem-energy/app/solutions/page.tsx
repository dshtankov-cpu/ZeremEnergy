import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { organization, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industrial Power Solutions in Israel',
  description: 'Generator rental, temporary power, gas and hybrid systems, EPC, operation and maintenance for industrial projects across Israel.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Industrial Power Solutions in Israel | Zerem Energy',
    description: 'Integrated power solutions from 100 kVA generator rental to multi-megawatt project systems.',
    url: '/solutions',
  },
};

const solutions = [
  {
    number: '01',
    id: 'generator-rental',
    title: 'Industrial Generator Rental',
    summary: 'Diesel generator rental from 100 kVA to synchronized multi-megawatt systems for projects throughout Israel.',
    points: ['Single and synchronized generator systems', 'Delivery, positioning and electrical installation', 'Fuel systems, maintenance and technical support'],
    href: '/services/generator-rental',
    link: 'Explore generator rental',
  },
  {
    number: '02',
    id: 'temporary-power',
    title: 'Temporary Power Systems',
    summary: 'Integrated generation and distribution for construction, industry, infrastructure, planned maintenance and continuity requirements.',
    points: ['Load and site assessment', 'Transformers, distribution, protection and cabling', 'Commissioning and support throughout the project'],
    href: '/services/temporary-power',
    link: 'Explore temporary power',
  },
  {
    number: '03',
    id: 'gas-hybrid',
    title: 'Gas & Hybrid Power',
    summary: 'Project-specific systems that can combine gas generation, solar, battery storage and conventional generation where operating conditions support the design.',
    points: ['Technology selection around the load profile', 'Integrated controls and system coordination', 'Efficiency and operating model assessment'],
    href: '/#contact',
    link: 'Discuss a gas or hybrid project',
  },
  {
    number: '04',
    id: 'epc-om',
    title: 'EPC & O&M',
    summary: 'A coordinated scope for engineering, procurement, construction, commissioning, operation and maintenance of power systems.',
    points: ['Technical design and equipment coordination', 'Installation, testing and commissioning', 'Preventive maintenance and operational support'],
    href: '/#contact',
    link: 'Discuss an EPC or O&M scope',
  },
];

export default function SolutionsPage() {
  const url = `${siteUrl}/solutions`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Industrial Power Solutions in Israel',
      description: 'Generator rental and integrated power solutions for industrial projects across Israel.',
      url,
      isPartOf: { '@type': 'WebSite', name: organization.name, url: organization.url },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: solutions.map((solution, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: solution.title,
          url: solution.href.startsWith('/') ? `${siteUrl}${solution.href}` : url,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Solutions', item: url },
      ],
    },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="solutions-hero">
        <div className="solutions-hero-image" />
        <div className="container solutions-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Solutions</span></nav>
          <p className="eyebrow light">POWER SOLUTIONS ACROSS ISRAEL</p>
          <h1>One power requirement.<br /><em>A complete system.</em></h1>
          <p>From generator rental to integrated project delivery, we define the equipment, distribution and support around the actual load and site conditions.</p>
          <a className="button" href="#solutions-list">Explore our solutions <span>↓</span></a>
        </div>
      </section>

      <section className="solutions-intro section">
        <div className="container solutions-intro-grid">
          <div><p className="eyebrow">ZEREM ENERGY SOLUTIONS</p><h2>Built around the project.<br />Connected as one scope.</h2></div>
          <div><p>A reliable power system depends on more than generating capacity. Load behaviour, voltage, distribution, fuel, access, installation and ongoing support all influence the final configuration.</p><p>Zerem Energy brings these elements together for industrial and commercial projects across Israel, from a single 100 kVA generator to synchronized multi-megawatt systems.</p></div>
        </div>
      </section>

      <section id="solutions-list" className="solutions-list section">
        <div className="container">
          {solutions.map((solution) => <article className="solution-row" id={solution.id} key={solution.id}>
            <div className="solution-row-number">{solution.number}</div>
            <div className="solution-row-copy"><h2>{solution.title}</h2><p>{solution.summary}</p></div>
            <div className="solution-row-detail"><ul>{solution.points.map((point) => <li key={point}>{point}</li>)}</ul><a className="text-link dark-link" href={solution.href}>{solution.link} <span>↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section className="solutions-process section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">HOW WE DEFINE THE SYSTEM</p><h2>From requirement<br />to energization.</h2></div><p>The process starts with the load and ends with a clear plan for installation and support.</p></div>
          <div className="solutions-steps">
            {[['01', 'Assess', 'Load, voltage, operating schedule, location and site access.'], ['02', 'Configure', 'Generation, distribution, fuel and support requirements.'], ['03', 'Deploy', 'Transport, positioning, installation, testing and commissioning.'], ['04', 'Support', 'Fuel management, preventive maintenance and technical assistance.']].map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="service-cta"><div className="container"><div><p className="eyebrow">POWER FOR YOUR PROJECT</p><h2>Tell us the load, location and schedule.</h2></div><a className="button dark" href="/#contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/#contact">Request a Quote <span>↗</span></a>
  </>;
}
