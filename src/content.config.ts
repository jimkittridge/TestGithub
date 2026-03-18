import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    state: z.string(),
    fullName: z.string(),
    slug: z.string(),
    availability: z.enum(['available', 'full']),
    availableUnits: z.string().optional().default(''),
    image: z.string().optional().default(''),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    specs: z.object({
      ceilingHeight: z.string(),
      power: z.string(),
      doorSize: z.string(),
      hvac: z.string(),
      suiteRange: z.string(),
    }),
    mapEmbedUrl: z.string(),
    localGuide: z.object({
      heading: z.string(),
      nearbyHighways: z.array(z.string()),
      airport: z.string(),
      submarkets: z.array(z.string()),
      demandDrivers: z.array(z.string()),
    }),
    tenantProfiles: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    suites: z.array(z.object({
      name: z.string(),
      size: z.string(),
      status: z.enum(['available', 'waitlist']),
      description: z.string(),
      ceilingHeight: z.string(),
      power: z.string(),
      door: z.string(),
      lease: z.string(),
    })).optional().default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    schema: z.object({
      address: z.object({
        street: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
      }),
      geo: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      phone: z.string(),
    }),
    tagline: z.string().optional().default(''),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      headline: z.string(),
      subheadline: z.string().optional(),
    }).optional(),
    // Homepage fields
    heroBackgroundImage: z.string().optional(),
    logo: z.string().optional(),
    bullets: z.array(z.string()).optional(),
    citySection: z.object({
      heading: z.string(),
      subheading: z.string(),
    }).optional(),
    useCases: z.object({
      heading: z.string(),
      subheading: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
    }).optional(),
    highlights: z.object({
      heading: z.string(),
      subheading: z.string(),
      items: z.array(z.object({
        number: z.string(),
        label: z.string(),
      })),
    }).optional(),
    process: z.object({
      heading: z.string(),
      subheading: z.string(),
      steps: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
    }).optional(),
    leadStrip: z.object({
      heading: z.string(),
      subheading: z.string(),
    }).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    finalCta: z.object({
      heading: z.string(),
      subheading: z.string(),
    }).optional(),
    // About fields
    heroImage: z.string().optional(),
    values: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    cta: z.object({
      heading: z.string(),
      subheading: z.string(),
    }).optional(),
    // FAQ page fields
    items: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    // Contact fields
    email: z.string().optional(),
    phone: z.string().optional(),
    phoneHref: z.string().optional(),
    officeHours: z.string().optional(),
    tenantAccess: z.string().optional(),
  }),
});

export const collections = { locations, pages };
