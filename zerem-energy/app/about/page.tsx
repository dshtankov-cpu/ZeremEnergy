import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { organization, siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'About Zerem Energy | Power Solutions Israel' },
  description: 'Learn how Zerem Energy plans and delivers industrial generator rental and integrated power solutions for projects across Israel.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Zerem Energy | Power Solutions Israel', description: 'Industrial power solutions built around the real load, site and operating plan.', url: '/about' },
};

export default function AboutPage() {
  const url = `${siteUrl}/about`;
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Zerem Energy', description: metadata.description, url, mainEntity: { '@type': 'Organization', name: organization.name, url: organization.url } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'About', item: url }] },
  ];
  const principles = [
    ['Start with the load', 'Capacity, starting current, voltage and operating hours guide the system configuration.'],
    ['Plan the complete scope', 'Generation, distribution, fuel, logistics and support are considered as one connected project.'],
    ['Build for change', 'Modular systems can respond as demand and project phases develop.'],
    ['Keep responsibilities clear', 'The proposal defines equipment, interfaces, support and the information needed from each party.'],
  ];
  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a><Header />
    <main id="main">
      <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">About</span></nav><p className="eyebrow light">ABOUT ZEREM ENERGY</p><h1>Power systems.<br /><em>Planned as one.</em></h1><p>Zerem Energy develops industrial generator rental and integrated power solutions for projects throughout Israel.</p></div></section>
      <section className="section"><div className="container about-grid"><div><p className="eyebrow">HOW WE WORK</p><h2>One technical scope.<br />Every project stage.</h2><p>We bring equipment selection, distribution, transportation, installation, commissioning, fuel planning, maintenance and technical support into one coordinated project scope.</p><p>Each solution begins with the actual electrical requirement and site conditions. That keeps recommendations connected to the way the project will operate.</p><a className="text-link dark-link" href="/solutions">Explore our solutions <span>↗</span></a></div><div className="principles">{principles.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></div></section>
      <section className="service-cta"><div className="container"><div><p className="eyebrow">POWER FOR YOUR PROJECT</p><h2>Bring us the requirement. We will define the system.</h2></div><a className="button dark" href="/contact">Start a Project <span>↗</span></a></div></section>
    </main><Footer /><a className="mobile-sticky-cta" href="/contact">Request a Quote <span>↗</span></a>
  </>;
}
