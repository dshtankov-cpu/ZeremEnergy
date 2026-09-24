import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Industrial Generator Rental in Israel | 100 kVA to Multi-MW',
  description: 'Industrial diesel generator rental across Israel from 100 kVA to multi-megawatt systems, including delivery, installation, fuel supply, maintenance and technical support.',
  alternates: { canonical: '/services/generator-rental' },
  openGraph: { title: 'Industrial Generator Rental in Israel | Zerem Energy', description: 'Scalable generator rental from 100 kVA to multi-megawatt systems with complete project support.', url: '/services/generator-rental' },
};

const sections = [
  {
    heading: 'Industrial generator rental built around the actual load',
    body: [
      'Zerem Energy provides industrial generator rental for construction sites, factories, infrastructure projects, commercial facilities, data centers and utility applications throughout Israel. Systems start from 100 kVA and can be expanded into synchronized multi-megawatt installations.',
      'Correct sizing begins with the equipment that must be powered. Running load alone is not enough: starting currents, peak demand, voltage, frequency, load steps, operating hours and future expansion all influence the generator configuration.',
    ],
  },
  {
    heading: 'What can be included in the rental package',
    body: ['The project scope can combine generation, distribution and ongoing operational support under one coordinated plan.'],
    points: ['Diesel generators and synchronized multi-unit systems', 'Transportation, positioning and site logistics', 'Electrical installation, testing and commissioning', 'Transformers, distribution boards, protection and cabling', 'Fuel tanks, scheduled refueling and fuel management', 'Preventive maintenance and technical support during the rental period'],
  },
  {
    heading: 'Generator capacities and system types',
    body: [
      'Our rental range is intended for industrial and commercial power requirements from 100 kVA upward. The final solution may use one diesel generator or several synchronized units, depending on the load profile, site layout and required level of operating flexibility.',
      'The technical design can also include transformers, distribution boards, protection equipment, cabling and fuel storage. Voltage, connection method and distribution requirements are confirmed before equipment is selected.',
    ],
    points: ['Industrial diesel generators from 100 kVA', 'Single-unit systems for defined loads', 'Synchronized generators for larger or changing demand', 'Temporary distribution, protection, cabling and transformers'],
  },
  {
    heading: 'Single generators and synchronized multi-megawatt systems',
    body: [
      'A single generator may be appropriate for a defined industrial load. Larger or changing loads can be served by multiple generators operating in parallel as one coordinated power plant.',
      'A synchronized arrangement can add capacity in stages, improve operating flexibility and allow individual units to be maintained while the remaining system continues to support the project.',
    ],
  },
  {
    heading: 'Nationwide delivery and project support',
    body: ['We support generator rental projects across central Israel, Tel Aviv and the surrounding area, Jerusalem, Haifa and northern Israel, Be’er Sheva and southern Israel. Delivery timing and installation planning depend on equipment availability, site access and the confirmed technical scope.'],
  },
  {
    heading: 'Rental periods planned around the project schedule',
    body: [
      'The rental period is defined around the actual project schedule. A quotation can cover a planned shutdown, a temporary construction phase, seasonal demand or a longer operational requirement.',
      'Duration affects equipment allocation, maintenance planning, fuel arrangements and total project cost. Start dates and operating hours should therefore be confirmed as early as possible.',
    ],
  },
  {
    heading: 'What determines generator rental cost?',
    body: ['Generator rental prices depend on the complete operating scope rather than generator capacity alone. We prepare a project-specific quotation after reviewing the technical and logistical requirements.'],
    points: ['Required capacity, voltage and load profile', 'Rental duration and expected operating hours', 'Delivery distance, lifting needs and site access', 'Installation, cabling and distribution equipment', 'Fuel storage, refueling schedule and consumption', 'Maintenance and technical support requirements'],
  },
  {
    heading: 'Industrial applications across Israel',
    body: ['Temporary generator systems can support construction and infrastructure projects, manufacturing facilities, commercial sites, data centers, energy and utility operations, planned maintenance and other projects where dependable temporary electricity is required.'],
  },
  {
    heading: 'How to request a generator rental quotation',
    body: ['Send the project location, required start date, expected rental period and any available electrical information. If the required capacity is not yet known, connected equipment, starting loads and operating hours provide a practical basis for an initial assessment.'],
    points: ['Project location and site access details', 'Required start date and rental duration', 'Capacity, voltage and frequency where known', 'List of connected loads and starting requirements', 'Daily operating hours and fuel arrangements', 'Installation, distribution and support requirements'],
  },
];

const questions: Array<[string, string]> = [
  ['What is the minimum rental capacity?', 'Zerem Energy focuses on industrial generator rental starting from 100 kVA.'],
  ['Can multiple generators operate together?', 'Yes. Multiple units can be synchronized into a scalable multi-megawatt system when the project load requires it.'],
  ['Can delivery, installation and fuel be included?', 'Yes. Transportation, installation, commissioning, fuel systems, refueling and ongoing maintenance can be included in the project scope.'],
  ['How much does industrial generator rental cost?', 'Pricing depends on capacity, duration, operating hours, transport, installation, distribution equipment, fuel and support requirements. We provide a project-specific quotation after reviewing the scope.'],
  ['Do you provide generator rental outside Tel Aviv?', 'Yes. Zerem Energy supports projects throughout Israel, subject to equipment availability, site access and an agreed delivery plan.'],
  ['Can you help determine the required generator size?', 'Yes. Connected loads, motor starting currents, peak demand, voltage and operating profile can be reviewed to define an appropriate configuration.'],
  ['What information is required for a quotation?', 'The main inputs are required capacity, voltage, connected loads, project location, start date, rental duration, operating hours and site access conditions.'],
];

export default function GeneratorRentalPage() {
  return <ServicePage slug="generator-rental" eyebrow="GENERATOR RENTAL IN ISRAEL" title="Industrial Generator Rental in Israel" lead="Reliable temporary power from 100 kVA to synchronized multi-megawatt systems, supported by delivery, installation, fuel supply and maintenance." highlights={[["100 kVA", "Starting capacity"], ["Multi-MW", "Synchronized systems"], ["All Israel", "Nationwide delivery"], ["Full Scope", "Installation to support"]]} sections={sections} questions={questions} />;
}
