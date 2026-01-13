import AsesoriasHeroSection from '@/components/sections/AsesoriasHeroSection';
import PricingSection from '@/components/sections/PricingSection';
import LegalTestSection from '@/components/sections/LegalTestSection';
import CTASection from '@/components/sections/CTASection';
import { generateConsultationMetadata } from '@/lib/seo/metadata';
import { getConsultationPageSchemas, serializeMultipleSchemas } from '@/lib/seo/schemas';

export const metadata = generateConsultationMetadata();

export default function AsesoriasPage() {
  // Generar schemas JSON-LD para asesorías
  const schemas = getConsultationPageSchemas();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeMultipleSchemas(schemas) }}
      />

      <AsesoriasHeroSection />
      <PricingSection />
      <LegalTestSection />
      <CTASection />
    </>
  );
}
