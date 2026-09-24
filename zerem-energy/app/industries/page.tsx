import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { industries } from '@/lib/industries';
import { organization, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Power Solutions by Industry Israel | Zerem Energy' },
  description: 'Temporary power and generator rental for construction, manufacturing, infrastructure, commercial facilities, data centers, energy and utilities across Israel.',
  alternates: { canonical: '/industries' },
  openGraph: { title: 'Power Solutions by Industry in Israel | Zerem Energy', description: 'Project-specific temporary generation and support for demanding industries across Israel.', url: '/industries' },
};

export default function IndustriesPage() {
  const url = `${siteUrl}/industries`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Industrial Power Solutions by Industry in Israel',
      description: 'Temporary power and generator rental for industrial projects across Israel.',
      url,
      isPartOf: { '@type': 'WebSite', name: organization.name, url: organization.url },
      mainEntity: { '@type': 'ItemList', itemListElement: industries.map((industry, index) => ({ '@type': 'ListItem', position: index + 1, name: industry.shortTitle, url: `${url}/${industry.slug}` })) },
    },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Industries', item: url }] },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="solutions-hero industries-hero">
        <div className="solutions-hero-image" />
        <div className="container solutions-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Industries</span></nav>
          <p className="eyebrow light">POWER FOR DEMANDING OPERATIONS</p>
          <h1>Every industry has<br /><em>a different load.</em></h1>
          <p>We configure generation, distribution, fuel and support around the way each project operates.</p>
          <a className="button" href="#industry-list">Explore industries <span>↓</span></a>
        </div>
      </section>

      <section className="solutions-intro section">
        <div className="container solutions-intro-grid">
          <div><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>One technical process.<br />A project-specific result.</h2></div>
          <div><p>The same generator can behave very differently when connected to cranes, production motors, building systems or a critical facility. Correct planning starts with the actual equipment, starting currents, voltage and operating schedule.</p><p>Zerem Energy develops temporary power packages from 100 kVA to synchronized multi-megawatt systems for projects across Israel.</p></div>
        </div>
      </section>

      <section id="industry-list" className="section industries-hub">
        <div className="container industries-hub-grid">
          {industries.map((industry, index) => <a className="industries-hub-card" href={`/industries/${industry.slug}`} key={industry.slug}>
            <div><span>{String(index + 1).padStart(2, '0')}</span><span className="industry-arrow">↗</span></div>
            <h2>{industry.shortTitle}</h2>
            <p>{industry.cardDescription}</p>
            <strong>Explore industry solution</strong>
          </a>)}
        </div>
      </section>

      <section className="coverage-section section"><div className="container coverage-grid"><div><p className="eyebrow light">ONE CONNECTED SCOPE</p><h2>From generation<br />to site support.</h2></div><div><p>A project can include generators, synchronization, transformers, distribution, cabling, fuel systems, installation, commissioning, maintenance and technical support.</p><a href="/solutions" className="text-link">Explore all power solutions <span>↗</span></a></div></div></section>
      <section className="service-cta"><div className="container"><div><p className="eyebrow">POWER FOR YOUR INDUSTRY</p><h2>Discuss the load, location and schedule.</h2></div><a className="button dark" href="/#contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/#contact">Request a Quote <span>↗</span></a>
  </>;
}
