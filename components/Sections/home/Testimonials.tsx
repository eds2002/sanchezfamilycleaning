import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const text =
  "We have built an amazing community over the past 20 years and it is constantly growing. Our community motivates us to provide excellent service all the time.";

const Testimonials: React.FC = () => {
  return (
    <section className="pt-24 pb-48 bg-slate-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center ">
          <div className="h-full ">
            <AnimatePresence>
              <span className="block text-lg font-medium text-center text-cyan-400">
                Our Community
              </span>
              <div className="flex flex-wrap items-center justify-center max-w-6xl text-3xl font-semibold text-center text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {text.split(" ").map((val, index: number) => (
                  <Word key={val} val={val} index={index} />
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

function Word({ val, index }: { val: string; index: number }) {
  const [openTestimonial, setOpenTestimonial] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpenTestimonial(false)}>
      <div className="relative py-0 overflow-hidden sm:py-1">
        <motion.p
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          onClick={() => {
            if (![5, 15, 22].includes(index)) return;
            setOpenTestimonial(!openTestimonial);
          }}
          className={`block pr-1.5 sm:pr-2 md:pr-2 lg:pr-3 mb-0.5 
        ${[5, 15, 22].includes(index) && "cursor-pointer"}`}
          transition={{
            ease: [0.45, 0, 0, 1],
            duration: 1,
            delay: index * 0.01,
          }}
          whileHover={{
            color: [5, 15, 22].includes(index) ? "rgb(129 140 248)" : "",
            transition: {
              duration: 0.2,
            },
          }}
        >
          {val}
        </motion.p>
        {[5, 15, 22].includes(index) && (
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              ease: [0.45, 0, 0, 1],
              duration: 1,
              delay: index * 0.06,
            }}
            className="absolute bottom-0 left-0 right-0 w-full h-1 bg-indigo-600 rounded-full"
          />
        )}
      </div>
      <AnimatePresence>
        {openTestimonial && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute z-40 flex flex-col items-start justify-center p-4 origin-top shadow-xl bg-slate-700 rounded-xl min-w-[200px]"
          >
            <p className="text-xs opacity-70">Trusted Client</p>
            <h6 className="text-base font-semibold text-left ">
              {index === 5 &&
                "The best in town, the only service that meets my needs."}
              {index === 15 &&
                "I am super impressed with the quality Eduardo and his team give to our building."}
              {index === 22 &&
                "The best cleaning in town. They are the only ones I am able to trust!"}
            </h6>
            <span className="mt-2 text-xs font-normal opacity-70">
              {index === 5 && "James - New Jersey"}
              {index === 15 && "Jenny - New Jersey"}
              {index === 22 && "Andre - New Jersey"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Testimonials;
