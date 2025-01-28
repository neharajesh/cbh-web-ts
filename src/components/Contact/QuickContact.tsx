import { Section } from "../Section";
import { Button } from "../ui/button";
import "./QuickContact.css";

export const QuickContact = () => {
  const onClickHandler = () => {
    window.location.href = "https://calendly.com/neha-codebrewhouse/30min";
  };
  return (
    <div className="quick-contact-section">
      <Section
        title="Don't just dream it, build it!"
        description="Transform your ideas into extraordinary realities."
      >
        <div className="w-full flex flex-col items-center justify-center">
          <Button onClick={onClickHandler}>Grab Your Slot Now!</Button>
        </div>
      </Section>
    </div>
  );
};
