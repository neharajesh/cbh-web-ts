import {
  AlarmClockCheck,
  BadgeCheck,
  Eye,
  LaptopMinimalCheck,
  Proportions,
  WalletMinimal,
} from "lucide-react";
import { ReactElement } from "react";

type FeaturedSectionData = {
  title: string;
  description: string;
  icon: ReactElement | string | undefined;
};

export const featuredSectionText: FeaturedSectionData[] = [
  {
    title: "Software Expertise",
    description:
      "Decades of experience in building beautiful, performant and user-friendly applications.",
    icon: <LaptopMinimalCheck />,
  },
  {
    title: "Pay for Results",
    description:
      "We charge a fixed price for the project, so you only pay when the product is completed.",
    icon: <WalletMinimal />,
  },
  {
    title: "Full Visibility",
    description:
      "You always have visibility on the status of the project. We communicate effectively and frequently.",
    icon: <Eye />,
  },
  {
    title: "Custom Solutions",
    description: "Crafting bespoke solutions that meet your specific needs.",
    icon: <Proportions />,
  },
  {
    title: "Quick Turnaround",
    description:
      "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency.",
    icon: <AlarmClockCheck />,
  },
  {
    title: "Exceptional Support",
    description:
      "Dedicated assistance during and after project completion, ensuring client satisfaction and success. We listen.",
    icon: <BadgeCheck />,
  },
];

export const featuredSectionNegative: FeaturedSectionData[] = [
  {
    title: "Software Expertise",
    description:
      "Decades of experience in building beautiful, performant and user-friendly applications.",
    icon: "",
  },
  {
    title: "Pay for Results",
    description:
      "We charge a fixed price for the project, so you only pay when the product is completed.",
    icon: "",
  },
  {
    title: "Full Visibility",
    description:
      "You always have visibility on the status of the project. We communicate effectively and frequently.",
    icon: "",
  },
  {
    title: "Custom Solutions",
    description: "Crafting bespoke solutions that meet your specific needs.",
    icon: "",
  },
  {
    title: "Quick Turnaround",
    description:
      "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency.",
    icon: "",
  },
  {
    title: "Exceptional Support",
    description:
      "Dedicated assistance during and after project completion, ensuring client satisfaction and success. We listen.",
    icon: "",
  },
];
