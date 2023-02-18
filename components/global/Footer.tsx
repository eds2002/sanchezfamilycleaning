import React from "react";
import { MapPinIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const Footer: React.FC = () => {
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0.8, 1], ["0%", "250%"]);
  return (
    <section className="relative py-10 bg-gray-100 ">
      <div className="relative z-20 px-4 mx-auto text-center max-w-7xl">
        <p className="text-3xl font-semibold">S.F.C</p>
        <div className="flex items-center justify-center mt-4 text-sm gap-x-3">
          <MapPinIcon className="w-4 h-4" />
          <p>Morris County, NJ</p>
        </div>
        <div className="flex items-center justify-center text-sm gap-x-3">
          <ChatBubbleLeftIcon className="w-4 h-4" />
          <p>English and Spanish</p>
        </div>
        <p className="mt-10 text-sm text-neutral-400">
          © 2022 Sanchez Family Cleaning
        </p>
      </div>
      <CircleTop y={y} />
    </section>
  );
};

const CircleTop = ({ y }: { y: MotionValue<string> }) => (
  <div
    className="absolute top-0 bottom-[unset] translate-y-full w-full circle-container h-[15vh] select-none pointer-events-none  "
    id="circle"
  >
    <motion.div
      style={{ height: y }}
      transition={{ duration: 0.8, ease: [0.44, 0.38, 0, 0.99] }}
      className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-50 left-[50%] -translate-x-[50%] -translate-y-[73.3%] bg-gray-100"
    />
  </div>
);

export default Footer;
