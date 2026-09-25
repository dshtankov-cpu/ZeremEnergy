import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Contact Zerem Energy | Generator Rental Israel' },
  description: 'Contact Zerem Energy to discuss industrial generator rental and temporary power requirements anywhere in Israel.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Zerem Energy | Generator Rental Israel', description: 'Share your load, project location and operating schedule.', url: '/contact' },
};

export default function ContactPage() {
  const url = `${siteUrl}/contact`;
  const structuredData = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Contact', item: url }] };
  return <>
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a><Header />
    <main id="main">
      <section className="page-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span aria-current="page">Contact</span></nav><p className="eyebrow light">PROJECT ENQUIRIES</p><h1>Let’s power<br /><em>your project.</em></h1><p>Share the location, required capacity and project schedule so the technical scope can begin.</p></div></section>
      <section className="section"><div className="container contact-page-grid"><div><p className="eyebrow">CONTACT ZEREM ENERGY</p><h2>Start with the<br />project details.</h2><div className="contact-list"><div><span>EMAIL</span><a href="mailto:hello@zerem-energy.example">hello@zerem-energy.example</a></div><div><span>TELEPHONE</span><a href="tel:+97230000000">+972 3 000 0000</a></div><div><span>OFFICE</span><p>123 Example Street, Tel Aviv-Yafo, Israel</p></div></div><p className="contact-placeholder-note">Temporary demonstration details — to be replaced before final launch.</p></div><aside className="brief-box"><p className="eyebrow">FOR A FASTER ASSESSMENT</p><h2>Include these details.</h2><ul><li>Project location and site access</li><li>Required capacity, voltage or connected loads</li><li>Start date and rental duration</li><li>Daily operating hours</li><li>Distribution, fuel and support requirements</li></ul><a className="button" href="mailto:hello@zerem-energy.example?subject=New%20power%20project%20in%20Israel">Email project details <span>↗</span></a></aside></div></section>
      <section className="coverage-section section"><div className="container coverage-grid"><div><p className="eyebrow light">NATIONWIDE COVERAGE</p><h2>Projects across Israel.</h2></div><div><p>We support industrial generator rental and temporary power requirements in every region of Israel, subject to equipment availability, site access and the confirmed technical scope.</p><a className="text-link" href="/services/generator-rental">Explore generator rental <span>↗</span></a></div></div></section>
    </main><Footer /><a className="mobile-sticky-cta" href="mailto:hello@zerem-energy.example">Email Project Details <span>↗</span></a>
  </>;
}
