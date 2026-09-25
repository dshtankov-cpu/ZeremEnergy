import Header from '@/components/Header';
import MotionObserver from '@/components/MotionObserver';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { organization, siteUrl } from '@/lib/site';

const solutions = [
  ['01', 'Generator Rental', 'Industrial power from 100 kVA.', 'Diesel generators and synchronized multi-unit systems configured around your load, voltage and operating schedule.'],
  ['02', 'Temporary Power', 'Flexible power for every project phase.', 'Complete temporary power packages for construction, infrastructure, planned maintenance and emergency requirements.'],
  ['03', 'Gas & Hybrid Power', 'Improve efficiency where conditions allow.', 'Gas generation, solar and battery storage integrated with conventional generation for project-specific applications.'],
  ['04', 'EPC & O&M', 'One partner for the complete lifecycle.', 'Engineering, installation, commissioning, operation and maintenance of temporary and permanent power systems.'],
];

const industries = [
  ['01', 'Construction', 'Temporary electricity for equipment, tower cranes, site offices and every phase of development.'],
  ['02', 'Manufacturing', 'Primary, supplementary and backup power for production facilities and industrial equipment.'],
  ['03', 'Infrastructure', 'Scalable generation for transport, utilities, telecommunications and major project sites.'],
  ['04', 'Commercial Facilities', 'Backup and temporary power for offices, warehouses, retail and commercial buildings.'],
  ['05', 'Data Centers', 'Power systems configured around critical loads and continuity requirements.'],
  ['06', 'Energy & Utilities', 'Temporary generation, additional capacity and project-specific power systems.'],
];

const equipment = [
  ['01', 'Diesel Generators', 'Industrial generator sets from 100 kVA for continuous, temporary and standby applications.'],
  ['02', 'Synchronization Systems', 'Intelligent controls combine multiple generators into one scalable multi-megawatt power plant.'],
  ['03', 'Transformers & Distribution', 'Voltage conversion, distribution boards and protection equipment matched to site requirements.'],
  ['04', 'Cables & Connections', 'Power and control cabling selected for the required capacity, voltage and site layout.'],
  ['05', 'Fuel Systems', 'Fuel tanks, fuel management and refueling integrated into the complete power package.'],
];

const process = [
  ['01', 'Project information', 'Share the location, required capacity, voltage, loads, operating schedule and rental duration.'],
  ['02', 'Technical assessment', 'We review the load profile and site conditions to define an appropriate system configuration.'],
  ['03', 'Technical proposal', 'You receive a clear scope covering equipment, accessories, logistics and support.'],
  ['04', 'Delivery & installation', 'We coordinate transportation, positioning, electrical installation, testing and commissioning.'],
  ['05', 'Operation & support', 'Fuel supply, preventive maintenance and technical support can continue throughout the rental period.'],
];

const faqs = [
  ['Do you provide generator rental throughout Israel?', 'Yes. Zerem Energy supports projects across all regions of Israel. Transportation and installation are coordinated according to equipment availability, project location and site access.'],
  ['What is the minimum generator capacity?', 'Zerem Energy focuses on industrial generator rental starting from 100 kVA.'],
  ['Can you provide multi-megawatt power?', 'Yes. Multiple generators can be synchronized to create flexible and scalable multi-megawatt power systems.'],
  ['Do you provide delivery and installation?', 'Yes. We can manage transportation, positioning, electrical installation, testing and commissioning.'],
  ['Can fuel supply be included?', 'Yes. Fuel tanks, fuel systems, refueling and fuel management can be included in the project scope.'],
  ['Do you provide maintenance during the rental period?', 'Yes. Preventive maintenance, technical support and on-site operational support can be included.'],
  ['How much does generator rental cost?', 'Pricing depends on capacity, rental duration, operating hours, transportation, installation, accessories, fuel requirements and the required level of support.'],
];

