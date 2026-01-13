'use client';

import { motion } from 'framer-motion';
import { Check, FileText, MessageCircle, Clock, TrendingUp, ArrowRight, FileCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { formatCurrency, generateWhatsAppLink } from '@/lib/utils';
import { trackWhatsAppClick, trackConsultationInitiate, trackPlanView } from '@/lib/tracking/events';

export default function PricingSection() {
  const diagnosticPrice = 150000;

  const handleDiagnosticoClick = () => {
    // Track plan selection and consultation initiation
    trackConsultationInitiate('diagnostico_legal', diagnosticPrice);
    trackWhatsAppClick(
      'pricing',
      `Hola, me interesa el Diagnóstico Legal Estratégico (${formatCurrency(diagnosticPrice)}).`
    );
    window.open(
      generateWhatsAppLink(
        CONTACT_INFO.whatsapp,
        `Hola, me interesa el Diagnóstico Legal Estratégico (${formatCurrency(diagnosticPrice)}).`
      ),
      '_blank'
    );
  };

  const diagnosticBenefits = [
    {
      icon: FileCheck,
      title: 'Análisis Técnico',
      description: 'Evaluación profunda de documentos y antecedentes',
    },
    {
      icon: TrendingUp,
      title: 'Estrategia Personalizada',
      description: 'Definición de la mejor ruta legal (qué hacer y qué evitar)',
    },
    {
      icon: FileText,
      title: 'Entregable',
      description: 'Documento PDF con el resumen del diagnóstico y pasos a seguir',
    },
    {
      icon: MessageCircle,
      title: 'Seguimiento',
      description: '7 días de soporte vía WhatsApp para dudas sobre la estrategia definida',
    },
    {
      icon: Clock,
      title: 'Presupuesto Final',
      description: 'Cotización detallada si tu caso requiere representación judicial completa',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico',
      subtitle: 'Hoy',
      description: 'Entendemos tu problema y trazamos la ruta',
      price: formatCurrency(diagnosticPrice),
      highlight: true,
    },
    {
      number: '02',
      title: 'Ejecución',
      subtitle: 'Opcional',
      description: 'Representación y defensa técnica',
      price: 'Cotización personalizada',
      highlight: false,
    },
  ];

  return (
    <section id="inversion" className="section-padding bg-white dark:bg-graphite relative overflow-hidden">
      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-light uppercase text-midnight dark:text-white mb-2">
            Inversión & Transparencia
          </h2>
          <p className="text-sm text-graphite/70 dark:text-white/70 font-inter max-w-xl mx-auto">
            La ruta más segura para proteger tus derechos antes de iniciar cualquier trámite legal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {/* Main Card - Diagnóstico Legal Estratégico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-5 lg:p-6 border-2 border-gold/30 relative">
              {/* Headline and Price */}
              <div className="text-center mb-4">
                <h3 className="text-xl lg:text-2xl font-cormorant font-light uppercase text-midnight dark:text-white mb-2">
                  Diagnóstico Legal Estratégico
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-cormorant font-light text-gold">
                    {formatCurrency(diagnosticPrice)}
                  </span>
                  <span className="text-sm text-graphite/70 dark:text-white/70 font-inter">
                    / Sesión
                  </span>
                </div>
              </div>

              {/* Benefits List - Grid 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {diagnosticBenefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gold/10 hover:border-gold/30 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-xs font-inter font-semibold text-midnight dark:text-white mb-0.5">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-graphite/70 dark:text-white/80 font-inter leading-snug">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={handleDiagnosticoClick}
                className="shadow-gold-lg group mb-3"
              >
                Iniciar Diagnóstico
              </Button>

              {/* Disclaimer */}
              <div className="bg-gold/5 rounded-lg p-3 border border-gold/20">
                <p className="text-xs text-graphite/70 dark:text-white/70 font-inter leading-relaxed text-center">
                  <strong className="text-midnight dark:text-white">Nota:</strong> Este valor cubre la fase de diagnóstico y estrategia inicial. La representación en juzgados, fiscalías o trámites administrativos se cotiza de forma independiente según la complejidad del caso tras esta evaluación.
                </p>
              </div>
            </div>
          </motion.div>

          {/* El Camino hacia tu Solución - Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-midnight/5 to-midnight/10 dark:from-midnight/20 dark:to-midnight/30 rounded-xl p-5 border border-gold/10 h-full flex flex-col">
              <h3 className="text-lg font-cormorant font-light uppercase text-midnight dark:text-white mb-4 text-center lg:text-left">
                El Camino hacia tu Solución
              </h3>
              
              <div className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative rounded-lg p-5 border transition-all duration-300 flex flex-col flex-grow ${
                      step.highlight
                        ? 'bg-gold/10 border-gold/30 shadow-sm'
                        : 'bg-white/50 dark:bg-white/5 border-gold/10'
                    }`}
                  >
                    {/* Step Number and Title */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-cormorant font-light text-lg flex-shrink-0 ${
                        step.highlight ? 'bg-gold text-midnight' : 'bg-gold/20 text-gold'
                      }`}>
                        {step.number}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base font-cormorant font-light uppercase text-midnight dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-gold font-inter font-medium">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-graphite/70 dark:text-white/80 font-inter mb-4 leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Price - Always at bottom */}
                    <div className="mt-auto pt-4 border-t border-gold/10">
                      <p className={`text-base font-cormorant font-light ${
                        step.highlight ? 'text-gold' : 'text-graphite/70 dark:text-white/70'
                      }`}>
                        {step.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
