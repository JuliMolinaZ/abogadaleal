'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking/events';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface BotResponse {
  id: string;
  question: string;
  response: string;
  whatsappMessage: string;
}

const BOT_RESPONSES: BotResponse[] = [
  {
    id: 'precio',
    question: '¿Cuánto cuesta la asesoría?',
    response: 'El Diagnóstico Legal Estratégico tiene un valor de $150.000 COP. Incluye análisis técnico, estrategia personalizada, documento PDF y 7 días de seguimiento por WhatsApp. ¿Te interesa agendar?',
    whatsappMessage: 'Hola, me interesa el Diagnóstico Legal Estratégico ($150.000). ¿Podrías darme más información?'
  },
  {
    id: 'transito',
    question: 'Necesito ayuda con tránsito',
    response: 'Puedo ayudarte con multas, comparendos, impugnaciones y trámites de tránsito. ¿Recibiste una multa recientemente o necesitas ayuda con algún trámite específico?',
    whatsappMessage: 'Hola, necesito ayuda con un tema de tránsito. ¿Podrías orientarme?'
  },
  {
    id: 'familia',
    question: 'Tengo un caso de familia',
    response: 'Trabajamos en divorcios, custodia de hijos, alimentos, régimen de visitas y acuerdos familiares. ¿Cuál es tu situación específica?',
    whatsappMessage: 'Hola, tengo un caso de familia y necesito asesoría. ¿Podrías ayudarme?'
  },
  {
    id: 'penal',
    question: 'Necesito defensa penal',
    response: 'Ofrecemos defensa técnica en procesos penales, investigaciones y audiencias. Es importante actuar rápido. ¿En qué etapa está tu caso?',
    whatsappMessage: 'Hola, necesito defensa legal en un proceso penal. ¿Podrías ayudarme urgentemente?'
  },
  {
    id: 'agendar',
    question: 'Quiero agendar una cita',
    response: '¡Perfecto! Puedes agendar una consulta presencial en nuestra oficina en Pereira o virtual por videollamada. ¿Cuál prefieres?',
    whatsappMessage: 'Hola, me gustaría agendar una cita para una consulta legal. ¿Qué horarios tienen disponibles?'
  },
  {
    id: 'info',
    question: 'Más información',
    response: 'Ofrecemos servicios en Defensa Penal, Familia y Tránsito. También realizamos documentos legales y representación en juzgados. ¿Sobre qué área te gustaría saber más?',
    whatsappMessage: 'Hola, me gustaría recibir más información sobre los servicios legales que ofrecen.'
  }
];

