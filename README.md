# Abogada Leal - Sitio Web Profesional

Sitio web profesional para servicios legales especializados en Derecho Penal, Familia y Tránsito en Pereira, Colombia.

## 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🏗️ Estructura del Proyecto

```
abogada-leal/
├── app/                    # Páginas y rutas (Next.js App Router)
│   ├── page.tsx            # Página principal
│   ├── asesorias/          # Página de asesorías
│   ├── servicios/          # Página de servicios
│   └── sobre-mi/          # Página sobre la abogada
├── components/             # Componentes React
│   ├── layout/            # Componentes de layout (Navbar, Footer)
│   ├── sections/          # Secciones de página
│   └── ui/                # Componentes UI base
├── lib/                    # Utilidades y constantes
│   ├── constants.ts       # Datos y configuración
│   ├── utils.ts           # Funciones utilitarias
│   └── seo/               # Configuración SEO
├── public/                 # Archivos estáticos
│   └── images/            # Imágenes
└── tailwind.config.ts     # Configuración Tailwind
```

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Optimización SEO
- ✅ Chatbot conversacional integrado
- ✅ Integración con WhatsApp
- ✅ Animaciones suaves con Framer Motion
- ✅ Tipografía premium (Cormorant Garamond, Inter)
- ✅ Sistema de diseño consistente

## 📱 Páginas

- **/** - Página principal con hero, servicios, información y contacto
- **/asesorias** - Planes de asesoría y test legal interactivo
- **/servicios** - Catálogo completo de servicios legales
- **/sobre-mi** - Perfil profesional y valores

## 🔧 Configuración

### Variables de Entorno

El proyecto no requiere variables de entorno para funcionar en desarrollo. Para producción, configura:

```env
NEXT_PUBLIC_SITE_URL=https://abogadaleal.com
```

### Personalización

- **Datos de contacto**: Edita `lib/constants.ts` → `CONTACT_INFO`
- **Servicios**: Edita `lib/constants.ts` → `LEGAL_SERVICES`
- **SEO**: Edita `lib/constants.ts` → `SEO_METADATA`

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

## 👨‍💻 Desarrollo

Desarrollado con ❤️ para Abogada Leal
