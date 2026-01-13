/**
 * TRACKING TYPES - ABOGADA LEAL
 * TypeScript types para eventos de tracking
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 EVENT PARAMETERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface BaseEventParams {
  timestamp?: string;
}

export interface WhatsAppClickParams extends BaseEventParams {
  click_location: string;
  message_preset?: string;
  contact_method: 'whatsapp';
}

export interface ConsultationInitiateParams extends BaseEventParams {
  plan_type: string;
  plan_value: number;
  currency: 'COP';
}

export interface LegalTestStartParams extends BaseEventParams {
  test_type: 'triage_legal';
}

export interface LegalTestCompleteParams extends BaseEventParams {
  selected_problem: string;
  result_action: string;
  test_type: 'triage_legal';
}

export interface ServiceViewParams extends BaseEventParams {
  service_id: string;
  service_name: string;
  content_type: 'legal_service';
}

export interface SocialClickParams extends BaseEventParams {
  platform: 'instagram' | 'linkedin' | 'facebook' | 'twitter';
  click_location: string;
  link_type: 'social_media';
}

export interface EmailClickParams extends BaseEventParams {
  click_location: string;
  contact_method: 'email';
}

export interface InternalNavigationParams extends BaseEventParams {
  link_text: string;
  link_url: string;
  click_location: string;
}

export interface PageViewParams extends BaseEventParams {
  page_path: string;
  page_title: string;
  page_location: string;
}

export interface ConversionParams extends BaseEventParams {
  conversion_name: string;
  value?: number;
  currency?: 'COP';
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📍 LOCATION TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type ClickLocation =
  | 'hero'
  | 'floating_button'
  | 'cta_section'
  | 'pricing'
  | 'services'
  | 'footer'
  | 'navbar'
  | 'about'
  | 'header'
  | 'contact';

export type PlanType = 'diagnostico_legal' | 'palabra_justa' | 'basica';

export type ServiceId =
  | 'asesorias'
  | 'representacion'
  | 'documentos'
  | 'penal'
  | 'familia'
  | 'transito'
  | 'constitucionales'
  | 'consultoria'
  | 'mediacion';

export type LegalProblem = 'penal' | 'familia' | 'transito';

export type ResultAction = 'whatsapp' | 'consultation' | 'services';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏷️ EVENT NAMES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const EVENT_NAMES = {
  // Conversion events
  WHATSAPP_CLICK: 'whatsapp_click',
  CONSULTATION_INITIATE: 'consultation_initiate',
  LEGAL_TEST_START: 'legal_test_start',
  LEGAL_TEST_COMPLETE: 'legal_test_complete',

  // Engagement events
  SERVICE_VIEW: 'service_view',
  SOCIAL_CLICK: 'social_click',
  EMAIL_CLICK: 'email_click',
  INTERNAL_NAVIGATION: 'internal_navigation',

  // Page events
  PAGE_VIEW: 'page_view',
  SCROLL: 'scroll',

  // Form events
  FORM_SUBMIT: 'form_submit',

  // Generic
  CONVERSION: 'conversion',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔌 PIXEL TYPES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface PixelConfig {
  enabled: boolean;
  id?: string;
}

export interface AnalyticsConfig {
  gtm: PixelConfig;
  ga4: PixelConfig;
  meta: PixelConfig;
  linkedin: PixelConfig;
}
