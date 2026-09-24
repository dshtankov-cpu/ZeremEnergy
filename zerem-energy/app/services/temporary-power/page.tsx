import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';

export const metadata: Metadata = {
  title: 'Temporary Power Solutions in Israel',
  description: 'Temporary power systems for construction, infrastructure, industrial facilities, planned maintenance and emergency requirements across Israel.',
  alternates: { canonical: '/services/temporary-power' },
  openGraph: { title: 'Temporary Power Solutions in Israel | Zerem Energy', description: 'Engineered temporary power packages with generation, distribution, fuel and technical support.', url: '/services/temporary-power' },
};

const sections = [
  {
    heading: 'Temporary power planned as a complete system',
    body: [
      'Temporary power is more than placing a generator on site. The system must connect the required load safely and reliably through suitable cabling, distribution, protection, grounding, fuel storage and controls.',
      'Zerem Energy develops project-specific packages for construction, infrastructure, planned shutdowns, additional production capacity, utility work and continuity requirements across Israel.',
    ],
  },
  {
    heading: 'Technical assessment before deployment',
    body: ['We review the load profile and site conditions before defining the system. This helps avoid undersizing, unnecessary fuel consumption and installation changes after equipment reaches the site.'],
    points: ['Connected and peak load', 'Motor and equipment starting currents', 'Voltage, frequency and phase requirements', 'Daily operating schedule and rental duration', 'Noise, access, space and environmental constraints', 'Required redundancy and continuity level'],
  },
  {
    heading: 'Distribution, fuel and operational support',
    body: [
      'Depending on the project, the temporary power package can include transformers, distribution boards, power cables, connection equipment, external fuel tanks and scheduled refueling.',
      'Preventive maintenance and technical support can continue throughout the rental period so responsibilities remain clear from delivery through demobilization.',
    ],
  },
  {
    heading: 'Planned projects and urgent requirements',
    body: ['Planned deployments allow time for detailed engineering, site preparation and installation scheduling. For urgent requirements, the first priority is to confirm load, voltage, location, access and equipment availability so a practical response can be defined without compromising the technical scope.'],
  },
];

const questions: Array<[string, string]> = [
  ['Which projects need temporary power?', 'Typical applications include construction, infrastructure, industrial maintenance, production expansion, utility projects and continuity during an unavailable grid connection.'],
  ['Can the system grow during the project?', 'Yes. Modular synchronized systems can add or remove generating capacity as the load changes, subject to the confirmed design.'],
  ['Do you supply distribution equipment?', 'Transformers, distribution boards, protection equipment, power cabling and connections can be included according to the project requirements.'],
  ['Is maintenance included?', 'Preventive maintenance and technical support can be incorporated into the rental scope for the full operating period.'],
];

export default function TemporaryPowerPage() {
  return <ServicePage slug="temporary-power" eyebrow="TEMPORARY POWER SOLUTIONS" title="Temporary Power Solutions in Israel" lead="Integrated generation and distribution packages for projects that need reliable power before, alongside or independently of the grid." highlights={[["100 kVA+", "Industrial systems"], ["Modular", "Capacity that can scale"], ["Nationwide", "Projects across Israel"], ["One Scope", "Generation and distribution"]]} sections={sections} questions={questions} />;
}
