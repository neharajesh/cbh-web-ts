import { QuickContact } from "./components/Contact/QuickContact";
import { FaqSection } from "./components/Faqs";
import { short_faqs } from "./components/Faqs/data";
import { FeaturedSection } from "./components/FeaturedSection";
import { HeroSection } from "./components/HeroSection";
import { OurProcess } from "./components/OurProcess";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <QuickContact />
      <OurProcess />
      <FaqSection faqs={short_faqs} title="FAQs" hasReadMoreButton />
    </>
  );
};
