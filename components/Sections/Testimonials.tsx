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
    paragraph: "They only say the kindest of words to our team!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative px-4 py-24 mx-auto max-w-7xl">
      <div className="px-4 ">
        <h3 className="relative mb-16 text-4xl font-semibold">
          A quick summary of what we&apos;re known for
        </h3>
        <div className="flex flex-col items-start justify-between w-full gap-10 md:flex-row">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col items-start justify-start text-left md:max-w-xs"
              key={testimonial.heading}
            >
              <testimonial.icon className="w-12 h-12 text-indigo-600" />
              <h3 className="relative w-full mt-3 text-lg font-medium">
                {testimonial.heading}
                <span className="absolute top-0 bottom-0 block w-px bg-indigo-600 -left-6"></span>
              </h3>
              <p>{testimonial.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 w-[0.5px] h-full left-2 bg-neutral-200" />
      </div>
    </section>
  );
};

export default Testimonials;
