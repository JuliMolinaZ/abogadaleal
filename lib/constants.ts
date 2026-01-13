// Información de contacto
export const CONTACT_INFO = {
  phone: '+573150659315',
  whatsapp: '+573150659315',
  email: 'abogadaleall@gmail.com',
  instagram: 'https://www.instagram.com/abogadaleal_',
  linkedin: 'https://www.linkedin.com/in/camila-l%C3%B3pez-leal-a7b306366/',
} as const;

// Servicios legales completos (Para página de servicios)
export const LEGAL_SERVICES = [
  {
    id: 'asesorias',
    title: 'Diagnóstico Legal Inicial',
    description: 'Analizo tu caso con detalle, te explico tus derechos y definimos juntos la mejor ruta legal.',
    icon: 'MessageCircle',
    ideal: 'Ideal para quienes buscan entender su situación jurídica antes de iniciar un proceso.',
    includes: [
      'Revisión del caso',
      'Recomendaciones jurídicas inmediatas',
      'Plan de acción inicial',
    ],
  },
  {
    id: 'representacion',
    title: 'Tu Abogada en el Juzgado',
    description: 'Te represento con estrategia, rigor y compromiso ante juzgados, fiscalías, inspecciones o autoridades administrativas.',
    icon: 'Scale',
    ideal: 'Garantizo un acompañamiento cercano, ético y enfocado en resultados.',
    includes: [
      'Procesos penales (defensora o representante de víctimas)',
      'Divorcios, alimentos, custodia y procesos de familia',
      'Tránsito: comparendos, audiencias, sanciones, prescripción',
      'Acciones constitucionales (tutelas, cumplimiento, desacato)',
    ],
  },
  {
    id: 'documentos',
    title: 'Documentos y Contratos',
    description: 'Elaboro y reviso documentos legales con precisión, lenguaje profesional y total validez jurídica.',
    icon: 'FileText',
    ideal: 'Tus documentos también merecen defensa.',
    includes: [
      'Contratos civiles, comerciales o de arrendamiento',
      'Poderes, declaraciones y memoriales',
      'Derechos de petición y recursos administrativos',
      'Acuerdos de conciliación o desistimiento',
    ],
  },
  {
    id: 'penal',
    title: 'Defensa Penal y Víctimas',
    description: 'Acompaño a víctimas o acusados en procesos penales, velando por el respeto de sus derechos y la búsqueda de soluciones efectivas.',
    icon: 'Shield',
    ideal: 'Defensa técnica con estrategia y empatía.',
    includes: [
      'Lesiones personales',
      'Hurtos, estafas, amenazas, injuria o calumnia',
      'Violencia intrafamiliar',
      'Denuncias, conciliaciones y audiencias ante la Fiscalía',
    ],
  },
  {
    id: 'familia',
    title: 'Divorcios, Hijos y Hogar',
    description: 'Te asesoro y represento en procesos familiares, priorizando acuerdos pacíficos y soluciones realistas.',
    icon: 'Heart',
    ideal: 'Justicia con equilibrio y sensibilidad.',
    includes: [
      'Divorcios (mutuo acuerdo o litigiosos)',
      'Custodia y visitas de menores',
      'Cuotas alimentarias',
      'Uniones maritales de hecho',
      'Sucesiones',
    ],
  },
  {
    id: 'transito',
    title: 'Fotomultas y Tránsito',
    description: 'Defiendo tus derechos ante procesos y sanciones de tránsito, garantizando una revisión completa de tu caso.',
    icon: 'Car',
    ideal: 'Tu defensa también se aplica en la vía.',
    includes: [
      'Impugnación de comparendos',
      'Prescripción de multas',
      'Audiencias ante organismos de tránsito',
      'Asesoría en suspensión o pérdida de licencia',
    ],
  },
  {
    id: 'constitucionales',
    title: 'Tutelas y Defensa de Derechos',
    description: 'Promuevo acciones como tutela, cumplimiento o desacato para garantizar la protección inmediata de tus derechos fundamentales.',
    icon: 'BookOpen',
    ideal: 'Cuando tus derechos están en juego, actúo con palabra y estrategia.',
    includes: [
      'Salud, educación, trabajo y familia',
      'Violación del debido proceso',
      'Derecho de petición sin respuesta',
    ],
  },
  {
    id: 'consultoria',
    title: 'Socio Legal para Negocios',
    description: 'Acompaño a empresas, profesionales o particulares que requieren asesoría jurídica constante para operar dentro del marco legal.',
    icon: 'Briefcase',
    ideal: 'Prevención antes que reacción.',
    includes: [
      'Diagnóstico legal preventivo',
      'Revisión de contratos',
      'Cumplimiento normativo',
      'Representación ante entidades públicas',
    ],
  },
  {
    id: 'mediacion',
    title: 'Acuerdos sin Pleitos',
    description: 'Acompaño procesos de conciliación entre partes, buscando soluciones efectivas y justas sin necesidad de acudir a un litigio.',
    icon: 'Users',
    ideal: 'La mejor defensa también puede ser un buen acuerdo.',
    includes: [
      'Conciliación extrajudicial',
      'Mediación de conflictos',
      'Acuerdos entre partes',
    ],
  },
] as const;

// Plan de asesoría - Copy optimizado para conversión
export const ASESORIA_PLANS = [
  {
    id: 'palabra-justa',
    name: 'Asesoría "Palabra Justa"',
    price: 150000,
    duration: '60 minutos',
    features: [
      'Consulta virtual o presencial',
      'Análisis de tu caso',
      'Orientación legal clara',
      'Recomendaciones iniciales',
      'Documento PDF con resumen legal',
      'Seguimiento por 7 días vía WhatsApp',
      'Atención prioritaria',
      'Análisis de documentos incluido',
    ],
    highlight: true,
    valorDestacado: 'Documento Resumen + Seguimiento WhatsApp',
  },
] as const;

// Información de ubicación
export const LOCATION_INFO = {
  direccion: 'Calle 19 # 8-34, Edificio Corporación Financiera, Ofc 506 (Piso 5)',
  centro: 'Centro de Negocios San Miguel',
  ciudad: 'Pereira, Risaralda',
  googleMapsUrl: 'https://maps.google.com/?q=Calle+19+8-34,+Pereira,+Risaralda',
  coordenadas: {
    lat: 4.8133,
    lng: -75.6961,
  },
} as const;

// Valores y pilares
export const VALUES = [
  {
    title: 'Lealtad ante todo',
    description: 'Tu causa es mi causa. Defiendo tus derechos con compromiso absoluto.',
    icon: 'Award',
  },
  {
    title: 'Claridad sin rodeos',
    description: 'Información legal directa, sin tecnicismos innecesarios. Siempre entenderás tu situación.',
    icon: 'Eye',
  },
  {
    title: 'Empatía y determinación',
    description: 'Entiendo tu momento, pero actúo con firmeza para defender tus intereses.',
    icon: 'Heart',
  },
] as const;

// Metadata SEO - Optimizado para conversión
export const SEO_METADATA = {
  title: 'Abogada Leal | Soluciones Legales Claras - Penal, Familia, Tránsito | Pereira',
  description: 'Soluciones legales claras donde otros ven problemas. Especializada en Derecho Penal, Familia y Tránsito en Pereira, Colombia. Asesoría directa, sin rodeos.',
  keywords: 'abogada Pereira, asesoría legal Colombia, derecho penal, derecho familia, derecho tránsito, abogada Camila López, servicios jurídicos Pereira',
  ogImage: '/og-image.jpg',
  url: 'https://abogadaleal.com',
} as const;
