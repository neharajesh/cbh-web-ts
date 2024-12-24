import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "./data";

type FaqItemsProps = {
  faqs: Faq[];
};

export const FaqItems = ({ faqs }: FaqItemsProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((faq, id) => (
        <AccordionItem value={`{item-${id + 1}}`} key={id}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
