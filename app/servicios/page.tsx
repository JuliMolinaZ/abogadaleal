import ServicesHeroSection from '@/components/sections/ServicesHeroSection';
import AllServicesSection from '@/components/sections/AllServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/sections/CTASection';
import { generateServicesMetadata } from '@/lib/seo/metadata';
import { getServicesPageSchemas, serializeMultipleSchemas } from '@/lib/seo/schemas';

export const metadata = generateServicesMetadata();

export default function ServicesPage() {
  // Generar schemas JSON-LD para servicios
  const schemas = getServicesPageSchemas();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeMultipleSchemas(schemas) }}
      />

      <ServicesHeroSection />
      <AllServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