export default function Home() {
  const structuredData = [
    { '@context': 'https://schema.org', '@type': 'Organization', ...organization, areaServed: { '@type': 'Country', name: 'Israel' }, knowsAbout: ['Industrial generator rental', 'Temporary power systems', 'Diesel generators', 'Generator synchronization', 'Power distribution', 'Fuel management', 'Power system operation and maintenance'] },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: organization.name, url: siteUrl, inLanguage: 'en' },
  ];
  return <>
    <MotionObserver />
    <JsonLd data={structuredData} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero">
        <div className="hero-image" />
        <div className="container hero-content">
          <p className="eyebrow light"><span /> INDUSTRIAL POWER ACROSS ISRAEL</p>
          <h1>Generator Rental.<br /><em>Complete Power Solutions.</em></h1>
          <p className="hero-description">Reliable temporary and permanent power systems from 100 kVA to multi-megawatt capacity — including delivery, installation, fuel supply, maintenance and technical support.</p>
          <div className="flex flex-wrap gap-3">
            <a className="button" href="/solutions">Explore Solutions <span>↗</span></a>
            <a className="button outline" href="#contact">Request a Quote <span>↗</span></a>
          </div>
          <div className="hero-bottom">
            <span>Rental <b>·</b> Temporary Power <b>·</b> Hybrid <b>·</b> EPC <b>·</b> O&M</span>
            <a href="#generator-rental" aria-label="Scroll to generator rental information">SCROLL TO EXPLORE <span>↓</span></a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Power capabilities">
        <div className="container stats-grid reveal-stagger">
          {[
            ['100 kVA', 'Starting capacity'],
            ['Multi-MW', 'Scalable power systems'],
            ['All Israel', 'Nationwide project coverage'],
            ['Full Service', 'From delivery to support'],
          ].map(([value, label]) => <div data-reveal key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section id="generator-rental" className="section intro-section">
        <div className="container intro-grid">
          <div data-reveal>
            <p className="eyebrow">GENERATOR RENTAL IN ISRAEL</p>
            <h2>Reliable power.<br />Engineered around your project.</h2>
          </div>
          <div className="intro-copy" data-reveal>
            <p>Zerem Energy provides industrial generator rental and integrated power solutions throughout Israel. We support construction sites, industrial facilities, infrastructure projects, commercial operations, planned maintenance and emergency power requirements.</p>
            <p>Every project begins with the actual electrical load. We consider starting currents, peak demand, voltage, operating hours, available fuel, site conditions and future expansion before configuring the system.</p>
            <p>Our team can manage the complete process — from assessment and equipment selection to transportation, installation, commissioning, fuel supply, maintenance and operational support.</p>
          </div>
        </div>
      </section>

      <section id="solutions" className="section solutions-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">01 / OUR SOLUTIONS</p><h2>Power systems.<br />Built around your load.</h2></div>
            <p>From an individual industrial generator to a synchronized multi-megawatt installation.</p>
          </div>
          <div className="solutions-grid reveal-stagger">
            {solutions.map(([id, title, subtitle, body]) => <article className="solution-card" data-reveal key={id}>
              <div className="card-top"><span className="solution-symbol" aria-hidden="true">{id === '01' ? 'ϟ' : id === '02' ? '◈' : id === '03' ? '☼' : '⌘'}</span><span>{id}</span></div>
              <h3>{title}</h3><p className="card-subtitle">{subtitle}</p><p>{body}</p>
              <a href={id === '01' ? '/services/generator-rental' : id === '02' ? '/services/temporary-power' : id === '03' ? '/solutions#gas-hybrid' : '/solutions#epc-om'} aria-label={`Explore ${title}`}>Explore service <span>↗</span></a>
            </article>)}
          </div>
        </div>
      </section>

      <section id="about" className="scale-section">
        <div className="scale-image" />
        <div className="container scale-content" data-reveal>
          <p className="eyebrow light">INDUSTRIAL GENERATOR RENTAL</p>
          <h2>From 100 kVA to<br /><em>Multi-Megawatt</em><br />Power Systems.</h2>
          <p>For larger loads, multiple generators can be synchronized to operate as one coordinated power plant. This creates a scalable system that can adapt as demand changes and support planned maintenance without shutting down the complete installation.</p>
          <div className="models"><span>Rental</span><span>EPC</span><span>PPA</span><span>BOO / BOOT</span></div>
        </div>
      </section>

      <section id="industries" className="section industries">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">02 / INDUSTRIES WE SERVE</p><h2>Power for critical operations.</h2></div>
            <p>Different sites and loads require different configurations. Every solution starts with the project itself.</p>
          </div>
          <div className="industry-grid reveal-stagger">
            {industries.map(([id, name, description]) => <a className="industry-card" data-reveal href={`/industries/${['construction', 'manufacturing', 'infrastructure', 'commercial-facilities', 'data-centers', 'energy-utilities'][Number(id) - 1]}`} key={id}>
              <div><span className="index">{id}</span><span className="industry-arrow">↗</span></div>
              <h3>{name}</h3><p>{description}</p>
            </a>)}
          </div>
        </div>
      </section>

      <section id="equipment" className="section equipment">
        <div className="container equipment-grid">
          <div data-reveal>
            <p className="eyebrow">03 / COMPLETE POWER PACKAGE</p>
            <h2>More than<br />a generator.</h2>
            <p className="equipment-intro">A reliable temporary power system depends on correct sizing, distribution, fuel planning, installation and maintenance. We bring these elements together in one coordinated package.</p>
            <a href="#contact" className="button dark">Configure your system <span>↗</span></a>
            <div className="equipment-note"><span>100 kVA → MULTI-MW</span><p>Individual units. Integrated systems.<br />One connected solution.</p></div>
          </div>
          <div className="equipment-list" data-reveal>
            {equipment.map(([id, title, description]) => <details key={id}>
              <summary><span className="index">{id}</span><h3>{title}</h3><span className="plus">+</span></summary>
              <div className="equipment-detail"><p>{description}</p><a href={`/equipment/${['diesel-generators', 'synchronization-systems', 'transformers-distribution', 'cables-connections', 'fuel-systems'][Number(id) - 1]}`}>Explore equipment ↗</a></div>
            </details>)}
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">04 / HOW IT WORKS</p><h2>From load assessment<br />to energization.</h2></div>
            <p>A clear process keeps the technical scope, responsibilities and project schedule aligned.</p>
          </div>
          <div className="process-grid" data-reveal>
            {process.map(([id, title, body]) => <article className="process-card" key={id}><span>{id}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section coverage-section">
        <div className="container coverage-grid">
          <div data-reveal>
            <p className="eyebrow light">NATIONWIDE PROJECT COVERAGE</p>
            <h2>Generator rental<br />across Israel.</h2>
          </div>
          <div data-reveal>
            <p>Zerem Energy supports projects in every region of Israel — including central Israel, Tel Aviv and the surrounding area, Jerusalem, Haifa and northern Israel, as well as Be’er Sheva and southern Israel.</p>
            <p>Transportation, installation, commissioning, fuel supply, maintenance and technical support can be coordinated as one complete service package.</p>
            <a href="#contact" className="text-link">Discuss your project location <span>↗</span></a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="container faq-grid">
          <div data-reveal><p className="eyebrow">05 / FREQUENTLY ASKED QUESTIONS</p><h2>Planning your<br />power requirement.</h2></div>
          <div className="faq-list" data-reveal>
            {faqs.map(([question, answer]) => <details key={question}><summary><h3>{question}</h3><span className="plus">+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">RELIABLE POWER. ANYWHERE IN ISRAEL.</p>
            <h2>Let’s power<br />your project.</h2>
            <p>Tell us your required capacity, project location and rental duration.</p>
            <div className="contact-details">
              <div><span>Email</span><a href="mailto:hello@zerem-energy.example">hello@zerem-energy.example</a></div>
              <div><span>Phone</span><a href="tel:+97230000000">+972 3 000 0000</a></div>
              <div><span>Office</span><p>123 Example Street<br />Tel Aviv-Yafo, Israel</p></div>
            </div>
            <p className="contact-placeholder-note">Temporary demonstration details — to be replaced before final launch.</p>
          </div>
          <div className="quote-panel" data-reveal>
            <div className="quote-panel-heading"><span>PROJECT ENQUIRY</span><strong>Tell us what you need.</strong></div>
            <form className="quote-form" aria-describedby="quote-form-status">
              <label>Full name<input type="text" name="name" placeholder="Your name" /></label>
              <label>Company<input type="text" name="company" placeholder="Company name" /></label>
              <label>Email or phone<input type="text" name="contact" placeholder="How should we contact you?" /></label>
              <div className="quote-form-row">
                <label>Required capacity<input type="text" name="capacity" placeholder="e.g. 500 kVA" /></label>
                <label>Project location<input type="text" name="location" placeholder="City / region" /></label>
              </div>
              <label>Project details<textarea name="details" rows={4} placeholder="Application, start date, duration and operating hours" /></label>
              <button type="button" className="button dark" disabled>Submit request <span>↗</span></button>
              <p id="quote-form-status">Online submission will be activated when the final company email is connected.</p>
            </form>
            <a href="/project-brief.txt" download="Zerem-Energy-Project-Brief.txt" className="download-brief">Download the detailed project brief <span>↓</span></a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    <a className="mobile-sticky-cta" href="#contact">Request a Quote <span>↗</span></a>
  </>;
}
