export type EquipmentSection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type EquipmentCategory = {
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
  sections: EquipmentSection[];
  questions: Array<[string, string]>;
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: 'diesel-generators',
    shortTitle: 'Diesel Generators',
    metaTitle: 'Industrial Diesel Generators Israel | Zerem Energy',
    title: 'Industrial Diesel Generator Rental in Israel',
    description: 'Industrial diesel generator rental from 100 kVA for temporary, continuous and standby project power across Israel.',
    eyebrow: 'INDUSTRIAL DIESEL GENERATORS',
    lead: 'Generator systems from 100 kVA, selected around the real load, voltage, operating schedule and site conditions.',
    cardDescription: 'Industrial generating sets from 100 kVA for temporary, continuous and standby project applications.',
    highlights: [['100 kVA+', 'Starting capacity'], ['Multi-MW', 'Synchronized systems'], ['Diesel', 'Industrial generation'], ['All Israel', 'Project coverage']],
    sidebarTitle: 'Capacity is only the starting point.',
    sidebarText: 'Correct generator selection also depends on starting currents, load steps, voltage, operating hours and site conditions.',
    sections: [
      { heading: 'Diesel generators configured around the load', body: ['Zerem Energy provides industrial diesel generators for construction, manufacturing, infrastructure, commercial facilities, data center projects and energy applications across Israel. Systems start from 100 kVA and can be combined for larger requirements.', 'Generator capacity is selected after reviewing the connected equipment, starting loads, peak demand, voltage, frequency and expected operating profile.'] },
      { heading: 'Single-unit and multi-generator systems', body: ['A single generator may suit a stable, defined load. Larger or changing demand can be served by several generators synchronized to operate as one coordinated system.'], points: ['Industrial rental generators from 100 kVA', 'Parallel operation for multi-megawatt capacity', 'Controls matched to the operating sequence', 'Configuration for temporary or longer project periods'] },
      { heading: 'Equipment supplied as part of a complete package', body: ['The generator can be combined with transportation, positioning, cabling, distribution boards, protection, transformers, fuel storage, refueling, installation and commissioning. The final equipment list is confirmed in the technical proposal.'] },
      { heading: 'Maintenance and operating support', body: ['Preventive maintenance and technical support can be included throughout the rental period. Service intervals, fuel arrangements and site responsibilities are planned around operating hours and access conditions.'] },
    ],
    questions: [
      ['What is the minimum generator capacity?', 'Zerem Energy focuses on industrial generators starting from 100 kVA.'],
      ['How is the required generator size calculated?', 'The assessment considers connected load, peak demand, motor starting current, voltage, load steps, operating hours and future changes.'],
      ['Can several generators run together?', 'Yes. Multiple generators can be synchronized into a scalable multi-megawatt system when required by the project design.'],
      ['Can delivery and installation be included?', 'Yes. Transportation, positioning, electrical installation, testing and commissioning can form part of the project scope.'],
    ],
  },
  {
    slug: 'synchronization-systems',
    shortTitle: 'Synchronization Systems',
    metaTitle: 'Generator Synchronization Systems | Zerem Energy',
    title: 'Generator Synchronization Systems in Israel',
    description: 'Synchronized generator systems for scalable multi-megawatt temporary power, load sharing and operational flexibility in Israel.',
    eyebrow: 'GENERATOR SYNCHRONIZATION',
    lead: 'Multiple generating sets coordinated as one power system for larger loads and changing project demand.',
    cardDescription: 'Controls and electrical systems that combine multiple generators into scalable multi-megawatt installations.',
    highlights: [['Parallel', 'Multi-unit operation'], ['Multi-MW', 'Scalable capacity'], ['Modular', 'Changing demand'], ['Controlled', 'Load sharing']],
    sidebarTitle: 'Many units. One system.',
    sidebarText: 'Synchronization coordinates voltage, frequency, phase and load sharing before generators operate in parallel.',
    sections: [
      { heading: 'Why synchronize multiple generators?', body: ['A synchronized arrangement allows several generating sets to supply a common system. It can provide more capacity than a single unit and create a modular configuration that follows changes in demand.', 'The design must account for generator compatibility, controls, protection, distribution and the way loads enter or leave the system.'] },
      { heading: 'System functions and project inputs', body: ['Synchronization is part of a wider electrical design rather than a standalone control panel.'], points: ['Voltage, frequency and phase matching', 'Load sharing between operating units', 'Start, stop and operating sequence', 'Protection and breaker coordination', 'Connection to temporary distribution', 'Monitoring and maintenance requirements'] },
      { heading: 'Scalable capacity for changing projects', body: ['Modular systems can add generating capacity as demand grows or reduce the number of operating units during lower-load periods. The permitted operating combinations are defined during system configuration and commissioning.'] },
      { heading: 'Installation, testing and commissioning', body: ['Before energization, the generating sets, controls, breakers, protection and distribution interfaces must be tested as one system. Commissioning confirms the agreed operating sequence and load-sharing behaviour.'] },
    ],
    questions: [
      ['What does generator synchronization mean?', 'It means matching and controlling multiple generators so they can operate in parallel and supply a common electrical system.'],
      ['Why use several generators instead of one large unit?', 'A multi-unit arrangement can offer modular capacity and operating flexibility. The best configuration depends on the load and project requirements.'],
      ['Can synchronized systems reach multi-megawatt capacity?', 'Yes. Multiple units can be combined into multi-megawatt systems when supported by the confirmed electrical design.'],
      ['Is commissioning included?', 'Testing and commissioning can be included together with installation and the wider temporary power package.'],
    ],
  },
  {
    slug: 'transformers-distribution',
    shortTitle: 'Transformers & Distribution',
    metaTitle: 'Temporary Power Distribution Israel | Zerem Energy',
    title: 'Transformers and Temporary Power Distribution in Israel',
    description: 'Transformers, distribution boards and electrical protection for industrial temporary power systems and generator projects in Israel.',
    eyebrow: 'TEMPORARY POWER DISTRIBUTION',
    lead: 'Voltage conversion, distribution and protection equipment designed to carry power from generation to the required loads.',
    cardDescription: 'Voltage conversion, distribution boards and protection matched to the generator system and site loads.',
    highlights: [['Matched', 'Voltage requirements'], ['Protected', 'Electrical distribution'], ['Integrated', 'Generator interface'], ['Project-Led', 'Equipment selection']],
    sidebarTitle: 'Deliver power to the right point.',
    sidebarText: 'A generator produces electricity; the distribution system carries it to the load at the required voltage and protection level.',
    sections: [
      { heading: 'Temporary distribution as part of the power system', body: ['A complete temporary power installation may require voltage conversion, switching, protection and several distribution points between the generator and connected equipment. These elements are selected together so ratings and interfaces remain consistent.', 'The design starts with the generator output, required load voltage, cable distances, connection points and site electrical arrangement.'] },
      { heading: 'Equipment selected for the technical scope', body: ['The exact configuration depends on the project design and available connection information.'], points: ['Transformers for required voltage conversion', 'Main and secondary distribution boards', 'Circuit protection and switching equipment', 'Connection points for project loads', 'Interfaces with generators and cabling', 'Testing and commissioning requirements'] },
      { heading: 'Ratings, protection and coordination', body: ['Equipment ratings must cover expected current and operating conditions. Protection settings and breaker coordination are defined around the temporary system and the approved connection arrangement.'] },
      { heading: 'Installation and commissioning', body: ['Positioning, grounding, cable termination, labeling and functional testing are coordinated before energization. Any interface with an existing electrical system must follow the customer’s approved design and switching procedure.'] },
    ],
    questions: [
      ['Can transformers be included with generator rental?', 'Yes. Transformers can be included when voltage conversion is required by the confirmed project design.'],
      ['Do you provide temporary distribution boards?', 'Distribution boards, protection and switching equipment can be included according to the required current, circuits and connection arrangement.'],
      ['How is the equipment rating selected?', 'Selection depends on voltage, current, connected load, cable distances, operating conditions and the wider protection design.'],
      ['Can equipment connect to an existing site system?', 'A connection may be possible after the electrical interface and approved switching procedure have been reviewed.'],
    ],
  },
  {
    slug: 'cables-connections',
    shortTitle: 'Cables & Connections',
    metaTitle: 'Temporary Power Cables Israel | Zerem Energy',
    title: 'Temporary Power Cables and Connections in Israel',
    description: 'Industrial power cables, connection equipment and cable planning for generator rental and temporary power projects across Israel.',
    eyebrow: 'POWER CABLES & CONNECTIONS',
    lead: 'Cabling selected around current, voltage, distance, installation method and the layout of each project site.',
    cardDescription: 'Industrial power and control cabling selected for capacity, voltage, route and site conditions.',
    highlights: [['Sized', 'For project current'], ['Planned', 'Cable routes'], ['Connected', 'Generation to load'], ['Tested', 'Before energization']],
    sidebarTitle: 'The connection completes the system.',
    sidebarText: 'Cable size and route affect voltage drop, protection, installation time and the safe delivery of power to the load.',
    sections: [
      { heading: 'Industrial cabling for temporary power', body: ['Temporary power cables connect generators, transformers, distribution boards and project loads. Cable selection depends on current, voltage, route length, installation method, ambient conditions and the required connection equipment.', 'Planning the route before equipment arrives helps define lengths, crossing points, protection needs and termination responsibilities.'] },
      { heading: 'Cable planning and connection equipment', body: ['The project cable schedule can include power and control connections required by the confirmed system.'], points: ['Generator-to-distribution power cables', 'Transformer and distribution connections', 'Control and synchronization cabling', 'Suitable connectors and terminations', 'Route protection and cable management', 'Identification, testing and commissioning'] },
      { heading: 'Voltage drop and route length', body: ['Long cable routes and high current can influence conductor selection and system performance. The route, load and voltage are reviewed together rather than selecting cable size from capacity alone.'] },
      { heading: 'Installation around an active site', body: ['Cable routing should account for vehicles, pedestrians, construction activity, drainage, access and future work. Connection and energization are coordinated with the agreed isolation and testing procedure.'] },
    ],
    questions: [
      ['Are power cables included in the rental package?', 'They can be included when the route, length, current, voltage and connection points are known.'],
      ['How do you determine the required cable size?', 'Selection considers current, voltage, cable length, voltage drop, installation method, ambient conditions and protection.'],
      ['Can you provide connectors and terminations?', 'Connection equipment and terminations can form part of the agreed temporary power scope.'],
      ['Do cables need to be tested before use?', 'The installed system should be inspected and tested according to the approved project procedure before energization.'],
    ],
  },
  {
    slug: 'fuel-systems',
    shortTitle: 'Fuel Systems',
    metaTitle: 'Generator Fuel Systems Israel | Zerem Energy',
    title: 'Generator Fuel Systems and Refueling in Israel',
    description: 'Fuel tanks, fuel management and planned refueling for industrial generator rental and temporary power projects in Israel.',
    eyebrow: 'GENERATOR FUEL SYSTEMS',
    lead: 'Fuel storage and refueling planned around generator consumption, operating hours, site access and the project schedule.',
    cardDescription: 'Fuel tanks, management and planned refueling integrated into the temporary power package.',
    highlights: [['Planned', 'Operating hours'], ['Integrated', 'Generator supply'], ['Scheduled', 'Refueling'], ['Managed', 'Project scope']],
    sidebarTitle: 'Plan fuel before operation starts.',
    sidebarText: 'Generator runtime depends on load, consumption, tank capacity, delivery access and a practical refueling schedule.',
    sections: [
      { heading: 'Fuel supply as part of temporary power planning', body: ['Industrial generators may operate for extended hours or across long project periods. Fuel storage and refueling should therefore be planned together with the load profile, expected consumption, delivery access and maintenance schedule.', 'The required arrangement depends on generator capacity, loading, daily operating hours and the interval between permitted deliveries.'] },
      { heading: 'Components of the fuel scope', body: ['Fuel support can be coordinated as part of the wider generator rental package.'], points: ['External fuel storage where required', 'Connections between tank and generator', 'Consumption and runtime planning', 'Scheduled refueling arrangements', 'Access planning for fuel delivery', 'Coordination with maintenance activity'] },
      { heading: 'Consumption and runtime planning', body: ['Fuel consumption changes with generator loading and operating conditions. Estimates are developed from the proposed equipment and expected load, then reviewed against the required operating schedule.'] },
      { heading: 'Site access and responsibilities', body: ['Tank positioning, delivery routes, permitted refueling times and site procedures should be confirmed before operation. The agreed scope defines who monitors fuel levels, requests deliveries and coordinates access.'] },
    ],
    questions: [
      ['Can a fuel tank be included with generator rental?', 'Yes. External fuel storage and the required generator connections can be included according to the project scope.'],
      ['How is fuel consumption estimated?', 'Consumption is estimated from generator capacity, expected loading, operating hours and the proposed equipment configuration.'],
      ['Can refueling be arranged during the rental period?', 'Yes. Scheduled refueling can be included when access, operating hours and site procedures have been confirmed.'],
      ['What information is needed for fuel planning?', 'Provide expected generator load, daily run hours, rental duration, delivery access, permitted refueling windows and any site-specific procedures.'],
    ],
  },
];

export function getEquipmentCategory(slug: string) {
  return equipmentCategories.find((category) => category.slug === slug);
}
