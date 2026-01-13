/**
 * METADATA GENERATORS - ABOGADA LEAL
 * Funciones para generar metadata optimizada para cada página
 */

import { Metadata } from 'next';
import {
  PAGE_TITLES,
  META_DESCRIPTIONS,
  CANONICAL_URLS,
  OG_IMAGES,
  LOCAL_SEO_KEYWORDS,
} from './constants';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏠 HOME PAGE METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function generateHomeMetadata(): Metadata {
  const keywords = [
    ...LOCAL_SEO_KEYWORDS.primary,
    ...LOCAL_SEO_KEYWORDS.penal.slice(0, 3),
    ...LOCAL_SEO_KEYWORDS.familia.slice(0, 3),
    ...LOCAL_SEO_KEYWORDS.transito.slice(0, 2),
  ].join(', ');

  return {
    title: PAGE_TITLES.home,
    description: META_DESCRIPTIONS.home,
    keywords,
    authors: [{ name: 'Abogada Leal - Camila López' }],
    creator: 'Abogada Leal',
    publisher: 'Abogada Leal',
    alternates: {
      canonical: CANONICAL_URLS.home,
    },
    openGraph: {
      title: PAGE_TITLES.home,
      description: META_DESCRIPTIONS.home,
      url: CANONICAL_URLS.home,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${OG_IMAGES.home}`,
          width: 1200,
          height: 630,
          alt: 'Abogada Leal - Soluciones Legales en Pereira',
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLES.home,
      description: META_DESCRIPTIONS.home,
      images: [`${BASE_URL}${OG_IMAGES.home}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 SERVICES PAGE METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function generateServicesMetadata(): Metadata {
  const keywords = [
    ...LOCAL_SEO_KEYWORDS.primary,
    ...LOCAL_SEO_KEYWORDS.servicios,
    ...LOCAL_SEO_KEYWORDS.penal,
    ...LOCAL_SEO_KEYWORDS.familia,
    ...LOCAL_SEO_KEYWORDS.transito,
  ].join(', ');

  return {
    title: PAGE_TITLES.servicios,
    description: META_DESCRIPTIONS.servicios,
    keywords,
    alternates: {
      canonical: CANONICAL_URLS.servicios,
    },
    openGraph: {
      title: PAGE_TITLES.servicios,
      description: META_DESCRIPTIONS.servicios,
      url: CANONICAL_URLS.servicios,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${OG_IMAGES.servicios}`,
          width: 1200,
          height: 630,
          alt: 'Servicios Legales en Pereira - Abogada Leal',
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLES.servicios,
      description: META_DESCRIPTIONS.servicios,
      images: [`${BASE_URL}${OG_IMAGES.servicios}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💰 CONSULTATION PAGE METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function generateConsultationMetadata(): Metadata {
  const keywords = [
    'asesoría legal pereira',
    'consulta abogado pereira',
    'diagnóstico legal colombia',
    ...LOCAL_SEO_KEYWORDS.primary,
    ...LOCAL_SEO_KEYWORDS.longTail.slice(0, 5),
  ].join(', ');

  return {
    title: PAGE_TITLES.asesorias,
    description: META_DESCRIPTIONS.asesorias,
    keywords,
    alternates: {
      canonical: CANONICAL_URLS.asesorias,
    },
    openGraph: {
      title: PAGE_TITLES.asesorias,
      description: META_DESCRIPTIONS.asesorias,
      url: CANONICAL_URLS.asesorias,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${OG_IMAGES.asesorias}`,
          width: 1200,
          height: 630,
          alt: 'Asesoría Legal desde $150.000 - Abogada Leal Pereira',
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLES.asesorias,
      description: META_DESCRIPTIONS.asesorias,
      images: [`${BASE_URL}${OG_IMAGES.asesorias}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 👤 ABOUT PAGE METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function generateAboutMetadata(): Metadata {
  const keywords = [
    'camila lópez abogada',
    'abogada leal pereira',
    ...LOCAL_SEO_KEYWORDS.primary,
    ...LOCAL_SEO_KEYWORDS.geo,
  ].join(', ');

  return {
    title: PAGE_TITLES.sobreMi,
    description: META_DESCRIPTIONS.sobreMi,
    keywords,
    alternates: {
      canonical: CANONICAL_URLS.sobreMi,
    },
    openGraph: {
      title: PAGE_TITLES.sobreMi,
      description: META_DESCRIPTIONS.sobreMi,
      url: CANONICAL_URLS.sobreMi,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${OG_IMAGES.sobreMi}`,
          width: 1200,
          height: 630,
          alt: 'Camila López - Abogada Especialista en Pereira',
        },
      ],
      locale: 'es_CO',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLES.sobreMi,
      description: META_DESCRIPTIONS.sobreMi,
      images: [`${BASE_URL}${OG_IMAGES.sobreMi}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📞 CONTACT PAGE METADATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function generateContactMetadata(): Metadata {
  const keywords = [
    'contacto abogada pereira',
    'whatsapp abogado pereira',
    ...LOCAL_SEO_KEYWORDS.primary,
    ...LOCAL_SEO_KEYWORDS.geo,
  ].join(', ');

  return {
    title: PAGE_TITLES.contacto,
    description: META_DESCRIPTIONS.contacto,
    keywords,
    alternates: {
      canonical: CANONICAL_URLS.contacto,
    },
    openGraph: {
      title: PAGE_TITLES.contacto,
      description: META_DESCRIPTIONS.contacto,
      url: CANONICAL_URLS.contacto,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${OG_IMAGES.contacto}`,
          width: 1200,
          height: 630,
          alt: 'Contacto - Abogada Leal Pereira',
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLES.contacto,
      description: META_DESCRIPTIONS.contacto,
      images: [`${BASE_URL}${OG_IMAGES.contacto}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🛠️ UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Genera metadata base que puede ser extendida
 */
export function generateBaseMetadata(): Partial<Metadata> {
  return {
    metadataBase: new URL(BASE_URL),
    authors: [{ name: 'Abogada Leal - Camila López' }],
    creator: 'Abogada Leal',
    publisher: 'Abogada Leal',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Helper: Combina metadata base con metadata específica de página
 */
export function mergeMetadata(pageMetadata: Metadata): Metadata {
  return {
    ...generateBaseMetadata(),
    ...pageMetadata,
  };
}

/**
 * Genera metadata para una página dinámica/custom
 */
export interface CustomMetadataParams {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function generateCustomMetadata(params: CustomMetadataParams): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = OG_IMAGES.default,
  } = params;

  return {
    title,
    description,
    keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      url: canonical || BASE_URL,
      siteName: 'Abogada Leal',
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'es_CO',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
