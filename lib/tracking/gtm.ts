/**
 * GOOGLE TAG MANAGER UTILITIES - ABOGADA LEAL
 * Utilidades para GTM y dataLayer management
 */

// Declaración de tipos globales para GTM
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏗️ DATALAYER INITIALIZATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Inicializa el dataLayer si no existe
 * Debe ejecutarse antes de cargar GTM
 */
export function initializeDataLayer(): void {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📤 PUSH EVENTS TO DATALAYER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Push genérico de eventos al dataLayer
 */
export function pushEvent(
  eventName: string,
  parameters: Record<string, any> = {}
): void {
  if (typeof window === 'undefined') return;

  try {
    // Inicializar dataLayer si no existe
    if (!window.dataLayer) {
      initializeDataLayer();
    }

    // Push del evento
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...parameters,
    });

    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('[GTM] Event pushed:', eventName, parameters);
    }
  } catch (error) {
    console.error('[GTM] Error pushing event:', error);
  }
}

/**
 * Push de página vista (page_view)
 */
export function pushPageView(pagePath: string, pageTitle: string): void {
  pushEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window?.location?.href,
  });
}

/**
 * Push de conversión genérica
 */
export function pushConversion(
  conversionName: string,
  value?: number,
  currency: string = 'COP'
): void {
  pushEvent('conversion', {
    conversion_name: conversionName,
    value,
    currency,
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 SPECIFIC EVENT TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Trackea clics en botones de WhatsApp
 */
export function trackWhatsAppClick(
  location: string,
  messagePreset: string = ''
): void {
  pushEvent('whatsapp_click', {
    click_location: location,
    message_preset: messagePreset,
    contact_method: 'whatsapp',
  });
}

/**
 * Trackea inicio de asesoría/consulta
 */
export function trackConsultationInitiate(
  planType: string,
  planValue: number
): void {
  pushEvent('consultation_initiate', {
    plan_type: planType,
    plan_value: planValue,
    currency: 'COP',
  });
}

/**
 * Trackea inicio del test legal
 */
export function trackLegalTestStart(): void {
  pushEvent('legal_test_start', {
    test_type: 'triage_legal',
  });
}

/**
 * Trackea completación del test legal
 */
export function trackLegalTestComplete(
  selectedProblem: string,
  resultAction: string
): void {
  pushEvent('legal_test_complete', {
    selected_problem: selectedProblem,
    result_action: resultAction,
    test_type: 'triage_legal',
  });
}

/**
 * Trackea visualización de servicio
 */
export function trackServiceView(serviceId: string, serviceName: string): void {
  pushEvent('service_view', {
    service_id: serviceId,
    service_name: serviceName,
    content_type: 'legal_service',
  });
}

/**
 * Trackea clics en redes sociales
 */
export function trackSocialClick(platform: string, clickLocation: string): void {
  pushEvent('social_click', {
    platform,
    click_location: clickLocation,
    link_type: 'social_media',
  });
}

/**
 * Trackea clics en email
 */
export function trackEmailClick(clickLocation: string): void {
  pushEvent('email_click', {
    click_location: clickLocation,
    contact_method: 'email',
  });
}

/**
 * Trackea navegación interna
 */
export function trackInternalNavigation(
  linkText: string,
  linkUrl: string,
  location: string
): void {
  pushEvent('internal_navigation', {
    link_text: linkText,
    link_url: linkUrl,
    click_location: location,
  });
}

/**
 * Trackea scroll en la página
 */
export function trackScrollDepth(scrollPercentage: number): void {
  pushEvent('scroll', {
    scroll_depth: scrollPercentage,
  });
}

/**
 * Trackea formularios (si existen)
 */
export function trackFormSubmit(formName: string, formLocation: string): void {
  pushEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
  });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔍 DATALAYER DEBUGGING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Imprime el estado actual del dataLayer (solo desarrollo)
 */
export function debugDataLayer(): void {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    console.log('[GTM] Current dataLayer:', window.dataLayer);
  }
}

/**
 * Limpia el dataLayer (útil para testing)
 */
export function clearDataLayer(): void {
  if (typeof window !== 'undefined') {
    window.dataLayer = [];
    if (process.env.NODE_ENV === 'development') {
      console.log('[GTM] dataLayer cleared');
    }
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🛡️ EVENT DEDUPLICATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Map para trackear eventos recientes y evitar duplicados
const recentEvents = new Map<string, number>();
const DEDUP_WINDOW = 2000; // 2 segundos

/**
 * Verifica si un evento es duplicado
 */
function isDuplicateEvent(eventKey: string): boolean {
  const now = Date.now();
  const lastEventTime = recentEvents.get(eventKey);

  if (lastEventTime && now - lastEventTime < DEDUP_WINDOW) {
    return true;
  }

  recentEvents.set(eventKey, now);
  return false;
}

/**
 * Push de evento con deduplicación automática
 */
export function pushEventSafe(
  eventName: string,
  parameters: Record<string, any> = {}
): void {
  const eventKey = `${eventName}-${JSON.stringify(parameters)}`;

  if (isDuplicateEvent(eventKey)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[GTM] Duplicate event prevented:', eventName);
    }
    return;
  }

  pushEvent(eventName, parameters);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 TYPE DEFINITIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

export interface ConversionEvent extends GTMEvent {
  conversion_name: string;
  value?: number;
  currency?: string;
}

export interface WhatsAppClickEvent extends GTMEvent {
  click_location: string;
  message_preset: string;
  contact_method: 'whatsapp';
}

export interface ConsultationEvent extends GTMEvent {
  plan_type: string;
  plan_value: number;
  currency: 'COP';
}
