import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AboutUsHero = () => {
  const text =
    "Providing professional janitorial services for the last 20 years.";
  const textArr = () => {
    const split = text.replaceAll(" ", " \xa0 ").split(" ");
    return split;
  };
  return (
    <section className="relative py-14 sm:py-24 lg:py-40 bg-neutral-100 ">
      <div className="flex flex-col max-w-5xl px-4 mx-auto text-center">
        <AnimatePresence>
          <p className="relative z-10 inline-block overflow-hidden text-lg font-medium text-indigo-600">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                ease: [0.45, 0, 0, 1],
                duration: 1,
              }}
              className="inline-block"
            >
              Sanchez Family
            </motion.span>
          </p>
          <div className="w-full">
            {textArr().map((val, index) => (
              <h1
                className="relative z-20 inline-block py-1 overflow-hidden text-5xl font-semibold text-slate-900 md:text-6xl"
                key={val}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: [0.45, 0, 0, 1],
                    duration: 1,
                    delay: index * 0.02,
                  }}
                  className={`${
                    [14, 16].includes(index) ? "underline" : ""
                  } inline-block`}
                >
                  {val}
                </motion.span>
              </h1>
            ))}
          </div>
        </AnimatePresence>
      </div>
      <svg
        className="absolute bottom-0 left-0 right-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFFFFF"
          fill-opacity="1"
          d="M0,224L1440,32L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default AboutUsHero;
