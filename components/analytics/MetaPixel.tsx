'use client';

/**
 * META (FACEBOOK) PIXEL - ABOGADA LEAL
 * Componente cliente para tracking de Facebook/Instagram Ads
 */

import Script from 'next/script';
import { useEffect } from 'react';

// Declaración de tipos para Meta Pixel
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  // No cargar en desarrollo ni si falta el ID
  if (!pixelId || process.env.NODE_ENV !== 'production') {
    return null;
  }

  useEffect(() => {
    // Verificar que fbq esté disponible después de la carga
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, []);

  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

/**
 * Funciones helper para tracking con Meta Pixel
 */

export function trackMetaEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
}

export function trackMetaContact() {
  trackMetaEvent('Contact');
}

export function trackMetaLead(value?: number, currency: string = 'COP') {
  trackMetaEvent('Lead', { value, currency });
}

export function trackMetaCustomEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
}
