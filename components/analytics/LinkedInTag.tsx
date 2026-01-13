'use client';

/**
 * LINKEDIN INSIGHT TAG - ABOGADA LEAL
 * Componente cliente para tracking de LinkedIn Ads
 */

import Script from 'next/script';

// Declaración de tipos para LinkedIn Insight Tag
declare global {
  interface Window {
    _linkedin_data_partner_ids: string[];
    lintrk: any;
  }
}

export default function LinkedInTag() {
  const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  // No cargar en desarrollo ni si falta el ID
  if (!partnerId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        id="linkedin-insight"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            _linkedin_partner_id = "${partnerId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
        }}
      />

      <Script
        id="linkedin-insight-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${partnerId}&fmt=gif`}
        />
      </noscript>
    </>
  );
}

/**
 * Funciones helper para tracking con LinkedIn
 */

export function trackLinkedInEvent(conversionId: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.lintrk) {
    window.lintrk('track', { conversion_id: conversionId, ...parameters });
  }
}

export function trackLinkedInContact() {
  trackLinkedInEvent('contact');
}

export function trackLinkedInLead() {
  trackLinkedInEvent('lead');
}
