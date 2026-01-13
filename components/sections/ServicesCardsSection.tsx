'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Scale,
  FileText,
  Shield,
  Heart,
  Car,
  BookOpen,
  Briefcase,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { LEGAL_SERVICES } from '@/lib/constants';
import { CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';

const ICONS = {
  MessageCircle,
  Scale,
  FileText,
  Shield,
  Heart,
  Car,
  BookOpen,
  Briefcase,
  Users,
};

export default function ServicesCardsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleServiceClick = (service: typeof LEGAL_SERVICES[number]) => {
    const message = `Hola, me interesa el servicio de ${service.title}.`;
    window.open(generateWhatsAppLink(CONTACT_INFO.whatsapp, message), '_blank');
  };

  const toggleFlip = (serviceId: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  return (
    <section id="soluciones" className="section-padding bg-white dark:bg-graphite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-light uppercase text-midnight dark:text-white mb-3">
            Servicios Legales Integrales
          </h2>
          <p className="text-base text-graphite/70 dark:text-white/70 font-inter max-w-2xl mx-auto">
            Soluciones jurídicas completas para proteger tus derechos y resolver tus situaciones legales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {LEGAL_SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const isFlipped = flippedCards.has(service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="w-full"
              >
                {/* Card Container */}
                <div
                  className="relative w-full h-[320px] sm:h-[360px] lg:h-[380px] perspective-1000 cursor-pointer touch-manipulation"
                  onClick={() => toggleFlip(service.id)}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      setFlippedCards((prev) => new Set(prev).add(service.id));
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1024) {
                      setFlippedCards((prev) => {
                        const newSet = new Set(prev);
                        newSet.delete(service.id);
                        return newSet;
                      });
                    }
                  }}
                >
                  {/* Content with 3D transform */}
                  <div
                    className="relative w-full h-full transition-transform duration-500 ease-in-out"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* FRONT SIDE - Título e Icono */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-midnight via-midnight/95 to-midnight shadow-xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                    >
                      {/* Animated Background Circles - More Subtle */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold/10 blur-2xl animate-float" />
                        <div
                          className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gold/8 blur-3xl animate-float"
                          style={{ left: '50%', top: '0', animationDelay: '-800ms' }}
                        />
                      </div>

                      {/* Front Content */}
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
                        {/* Icon */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gold/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-gold/20">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-cormorant font-light uppercase text-white text-center mb-4 leading-tight px-3">
                          {service.title}
                        </h3>

                        {/* Badge */}
                        <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-gold/20">
                          <span className="text-sm text-gold/90 font-inter font-medium">
                            Toca para ver más
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK SIDE - Información Detallada */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-midnight via-midnight/95 to-midnight shadow-xl"
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {/* Animated Background Circles (Back) - More Subtle */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold/8 blur-2xl animate-float" />
                        <div
                          className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gold/6 blur-3xl animate-float"
                          style={{ left: '50%', top: '0', animationDelay: '-800ms' }}
                        />
                      </div>

                      {/* Back Content */}
                      <div className="relative z-10 w-full h-full flex flex-col p-6 sm:p-7">
                        {/* Title on back - Fixed height */}
                        <h3 className="text-lg sm:text-xl font-cormorant font-light uppercase text-white mb-3 leading-tight h-12 sm:h-14 flex items-center">
                          {service.title}
                        </h3>

                        {/* Description - Fixed max height */}
                        <div className="mb-3 min-h-0 flex-shrink-0">
                          <p className="text-sm sm:text-base text-white/90 font-inter leading-relaxed mb-2 line-clamp-2">
                            {service.description}
                          </p>
                          {service.ideal && (
                            <p className="text-xs sm:text-sm text-gold/90 font-inter italic line-clamp-1">
                              {service.ideal}
                            </p>
                          )}
                        </div>

                        {/* Includes List - Fixed height with scroll */}
                        {service.includes && service.includes.length > 0 && (
                          <div className="flex-grow min-h-0 mb-3 overflow-y-auto custom-scrollbar max-h-[140px]">
                            <div className="space-y-2">
                              {service.includes.slice(0, 4).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm text-white/85 font-inter leading-snug">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Spacer to push button down */}
                        <div className="flex-shrink-0 mt-auto" />

                        {/* CTA Button - Always at bottom */}
                        <Button
                          variant="primary"
                          size="md"
                          fullWidth
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(service);
                          }}
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                          className="flex-shrink-0"
                        >
                          Solicitar Asesoría
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Add custom styles for 3D transforms */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
          -webkit-perspective: 1000px;
        }
        
        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: rotation_481 5000ms infinite linear;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 166, 100, 0.5);
          border-radius: 2px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 166, 100, 0.7);
        }
      `}</style>
    </section>
  );
}
