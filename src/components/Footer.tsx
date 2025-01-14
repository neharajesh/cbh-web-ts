import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-[300px] w-full flex flex-col items-center justify-center bg-gray-50 rounded-t-lg mt-[32px]">
      <p className="text-[26px] font-bold mb-8">Build with CodeBrewHouse</p>
      <Button>✦ 2 Client Slots Open</Button>
      <div className="mt-[24px] w-[90%] flex justify-between">
        <p>Building from India</p>
        <div className="flex gap-[24px]">
          <a href="/faq">FAQs</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="flex gap-[24px]">
          <a href="https://www.instagram.com/codebrewhouse/">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/company/codebrewhouse">
            <Linkedin />
          </a>
          {/* <a href="">
            <Twitter />
          </a> */}
        </div>
      </div>
    </div>
  );
};
