import IconStrategy from "../../assets/icon-strategy.jpg";
import IconArchitecture from "../../assets/icon-architecture.jpg";
import IconDevelopment from "../../assets/icon-development.jpg";

type DataStep = {
  title: string;
  description: string;
};

type DataType = {
  title: string;
  description: string;
  steps: DataStep[];
  image: string;
};

const strategy: DataType = {
  title: "Strategy",
  description:
    "We begin by understanding your business goals and mapping the path to success.",
  image: IconStrategy,
  steps: [
    {
      title: "Business Analysis",
      description:
        "We dive deep into your market, competitors, and unique value proposition",
    },
    {
      title: "Product Scoping",
      description:
        "We define core features and functionality aligned with your business objectives",
    },
    {
      title: "Feature Prioritization",
      description:
        "We identify high-impact features for initial release and future iterations",
    },
    {
      title: "Roadmapping",
      description:
        "We create detailed timelines and milestone planning for successful delivery",
    },
  ],
};

const architecture: DataType = {
  title: "Architecture",
  description:
    "We build a solid foundation that ensures scalability and maintainability.",
  image: IconArchitecture,
  steps: [
    {
      title: "Reusable Components",
      description:
        "We create modular, efficient building blocks for rapid development",
    },
    {
      title: "UI Design System",
      description:
        "We establish consistent, branded visual elements and interactions",
    },
    {
      title: "Logging and Monitoring",
      description:
        "We implement comprehensive system tracking and performance monitoring",
    },
    {
      title: "Testing & AI Reviews",
      description:
        "We ensure quality through automated testing and AI-powered code analysis",
    },
  ],
};

const development: DataType = {
  title: "Development",
  description: "We use cutting-edge technology to bring your vision to life.",
  image: IconDevelopment,
  steps: [
    {
      title: "React",
      description:
        "We build interactive user interfaces with the leading frontend library",
    },
    {
      title: "NextJS",
      description:
        "We leverage server-side rendering for optimal performance and SEO",
    },
    {
      title: "TailwindCSS",
      description:
        "We create beautiful, responsive designs with utility-first CSS",
    },
    {
      title: "Github Copilot",
      description: "We accelerate development with AI-powered code suggestions",
    },
  ],
};

const steps = [strategy, architecture, development];

export { steps };
