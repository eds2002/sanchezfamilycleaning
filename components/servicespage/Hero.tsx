import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Button from "../Elements/Button";

export default function Hero() {
  return (
    <div className="h-[80vh] w-full bg-white relative">
      <HeroText />
      <VideoBg />
    </div>
  );
}

const HeroText = () => (
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
    <p className="text-lg font-medium">Sanchez Family Cleaning</p>
    <h1 className="max-w-lg text-6xl font-medium text-center">
      Services designed for your needs.
    </h1>
    <Button text="View Services" theme="tertiary" className="mt-6">
      View Services
    </Button>
    <Button
      theme="none"
      className="flex items-center justify-center mt-1"
      href="/contact-us"
    >
      or contact us
      <ChevronRightIcon className="w-3 h-3 " />
    </Button>
  </div>
);

const VideoBg = () => (
  <div className="absolute inset-0">
    <video
      className="object-cover w-full h-full"
      autoPlay
      playsInline
      loop
      muted
    >
      <source src={"/servicesVideo.mp4"} type="video/mp4" />
    </video>
  </div>
);
