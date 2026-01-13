'use client';

import { motion } from 'framer-motion';
import { VALUES } from '@/lib/constants';

export default function ValuesSection() {
  return (
    <section className="section-padding gradient-midnight text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-cormorant font-light uppercase mb-4">
            Mis Pilares Fundamentales
          </h2>
          <p className="text-lg text-white/80 font-inter max-w-2xl mx-auto">
            Los valores que guían cada uno de mis casos y mi relación con cada cliente.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, index) => {
            const Icon = require('lucide-react')[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-midnight" />
                  </div>

                  <h3 className="text-2xl font-cormorant font-light uppercase mb-4">
                    {value.title}
                  </h3>

                  <p className="text-white/80 font-inter leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
