import { animated, useInView, useSpring, easings } from "@react-spring/web";
import React from "react";
import Button from "../../Elements/Button";

export default function NumbersSection() {
  const details = [
    {
      title: "20+",
      paragraph: "years in the business.",
    },
    {
      title: "300+",
      paragraph: "buildings cleaned.",
    },
    {
      title: "25+",
      paragraph: "happy, returning clients.",
    },
    {
      title: "99%",
      paragraph: "of dangerous bacteria removed.",
    },
  ];
  return (
    <section className="relative py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start px-8">
            <span className="text-lg font-medium text-indigo-600 ">
              Our Scale
            </span>
            <h2 className="text-3xl font-medium text-left ">
              A trusted brand for your needs
            </h2>
            <p className="max-w-md mt-2 text-sm lg:text-lg sm:text-base ">
              Here are Sanchez Family Cleaning, we are proud of our hard work
              and how far we&apos;ve come since 20 years ago. Take a look at how
              much we&apos;ve accomplished.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 px-4 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
            {details.map((detail, index: number) => (
              <DetailContainer key={detail.title} detail={detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const DetailContainer = ({ detail }: { detail: any }) => {
  const num = Number(
    detail.title
      .split("")
      .filter((char: string) => !isNaN(Number(char)))
      .join("")
  );
  const [ref, number] = useInView(
    () => ({
      from: { number: 0 },
      to: { number: num },
      delay: 200,
      config: { easing: easings.easeOutCirc, duration: 1250 },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );

  function formatValue() {
    const splitValue = detail.title.split("");
    const getSymbol = splitValue.filter((char: string) => isNaN(Number(char)));
    const getNumber = splitValue.filter((char: string) => !isNaN(Number(char)));
    return {
      number: getNumber,
      symbol: getSymbol,
    };
  }
  formatValue();

  return (
    <div
      className="relative flex flex-col items-start justify-start w-full h-full px-4"
      key={detail.title}
    >
      <animated.div className="relative flex items-center mt-4 text-2xl font-semibold md:text-3xl lg:text-4xl xltext-5xl ">
        <animated.p ref={ref}>
          {number.number.to((n: number) => n.toFixed(0))}
        </animated.p>
        {formatValue().symbol}
        <span className="absolute -left-[17.6px] w-0.5  bg-indigo-600 rounded-full h-full" />
      </animated.div>
      <p className="max-w-xs mt-2 text-sm text-left opacity-70 sm:text-base">
        {detail.paragraph}
      </p>
    </div>
  );
};
