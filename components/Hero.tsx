import Link from "next/link";
import React from "react";
import { Button } from "./";

const Hero: React.FC = () => {
  return (
    <section className="py-32 md:py-48">
      <div className="flex items-center justify-start h-full px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <h1 className="max-w-3xl text-5xl font-semibold lg:text-7xl">
            Professional Commercial Cleaning Based in New Jersey
          </h1>
          <p className="max-w-sm mt-2 text-base lg:text-lg">
            Reduce clutter & increase productivity: Sanchez Family Cleaning is a
            well respected and trusted company dedicated to keeping your offices
            clean.
          </p>
          <div className="flex w-max gap-x-3 mt-7">
            <Link href="/request-a-quote">
              <Button text="" theme="primary" ariaLabel="request a quote">
                <p className="text-sm w-max sm:text-base">Request a quote</p>
              </Button>
            </Link>
            <Button text="" theme="outline">
              <a
                href="tel:+1 908-336-2757"
                className="text-sm w-max sm:text-base"
              >
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
