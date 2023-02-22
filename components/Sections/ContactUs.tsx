import Link from "next/link";
import React from "react";
import { Button } from "..";
import { HiDocumentText } from "react-icons/hi";
import { IoIosSpeedometer } from "react-icons/io";
import { motion } from "framer-motion";

const details = [
  {
    icon: HiDocumentText,
    title: "Transparent communication",
    paragraph:
      "No tricks or anything. We lay everything out in advance to avoid confusion.",
  },
  {
    icon: IoIosSpeedometer,
    title: "Easy to get started",
    paragraph:
      "We'll do the hard stuff - our procedure will get you started in under a week.",
  },
];

const ContactUs: React.FC = () => {
  return (
    <>
      <section className="relative flex items-center justify-center py-24 md:py-44">
        <div className="flex flex-col items-center w-full px-4 mx-auto max-w-7xl lg:flex-row gap-y-10">
          <Heading />
          <Icons />
        </div>
      </section>
    </>
  );
};

const Heading = () => (
  <div className="grid flex-col items-start justify-center flex-1 w-full grid-cols-2 text-center">
    <div className="flex flex-col items-start justify-center col-span-2 ">
      <span className="text-lg font-medium text-indigo-600">Contact Us</span>
      <h2 className="text-3xl font-medium text-center text-slate-900">
        Ready to start a new adventure?
      </h2>
      <p className="max-w-md mt-2 text-sm text-left text-black lg:text-lg sm:text-base">
        We are just one email away! Interested, or curious about anything? Leave
        us a message! We&apos;ll get back to you as soon as possible. We&apos;re
        hoping to hear from you.
      </p>
      <div className="flex items-center justify-center mt-6 gap-x-3 w-max">
        <Link href="/request-a-quote">
          <Button theme="tertiary">
            <p className="text-sm sm:text-base">Request a quote</p>
          </Button>
        </Link>
        <Link
          href="/contact-us"
          className="text-xs text-indigo-600 cursor-pointer sm:text-sm whitespace-nowrap"
        >
          Contact us
        </Link>
      </div>
    </div>
  </div>
);

const Icons = () => (
  <div className="grid flex-1 w-full md:grid-cols-2 gap-y-10">
    {details.map((detail, index: number) => (
      <div
        className="relative flex flex-col items-start justify-start h-full pl-4"
        key={detail.title}
      >
        <detail.icon className="w-12 h-12 text-indigo-600" />
        <p className="flex items-center mt-4 text-sm font-medium sm:text-base">
          {detail.title}
          <motion.span
            initial={{ filter: "grayscale(100%)", height: 0 }}
            whileInView={{ filter: "grayscale(0%)", height: "20px" }}
            transition={{ delay: 0.15 * index }}
            className="absolute -left-[0.5px] rounded-full w-0.5 h-5 bg-indigo-600"
          />
        </p>
        <p className="mt-2 text-sm text-left opacity-70 sm:text-base">
          {detail.paragraph}
        </p>
      </div>
    ))}
  </div>
);

export default ContactUs;
