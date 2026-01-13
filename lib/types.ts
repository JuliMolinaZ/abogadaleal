// Tipos de servicios legales
export type LegalServiceId =
  | 'asesorias'
  | 'representacion'
  | 'documentos'
  | 'penal'
  | 'familia'
  | 'transito'
  | 'constitucionales'
  | 'consultoria'
  | 'mediacion';

export interface LegalService {
  id: LegalServiceId;
  title: string;
  description: string;
  icon: string;
}

// Tipos de asesorías
export type AsesoriaPlanId = 'basica' | 'palabra-justa';

export interface AsesoriaPlan {
  id: AsesoriaPlanId;
  name: string;
  price: number;
  duration: string;
  features: string[];
  highlight: boolean;
}

// Tipo para el test jurídico
export type TestQuestion = {
  id: number;
  question: string;
  options: TestOption[];
};

export type TestOption = {
  text: string;
  result: LegalServiceId;
};

export interface TestResult {
  serviceId: LegalServiceId;
  title: string;
  description: string;
  recommendations: string[];
}

// Tipo para mensajes del chat
export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ChatStep {
  id: number;
  question: string;
  options?: string[];
  type: 'text' | 'options' | 'final';
}

// Tipo para navegación
export interface NavItem {
  label: string;
  href: string;
}
