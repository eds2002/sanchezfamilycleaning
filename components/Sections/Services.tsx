import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Button } from "../";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Services: React.FC = () => {
  const services = [
    {
      id: "commercialCleaning",
      service: "Commercial Cleaning",
      description:
        "A service to maintain a healthy and productive workspace for your employees.",
      moreInfoTitle: "Here are some ways we create a healthy environment.",
      moreInfoParagraph:
        "These are some things that are included in this package. Services may be customized to fit your needs.",
      features: [
        "Dust Removal",
        "Trash Removal",
        "Monitor Cleaning",
        "Vaccume",
      ],
      image: "/commercialCleaning.webp",
      imgAlt: "Picture of a clean office",
    },
    {
      id: "windowCleaning",
      service: "Window Cleaning",
      description:
        "Professional window cleaning for the windows that need the most attention.",
      moreInfoTitle: "Our window service.",
      moreInfoParagraph:
        "A couple of services included with this package. You may add any service as needed.",
      features: ["Profound window cleaning"],
      image: "/windowCleaning.webp",
      imgAlt: "Picture of window cleaning.",
    },
    {
      id: "customCleaning",
      service: "Custom Cleaning",
      description:
        "The plan you have full control over. Add any service your business needs.",
      moreInfoTitle: "A flexible plan.",
      moreInfoParagraph: "Pick as many services as you'd like",
      features: [
        "Trash removal",
        "Window Cleaning",
        "Dust Removal",
        "Floor sweeping",
        "Floor Mopping",
        "Monitor Cleaning",
        "Kitchen Cleaning",
        "Table disinfecting",
      ],
      image: "/flexibleCleaning.webp",
      imgAlt: "Picture of sweeping.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-100">
      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-lg font-medium text-indigo-600">Services</span>
          <h2 className="text-3xl font-medium text-center text-slate-900">
            Interested?
          </h2>
          <p className="max-w-md mt-2 text-sm text-black lg:text-lg sm:text-base">
            Explore our services and request for a quote. You can also{" "}
            <Link
              href="/contact-us"
              className="text-indigo-600 underline cursor-pointer hover:text-indigo-700"
            >
              contact us
            </Link>{" "}
            if you need more information.
          </p>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-6 mt-10 gap-x-6 md:flex-row md:items-start">
          {services.map((service) => (
            <ServiceCard service={service} key={service.service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface iServiceCardProps {
  service: {
    desc: string;
    includes: Array<string>;
    title: string;
    handle: string;
  };
  index: number;
}

function ServiceCard({ service }: { service: any }) {
  const [openMoreInfo, setOpenMoreInfo] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden transition duration-300 bg-white rounded-3xl ">
      <div className="relative p-4 md:p-6 lg:p-7">
        <p className="text-2xl font-medium sm:text-2xl lg:text-3xl">
          {service.service}
        </p>
        <p className="text-base opacity-70 lg:text-lg">{service.description}</p>
        <div className="pt-12 ">
          <Button
            theme="primary"
            fullWidth
            className="flex items-center justify-center py-4 gap-x-2 group justify-self-end "
            href={`/services?selected=${service.service}`}
          >
            Learn more
            <HiArrowRight className="w-3 h-3 transition duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      <div className="relative bottom-0 left-0 right-0 w-full h-full py-32 mt-4 overflow-hidden bg-stone-50">
        <Image
          src={service.image}
          alt={service.imgAlt}
          fill
          className="object-cover w-full h-full "
          priority
        />
      </div>
      <AnimatePresence>
        {openMoreInfo && (
          <MoreInformation
            service={service}
            setOpenMoreInfo={setOpenMoreInfo}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MoreInformation({
  service,
  setOpenMoreInfo,
}: {
  service: any;
  setOpenMoreInfo: (val: boolean) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 p-4 bg-white"
    >
      <p
        onClick={() => setOpenMoreInfo(false)}
        className="flex items-center justify-start text-base font-medium cursor-pointer gap-x-3 hover:opacity-50"
      >
        <HiArrowLeft />
        Back
      </p>
      <p className="mt-4 text-xl font-medium">{service.moreInfoTitle}</p>
      <p className="mt-2 text-base opacity-60">{service.moreInfoParagraph}</p>
      {service.id === "customCleaning" ? (
        <div className="grid w-full grid-cols-2 gap-6 mt-5 place-content-center-center">
          {service.features.map((feature: string) => (
            <p
              key={feature}
              className={`  gap-x-4 px-2 py-2 rounded-full bg-indigo-600 text-white text-center cursor-pointer ${
                selected.includes(feature)
                  ? "grayscale-0 transition duration-300"
                  : "grayscale transition duration-300"
              }`}
              onClick={() => {
                if (selected.includes(feature)) {
                  setSelected((old: string[]) =>
                    old.filter((ft: string) => ft !== feature)
                  );
                } else {
                  setSelected((old: string[]) => [...old, feature]);
                }
              }}
            >
              {feature}
            </p>
          ))}
        </div>
      ) : (
        <div className="mt-5 divide-y">
          {service.features.map((feature: string) => (
            <p
              key={feature}
              className="flex items-center justify-start py-2 gap-x-4"
            >
              <IoIosCheckmarkCircleOutline className="text-indigo-600" />
              {feature}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Services;
