'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { trackWhatsAppClick, trackConsultationInitiate } from '@/lib/tracking/events';

export default function CTASection() {
  const handleAgendarClick = () => {
    // Track consultation initiation
    trackConsultationInitiate('palabra-justa', 150000);
    trackWhatsAppClick('cta_section', '¡Hola! Me gustaría agendar una asesoría.');
    window.open(generateWhatsAppLink(CONTACT_INFO.whatsapp, '¡Hola! Me gustaría agendar una asesoría.'), '_blank');
  };

  return (
    <section className="section-padding bg-white dark:bg-graphite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl gradient-midnight text-white p-8 lg:p-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-full gradient-gold mx-auto mb-6 flex items-center justify-center"
            >
              <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-midnight" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-5xl font-cormorant font-light uppercase mb-6"
            >
              ¿Necesitas asesoría legal?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-white/90 font-inter mb-8 leading-relaxed"
            >
              No dejes que las dudas legales te paralicen. Agenda una asesoría personalizada y recibe orientación clara sobre tu caso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleAgendarClick}
                className="group"
              >
                Agendar Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/asesorias'}
              >
                Ver Planes de Asesoría
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gold font-manrope text-sm mt-8 italic"
            >
              "La palabra justa tiene poder"
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
