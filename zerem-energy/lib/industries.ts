export type IndustrySection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type Industry = {
  slug: string;
  shortTitle: string;
  metaTitle: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  cardDescription: string;
  highlights: Array<[string, string]>;
  sidebarTitle: string;
  sidebarText: string;
  sections: IndustrySection[];
  questions: Array<[string, string]>;
};

export const industries: Industry[] = [
  {
    slug: 'construction',
    shortTitle: 'Construction',
    metaTitle: 'Construction Site Power in Israel | Zerem Energy',
    title: 'Temporary Power for Construction Sites in Israel',
    description: 'Temporary construction power and industrial generator rental across Israel, including distribution, fuel supply, installation and project support.',
    eyebrow: 'CONSTRUCTION SITE POWER',
    lead: 'Scalable temporary power for site establishment, heavy equipment, cranes, offices and every stage of construction.',
    cardDescription: 'Temporary electricity for equipment, cranes, site offices and changing loads throughout the build.',
    highlights: [['100 kVA+', 'Industrial capacity'], ['Modular', 'Power that can scale'], ['All Israel', 'Nationwide projects'], ['Full Scope', 'Generation to support']],
    sidebarTitle: 'Power that follows the build.',
    sidebarText: 'Construction loads change from site establishment through fit-out. The power system should be planned to change with them.',
    sections: [
      { heading: 'Construction power planned around each project phase', body: ['A construction site rarely has one fixed electrical load. Site offices and early works may begin with a defined requirement, while cranes, pumps, hoists, tools and specialist contractors can add larger starting currents and peak demand later in the programme.', 'Zerem Energy assesses the expected sequence of work so generation and distribution can be configured for the current phase and reviewed as the project develops.'] },
      { heading: 'Equipment, distribution and connections', body: ['A temporary construction power package can combine generators with the equipment required to deliver electricity safely across the site.'], points: ['Industrial diesel generators from 100 kVA', 'Synchronized systems for larger demand', 'Transformers, distribution boards and protection', 'Power cabling and site connections', 'Fuel tanks and planned refueling', 'Testing, commissioning and technical support'] },
      { heading: 'Site logistics and operating conditions', body: ['Delivery planning considers access routes, lifting and positioning, available space, cable paths, noise constraints and fuel access. Confirming these conditions before dispatch reduces installation changes and delays on site.'] },
      { heading: 'From temporary connection to demobilization', body: ['The project scope can cover initial assessment, equipment selection, transportation, installation, commissioning, fuel management and preventive maintenance. When grid power becomes available or the project phase ends, demobilization can be coordinated around the site schedule.'] },
    ],
    questions: [
      ['What information is needed for a construction power quotation?', 'Share the site location, project phase, connected equipment, crane or motor loads, voltage, operating hours, start date and expected rental duration.'],
      ['Can the generating capacity increase during construction?', 'Yes. A modular synchronized configuration can allow capacity to be adjusted as the project load changes, subject to the confirmed design and equipment availability.'],
      ['Can site distribution and cabling be included?', 'Yes. Transformers, distribution boards, protection equipment, cables and connections can be included in the project scope.'],
      ['Do you support construction projects throughout Israel?', 'Yes. Zerem Energy supports construction projects across Israel, with logistics planned around location, access and equipment availability.'],
    ],
  },
  {
    slug: 'manufacturing',
    shortTitle: 'Manufacturing',
    metaTitle: 'Factory Generator Rental Israel | Zerem Energy',
    title: 'Industrial Power Solutions for Manufacturing in Israel',
    description: 'Generator rental and temporary power for factories and manufacturing facilities in Israel, supporting planned maintenance, additional capacity and continuity.',
    eyebrow: 'POWER FOR MANUFACTURING',
    lead: 'Temporary, supplementary and backup generation configured around production loads, operating schedules and site constraints.',
    cardDescription: 'Primary, supplementary and backup power for factories, production lines and industrial equipment.',
    highlights: [['Load-Led', 'System configuration'], ['Multi-MW', 'Scalable capacity'], ['Planned', 'Maintenance support'], ['Integrated', 'Fuel and distribution']],
    sidebarTitle: 'Protect the production plan.',
    sidebarText: 'Industrial power must reflect motor starting currents, process loads, operating shifts and the cost of interruption.',
    sections: [
      { heading: 'Temporary power for production facilities', body: ['Manufacturing sites may require temporary generation during electrical works, planned maintenance, grid limitations, production expansion or a temporary increase in demand. The configuration begins with the processes that must remain available and the way their loads behave.', 'Motors, compressors, pumps, heating equipment and automated production lines can create starting currents and load steps that are not visible in a simple total-kilowatt calculation.'] },
      { heading: 'Load assessment and system configuration', body: ['Available electrical information is reviewed before generator selection.'], points: ['Running, peak and starting loads', 'Voltage, frequency and phase requirements', 'Critical and non-critical process separation', 'Operating shifts and expected run hours', 'Connection points and internal distribution', 'Redundancy and maintenance requirements'] },
      { heading: 'Planned maintenance and additional capacity', body: ['For planned shutdowns, temporary generation can be coordinated with the maintenance sequence, isolation plan and reconnection schedule. For capacity support, generation and distribution can be arranged around the existing electrical system and the duration of the additional requirement.'] },
      { heading: 'Operational support during the rental period', body: ['Fuel storage, scheduled refueling, preventive maintenance and technical support can be included. Responsibilities and service intervals are defined in the agreed scope so the operating team has a clear plan throughout the rental period.'] },
    ],
    questions: [
      ['Can temporary generators support industrial motors?', 'Yes, when the configuration accounts for motor starting current, load steps, voltage and the operating sequence. These details should be reviewed before sizing the system.'],
      ['Can the system support a planned factory shutdown?', 'Yes. Delivery, installation, commissioning and removal can be planned around the maintenance schedule and confirmed electrical scope.'],
      ['Can fuel and maintenance be included?', 'Yes. Fuel systems, scheduled refueling, preventive maintenance and technical support can form part of the rental package.'],
      ['Can several generators operate as one system?', 'Yes. Multiple units can be synchronized for larger or variable industrial loads when the project design requires it.'],
    ],
  },
  {
    slug: 'infrastructure',
    shortTitle: 'Infrastructure',
    metaTitle: 'Infrastructure Project Power Israel | Zerem Energy',
    title: 'Temporary Power for Infrastructure Projects in Israel',
    description: 'Temporary generator systems for transport, utilities, telecommunications and major infrastructure projects across Israel.',
    eyebrow: 'INFRASTRUCTURE PROJECT POWER',
    lead: 'Project-specific generation and distribution for demanding sites, changing work fronts and long operating schedules.',
    cardDescription: 'Scalable power for transport, utilities, telecommunications and major project sites.',
    highlights: [['Nationwide', 'Project coverage'], ['Scalable', 'Changing demand'], ['Site-Led', 'Logistics planning'], ['One Scope', 'Power and support']],
    sidebarTitle: 'Designed for complex sites.',
    sidebarText: 'Infrastructure work combines technical loads with access, programme and logistics constraints that must be planned together.',
    sections: [
      { heading: 'Power for major infrastructure work', body: ['Infrastructure projects often need electricity before a permanent grid connection is available or across work areas that move as the programme advances. Temporary systems can support construction equipment, pumping, communications, site facilities and project-specific electrical loads.', 'The solution is developed around the required capacity, voltage, operating profile, site access and expected project duration.'] },
      { heading: 'Generation and temporary distribution', body: ['The package can extend from the generating equipment to the point where power is needed.'], points: ['Industrial generators and synchronized systems', 'Transformers and voltage conversion', 'Distribution boards and protection', 'Power and control cabling', 'Fuel storage and refueling planning', 'Installation, testing and commissioning'] },
      { heading: 'Logistics across changing work fronts', body: ['Transport routes, lifting requirements, ground conditions, available space and cable distances influence the equipment plan. Where work fronts change, the system can be reviewed so relocation or additional distribution is coordinated with the project schedule.'] },
      { heading: 'Long-duration project support', body: ['For extended rental periods, preventive maintenance, fuel planning and technical responsibilities are defined in advance. Modular generation can also support changes in demand without treating every project phase as a completely separate installation.'] },
    ],
    questions: [
      ['Which infrastructure projects can use temporary power?', 'Applications can include transport, utility, telecommunications and major civil works where temporary generation and distribution are required.'],
      ['Can equipment be relocated as the project advances?', 'Relocation can be planned when access, lifting, cable routes and the new operating conditions have been reviewed.'],
      ['Do you cover remote project locations?', 'Zerem Energy supports projects throughout Israel. Delivery and service planning depend on the exact location, site access and confirmed scope.'],
      ['Can long rental periods include maintenance?', 'Yes. Preventive maintenance and technical support can be included and scheduled around the operating plan.'],
    ],
  },
  {
    slug: 'commercial-facilities',
    shortTitle: 'Commercial Facilities',
    metaTitle: 'Commercial Generator Rental Israel | Zerem Energy',
    title: 'Generator Rental for Commercial Facilities in Israel',
    description: 'Temporary and backup generator solutions for offices, warehouses, retail sites and commercial buildings across Israel.',
    eyebrow: 'COMMERCIAL FACILITY POWER',
    lead: 'Temporary power for commercial buildings, warehouses, offices and operational sites during projects, maintenance or capacity constraints.',
    cardDescription: 'Temporary and backup power for offices, warehouses, retail and commercial operations.',
    highlights: [['100 kVA+', 'Industrial systems'], ['Planned', 'Project deployment'], ['Flexible', 'Rental duration'], ['Complete', 'Installation package']],
    sidebarTitle: 'Keep essential operations supplied.',
    sidebarText: 'Commercial sites need a clear distinction between essential loads, operational loads and loads that can remain offline.',
    sections: [
      { heading: 'Temporary power for occupied and operational sites', body: ['Commercial facilities may need temporary generation during electrical upgrades, planned maintenance, fit-out works, grid connection delays or temporary capacity limitations. The first step is to identify which building systems must be supplied and when.', 'Operating hours, tenant activity, loading access and noise considerations can all affect the equipment and installation plan.'] },
      { heading: 'Define essential building loads', body: ['A load schedule helps separate the systems required for continuity from those that do not need temporary supply.'], points: ['Lighting and selected building services', 'IT and communications equipment', 'Pumps, ventilation and mechanical systems', 'Warehouse and operational equipment', 'Security and access systems', 'Project-specific tenant requirements'] },
      { heading: 'Installation around site access and operations', body: ['Generator positioning, cable routes, distribution points, fuel access and delivery timing are reviewed around the facility layout. The agreed method should allow installation and support to be coordinated with normal site operations.'] },
      { heading: 'Flexible project scope', body: ['The package can include generation, temporary distribution, transportation, installation, commissioning, fuel storage, refueling and maintenance. Rental duration and support are defined according to the project schedule.'] },
    ],
    questions: [
      ['Can a generator support an entire commercial building?', 'That depends on the building load, connection arrangement and required systems. A load assessment is needed before the appropriate capacity and distribution plan can be confirmed.'],
      ['Can you power only essential building systems?', 'Yes. Where the electrical arrangement permits, critical or selected loads can be separated and supplied according to the agreed design.'],
      ['Are cabling and distribution boards included?', 'They can be included together with protection equipment, transformers and connection accessories required by the project.'],
      ['Do you provide rental across Israel?', 'Yes. Commercial projects can be supported throughout Israel, subject to equipment availability and an agreed logistics plan.'],
    ],
  },
  {
    slug: 'data-centers',
    shortTitle: 'Data Centers',
    metaTitle: 'Data Center Temporary Power Israel | Zerem Energy',
    title: 'Temporary Power Solutions for Data Centers in Israel',
    description: 'Temporary generator and distribution systems for data center projects, maintenance and capacity requirements in Israel.',
    eyebrow: 'DATA CENTER TEMPORARY POWER',
    lead: 'Engineered temporary generation for defined critical loads, planned works and project capacity requirements.',
    cardDescription: 'Power systems configured around defined critical loads, operating sequences and continuity requirements.',
    highlights: [['Load-Led', 'Technical design'], ['Modular', 'Scalable generation'], ['Planned', 'Commissioning sequence'], ['Supported', 'Maintenance scope']],
    sidebarTitle: 'Start with the critical load.',
    sidebarText: 'Data center temporary power requires precise electrical information and a deployment plan aligned with the site operating procedure.',
    sections: [
      { heading: 'Temporary generation for defined data center requirements', body: ['Temporary power may be required during construction, commissioning, planned electrical work, capacity expansion or other defined project conditions. The system is configured around the confirmed load, voltage, connection points and operating sequence.', 'Any interface with existing critical infrastructure must follow the customer’s approved electrical design, switching procedure and site controls.'] },
      { heading: 'Technical inputs for system design', body: ['Detailed project information is required before equipment selection and connection planning.'], points: ['Critical and non-critical load schedules', 'Voltage, frequency and connection arrangement', 'Load steps and operating sequence', 'Required capacity and expected run hours', 'Available space, access and cable routes', 'Approved redundancy and maintenance plan'] },
      { heading: 'Modular and synchronized generation', body: ['Where the confirmed design requires larger or changing capacity, multiple generators can operate in parallel as a synchronized system. This can provide a modular arrangement and allow individual equipment maintenance within the limits of the approved system design.'] },
      { heading: 'Fuel, maintenance and site coordination', body: ['Fuel storage, refueling intervals and preventive maintenance are planned around expected operating hours and site access. Roles, communication and service procedures should be agreed before energization.'] },
    ],
    questions: [
      ['Can you provide synchronized generators for a data center project?', 'Yes. Multi-unit synchronized systems can be configured when required by the confirmed load and approved technical design.'],
      ['Can temporary power connect to existing critical systems?', 'The connection depends on the site electrical design and approved switching procedure. All interfaces must be reviewed and agreed before installation.'],
      ['Can transformers and distribution be included?', 'Yes. Transformers, distribution boards, protection and cabling can be included according to the project design.'],
      ['What is needed before quotation?', 'Provide load schedules, voltage, connection information, operating sequence, location, dates, run hours and site access requirements.'],
    ],
  },
  {
    slug: 'energy-utilities',
    shortTitle: 'Energy & Utilities',
    metaTitle: 'Utility Project Power Israel | Zerem Energy',
    title: 'Temporary Generation for Energy and Utility Projects in Israel',
    description: 'Temporary generation, additional capacity and project power systems for energy and utility operations across Israel.',
    eyebrow: 'ENERGY & UTILITY PROJECTS',
    lead: 'Scalable generation and distribution for planned work, project loads and temporary capacity requirements.',
    cardDescription: 'Temporary generation and additional capacity for utility work and energy projects.',
    highlights: [['Multi-MW', 'Scalable systems'], ['Integrated', 'Generation and distribution'], ['Project-Led', 'Technical scope'], ['Nationwide', 'Coverage across Israel']],
    sidebarTitle: 'Capacity for the project window.',
    sidebarText: 'Utility and energy projects require a defined technical interface, operating plan and division of responsibilities.',
    sections: [
      { heading: 'Temporary generation for energy and utility work', body: ['Temporary power can support planned works, project commissioning, grid connection delays, additional capacity and site operations. Each application requires a clear definition of the load, voltage, connection arrangement and operating responsibility.', 'Systems can range from a single industrial generator to synchronized multi-megawatt generation with temporary distribution.'] },
      { heading: 'Integrated project equipment', body: ['The technical scope can combine the equipment required between generation and the project connection point.'], points: ['Industrial generators and synchronized controls', 'Transformers and voltage conversion', 'Distribution boards and protection', 'Power and control cabling', 'Fuel tanks and refueling arrangements', 'Testing, commissioning and operating support'] },
      { heading: 'Interface and operating plan', body: ['Before deployment, the parties should confirm connection boundaries, switching responsibilities, protection requirements, operating hours, communication procedures and maintenance access. This keeps the temporary system aligned with the wider project controls.'] },
      { heading: 'Scalable capacity and project support', body: ['A modular arrangement can support changing demand over the project period. Fuel planning, preventive maintenance and technical support can be included according to the agreed scope and operating schedule.'] },
    ],
    questions: [
      ['Can you provide multi-megawatt temporary generation?', 'Yes. Multiple generators can be synchronized into a scalable multi-megawatt system when required by the confirmed project design.'],
      ['Can transformers and protection equipment be supplied?', 'Yes. Voltage conversion, distribution and protection equipment can be included according to the technical scope.'],
      ['Can the system provide additional project capacity?', 'Temporary generation can provide defined additional capacity where the connection and operating arrangement have been technically reviewed.'],
      ['Do you support utility projects throughout Israel?', 'Yes. Zerem Energy supports projects across Israel, subject to the confirmed scope, location, access and equipment availability.'],
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
