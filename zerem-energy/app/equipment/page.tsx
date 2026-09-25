import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { equipmentCategories } from '@/lib/equipment';
import { organization, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Temporary Power Equipment Israel | Zerem Energy' },
  description: 'Industrial generators, synchronization, transformers, distribution, power cables and fuel systems for temporary power projects across Israel.',
  alternates: { canonical: '/equipment' },
  openGraph: { title: 'Temporary Power Equipment Israel | Zerem Energy', description: 'Equipment for complete industrial generator rental and temporary power systems across Israel.', url: '/equipment' },
};

export default function EquipmentOverviewPage() {
  const url = `${siteUrl}/equipment`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Temporary Power Equipment in Israel',
      description: 'Equipment used in industrial generator rental and temporary power systems across Israel.',
      url,
      isPartOf: { '@type': 'WebSite', name: organization.name, url: organization.url },
      mainEntity: { '@type': 'ItemList', itemListElement: equipmentCategories.map((category, index) => ({ '@type': 'ListItem', position: index + 1, name: category.shortTitle, url: `${url}/${category.slug}` })) },
    },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Equipment', item: url }] },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="solutions-hero equipment-hub-hero">
        <div className="solutions-hero-image" />
        <div className="container solutions-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Equipment</span></nav>
          <p className="eyebrow light">COMPLETE TEMPORARY POWER PACKAGE</p>
          <h1>More than<br /><em>a generator.</em></h1>
          <p>Generation, controls, distribution, cabling and fuel equipment selected as one connected project system.</p>
          <a className="button" href="#equipment-list">Explore equipment <span>↓</span></a>
        </div>
      </section>

      <section className="solutions-intro section">
        <div className="container solutions-intro-grid">
          <div><p className="eyebrow">SYSTEM EQUIPMENT</p><h2>Every component<br />has a technical role.</h2></div>
          <div><p>Reliable temporary power depends on the complete path from generator to load. Controls coordinate capacity, transformers match voltage, distribution provides protection, cables carry the current and fuel systems support the operating schedule.</p><p>Zerem Energy defines these components around the confirmed load, site layout and project requirements.</p></div>
        </div>
      </section>

      <section id="equipment-list" className="section industries-hub equipment-hub">
        <div className="container industries-hub-grid equipment-hub-grid">
          {equipmentCategories.map((category, index) => <a className="industries-hub-card equipment-hub-card" href={`/equipment/${category.slug}`} key={category.slug}>
            <div><span>{String(index + 1).padStart(2, '0')}</span><span className="industry-arrow">↗</span></div>
            <h2>{category.shortTitle}</h2><p>{category.cardDescription}</p><strong>Explore equipment</strong>
          </a>)}
        </div>
      </section>

      <section className="coverage-section section"><div className="container coverage-grid"><div><p className="eyebrow light">ONE CONNECTED DESIGN</p><h2>Selected around<br />the actual load.</h2></div><div><p>Capacity, voltage, operating hours, starting currents, cable distances, fuel access and environmental conditions all influence the equipment list.</p><a href="/services/temporary-power" className="text-link">Explore temporary power systems <span>↗</span></a></div></div></section>
      <section className="service-cta"><div className="container"><div><p className="eyebrow">CONFIGURE YOUR SYSTEM</p><h2>Share the load, location and project schedule.</h2></div><a className="button dark" href="/contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/contact">Request a Quote <span>↗</span></a>
  </>;
}
