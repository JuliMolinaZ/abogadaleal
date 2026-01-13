import HeroSection from '@/components/sections/HeroSection';
import ServicesCardsSection from '@/components/sections/ServicesCardsSection';
import AboutLawyerSection from '@/components/sections/AboutLawyerSection';
import PricingSection from '@/components/sections/PricingSection';
import LocationSection from '@/components/sections/LocationSection';
import { generateHomeMetadata } from '@/lib/seo/metadata';
import { getHomePageSchemas, serializeMultipleSchemas } from '@/lib/seo/schemas';

export const metadata = generateHomeMetadata();

export default function HomePage() {
  // Generar schemas JSON-LD para la página
  const schemas = getHomePageSchemas();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeMultipleSchemas(schemas) }}
      />

      <HeroSection />
      <ServicesCardsSection />
      <AboutLawyerSection />
      <PricingSection />
      <LocationSection />
    </>
  );
}
