import AboutHeroSection from '@/components/sections/AboutHeroSection';
import ValuesSection from '@/components/sections/ValuesSection';
import CTASection from '@/components/sections/CTASection';
import { generateAboutMetadata } from '@/lib/seo/metadata';
import { getAboutPageSchemas, serializeMultipleSchemas } from '@/lib/seo/schemas';

export const metadata = generateAboutMetadata();

export default function AboutPage() {
  // Generar schemas JSON-LD para página sobre mí
  const schemas = getAboutPageSchemas();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeMultipleSchemas(schemas) }}
      />

      <AboutHeroSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
