import React from "react";
import { BeakerIcon, ClockIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    icon: ClockIcon,
    heading: "We've been around for a while",
    paragraph: "We know a thing or two about keeping offices spotless.",
  },
  {
    icon: BeakerIcon,
    heading: "Only carry high quality products",
    paragraph: "We have a amazing germ killers in our arsenal.",
  },
  {
    icon: FaceSmileIcon,
    heading: "A reputable team",
    paragraph: "They only say the kindest of words about our team!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative px-4 py-24 mx-auto max-w-7xl">
      <div className="">
        <h3 className="relative mb-16 text-4xl font-semibold">
          A quick summary of what we&apos;re known for
        </h3>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
          {testimonials.map((testimonial) => (
            <div
              className="relative flex flex-col items-start justify-start w-full h-full pl-4"
              key={testimonial.heading}
            >
              <testimonial.icon className="w-12 h-12 text-indigo-600" />
              <h3 className="mt-4 text-sm font-medium sm:text-base">
                {testimonial.heading}
                <span className="absolute -left-[1px] w-0.5 h-5 bg-indigo-600 z-[20] rounded-full" />
              </h3>
              <p className="max-w-xs mt-2 text-sm text-left sm:text-base">
                {testimonial.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
