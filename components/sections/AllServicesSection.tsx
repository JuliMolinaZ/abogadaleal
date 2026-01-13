'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
  Check,
} from 'lucide-react';
import Card from '@/components/ui/Card';
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

export default function AllServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="section-padding bg-white dark:bg-graphite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-light uppercase text-midnight dark:text-white mb-4">
            Servicios Legales Integrales
          </h2>
          <p className="text-base text-graphite/70 dark:text-white/70 font-inter max-w-2xl mx-auto">
            Soluciones jurídicas completas para proteger tus derechos y resolver tus situaciones legales.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {LEGAL_SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const isExpanded = expandedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <Card
                  variant="elevated"
                  hover="glow"
                  className="h-full flex flex-col cursor-pointer"
                  onClick={() => toggleExpand(service.id)}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-gold/20">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg lg:text-xl font-cormorant font-light uppercase text-midnight dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(service.id);
                      }}
                      className="flex-shrink-0 text-gold hover:text-gold-600 transition-colors"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-graphite/70 dark:text-white/70 font-inter leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Ideal para */}
                  {service.ideal && (
                    <p className="text-xs text-gold/80 font-inter italic mb-4">
                      {service.ideal}
                    </p>
                  )}

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && service.includes && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gold/20">
                          <p className="text-xs font-inter font-semibold text-midnight dark:text-white mb-3">
                            Incluye:
                          </p>
                          <ul className="space-y-2 mb-4">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-graphite/70 dark:text-white/70 font-inter leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        generateWhatsAppLink(
                          CONTACT_INFO.whatsapp,
                          `Hola, me interesa el servicio de ${service.title}.`
                        ),
                        '_blank'
                      );
                    }}
                    className="mt-auto"
                  >
                    Solicitar Asesoría
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
