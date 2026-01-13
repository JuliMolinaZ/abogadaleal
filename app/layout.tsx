import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SEO_METADATA } from '@/lib/constants';
import GTMScript from '@/components/analytics/GTMScript';
import MetaPixel from '@/components/analytics/MetaPixel';
import LinkedInTag from '@/components/analytics/LinkedInTag';
import { generateLocalBusinessSchema, serializeSchema } from '@/lib/seo/schemas';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_METADATA.url),
  title: {
    default: SEO_METADATA.title,
    template: '%s | Abogada Leal',
  },
  description: SEO_METADATA.description,
  keywords: SEO_METADATA.keywords,
  authors: [{ name: 'Abogada Leal - Camila López' }],
  creator: 'Abogada Leal',
  publisher: 'Abogada Leal',
  icons: {
    icon: [
      { url: '/images/logo-principal.png', type: 'image/png' },
      { url: '/images/logo-principal.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/logo-principal.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/images/logo-principal.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo-principal.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SEO_METADATA.url,
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    siteName: 'Abogada Leal',
    images: [
      {
        url: SEO_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: 'Abogada Leal - Servicios Legales en Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    images: [SEO_METADATA.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generar schema de LocalBusiness para toda la aplicación
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        {/* JSON-LD Schema - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Analytics Scripts - Solo en producción */}
        <GTMScript />
        <MetaPixel />
        <LinkedInTag />

        <Navbar />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
