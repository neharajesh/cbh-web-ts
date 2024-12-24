import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Section } from "../Section";
import { FaqItems } from "./FaqItems";
import { Faq } from "./data";

type FaqsProps = {
  faqs: Faq[];
  title: string;
  description?: string;
  hasReadMoreButton?: boolean;
};

export const FaqSection = ({
  faqs,
  title,
  description,
  hasReadMoreButton = false,
}: FaqsProps) => {
  const handleClick = () => {
    window.location.href = "/faq";
  };

  return (
    <Section title={title} description={description}>
      <FaqItems faqs={faqs} />
      <div className="flex justify-center">
        {hasReadMoreButton && (
          <Button variant="ghost" className="mt-4" onClick={handleClick}>
            Read More <ChevronRight />
          </Button>
        )}
      </div>
    </Section>
  );
};