export default function WhatsAppButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: '¡Hola! 👋 Soy el asistente virtual de Abogada Leal. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuestionClick = (response: BotResponse) => {
    // Agregar pregunta del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: response.question,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Mostrar "escribiendo..."
    setIsTyping(true);

    // Simular delay del bot
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 500);
  };

  const handleWhatsAppClick = (whatsappMessage: string) => {
    // Track WhatsApp click from chatbot
    trackWhatsAppClick('floating_button', whatsappMessage);

    window.open(generateWhatsAppLink(CONTACT_INFO.whatsapp, whatsappMessage), '_blank');
    setIsChatOpen(false);
    // Resetear conversación después de un momento
    setTimeout(() => {
      setMessages([{
        id: '0',
        text: '¡Hola! 👋 Soy el asistente virtual de Abogada Leal. ¿En qué puedo ayudarte hoy?',
        isBot: true,
        timestamp: new Date()
      }]);
    }, 500);
  };

  const handleDirectClick = () => {
    const message = '¡Hola! Me gustaría recibir más información sobre los servicios legales.';

    // Track direct WhatsApp click
    trackWhatsAppClick('floating_button', message);

    window.open(generateWhatsAppLink(CONTACT_INFO.whatsapp, message), '_blank');
    setIsChatOpen(false);
  };

  const handleReset = () => {
    setMessages([{
      id: '0',
      text: '¡Hola! 👋 Soy el asistente virtual de Abogada Leal. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date()
    }]);
  };

  return (
    <>
      {/* Botón flotante del asistente */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center group transition-all duration-300 touch-manipulation overflow-visible bg-transparent"
        aria-label="Abrir asistente virtual"
      >
        {/* Imagen del asistente flotando */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/images/asistente.png"
            alt="Asistente Virtual - Abogada Leal"
            width={120}
            height={120}
            className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
            sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
            quality={95}
          />
        </div>

        {/* Sombra sutil para dar profundidad */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[90%] h-[90%] rounded-full bg-black/10 blur-xl group-hover:bg-black/20 transition-colors" />
        </div>
      </motion.button>

      {/* Chatbot flotante */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed bottom-28 right-4 sm:bottom-32 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 bg-white dark:bg-midnight rounded-2xl shadow-2xl border border-gold/20 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gold/20 to-gold/10 px-4 py-3 flex items-center justify-between border-b border-gold/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-cormorant font-light uppercase text-midnight dark:text-white">
                      Asistente Virtual
                    </h3>
                    <p className="text-xs text-graphite/70 dark:text-white/70 font-inter">
                      En línea
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {messages.length > 1 && (
                    <button
                      onClick={handleReset}
                      className="w-7 h-7 rounded-full hover:bg-white/20 dark:hover:bg-white/10 flex items-center justify-center transition-colors touch-manipulation text-xs text-graphite/70 dark:text-white/70"
                      aria-label="Reiniciar conversación"
                      title="Nueva conversación"
                    >
                      ↻
                    </button>
                  )}
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="w-7 h-7 rounded-full hover:bg-white/20 dark:hover:bg-white/10 flex items-center justify-center transition-colors touch-manipulation"
                    aria-label="Cerrar chat"
                  >
                    <X className="w-4 h-4 text-midnight dark:text-white" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 max-h-[350px] overflow-y-auto custom-scrollbar bg-gray-50/50 dark:bg-midnight/30">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      {message.isBot && (
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <MessageCircle className="w-3 h-3 text-gold" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                          message.isBot
                            ? 'bg-white dark:bg-midnight/50 text-midnight dark:text-white border border-gold/20 rounded-tl-sm'
                            : 'bg-gold text-midnight rounded-tr-sm'
                        }`}
                      >
                        <p className="font-inter leading-relaxed text-xs sm:text-sm">
                          {message.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2 justify-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="w-3 h-3 text-gold" />
                      </div>
                      <div className="bg-white dark:bg-midnight/50 px-3 py-2 rounded-xl border border-gold/20 rounded-tl-sm">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Quick Questions - Solo mostrar si no hay conversación activa o después de la respuesta del bot */}
              {messages.length === 1 && !isTyping && (
                <div className="p-3 border-t border-gold/20 bg-white dark:bg-midnight">
                  <p className="text-xs text-graphite/70 dark:text-white/70 font-inter mb-2 px-1">
                    Selecciona una opción:
                  </p>
                  <div className="space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar">
                    {BOT_RESPONSES.map((response) => (
                      <motion.button
                        key={response.id}
                        onClick={() => handleQuestionClick(response)}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left px-3 py-2 rounded-lg bg-gold/5 hover:bg-gold/10 dark:bg-gold/10 dark:hover:bg-gold/20 border border-gold/20 hover:border-gold/30 transition-all duration-200 touch-manipulation group"
                      >
                        <p className="text-xs sm:text-sm font-inter text-midnight dark:text-white group-hover:text-gold transition-colors">
                          {response.question}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp Button - Mostrar después de la respuesta del bot */}
              {messages.length > 2 && !isTyping && (
                <div className="px-4 py-3 border-t border-gold/20 bg-gold/5">
                  <button
                    onClick={() => {
                      const lastBotMessage = messages.filter(m => m.isBot).pop();
                      const response = BOT_RESPONSES.find(r => r.response === lastBotMessage?.text);
                      handleWhatsAppClick(response?.whatsappMessage || 'Hola, me gustaría más información.');
                    }}
                    className="w-full px-4 py-2.5 rounded-lg bg-gold hover:bg-gold/90 text-midnight font-inter font-semibold text-sm transition-colors duration-200 touch-manipulation flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Continuar en WhatsApp
                  </button>
                </div>
              )}

              {/* Footer - Solo si no hay botones activos */}
              {messages.length === 1 && !isTyping && (
                <div className="px-4 py-3 border-t border-gold/20 bg-gold/5">
                  <button
                    onClick={handleDirectClick}
                    className="w-full px-4 py-2.5 rounded-lg bg-gold/20 hover:bg-gold/30 text-midnight dark:text-white font-inter font-medium text-sm transition-colors duration-200 touch-manipulation flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Hablar directamente
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Estilos para scrollbar personalizado */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(198, 166, 100, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(198, 166, 100, 0.5);
        }
      `}</style>
    </>
  );
}
