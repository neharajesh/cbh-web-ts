import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Section } from "../Section";
import { FaqItems } from "./FaqItems";
import { Faq } from "./data";

type FaqsProps = {
  faqs: Faq[];
  title: string;
  description?: string;
};

export const FaqSection = ({ faqs, title, description }: FaqsProps) => {
  const handleClick = () => {
    window.location.href = "/faqs";
  };

  return (
    <Section title={title} description={description}>
      <FaqItems faqs={faqs} />
      <div className="flex justify-center">
        <Button variant="ghost" className="mt-4" onClick={handleClick}>
          Read More <ChevronRight />
        </Button>
      </div>
    </Section>
  );
};
