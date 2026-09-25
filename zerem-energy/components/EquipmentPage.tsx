import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import type { EquipmentCategory } from '@/lib/equipment';
import { organization, siteUrl } from '@/lib/site';

export default function EquipmentPage({ category }: { category: EquipmentCategory }) {
  const url = `${siteUrl}/equipment/${category.slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: category.title,
      description: category.description,
      url,
      provider: { '@type': 'Organization', name: organization.name, url: organization.url },
      areaServed: { '@type': 'Country', name: 'Israel' },
      serviceType: category.shortTitle,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Equipment', item: `${siteUrl}/equipment` },
        { '@type': 'ListItem', position: 3, name: category.shortTitle, item: url },
      ],
    },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="service-hero equipment-detail-hero">
        <div className="service-hero-image" />
        <div className="container service-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/equipment">Equipment</a><span>/</span><span aria-current="page">{category.shortTitle}</span></nav>
          <p className="eyebrow light">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p>{category.lead}</p>
          <a className="button" href="/contact">Configure your system <span>↗</span></a>
        </div>
      </section>

      <section className="service-highlights" aria-label="Equipment highlights">
        <div className="container service-highlights-grid">
          {category.highlights.map(([value, label]) => <div key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section service-content">
        <div className="container service-content-grid">
          <aside><p className="eyebrow">{category.shortTitle.toUpperCase()}</p><h2>{category.sidebarTitle}</h2><p>{category.sidebarText}</p><a className="industry-service-link" href="/services/generator-rental">Explore generator rental <span>↗</span></a></aside>
          <div className="service-article">
            {category.sections.map((section) => <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
            </section>)}
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container faq-grid">
          <div><p className="eyebrow">COMMON QUESTIONS</p><h2>Planning the complete equipment scope.</h2></div>
          <div className="faq-list">{category.questions.map(([question, answer]) => <details key={question}><summary><h3>{question}</h3><span className="plus">+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="service-cta"><div className="container"><div><p className="eyebrow">EQUIPMENT FOR YOUR PROJECT</p><h2>Define the capacity, voltage and site conditions.</h2></div><a className="button dark" href="/contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/contact">Request a Quote <span>↗</span></a>
  </>;
}
