'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scale, Award, BookOpen, Heart } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Scale,
    value: '5+',
    label: 'Años de Experiencia',
  },
  {
    icon: Award,
    value: '100+',
    label: 'Casos Resueltos',
  },
  {
    icon: BookOpen,
    value: '3',
    label: 'Áreas de Especialización',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Compromiso',
  },
];

export default function AboutHeroSection() {
  return (
    <section className="section-padding bg-white dark:bg-graphite">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Professional Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/abogada.jpg"
                  alt="Camila López - Abogada Leal"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 512px"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/10 to-transparent" />
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {ACHIEVEMENTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-lg p-3 text-center"
                  >
                    <Icon className="w-5 h-5 text-gold mx-auto mb-1" />
                    <div className="text-xl font-cormorant font-light uppercase text-midnight dark:text-white">
                      {item.value}
                    </div>
                    <div className="text-[10px] text-graphite/70 dark:text-white/70 font-inter mt-0.5">
                      {item.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-6"
            >
              <Scale className="w-4 h-4 text-gold" />
              <span className="text-gold font-inter text-sm font-medium">
                Sobre Mí
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-cormorant font-light uppercase text-midnight dark:text-white mb-3"
            >
              Camila López
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-20 h-0.5 bg-gold mb-5"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-graphite/70 dark:text-white/70 font-inter leading-relaxed"
            >
              <p className="text-base text-graphite dark:text-white">
                Abogada especializada en <span className="text-gold font-semibold">Derecho Penal, Familia y Tránsito</span>.
                Defiendo tus derechos con claridad y determinación.
              </p>

              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Enfoque directo: escuchar, entender y actuar</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Sin tecnicismos, con claridad total</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Compromiso humano y genuino con cada caso</span>
                </div>
              </div>

              <div className="bg-gold/5 border-l-2 border-gold/30 p-4 rounded-r-lg mt-5">
                <p className="text-midnight dark:text-white text-sm italic">
                  "Donde hay un derecho vulnerado, hay una palabra justa que lo defiende."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
