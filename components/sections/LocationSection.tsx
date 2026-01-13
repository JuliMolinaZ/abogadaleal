'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { LOCATION_INFO, CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink, formatPhoneNumber } from '@/lib/utils';

export default function LocationSection() {
  const handleOpenMaps = () => {
    window.open(LOCATION_INFO.googleMapsUrl, '_blank');
  };

  return (
    <section id="ubicacion" className="section-padding bg-gradient-to-b from-midnight via-midnight/95 to-midnight min-h-screen flex flex-col justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-light uppercase text-white mb-2">
            Defensa Legal en el Corazón de Pereira
          </h2>
          <p className="text-sm text-white/80 font-inter max-w-xl mx-auto">
            Ubicación estratégica en el centro de negocios
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {/* Información de Dirección */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card hover="glow" className="p-5 sm:p-6 lg:p-8 w-full flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-light uppercase text-midnight mb-2">
                      Oficina Principal
                    </h3>
                    <p className="text-graphite/70 font-inter text-sm">
                      {LOCATION_INFO.centro}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="font-inter text-midnight leading-relaxed">
                    {LOCATION_INFO.direccion}
                  </p>
                  <p className="font-inter text-graphite/70">
                    {LOCATION_INFO.ciudad}
                  </p>
                  
                  {/* Número de Teléfono */}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-2 mt-4 pt-4 border-t border-gold/10 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-inter text-graphite/60 mb-1">Teléfono</p>
                      <p className="font-inter text-midnight font-semibold group-hover:text-gold transition-colors tracking-wide">
                        {formatPhoneNumber(CONTACT_INFO.phone)}
                      </p>
                    </div>
                  </a>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleOpenMaps}
                  rightIcon={<ExternalLink className="w-5 h-5" />}
                  className="w-full group mb-4"
                >
                  Abrir en Google Maps
                </Button>

                {/* Contact Buttons */}
                <div className="pt-4 border-t border-gold/10">
                  <p className="text-xs font-inter text-graphite/70 dark:text-white/70 mb-4 text-center">
                    Contáctame también por:
                  </p>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                    {/* Instagram */}
                    <motion.a
                      href={CONTACT_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#d62976] group cursor-pointer touch-manipulation min-w-[52px] min-h-[52px]"
                    >
                      <motion.svg
                        className="w-[17px] h-[17px]"
                        viewBox="0 0 16 16"
                        fill="white"
                        initial={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </motion.svg>
                      <motion.svg
                        className="w-[17px] h-[17px] absolute"
                        viewBox="0 0 16 16"
                        fill="white"
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </motion.svg>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href={`mailto:${CONTACT_INFO.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#0072b1] group cursor-pointer"
                    >
                      <motion.svg
                        className="w-[17px] h-[17px]"
                        viewBox="0 0 24 24"
                        fill="white"
                        initial={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </motion.svg>
                      <motion.svg
                        className="w-[17px] h-[17px] absolute"
                        viewBox="0 0 24 24"
                        fill="white"
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </motion.svg>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#0072b1] group cursor-pointer"
                    >
                      <motion.svg
                        className="w-[17px] h-[17px]"
                        viewBox="0 0 448 512"
                        fill="white"
                        initial={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </motion.svg>
                      <motion.svg
                        className="w-[17px] h-[17px] absolute"
                        viewBox="0 0 448 512"
                        fill="white"
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </motion.svg>
                    </motion.a>

                    {/* WhatsApp */}
                    <motion.a
                      href={generateWhatsAppLink(CONTACT_INFO.whatsapp, '¡Hola! Me gustaría contactarte.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-[52px] h-[52px] bg-[rgb(44,44,44)] flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-[#128C7E] group cursor-pointer"
                    >
                      <motion.svg
                        className="w-[17px] h-[17px]"
                        viewBox="0 0 16 16"
                        fill="white"
                        initial={{ y: 0, opacity: 1 }}
                        whileHover={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </motion.svg>
                      <motion.svg
                        className="w-[17px] h-[17px] absolute"
                        viewBox="0 0 16 16"
                        fill="white"
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Mapa con Vista Especial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-lg w-full h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1768270875849!6m8!1m7!1sc-7MBOFaCAIqVPFpE0Vlig!2m2!1d4.813513640622529!2d-75.69429572794961!3f264.8573697789955!4f5.278965348221092!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(20%) brightness(0.9) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl absolute inset-0"
              />
              {/* Overlay sutil para estilo dark/silver */}
              <div className="absolute inset-0 bg-gradient-to-br from-midnight/10 to-transparent pointer-events-none rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

