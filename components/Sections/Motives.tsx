import React from "react";
import {
  ClockIcon,
  CheckBadgeIcon,
  DocumentIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Motives: React.FC = () => {
  const details = [
    {
      icon: AcademicCapIcon,
      title: "Trained Staff",
      paragraph:
        "All of our staff are background checked and trained before cleaning your building.",
    },
    {
      icon: CheckBadgeIcon,
      title: "Satisfaction Guaranteed",
      paragraph:
        "We are insane neat freaks. We make sure every bit of your place is squeaky clean.",
    },
    {
      icon: DocumentIcon,
      title: "Fully Insured",
      paragraph:
        "Accidents happen, we are fully insured if any accidents happen.",
    },
    {
      icon: ClockIcon,
      title: "Over 20 years of experience",
      paragraph:
        "Over the past 2 decades we have dedicated our craft to providing the best possible service out there.",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-900">
      <GridLines />
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <div>
            <span className="text-lg font-medium text-cyan-400">Why Us</span>
            <h2 className="max-w-xl text-3xl font-medium text-left text-white ">
              Aside from premium cleaning, here&apos;s some more reasons why
              they love us.
            </h2>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-y-10 md:grid-cols-2 place-items-start">
            {details.map((detail) => (
              <div
                className="relative flex flex-col items-start justify-start h-full pl-4"
                key={detail.title}
              >
                <detail.icon className="w-12 h-12 text-cyan-400" />
                <p className="mt-4 text-sm font-medium text-white sm:text-base">
                  {detail.title}
                  <span className="absolute -left-0.5 w-0.5 h-5 bg-cyan-400" />
                </p>
                <p className="mt-2 text-sm text-left text-white/70 sm:text-base">
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
      <div className="grid w-full h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 lg:grid-cols-2 max-w-7xl">
        <div className="border-l border-r border-dotted border-white/5" />
        <div className="border-l border-r border-dotted border-white/5" />
      </div>
    </div>
  );
}

export default Motives;
