'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Search, FileCheck, Scale, CheckCircle } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: MessageCircle,
    title: 'Contacto Inicial',
    description: 'Conversamos sobre tu caso de forma confidencial y sin compromiso.',
  },
  {
    icon: Search,
    title: 'Análisis del Caso',
    description: 'Evalúo tu situación legal y las mejores estrategias a seguir.',
  },
  {
    icon: FileCheck,
    title: 'Propuesta y Plan',
    description: 'Recibes un plan claro con los pasos, tiempos y costos involucrados.',
  },
  {
    icon: Scale,
    title: 'Representación',
    description: 'Defiendo tus intereses con profesionalismo y dedicación.',
  },
  {
    icon: CheckCircle,
    title: 'Resultados',
    description: 'Seguimiento completo hasta lograr la solución que necesitas.',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-midnight/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-cormorant font-light uppercase text-midnight dark:text-white mb-4">
            ¿Cómo Trabajo?
          </h2>
          <p className="text-lg text-graphite/80 dark:text-white/80 font-inter max-w-2xl mx-auto">
            Un proceso claro y transparente desde el primer contacto hasta la solución de tu caso.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-20 h-20 rounded-full gradient-gold mx-auto mb-4 flex items-center justify-center shadow-lg shadow-gold/30">
                    <Icon className="w-9 h-9 text-midnight" />
                  </div>

                  <div className="bg-white dark:bg-graphite rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="text-xs font-inter text-gold font-semibold mb-2">
                      Paso {index + 1}
                    </div>
                    <h3 className="text-lg font-cormorant font-light uppercase text-midnight dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-graphite/70 dark:text-white/70 font-inter">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
