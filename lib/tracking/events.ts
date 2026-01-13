/**
 * TRACKING EVENTS - ABOGADA LEAL
 * Funciones de tracking de eventos de conversión y engagement
 */

import {
  pushEvent,
  pushEventSafe,
  trackWhatsAppClick as gtmTrackWhatsApp,
  trackConsultationInitiate as gtmTrackConsultation,
  trackLegalTestStart as gtmTrackTestStart,
  trackLegalTestComplete as gtmTrackTestComplete,
  trackServiceView as gtmTrackServiceView,
  trackSocialClick as gtmTrackSocialClick,
  trackEmailClick as gtmTrackEmailClick,
  trackInternalNavigation as gtmTrackNav,
} from './gtm';
import {
  trackMetaContact,
  trackMetaLead,
  trackMetaCustomEvent,
} from '@/components/analytics/MetaPixel';
import {
  trackLinkedInContact,
  trackLinkedInLead,
} from '@/components/analytics/LinkedInTag';
import type {
  ClickLocation,
  PlanType,
  ServiceId,
  LegalProblem,
  ResultAction,
} from './types';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔥 PRIMARY CONVERSION EVENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea clics en botones de WhatsApp (Conversión principal)
 * Dispara eventos en GTM, Meta Pixel y LinkedIn
 */
export function trackWhatsAppClick(
  location: ClickLocation,
  messagePreset: string = 'Hola, necesito asesoría legal'
): void {
  // GTM Event
  gtmTrackWhatsApp(location, messagePreset);

  // Meta Pixel - Contact Event
  trackMetaContact();

  // LinkedIn - Contact Event
  trackLinkedInContact();

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] WhatsApp Click:', { location, messagePreset });
  }
}

/**
 * Trackea inicio de proceso de asesoría (Lead)
 * Dispara eventos en GTM y Meta Pixel con valor de conversión
 */
export function trackConsultationInitiate(
  planType: PlanType,
  planValue: number
): void {
  // GTM Event
  gtmTrackConsultation(planType, planValue);

  // Meta Pixel - Lead Event con valor
  trackMetaLead(planValue, 'COP');

  // LinkedIn - Lead Event
  trackLinkedInLead();

  // Log en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Consultation Initiated:', { planType, planValue });
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🧪 LEGAL TEST / TRIAGE EVENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea inicio del test legal interactivo
 */
export function trackLegalTestStart(): void {
  gtmTrackTestStart();

  // Meta custom event
  trackMetaCustomEvent('LegalTestStart');

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Legal Test Started');
  }
}

/**
 * Trackea completación del test legal
 */
export function trackLegalTestComplete(
  selectedProblem: LegalProblem,
  resultAction: ResultAction
): void {
  gtmTrackTestComplete(selectedProblem, resultAction);

  // Meta custom event
  trackMetaCustomEvent('LegalTestComplete', {
    problem_category: selectedProblem,
    action_taken: resultAction,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Legal Test Completed:', {
      selectedProblem,
      resultAction,
    });
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 👁️ ENGAGEMENT EVENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea visualización de servicio específico
 */
export function trackServiceView(serviceId: ServiceId, serviceName: string): void {
  gtmTrackServiceView(serviceId, serviceName);

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Service Viewed:', { serviceId, serviceName });
  }
}

/**
 * Trackea clics en redes sociales
 */
export function trackSocialClick(
  platform: 'instagram' | 'linkedin',
  location: ClickLocation
): void {
  gtmTrackSocialClick(platform, location);

  // Meta custom event
  trackMetaCustomEvent('SocialClick', {
    platform,
    location,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Social Click:', { platform, location });
  }
}

/**
 * Trackea clics en email
 */
export function trackEmailClick(location: ClickLocation): void {
  gtmTrackEmailClick(location);

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Email Click:', { location });
  }
}

/**
 * Trackea navegación interna (enlaces importantes)
 */
export function trackInternalNavigation(
  linkText: string,
  linkUrl: string,
  location: ClickLocation
): void {
  gtmTrackNav(linkText, linkUrl, location);

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Internal Navigation:', { linkText, linkUrl, location });
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📊 ENGAGEMENT DEPTH TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea scroll depth (25%, 50%, 75%, 100%)
 */
export function trackScrollDepth(percentage: number): void {
  pushEventSafe('scroll', {
    scroll_depth: percentage,
  });
}

/**
 * Trackea tiempo en página (milestone)
 */
export function trackTimeOnPage(seconds: number): void {
  pushEventSafe('time_on_page', {
    duration_seconds: seconds,
  });
}

/**
 * Trackea visualización de sección específica
 */
export function trackSectionView(sectionName: string): void {
  pushEventSafe('section_view', {
    section_name: sectionName,
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 PRICING & PLAN EVENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea visualización de plan de precios
 */
export function trackPlanView(planName: string, planValue: number): void {
  pushEvent('plan_view', {
    plan_name: planName,
    plan_value: planValue,
    currency: 'COP',
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Plan Viewed:', { planName, planValue });
  }
}

/**
 * Trackea clic en botón de selección de plan
 */
export function trackPlanSelect(planName: string, planValue: number): void {
  pushEvent('plan_select', {
    plan_name: planName,
    plan_value: planValue,
    currency: 'COP',
  });

  // Meta Lead event (micro-conversion)
  trackMetaCustomEvent('PlanSelect', {
    plan_name: planName,
    plan_value: planValue,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Plan Selected:', { planName, planValue });
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎬 VIDEO & CONTENT INTERACTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea inicio de video
 */
export function trackVideoStart(videoName: string): void {
  pushEvent('video_start', {
    video_name: videoName,
  });
}

/**
 * Trackea completación de video
 */
export function trackVideoComplete(videoName: string): void {
  pushEvent('video_complete', {
    video_name: videoName,
  });
}

/**
 * Trackea descarga de documento
 */
export function trackDocumentDownload(documentName: string, documentType: string): void {
  pushEvent('document_download', {
    document_name: documentName,
    document_type: documentType,
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📱 OUTBOUND LINK TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea clics en enlaces externos
 */
export function trackOutboundClick(url: string, linkText: string): void {
  pushEvent('outbound_click', {
    url,
    link_text: linkText,
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🛠️ UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Helper: Genera mensaje de WhatsApp basado en contexto
 */
export function generateWhatsAppMessage(
  context: 'hero' | 'pricing' | 'services' | 'contact' | 'generic',
  serviceName?: string
): string {
  const messages = {
    hero: 'Hola, vi el sitio web y necesito asesoría legal urgente.',
    pricing: 'Hola, quiero agendar una Asesoría "Palabra Justa".',
    services: serviceName
      ? `Hola, me interesa el servicio de ${serviceName}.`
      : 'Hola, quiero información sobre sus servicios legales.',
    contact: 'Hola, me gustaría contactarme para una consulta.',
    generic: 'Hola, necesito asesoría legal.',
  };

  return messages[context] || messages.generic;
}

/**
 * Helper: Obtiene información del plan para tracking
 */
export function getPlanInfo(planType: PlanType): { name: string; value: number } {
  const plans = {
    'palabra_justa': { name: 'Asesoría Palabra Justa', value: 150000 },
    'diagnostico_legal': { name: 'Diagnóstico Legal', value: 150000 },
    'basica': { name: 'Consulta Básica', value: 100000 },
  };

  return plans[planType] || { name: 'Consulta', value: 0 };
}
