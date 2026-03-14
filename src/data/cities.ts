export interface CitySpecs {
  ceilingHeight: string;
  power: string;
  doorSize: string;
  hvac: string;
  suiteRange: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  fullName: string;
  availability: 'available' | 'full';
  availableUnits?: string;
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
  };
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
    specs: {
      ceilingHeight: '18–24 ft clear',
      power: '200A 3-Phase',
      doorSize: "12' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,000–3,000 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104379.1!2d-82.6!3d35.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859f36e2a989!2sAsheville%2C+NC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Asheville, NC | 1,000-3,000 SF | GetFlexSpace',
      description: 'Premium small bay industrial flex space in Asheville, NC. 1,000–3,000 sq ft suites with drive-in doors, high ceilings, and 24/7 access. Ideal for contractors, e-commerce, and creative businesses.',
    },
    localGuide: {
      heading: 'Strategically Located in Asheville, NC',
      paragraphs: [
        'Located just 10 minutes from Asheville Regional Airport (AVL), our flex space suites offer easy access to I-26 and I-40 for distribution and logistics operations throughout Western North Carolina.',
        "Asheville's growing economy, anchored by craft brewing, outdoor recreation, and a thriving arts scene, makes it an ideal base for small businesses looking for flexible, professional workspace with an industrial edge.",
      ],
      nearbyHighways: ['I-26', 'I-40', 'I-240', 'US-74'],
    },
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
    specs: {
      ceilingHeight: '20–24 ft clear',
      power: '400A 3-Phase',
      doorSize: "14' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,500–3,000 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103574.8!2d-78.9!3d35.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace46d3bdb!2sDurham%2C+NC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Durham, NC | 1,500-3,000 SF | GetFlexSpace',
      description: 'Small bay industrial flex space available in Durham, NC. Contractor suites with drive-in doors, 3-phase power, and professional management. Minutes from RTP and I-40.',
    },
    localGuide: {
      heading: 'Prime Location in Durham, NC',
      paragraphs: [
        'Our Durham flex space sits at the heart of the Research Triangle, minutes from RTP, Duke University, and RDU International Airport. Ideal for businesses that need proximity to the Triangle\'s talent pool and logistics infrastructure.',
        'Durham\'s revitalized downtown and booming tech sector create strong demand for flexible industrial space. Our suites serve contractors, light manufacturers, and e-commerce fulfillment operations across the region.',
      ],
      nearbyHighways: ['I-40', 'I-85', 'NC-147', 'US-70'],
    },
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
    specs: {
      ceilingHeight: '18–22 ft clear',
      power: '200A 3-Phase',
      doorSize: "12' × 14' Drive-In",
      hvac: 'Full HVAC',
      suiteRange: '1,000–2,500 sq ft',
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106042.4!2d-81.1!3d34.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a5b4!2sColumbia%2C+SC!5e0!3m2!1sen!2sus!4v1',
    seo: {
      title: 'Flex Space for Lease in Columbia, SC | 1,000-2,500 SF | GetFlexSpace',
      description: 'Premium flex space for lease in Columbia, SC. Small bay industrial suites with high ceilings, drive-in doors, and 24/7 access. Perfect for contractors, warehousing, and light manufacturing.',
    },
    localGuide: {
      heading: 'Centrally Located in Columbia, SC',
      paragraphs: [
        "Columbia's position at the crossroads of I-26, I-77, and I-20 makes it a logistics hub for the Southeast. Our flex space suites give your business direct access to major distribution corridors serving Charlotte, Charleston, and Atlanta.",
        "As South Carolina's capital city and home to the University of South Carolina, Columbia offers a stable economy, affordable operating costs, and a growing workforce—ideal for small businesses scaling their operations.",
      ],
      nearbyHighways: ['I-26', 'I-77', 'I-20', 'US-1'],
    },
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
