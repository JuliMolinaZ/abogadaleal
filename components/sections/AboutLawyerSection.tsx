'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scale, Award, MapPin } from 'lucide-react';

export default function AboutLawyerSection() {
  return (
    <section id="la-abogada" className="section-padding bg-gradient-to-br from-midnight via-midnight/95 to-midnight relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gold/5 blur-3xl -top-48 -right-48" />
        <div className="absolute w-96 h-96 rounded-full bg-gold/5 blur-3xl -bottom-48 -left-48" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center px-4 sm:px-0">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 z-0"
          >
            {/* Decorative frame */}
            <div className="relative">
              {/* Gold border effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-gold via-gold/50 to-gold rounded-2xl blur-sm opacity-30" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent z-10" />
                <Image
                  src="/images/abogada.jpg"
                  alt="Camila López - Abogada Leal"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>

              {/* Professional badge overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-6 bg-gradient-gold px-4 py-3 lg:px-6 lg:py-4 rounded-xl shadow-gold-lg flex items-center gap-3 z-20"
              >
                <Scale className="w-5 h-5 lg:w-6 lg:h-6 text-midnight flex-shrink-0" />
                <div>
                  <p className="text-xs font-inter text-midnight/70">Especialista en</p>
                  <p className="text-sm font-cormorant font-light uppercase text-midnight">Defensa Legal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4 border border-gold/20"
            >
              <Award className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-gold font-medium">
                Profesional Certificada
              </span>
            </motion.div>

            {/* Name and Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant font-light uppercase text-white mb-4 leading-tight">
              Camila López
            </h2>

            {/* Description */}
            <div className="space-y-3 mb-6">
              <p className="text-lg sm:text-xl text-gold font-inter font-semibold">
                Abogada especialista en Defensa Penal, Familia y Tránsito
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 font-inter">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-base">Pereira, Colombia</span>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/10">
                <div className="text-2xl font-cormorant font-light text-gold mb-1">5+</div>
                <div className="text-sm text-white/80 font-inter">Años de Experiencia</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/10">
                <div className="text-2xl font-cormorant font-light text-gold mb-1">100+</div>
                <div className="text-sm text-white/80 font-inter">Casos Resueltos</div>
              </div>
            </div>

            {/* Professional Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gold/20"
            >
              <p className="text-white/90 font-inter leading-relaxed italic">
                "Soluciones legales claras donde otros ven problemas. 
                Defiendo tus derechos con estrategia, rigor y compromiso."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

