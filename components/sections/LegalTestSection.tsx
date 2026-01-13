'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

type TestResultId = 'penal' | 'familia' | 'transito' | 'documentos';

interface Question {
  id: number;
  question: string;
  options: { text: string; result: TestResultId }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: '¿Cuál es la naturaleza de tu situación legal?',
    options: [
      { text: 'Estoy enfrentando cargos penales o una investigación', result: 'penal' },
      { text: 'Tengo problemas familiares (divorcio, custodia, alimentos)', result: 'familia' },
      { text: 'Recibí una multa o comparendo de tránsito', result: 'transito' },
      { text: 'Necesito redactar o revisar documentos legales', result: 'documentos' },
    ],
  },
];

const RESULTS = {
  penal: {
    title: 'Derecho Penal',
    description: 'Necesitas defensa especializada en procesos penales. Te ayudaré a proteger tus derechos y garantías constitucionales.',
    recommendations: [
      'Agendar una Asesoría "Palabra Justa" para análisis completo',
      'Preparar toda la documentación relacionada con el caso',
      'No declarar sin asesoría legal previa',
    ],
  },
  familia: {
    title: 'Derecho de Familia',
    description: 'Tu situación requiere asesoría en temas de familia. Te acompañaré en este proceso con empatía y profesionalismo.',
    recommendations: [
      'Agenda una asesoría para evaluar tus opciones legales',
      'Reúne documentos: actas de matrimonio, nacimiento, etc.',
      'Considera la mediación como primera opción',
    ],
  },
  transito: {
    title: 'Derecho de Tránsito',
    description: 'Puedo ayudarte a impugnar multas o defenderte en casos de tránsito. Revisaremos tu caso en detalle.',
    recommendations: [
      'Agenda una Asesoría Básica para revisar el comparendo',
      'Trae copia del comparendo y evidencias (fotos, videos)',
      'Actúa rápido: los términos para impugnar son cortos',
    ],
  },
  documentos: {
    title: 'Redacción de Documentos',
    description: 'Te ayudaré a redactar o revisar documentos legales con precisión jurídica y claridad.',
    recommendations: [
      'Agenda una asesoría y cuéntame qué documento necesitas',
      'Envía cualquier borrador o referencia que tengas',
      'Recibirás un documento profesional y legalmente sólido',
    ],
  },
};

export default function LegalTestSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<TestResultId | null>(null);
  const [showTest, setShowTest] = useState(false);

  const handleAnswer = (selectedResult: TestResultId) => {
    setResult(selectedResult);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setResult(null);
    setShowTest(false);
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-midnight/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-gold font-inter text-sm font-medium">
              Test Interactivo
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-cormorant font-light uppercase text-midnight dark:text-white mb-4">
            ¿No sabes qué servicio necesitas?
          </h2>
          <p className="text-lg text-graphite/80 dark:text-white/80 font-inter max-w-2xl mx-auto">
            Responde una pregunta simple y te guiaré hacia el servicio legal que mejor se ajusta a tu situación.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showTest && !result && (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center"
              >
                <Card hover={false} className="text-center p-12">
                  <HelpCircle className="w-20 h-20 text-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-cormorant font-light uppercase text-midnight dark:text-white mb-4">
                    Descubre qué servicio necesitas
                  </h3>
                  <p className="text-graphite/70 dark:text-white/70 font-inter mb-8">
                    Te haré una pregunta simple para recomendarte el servicio legal más adecuado.
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setShowTest(true)}
                    className="group"
                  >
                    Iniciar Test
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            )}

            {showTest && !result && (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <Card hover={false}>
                  <div className="mb-6">
                    <span className="text-sm font-inter text-gold">
                      Pregunta {currentQuestion + 1} de {QUESTIONS.length}
                    </span>
                  </div>

                  <h3 className="text-2xl font-cormorant font-light uppercase text-midnight dark:text-white mb-8">
                    {QUESTIONS[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {QUESTIONS[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option.result)}
                        className="w-full text-left p-5 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gold hover:bg-gold/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 group-hover:border-gold flex items-center justify-center flex-shrink-0">
                            <div className="w-3 h-3 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <span className="font-inter text-midnight dark:text-white">
                            {option.text}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Card variant="gradient" hover={false}>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gold mx-auto mb-4 flex items-center justify-center">
                      <HelpCircle className="w-8 h-8 text-midnight" />
                    </div>
                    <h3 className="text-3xl font-cormorant font-light uppercase mb-2">
                      Servicio Recomendado
                    </h3>
                    <h4 className="text-2xl font-manrope text-gold">
                      {RESULTS[result].title}
                    </h4>
                  </div>

                  <p className="text-white/90 font-inter text-lg leading-relaxed mb-6">
                    {RESULTS[result].description}
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                    <h5 className="font-cormorant font-light uppercase text-lg mb-4">Próximos Pasos:</h5>
                    <ul className="space-y-3">
                      {RESULTS[result].recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-gold text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-white/90 font-inter text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="flex-1 group"
                      onClick={() => window.location.href = '/contacto'}
                    >
                      Agendar Asesoría
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={resetTest}
                      className="border-white text-white hover:bg-white hover:text-midnight"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Reiniciar Test
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
