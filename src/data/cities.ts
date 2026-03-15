export interface CitySpecs {
  ceilingHeight: string;
  power: string;
  doorSize: string;
  hvac: string;
  suiteRange: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  fullName: string;
  availability: 'available' | 'full';
  availableUnits?: string;
  occupancyMessage: string;
  specs: CitySpecs;
  mapEmbedUrl: string;
  seo: {
    title: string;
    description: string;
  };
  localGuide: {
    heading: string;
    paragraphs: string[];
    nearbyHighways: string[];
    airport: string;
    submarkets: string[];
    demandDrivers: string[];
  };
  tenantProfiles: string[];
  faq: CityFAQ[];
  schema: {
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    geo: { lat: number; lng: number };
    phone: string;
  };
}

export const cities: CityData[] = [
  {
    slug: 'asheville-nc',
    name: 'Asheville',
    state: 'NC',
    fullName: 'Asheville, NC',
    availability: 'full',
    occupancyMessage: 'Most suites lease quickly. Tell us your size and use, and we\'ll match you with current or upcoming openings.',
    specs: {
      ceilingHeight: '18–24 ft clear',
      power: '200A 3-Phase',
      doorSize: "12' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,000–3,000 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104379.1!2d-82.6!3d35.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f36e2a989!2sAsheville%2C+NC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Asheville, NC | 1,000–3,000 SF | GetFlexSpace',
      description: 'Lease 1,000–3,000 SF flex space in Asheville, NC with drive-in doors, clear heights, HVAC, and 24/7 access. Request current and upcoming openings.',
    },
    localGuide: {
      heading: 'Why Asheville for Your Business',
      paragraphs: [
        'Asheville sits at the crossroads of I-26 and I-40, making it a natural distribution hub for Western North Carolina. Our flex suites are 10 minutes from Asheville Regional Airport (AVL) and give your business fast access to freight routes serving Knoxville, Charlotte, and the Southeast corridor.',
        'The Asheville market has exploded with craft brewing, outdoor recreation brands, and a thriving arts economy. Small bay flex space is in high demand from contractors serving the region\'s booming residential construction and from e-commerce operators shipping throughout the East Coast.',
        'Our Asheville suites offer 18–24 ft clear heights, 12\'×14\' drive-in doors, and full HVAC—features that are hard to find in Western NC without committing to 10,000+ SF leases.',
      ],
      nearbyHighways: ['I-26', 'I-40', 'I-240', 'US-74'],
      airport: 'Asheville Regional Airport (AVL) – 10 min',
      submarkets: ['Biltmore area', 'South Asheville', 'Arden', 'Fletcher', 'Hendersonville corridor'],
      demandDrivers: ['Craft brewing & distilling', 'Residential construction boom', 'Outdoor recreation industry', 'Arts & maker economy', 'Tourism-driven services'],
    },
    tenantProfiles: [
      'HVAC and mechanical contractors serving WNC residential and commercial projects',
      'E-commerce fulfillment shipping to the East Coast',
      'Craft breweries and distilleries scaling production',
      'Outdoor gear and equipment businesses',
      'Creative studios and custom fabrication shops',
    ],
    faq: [
      {
        question: 'What size flex space is available in Asheville?',
        answer: 'Our Asheville suites range from 1,000 to 3,000 square feet. Each unit includes 18–24 ft clear height ceilings, a 12\'×14\' drive-in door, full HVAC, and 200A 3-phase power.',
      },
      {
        question: 'Where exactly is GetFlexSpace in Asheville?',
        answer: 'We are located in South Asheville with direct access to I-26 and I-40. The property is 10 minutes from Asheville Regional Airport and within easy reach of Arden, Fletcher, and the Biltmore area.',
      },
      {
        question: 'What types of businesses use flex space in Asheville?',
        answer: 'Our Asheville tenants include HVAC contractors, craft brewers and distillers, e-commerce fulfillment operations, outdoor recreation companies, and creative studios. If you need drive-in access and high ceilings, our space is likely a great fit.',
      },
      {
        question: 'Is there flex space available now in Asheville?',
        answer: 'Our Asheville location leases quickly. Submit your requirements and we\'ll match you with current or upcoming openings—often before they hit the market.',
      },
      {
        question: 'What are lease terms for Asheville flex space?',
        answer: 'We offer 1-year, 2-year, and 3-year lease terms. Longer commitments may qualify for reduced rates. Contact us to discuss what works best for your business.',
      },
    ],
    schema: {
      address: { street: '100 Flex Way', city: 'Asheville', state: 'NC', zip: '28801' },
      geo: { lat: 35.5951, lng: -82.5515 },
      phone: '+18285551234',
    },
  },
  {
    slug: 'durham-nc',
    name: 'Durham',
    state: 'NC',
    fullName: 'Durham, NC',
    availability: 'available',
    availableUnits: '1 Unit Available – 2,500 sq ft',
    occupancyMessage: 'Space is available now. Request pricing and schedule a tour.',
    specs: {
      ceilingHeight: '20–24 ft clear',
      power: '400A 3-Phase',
      doorSize: "14' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,500–3,000 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103574.8!2d-78.9!3d35.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace46d3bdb!2sDurham%2C+NC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Durham, NC | 1,500–3,000 SF | GetFlexSpace',
      description: 'Lease 1,500–3,000 SF flex space in Durham, NC with drive-in doors, 400A 3-phase power, and 24/7 access. Minutes from RTP. Request pricing today.',
    },
    localGuide: {
      heading: 'Why Durham for Your Business',
      paragraphs: [
        'Durham sits at the heart of the Research Triangle, one of the fastest-growing metro areas in the country. Our flex suites are minutes from Research Triangle Park (RTP), Duke University, and RDU International Airport—giving your business access to the Triangle\'s deep talent pool, logistics infrastructure, and customer base.',
        'The Durham market has seen explosive growth in tech, biotech, and consumer services. That growth drives demand for small bay industrial space from contractors building out new offices, e-commerce operators fulfilling Triangle orders, and light manufacturers serving the region.',
        'Our Durham suites offer the strongest specs in our portfolio: 20–24 ft clear heights, 14\'×14\' drive-in doors, 400A 3-phase power, and full HVAC. These are Class A flex suites built for serious operators.',
      ],
      nearbyHighways: ['I-40', 'I-85', 'NC-147', 'US-70'],
      airport: 'RDU International Airport – 15 min',
      submarkets: ['South Durham', 'RTP corridor', 'East Durham', 'Chapel Hill border', 'Morrisville area'],
      demandDrivers: ['Research Triangle Park employers', 'Duke University & medical center', 'Tech & biotech growth', 'Residential construction surge', 'RDU airport logistics'],
    },
    tenantProfiles: [
      'Contractors and trades serving Triangle commercial and residential projects',
      'E-commerce and fulfillment operations covering NC & VA',
      'Light manufacturing and assembly',
      'Scientific equipment and biotech support services',
      'Service businesses needing warehouse + office space',
    ],
    faq: [
      {
        question: 'What size flex space is available in Durham?',
        answer: 'Our Durham suites range from 1,500 to 3,000 square feet. Each unit includes 20–24 ft clear height ceilings, a 14\'×14\' drive-in door, full HVAC, and 400A 3-phase power—the strongest specs in our portfolio.',
      },
      {
        question: 'How close is GetFlexSpace Durham to RTP?',
        answer: 'Our Durham location is minutes from Research Triangle Park, with direct access to I-40 and NC-147. RDU International Airport is approximately 15 minutes away.',
      },
      {
        question: 'What types of businesses use flex space in Durham?',
        answer: 'Durham tenants include contractors, e-commerce fulfillment operations, light manufacturers, biotech support services, and service businesses that need combined warehouse and office space.',
      },
      {
        question: 'Is there flex space available now in Durham?',
        answer: 'Yes—we currently have availability in Durham. Contact us for pricing, specs, and to schedule a tour of our available suites.',
      },
      {
        question: 'What are lease terms for Durham flex space?',
        answer: 'We offer 1-year, 2-year, and 3-year lease terms. Longer commitments may qualify for reduced rates. Contact us to discuss what works best for your business.',
      },
    ],
    schema: {
      address: { street: '200 Industrial Blvd', city: 'Durham', state: 'NC', zip: '27701' },
      geo: { lat: 35.994, lng: -78.8986 },
      phone: '+19195551234',
    },
  },
  {
    slug: 'columbia-sc',
    name: 'Columbia',
    state: 'SC',
    fullName: 'Columbia, SC',
    availability: 'full',
    occupancyMessage: 'Most suites lease quickly. Tell us your size and use, and we\'ll match you with current or upcoming openings.',
    specs: {
      ceilingHeight: '18–22 ft clear',
      power: '200A 3-Phase',
      doorSize: "12' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,000–2,500 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106042.4!2d-81.1!3d34.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5b4!2sColumbia%2C+SC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Columbia, SC | 1,000–2,500 SF | GetFlexSpace',
      description: 'Lease 1,000–2,500 SF flex space in Columbia, SC with drive-in doors, high ceilings, and 24/7 access. I-26, I-77, and I-20 corridor. Request current and upcoming openings.',
    },
    localGuide: {
      heading: 'Why Columbia for Your Business',
      paragraphs: [
        'Columbia sits at the crossroads of I-26, I-77, and I-20—three major interstates that make it one of the best-connected logistics hubs in the Southeast. From our flex suites, your business can reach Charlotte, Charleston, Atlanta, and Savannah within a few hours by truck.',
        'As South Carolina\'s capital and home to the University of South Carolina, Columbia offers a stable economy, affordable operating costs, and a growing workforce. The metro has attracted significant industrial and distribution investment, creating strong demand for small bay flex space.',
        'Our Columbia suites are purpose-built for operators who need professional industrial space without the overhead of a massive warehouse. Drive-in doors, high ceilings, and full HVAC come standard.',
      ],
      nearbyHighways: ['I-26', 'I-77', 'I-20', 'US-1'],
      airport: 'Columbia Metropolitan Airport (CAE) – 15 min',
      submarkets: ['Cayce/West Columbia', 'Northeast Columbia', 'Irmo area', 'Forest Acres', 'Lexington corridor'],
      demandDrivers: ['Interstate logistics hub (I-26/I-77/I-20)', 'State government & university', 'Fort Jackson military base', 'Automotive manufacturing supply chain', 'Southeast distribution corridor'],
    },
    tenantProfiles: [
      'Contractors and trades serving Midlands SC residential and commercial projects',
      'Distribution and fulfillment operations leveraging the I-26/I-77/I-20 corridor',
      'Light manufacturing and assembly',
      'Service businesses needing combined warehouse and office space',
      'Government and military support contractors',
    ],
    faq: [
      {
        question: 'What size flex space is available in Columbia?',
        answer: 'Our Columbia suites range from 1,000 to 2,500 square feet. Each unit includes 18–22 ft clear height ceilings, a 12\'×14\' drive-in door, full HVAC, and 200A 3-phase power.',
      },
      {
        question: 'Where is GetFlexSpace located in Columbia?',
        answer: 'We are centrally located with direct access to I-26, I-77, and I-20. Columbia Metropolitan Airport is approximately 15 minutes away. The location serves the entire Midlands region.',
      },
      {
        question: 'What types of businesses use flex space in Columbia?',
        answer: 'Columbia tenants include contractors, distribution and fulfillment operators, light manufacturers, service businesses, and government/military support contractors.',
      },
      {
        question: 'Is there flex space available now in Columbia?',
        answer: 'Our Columbia location leases quickly. Submit your requirements and we\'ll match you with current or upcoming openings—often before they hit the market.',
      },
      {
        question: 'What are lease terms for Columbia flex space?',
        answer: 'We offer 1-year, 2-year, and 3-year lease terms. Longer commitments may qualify for reduced rates. Contact us to discuss what works best for your business.',
      },
    ],
    schema: {
      address: { street: '300 Commerce Dr', city: 'Columbia', state: 'SC', zip: '29201' },
      geo: { lat: 34.0007, lng: -81.0348 },
      phone: '+18035551234',
    },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}
