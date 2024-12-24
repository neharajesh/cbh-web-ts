import { FaqSection } from "./components/Faqs";
import {
  Faq as FaqType,
  business_and_planning,
  development_specifics,
  future_considerations,
  project_timeline_and_process,
  technical_considerations,
} from "./components/Faqs/data";

type faqSectionsType = {
  title: string;
  faqs: FaqType[];
};

const faqSections: faqSectionsType[] = [
  { title: "Project Timeline and Process", faqs: project_timeline_and_process },
  { title: "Technical Considerations", faqs: technical_considerations },
  { title: "Business and Planning", faqs: business_and_planning },
  { title: "Development Specifics", faqs: development_specifics },
  { title: "Future Considerations", faqs: future_considerations },
];

export const Faq = () => {
  return (
    <>
      {faqSections.map((faqSections, index) => (
        <FaqSection {...faqSections} key={index} />
      ))}
    </>
  );
};
