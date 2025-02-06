import { Section } from "../Section";
import { featuredSectionText } from "./data";

export const FeaturedSection = () => {
  return (
    <Section title="Why Choose Us" description="">
      <div className="w-full flex flex-wrap">
        {featuredSectionText.map((item) => (
          <div className={`w-[30%] rounded-sm shadow-md m-4 p-4`}>
            <div className="py-4">{item.icon}</div>
            <p className="text-lg font-bold">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
