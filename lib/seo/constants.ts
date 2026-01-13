/**
 * SEO CONSTANTS - ABOGADA LEAL
 * Keywords y constantes para posicionamiento local en Pereira, Colombia
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 LOCAL SEO KEYWORDS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const LOCAL_SEO_KEYWORDS = {
  // Keywords primarias - Alta intención de búsqueda
  primary: [
    'abogada pereira',
    'abogada en pereira',
    'servicios legales pereira',
    'abogada leal',
    'camila lópez abogada',
    'bufete abogados pereira',
    'asesoría legal pereira',
  ],

  // Derecho Penal - Keywords específicas
  penal: [
    'defensa penal pereira',
    'abogado penalista colombia',
    'abogado penal pereira',
    'defensa lesiones personales',
    'violencia intrafamiliar abogado',
    'hurto abogado pereira',
    'estafa abogado colombia',
    'amenazas abogado penal',
  ],

  // Derecho de Familia - Keywords específicas
  familia: [
    'divorcios pereira',
    'custodia hijos pereira',
    'abogada familia pereira',
    'divorcio mutuo acuerdo colombia',
    'cuota alimentaria abogado',
    'régimen visitas menores',
    'sucesiones abogado pereira',
    'unión marital de hecho',
  ],

  // Derecho de Tránsito - Keywords específicas
  transito: [
    'impugnar fotomultas',
    'abogado transito pereira',
    'comparendos pereira',
    'prescripción multas colombia',
    'suspensión licencia conducción',
    'fotomultas injustas',
    'impugnación comparendos',
  ],

  // Servicios específicos
  servicios: [
    'tutelas pereira',
    'derecho petición colombia',
    'acción cumplimiento',
    'conciliación extrajudicial',
    'contratos abogado',
    'poderes notariales',
    'asesoría jurídica empresas',
  ],

  // Geo-targeting
  geo: [
    'pereira risaralda',
    'abogados pereira centro',
    'servicios jurídicos risaralda',
    'eje cafetero abogados',
    'colombia derecho penal',
  ],

  // Long-tail keywords (alta conversión)
  longTail: [
    'cuanto cuesta un abogado en pereira',
    'mejor abogada penal pereira',
    'asesoría legal barata pereira',
    'consulta abogado 150000',
    'abogado para divorcios rápido',
    'impugnar multa de tránsito pereira',
    'defensa penal económica colombia',
  ],
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📄 META DESCRIPTIONS - Por página
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const META_DESCRIPTIONS = {
  home: 'Soluciones legales claras en Pereira, Colombia. Especialista en Derecho Penal, Familia y Tránsito. Asesoría desde $150.000. WhatsApp: +573150659315. Atención personalizada.',

  servicios: '9 servicios legales especializados en Pereira: Defensa Penal, Divorcios, Custodias, Impugnación de Multas, Tutelas, Contratos. Atención personalizada y profesional.',

  asesorias: 'Asesoría Legal "Palabra Justa" desde $150.000 en Pereira. Incluye: análisis de caso, orientación legal, documento resumen PDF y seguimiento WhatsApp por 7 días.',

  sobreMi: 'Camila López Leal, abogada especialista en Derecho Penal, Familia y Tránsito en Pereira, Colombia. Más de 5 años de experiencia defendiendo tus derechos con lealtad y claridad.',

  contacto: 'Contáctanos para asesoría legal en Pereira. Oficina: Calle 19 # 8-34, Ofc 506. WhatsApp: +573150659315. Email: abogadaleall@gmail.com. Atención de lunes a viernes.',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏷️ PAGE TITLES - Optimizados para SEO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const PAGE_TITLES = {
  home: 'Abogada en Pereira | Derecho Penal, Familia y Tránsito | Camila López',
  servicios: 'Servicios Legales en Pereira | Defensa Penal, Familia, Tránsito',
  asesorias: 'Asesoría Legal desde $150.000 | Diagnóstico Legal Pereira',
  sobreMi: 'Camila López | Abogada Especialista en Pereira | Derecho Penal y Familia',
  contacto: 'Contacto | Abogada Leal Pereira | WhatsApp +573150659315',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔗 CANONICAL URLS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://abogadaleal.com';

export const CANONICAL_URLS = {
  home: `${BASE_URL}/`,
  servicios: `${BASE_URL}/servicios`,
  asesorias: `${BASE_URL}/asesorias`,
  sobreMi: `${BASE_URL}/sobre-mi`,
  contacto: `${BASE_URL}/contacto`,
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🖼️ OPENGRAPH IMAGES - Por página
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const OG_IMAGES = {
  home: '/images/optimized/og-home.jpg',
  servicios: '/images/optimized/og-servicios.jpg',
  asesorias: '/images/optimized/og-asesorias.jpg',
  sobreMi: '/images/optimized/og-about.jpg',
  contacto: '/images/optimized/og-image.jpg', // Default
  default: '/images/optimized/og-image.jpg',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📊 STRUCTURED DATA - Business Info
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const BUSINESS_INFO = {
  legalName: 'Abogada Leal - Camila López Leal',
  name: 'Abogada Leal',
  description: 'Servicios legales especializados en Derecho Penal, Familia y Tránsito en Pereira, Colombia',

  // Ubicación
  address: {
    streetAddress: 'Calle 19 # 8-34, Ofc 506',
    building: 'Edificio Corporación Financiera',
    floor: 'Piso 5',
    addressLocality: 'Pereira',
    addressRegion: 'Risaralda',
    postalCode: '660001',
    addressCountry: 'CO',
  },

  // Coordenadas geográficas
  geo: {
    latitude: 4.8133,
    longitude: -75.6961,
  },

  // Contacto
  contact: {
    telephone: '+573150659315',
    email: 'abogadaleall@gmail.com',
    whatsapp: '+573150659315',
  },

  // Horario de atención
  openingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },

  // Redes sociales
  socialMedia: {
    instagram: 'https://www.instagram.com/abogadaleal_',
    linkedin: 'https://www.linkedin.com/in/camila-lópez-leal-a7b306366/',
  },

  // Pricing
  priceRange: '$$',

  // Servicios principales
  services: [
    'Derecho Penal',
    'Derecho de Familia',
    'Derecho de Tránsito',
    'Tutelas',
    'Contratos Legales',
  ],

  // Áreas de cobertura
  areaServed: [
    'Pereira',
    'Risaralda',
    'Eje Cafetero',
    'Colombia',
  ],
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 👤 ATTORNEY INFO - Para Person Schema
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const ATTORNEY_INFO = {
  name: 'Camila López Leal',
  jobTitle: 'Abogada',
  description: 'Abogada especialista en Derecho Penal, Familia y Tránsito con más de 5 años de experiencia en Pereira, Colombia',

  // Educación (actualizar con datos reales)
  education: {
    institution: 'Universidad', // Actualizar
    degree: 'Derecho',
  },

  // Especialidades
  knowsAbout: [
    'Derecho Penal',
    'Derecho de Familia',
    'Derecho de Tránsito',
    'Tutelas',
    'Derecho Constitucional',
  ],

  // Experiencia
  experience: {
    years: '5+',
    cases: '100+',
  },

  // Valores
  values: [
    'Lealtad ante todo',
    'Claridad sin rodeos',
    'Empatía y determinación',
  ],
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 FAQ SCHEMA - Preguntas frecuentes
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const FAQ_ITEMS = [
  {
    question: '¿Cuánto cuesta una asesoría legal en Pereira?',
    answer: 'La asesoría "Palabra Justa" tiene un costo de $150.000 COP e incluye 60 minutos de consulta, análisis de tu caso, orientación legal clara, documento resumen en PDF y seguimiento por WhatsApp durante 7 días.',
  },
  {
    question: '¿Atienden casos de derecho penal en Pereira?',
    answer: 'Sí, nos especializamos en defensa penal incluyendo lesiones personales, hurtos, estafas, amenazas, violencia intrafamiliar y procesos ante la Fiscalía. Ofrecemos defensa técnica con estrategia y empatía.',
  },
  {
    question: '¿Puedo impugnar una fotomulta en Pereira?',
    answer: 'Sí, revisamos tu comparendo y determinamos si es posible impugnarlo. Analizamos aspectos técnicos, legales y procesales para defender tus derechos ante organismos de tránsito.',
  },
  {
    question: '¿Cuánto tiempo toma un proceso de divorcio?',
    answer: 'Un divorcio de mutuo acuerdo puede tomar entre 1-3 meses. Los divorcios contenciosos pueden demorar 6-12 meses dependiendo de la complejidad del caso. Te acompañamos en todo el proceso.',
  },
  {
    question: '¿Dónde está ubicada la oficina?',
    answer: 'Nuestra oficina está en Calle 19 # 8-34, Edificio Corporación Financiera, Oficina 506 (Piso 5), en el centro de Pereira, Risaralda. Atendemos de lunes a viernes de 8:00 AM a 6:00 PM.',
  },
] as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📱 BREADCRUMB DATA - Por página
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const BREADCRUMBS = {
  home: [
    { name: 'Inicio', url: BASE_URL },
  ],
  servicios: [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Servicios', url: `${BASE_URL}/servicios` },
  ],
  asesorias: [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Asesorías', url: `${BASE_URL}/asesorias` },
  ],
  sobreMi: [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Sobre Mí', url: `${BASE_URL}/sobre-mi` },
  ],
  contacto: [
    { name: 'Inicio', url: BASE_URL },
    { name: 'Contacto', url: `${BASE_URL}/contacto` },
  ],
} as const;
