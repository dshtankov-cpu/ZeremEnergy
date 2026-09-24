import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import type { Industry } from '@/lib/industries';
import { organization, siteUrl } from '@/lib/site';

export default function IndustryPage({ industry }: { industry: Industry }) {
  const url = `${siteUrl}/industries/${industry.slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: industry.title,
      description: industry.description,
      url,
      provider: { '@type': 'Organization', name: organization.name, url: organization.url },
      areaServed: { '@type': 'Country', name: 'Israel' },
      audience: { '@type': 'Audience', audienceType: industry.shortTitle },
      serviceType: 'Temporary industrial power solutions',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteUrl}/industries` },
        { '@type': 'ListItem', position: 3, name: industry.shortTitle, item: url },
      ],
    },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="service-hero industry-detail-hero">
        <div className="service-hero-image" />
        <div className="container service-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/industries">Industries</a><span>/</span><span aria-current="page">{industry.shortTitle}</span></nav>
          <p className="eyebrow light">{industry.eyebrow}</p>
          <h1>{industry.title}</h1>
          <p>{industry.lead}</p>
          <a className="button" href="/#contact">Discuss your power requirement <span>↗</span></a>
        </div>
      </section>

      <section className="service-highlights" aria-label="Industry solution highlights">
        <div className="container service-highlights-grid">
          {industry.highlights.map(([value, label]) => <div key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section service-content">
        <div className="container service-content-grid">
          <aside><p className="eyebrow">{industry.shortTitle.toUpperCase()}</p><h2>{industry.sidebarTitle}</h2><p>{industry.sidebarText}</p><a className="industry-service-link" href="/services/temporary-power">Explore temporary power <span>↗</span></a></aside>
          <div className="service-article">
            {industry.sections.map((section) => <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
            </section>)}
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container faq-grid">
          <div><p className="eyebrow">COMMON QUESTIONS</p><h2>Planning power for {industry.shortTitle.toLowerCase()}.</h2></div>
          <div className="faq-list">
            {industry.questions.map(([question, answer]) => <details key={question}><summary><h3>{question}</h3><span className="plus">+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="service-cta"><div className="container"><div><p className="eyebrow">PROJECT POWER ACROSS ISRAEL</p><h2>Define the load, site and operating schedule.</h2></div><a className="button dark" href="/#contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/#contact">Request a Quote <span>↗</span></a>
  </>;
}
