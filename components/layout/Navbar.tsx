'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { generateWhatsAppLink } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'La Abogada', href: '#la-abogada' },
  { label: 'Inversión', href: '#inversion' },
  { label: 'Contacto', href: '#ubicacion' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverLightBackground, setIsOverLightBackground] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const checkBackground = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);
    
    // Detectar qué sección está directamente debajo del header
    const headerHeight = 80; // Altura aproximada del header
    const headerBottomPosition = scrollY + headerHeight;
    
    // Buscar todas las secciones y determinar cuál está debajo del header
    const sections = document.querySelectorAll('section[id], footer');
    let currentSection: Element | null = null;
    let minDistance = Infinity;
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = scrollY + rect.top;
      const sectionBottom = scrollY + rect.bottom;
      
      // Si el header está dentro de esta sección o muy cerca
      if (headerBottomPosition >= sectionTop - 50 && headerBottomPosition <= sectionBottom + 50) {
        const distance = Math.abs(headerBottomPosition - (sectionTop + sectionBottom) / 2);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }
    });
    
    // Si no encontramos sección, verificar por posición relativa al viewport
    if (!currentSection) {
      const sectionsArray = Array.from(document.querySelectorAll('section[id]'));
      for (const section of sectionsArray) {
        const rect = section.getBoundingClientRect();
        // Si el header está visualmente sobre esta sección
        if (rect.top <= headerHeight + 50 && rect.bottom >= headerHeight - 50) {
          currentSection = section;
          break;
        }
      }
    }
    
    // Si aún no encontramos, usar el hero por defecto
    if (!currentSection && scrollY < window.innerHeight * 0.5) {
      setIsOverLightBackground(false); // Hero es oscuro
      return;
    }
    
    // Determinar si la sección actual es clara u oscura
    if (currentSection) {
      const classes = currentSection.className;
      const id = currentSection.id;
      
      // Verificar específicamente por ID para mayor precisión
      if (id === 'ubicacion' || id === 'la-abogada') {
        setIsOverLightBackground(false); // Location y About son oscuros
        return;
      }
      
      // Verificar si soluciones tiene fondo oscuro
      if (id === 'soluciones' && (classes.includes('from-midnight') || classes.includes('via-midnight'))) {
        setIsOverLightBackground(false);
        return;
      }
      
      const isLight = 
        classes.includes('bg-white') || 
        (classes.includes('bg-gradient-to-b') && !classes.includes('from-midnight') && !classes.includes('via-midnight')) ||
        (classes.includes('dark:bg-graphite') && !classes.includes('from-midnight'));
      
      setIsOverLightBackground(isLight);
    } else {
      // Fallback: usar cálculo por posición
      const heroHeight = window.innerHeight * 0.9;
      const servicesStart = heroHeight;
      const aboutStart = servicesStart + 800; // Aproximado
      const pricingStart = aboutStart + 600; // Aproximado
      const locationStart = pricingStart + 400; // Aproximado
      
      if (scrollY < heroHeight) {
        setIsOverLightBackground(false); // Hero
      } else if (scrollY >= servicesStart && scrollY < aboutStart) {
        setIsOverLightBackground(true); // Services (blanco)
      } else if (scrollY >= aboutStart && scrollY < pricingStart) {
        setIsOverLightBackground(false); // About (oscuro)
      } else if (scrollY >= pricingStart && scrollY < locationStart) {
        setIsOverLightBackground(true); // Pricing (blanco)
      } else {
        setIsOverLightBackground(false); // Location y Footer (oscuro)
      }
    }
  }, []);

  useEffect(() => {
    // Debounce para mejorar rendimiento
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        requestAnimationFrame(checkBackground);
      }, 50); // Debounce de 50ms
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    checkBackground(); // Ejecutar al cargar
    
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [checkBackground]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Cerrar menú móvil inmediatamente
    setIsMobileMenuOpen(false);
    
    // Pequeño delay para asegurar que el menú se cierre antes del scroll
    requestAnimationFrame(() => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          const targetId = href.substring(1);
          
          // Offset normal para el header
          const headerOffset = 80;
          // Espacio adicional para "La Abogada" y "Contacto" (3cm ≈ 113px más abajo)
          const extraOffset = (targetId === 'ubicacion' || targetId === 'la-abogada') ? 113 : 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset + extraOffset;

          // Actualizar el fondo INMEDIATAMENTE basado en el destino
          if (targetId === 'ubicacion' || targetId === 'la-abogada') {
            setIsOverLightBackground(false); // Estas secciones son oscuras
            setIsScrolled(true);
          } else if (targetId === 'soluciones' || targetId === 'inversion') {
            setIsOverLightBackground(true); // Estas secciones son claras
            setIsScrolled(true);
          }

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
          
          // Actualización única después del scroll (más eficiente)
          setTimeout(() => {
            checkBackground();
          }, 800);
        }
      } else {
        // Para enlaces externos, usar Next.js Link
        window.location.href = href;
      }
    });
  }, [checkBackground]);
  
  const handleAgendarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Cerrar menú móvil si está abierto
    setIsMobileMenuOpen(false);
    
    // Abrir WhatsApp
    const whatsappUrl = generateWhatsAppLink(CONTACT_INFO.whatsapp, '¡Hola! Me gustaría agendar una asesoría.');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Determinar colores según el fondo
  const textColor = isOverLightBackground ? 'text-midnight' : 'text-white';
  const logoColor = isOverLightBackground ? 'text-midnight' : 'text-white';
  const navBg = isOverLightBackground 
    ? 'bg-white/70 backdrop-blur-[10px] shadow-lg' 
    : 'bg-transparent backdrop-blur-[10px]';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-in-out ${navBg}`}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-all duration-300">
              <Image
                src="/images/logo-principal.png"
                alt="Abogada Leal - Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg lg:text-xl font-cormorant font-light uppercase transition-all duration-[400ms] ease-in-out ${logoColor}`}>
                Abogada Leal
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs uppercase tracking-[0.1em] font-inter font-light hover:text-gold transition-all duration-[400ms] ease-in-out relative group ${textColor} cursor-pointer`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              variant="primary"
              size="md"
              type="button"
              onClick={handleAgendarClick}
              className={`border transition-all duration-[400ms] ease-in-out shadow-none cursor-pointer ${
                isOverLightBackground 
                  ? 'border-gold/70 hover:bg-gradient-to-r hover:from-gold/10 hover:to-gold/5' 
                  : 'border-gold/50 hover:bg-gradient-to-r hover:from-gold/10 hover:to-gold/5'
              }`}
            >
              Agendar Asesoría
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen((prev) => !prev);
            }}
            className={`lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-gold transition-colors duration-200 ease-in-out cursor-pointer touch-manipulation ${textColor}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

          {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden backdrop-blur-[10px] border-t shadow-lg overflow-hidden ${
              isOverLightBackground 
                ? 'bg-white/70 border-gold/20' 
                : 'bg-midnight/60 border-gold/20'
            }`}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.href}
                  type="button"
                  onClick={(e) => handleNavClick(e, item.href)}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left text-sm uppercase tracking-[0.1em] font-inter font-light hover:text-gold transition-colors duration-200 ease-in-out py-3 px-4 min-h-[44px] cursor-pointer touch-manipulation rounded-lg hover:bg-white/5 active:bg-white/10 ${
                    isOverLightBackground ? 'text-midnight' : 'text-white'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                variant="primary"
                size="md"
                type="button"
                className={`w-full border hover:bg-gradient-to-r hover:from-gold/10 hover:to-gold/5 transition-all duration-[400ms] ease-in-out shadow-none cursor-pointer ${
                  isOverLightBackground 
                    ? 'border-gold/70' 
                    : 'border-gold/50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                  handleAgendarClick(e);
                }}
              >
                Agendar Asesoría
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
