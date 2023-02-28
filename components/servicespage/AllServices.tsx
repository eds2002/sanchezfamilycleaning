import { setServers } from "dns";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../Elements/Button";

const services = [
  {
    id: "commercialCleaning",
    service: "Commercial Cleaning",
    description:
      "Maintain a healthy and productive workspace for your employees.",
    moreInfoTitle: "Here are some ways we create a healthy environment.",
    moreInfoParagraph:
      "These are some things that are included in this package. Services may be customized to fit your needs.",
    features: ["Dust Removal", "Trash Removal", "Monitor Cleaning", "Vaccume"],
    image: "/commercialCleaning.jpg",
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
    image: "/windowCleaning.jpg",
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
    image: "/flexibleCleaning.jpg",
    imgAlt: "Picture of sweeping.",
  },
];

export default function AllServices() {
  return (
    <section className="py-24 bg-stone-100">
      <div className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl">
        <div>
          <h2 className="text-5xl font-semibold text-center">Our Services</h2>
          <p className="max-w-sm mt-2 text-base text-center opacity-70 lg:text-lg ">
            See a service you need? Pick them out. You can also create your own
            service if you would like to.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10 max-w-7xl sm:gap-6 lg:gap-12 md:grid-cols-2 xl:grid-cols-3 ">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const [openMoreInfo, setOpenMoreInfo] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const { selected } = router.query;
    if (service.service === selected) {
      setOpenMoreInfo(true);
    }
  }, [router.query, setOpenMoreInfo, service]);

  return (
    <div
      id={service.service}
      className="relative flex flex-col items-center justify-center overflow-hidden transition duration-300 bg-white rounded-3xl hover:shadow-2xl"
    >
      <div className="relative p-4 md:p-6 lg:p-7">
        <p className="text-2xl font-medium sm:text-2xl lg:text-3xl">
          {service.service}
        </p>
        <p className="text-base opacity-70 lg:text-lg">{service.description}</p>
        <Button
          theme="none"
          onClick={() => setOpenMoreInfo(true)}
          className="flex items-center justify-center text-indigo-600 gap-x-1"
        >
          {service.service === "Custom Cleaning"
            ? "Pick services"
            : "Learn more"}
          <BiChevronRight />
        </Button>
        <div className="pt-12 ">
          <Button
            theme="primary"
            fullWidth
            href={`/request-a-quote?quote=${
              service.service
            }&selected=${encodeURI(JSON.stringify(selected))}`}
            className="flex items-center justify-center py-4 gap-x-2 group justify-self-end "
          >
            Request a quote
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
        />
      </div>
      <AnimatePresence>
        {openMoreInfo && (
          <MoreInformation
            service={service}
            setOpenMoreInfo={setOpenMoreInfo}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MoreInformation({
  service,
  setOpenMoreInfo,
  selected,
  setSelected,
}: {
  service: any;
  setOpenMoreInfo: (val: boolean) => void;
  selected: string[];
  setSelected: (val: any) => void;
}) {
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
