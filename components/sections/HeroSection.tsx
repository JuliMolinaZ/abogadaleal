'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { trackWhatsAppClick, trackLegalTestStart } from '@/lib/tracking/events';

export default function HeroSection() {
  const handleDiagnostico = () => {
    // Track legal test start
    trackLegalTestStart();

    const serviciosSection = document.getElementById('soluciones');
    if (serviciosSection) {
      const headerOffset = 80;
      const elementPosition = serviciosSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    // Track WhatsApp click from hero
    trackWhatsAppClick('hero', '¡Hola! Necesito asesoría legal.');
    window.open(generateWhatsAppLink(CONTACT_INFO.whatsapp, '¡Hola! Necesito asesoría legal.'), '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondo.jpg"
          alt="Fondo"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay oscuro para contraste con texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/70 to-midnight/90" />
        {/* Overlay adicional para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-8 lg:py-12">
        <div className="max-w-3xl">
          {/* Título Llamativo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-cormorant font-light uppercase text-white mb-4 leading-[1.1] drop-shadow-2xl"
          >
            Tú recuperas tu <span className="text-gold drop-shadow-lg">tranquilidad</span>, nosotros nos encargamos del resto.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-white/95 font-inter mb-6 leading-relaxed drop-shadow-lg"
          >
            <span className="text-gold">Estrategia legal</span> en Penal, Familia y Tránsito en Pereira. <span className="text-gold">Sin complicaciones</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              variant="primary"
              size="xl"
              onClick={handleDiagnostico}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="group shadow-gold-lg w-full sm:w-auto touch-manipulation"
            >
              Agendar Diagnóstico Estratégico
            </Button>
            <Button
              variant="ghost"
              size="xl"
              onClick={handleWhatsApp}
              leftIcon={<MessageCircle className="w-5 h-5" />}
              className="text-white hover:text-gold hover:bg-white/10 border border-white/20 w-full sm:w-auto touch-manipulation"
            >
              WhatsApp Directo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/70 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/10"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
