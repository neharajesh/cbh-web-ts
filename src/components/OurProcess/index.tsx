import { Section } from "../Section";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { steps as processSteps } from "./data";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export const OurProcess = () => {
  return (
    <Section
      title="Our Process"
      description="We deliver through cycles of Strategy, Architecture, and Development"
    >
      <div className="flex gap-4 mt-4">
        {processSteps.map((step, id) => (
          <Card
            key={id}
            className="w-1/3 border-transparent shadow-transparent"
          >
            <CardHeader className="w-full flex justify-center items-center text-center">
              <img
                src={step.image}
                alt={step.title}
                className="mb-4 h-[250px]"
              />
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardFooter className="w-full flex justify-center items-center text-center">
              <Dialog>
                <DialogTrigger>
                  <Button variant="ghost" className="text-sm text-slate-600">
                    Know More <ChevronRight />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[50vw]">
                  <DialogHeader>
                    <DialogTitle>{step.title}</DialogTitle>
                    <DialogDescription>{step.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center items-center">
                    {step.steps.map((item) => (
                      <div
                        key={`${step.title}-${item.title}`}
                        className="w-[225px] border rounded-sm p-2"
                      >
                        <p className="font-bold">{item.title}</p>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* <div className="flex gap-4 mt-4">
        {processSteps.map((step, id) => (
          <Card key={id} className="w-1/3">
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {step.steps.map((element, index) => (
                  <div className="my-3" key={index}>
                    <div className="underline">{element.title} </div>
                    <span className="italic"> {element.description} </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </Section>
  );
};
