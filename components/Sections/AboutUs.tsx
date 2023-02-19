import React from "react";
import {
  MegaphoneIcon,
  CheckBadgeIcon,
  BriefcaseIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../";
import Link from "next/link";

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
      <GridLines />
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
              <Link href="/request-a-quote">
                <Button theme="secondary">
                  <div className="flex items-center justify-center gap-x-1">
                    <p className="text-sm">Request a quote</p>
                    <ChevronRightIcon className="w-3 h-3" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
            {details.map((detail) => (
              <div
                className="relative flex flex-col items-start justify-start w-full h-full pl-4"
                key={detail.title}
              >
                <detail.icon className="w-12 h-12 text-cyan-400" />
                <p className="mt-4 text-sm font-medium text-white sm:text-base">
                  {detail.title}
                  <span className="absolute -left-0.5 w-0.5 h-5 bg-cyan-400" />
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

function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="grid w-full h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <div className="border-dotted border-x border-white/5" />
        <div className="border-dotted border-x border-white/5" />
        <div className="hidden border-dotted border-x border-white/5 lg:block" />
      </div>
    </div>
  );
}

export default AboutUs;
