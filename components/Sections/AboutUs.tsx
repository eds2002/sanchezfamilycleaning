import React from "react";
import {
  MegaphoneIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../";
import { BiChevronRight } from "react-icons/bi";

const AboutUs: React.FC = () => {
  const details = [
    {
      icon: MegaphoneIcon,
      title: "Always on time",
      paragraph:
        "Punctuality is important to us, we are always on time to get the job done.",
    },
    {
      icon: CheckBadgeIcon,
      title: "High Quality Disinfectants",
      paragraph: "We only use the toughest products to kill 99% of bacteria.",
    },
    {
      icon: BriefcaseIcon,
      title: "Always prepared",
      paragraph:
        "We always wear our gloves and masks, this keeps you safe and our employees safe.",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start px-8">
            <span className="text-lg font-medium text-cyan-400 ">About us</span>
            <h2 className="text-3xl font-medium text-center text-white">
              Our core values
            </h2>
            <p className="max-w-md mt-2 text-sm lg:text-lg sm:text-base text-white/70">
              We make your place cleaner. Our products and service makes it
              easier for businesses to manage their cleaning. So when people
              come together to collaborate and work, the shared environment is
              more hygienic and healthy.
            </p>
            <div className="mt-5 mb-10">
              <Button
                theme="secondary"
                href="/request-a-quote"
                className="text-sm"
              >
                Request a quote
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
            {details.map((detail) => (
              <div
                className="relative flex flex-col items-start justify-start w-full h-full pl-4"
                key={detail.title}
              >
                <detail.icon className="w-12 h-12 text-cyan-400" />
                <p className="mt-4 text-sm font-medium text-white sm:text-base">
                  {detail.title}
                  <span className="absolute -left-[1px] w-0.5 h-5 bg-cyan-400 rounded-full" />
                </p>
                <p className="max-w-xs mt-2 text-sm text-left text-white/70 sm:text-base">
                  {detail.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
