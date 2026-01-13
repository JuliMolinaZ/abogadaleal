'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AsesoriasHeroSection() {
  return (
    <section className="section-padding gradient-midnight text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold font-inter text-sm font-medium">
              Planes de Asesoría
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-cormorant font-light uppercase mb-6"
          >
            Asesorías Legales{' '}
            <span className="text-gold">Personalizadas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl text-white/90 font-inter leading-relaxed max-w-3xl mx-auto"
          >
            Elige el plan que mejor se adapte a tus necesidades. Todas las asesorías incluyen orientación clara, profesional y confidencial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gold mx-auto mt-8"
          />
        </div>
      </div>
    </section>
  );
}
