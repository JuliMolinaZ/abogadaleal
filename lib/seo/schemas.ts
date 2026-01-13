/**
 * JSON-LD SCHEMA BUILDERS - ABOGADA LEAL
 * Structured data para Google Rich Results y Local SEO
 */

import { BUSINESS_INFO, ATTORNEY_INFO, FAQ_ITEMS, BREADCRUMBS } from './constants';
import { LEGAL_SERVICES } from '@/lib/constants';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏢 LOCAL BUSINESS SCHEMA (Organization + LegalService)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string;
  email: string;
  priceRange: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    '@type': string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  sameAs: string[];
  areaServed?: {
    '@type': string;
    name: string;
  }[];
  description?: string;
}

export function generateLocalBusinessSchema(): LocalBusinessSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: BUSINESS_INFO.legalName,
    image: `${baseUrl}/images/optimized/logo-principal.webp`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: BUSINESS_INFO.contact.telephone,
    email: BUSINESS_INFO.contact.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.streetAddress}, ${BUSINESS_INFO.address.building}`,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS_INFO.openingHours.dayOfWeek,
      opens: BUSINESS_INFO.openingHours.opens,
      closes: BUSINESS_INFO.openingHours.closes,
    },
    sameAs: [
      BUSINESS_INFO.socialMedia.instagram,
      BUSINESS_INFO.socialMedia.linkedin,
    ],
    areaServed: BUSINESS_INFO.areaServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    description: BUSINESS_INFO.description,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 👤 ATTORNEY/PERSON SCHEMA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  description?: string;
  worksFor: {
    '@type': string;
    name: string;
  };
  knowsAbout: string[];
  address: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  telephone: string;
  email: string;
  url: string;
  image?: string;
}

export function generateAttorneySchema(): PersonSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: ATTORNEY_INFO.name,
    jobTitle: ATTORNEY_INFO.jobTitle,
    description: ATTORNEY_INFO.description,
    worksFor: {
      '@type': 'LegalService',
      name: BUSINESS_INFO.name,
    },
    knowsAbout: ATTORNEY_INFO.knowsAbout,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    telephone: BUSINESS_INFO.contact.telephone,
    email: BUSINESS_INFO.contact.email,
    url: `${baseUrl}/sobre-mi`,
    image: `${baseUrl}/images/optimized/abogada.webp`,
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 SERVICE SCHEMA (Para cada servicio legal)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  url?: string;
}

export function generateServiceSchema(serviceId: string): ServiceSchema | null {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';
  const service = LEGAL_SERVICES.find(s => s.id === serviceId);

  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'LegalService',
      name: BUSINESS_INFO.legalName,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pereira, Risaralda, Colombia',
    },
    url: `${baseUrl}/servicios`,
  };
}

// Generar schemas para todos los servicios
export function generateAllServicesSchemas(): ServiceSchema[] {
  return LEGAL_SERVICES
    .map(service => generateServiceSchema(service.id))
    .filter((schema): schema is ServiceSchema => schema !== null);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💰 OFFER SCHEMA (Para planes de asesoría)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface OfferSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
    description: string;
  };
}

export function generateConsultationOfferSchema(): OfferSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Asesoría Legal "Palabra Justa"',
    description: 'Consulta legal completa de 60 minutos con análisis de caso, orientación legal, documento resumen y seguimiento WhatsApp por 7 días',
    provider: {
      '@type': 'LegalService',
      name: BUSINESS_INFO.legalName,
    },
    offers: {
      '@type': 'Offer',
      price: '150000',
      priceCurrency: 'COP',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/asesorias`,
      description: 'Incluye: Consulta virtual o presencial, Análisis de caso, Documento PDF resumen, Seguimiento WhatsApp 7 días',
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🍞 BREADCRUMB LIST SCHEMA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateBreadcrumbSchema(page: keyof typeof BREADCRUMBS): BreadcrumbSchema {
  const breadcrumbs = BREADCRUMBS[page];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ❓ FAQ SCHEMA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

export function generateFAQSchema(): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌐 WEBSITE SCHEMA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

export function generateWebSiteSchema(): WebSiteSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abogada Leal',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/servicios?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📦 HELPER: Serialize schema to JSON-LD script
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function serializeSchema(schema: Record<string, any>): string {
  return JSON.stringify(schema, null, 0); // Minified
}

// Helper para múltiples schemas en una página
export function serializeMultipleSchemas(schemas: Record<string, any>[]): string {
  return JSON.stringify(schemas, null, 0);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 PAGE-SPECIFIC SCHEMA BUNDLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Schemas para la página de inicio
 */
export function getHomePageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema('home'),
    generateFAQSchema(),
  ];
}

/**
 * Schemas para la página de servicios
 */
export function getServicesPageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema('servicios'),
    ...generateAllServicesSchemas(),
  ];
}

/**
 * Schemas para la página de asesorías
 */
export function getConsultationPageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateConsultationOfferSchema(),
    generateBreadcrumbSchema('asesorias'),
  ];
}

/**
 * Schemas para la página sobre mí
 */
export function getAboutPageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateAttorneySchema(),
    generateBreadcrumbSchema('sobreMi'),
  ];
}

/**
 * Schemas para la página de contacto
 */
export function getContactPageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema('contacto'),
  ];
}
