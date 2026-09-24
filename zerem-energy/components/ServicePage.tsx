import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { organization, siteUrl } from '@/lib/site';

type ContentSection = {
  heading: string;
  body: string[];
  points?: string[];
};

type ServicePageProps = {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  highlights: Array<[string, string]>;
  sections: ContentSection[];
  questions: Array<[string, string]>;
};

export default function ServicePage({ slug, eyebrow, title, lead, highlights, sections, questions }: ServicePageProps) {
  const url = `${siteUrl}/services/${slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description: lead,
      url,
      provider: { '@type': 'Organization', name: organization.name, url: organization.url },
      areaServed: { '@type': 'Country', name: 'Israel' },
      serviceType: eyebrow,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#solutions` },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
  ];

  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="service-hero">
        <div className="service-hero-image" />
        <div className="container service-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#solutions">Services</a><span>/</span><span aria-current="page">{title}</span></nav>
          <p className="eyebrow light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lead}</p>
          <a className="button" href="/#contact">Request a project assessment <span>↗</span></a>
        </div>
      </section>

      <section className="service-highlights" aria-label="Service highlights">
        <div className="container service-highlights-grid">
          {highlights.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section service-content">
        <div className="container service-content-grid">
          <aside><p className="eyebrow">ZEREM ENERGY</p><h2>A complete power package.</h2><p>Equipment is only one part of a reliable temporary power system. We coordinate the technical scope around the real project requirements.</p></aside>
          <div className="service-article">
            {sections.map((section) => <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
            </section>)}
          </div>
        </div>
      </section>

      <section className="section service-faq">
        <div className="container faq-grid">
          <div><p className="eyebrow">COMMON QUESTIONS</p><h2>Planning the right system.</h2></div>
          <div className="faq-list">
            {questions.map(([question, answer]) => <details key={question}><summary><h3>{question}</h3><span className="plus">+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="service-cta"><div className="container"><div><p className="eyebrow">POWER FOR YOUR PROJECT</p><h2>Discuss the load, location and schedule.</h2></div><a className="button dark" href="/#contact">Request a Quote <span>↗</span></a></div></section>
    </main>
    <Footer />
    <a className="mobile-sticky-cta" href="/#contact">Request a Quote <span>↗</span></a>
  </>;
}
