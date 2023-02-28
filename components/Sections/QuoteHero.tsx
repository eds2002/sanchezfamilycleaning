import { CheckBadgeIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Elements/Button";
import { TbConfetti } from "react-icons/tb";

const QuoteHero: React.FC = () => {
  const router = useRouter();
  const [successModal, setSuccessModal] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string>("");

  useEffect(() => {
    const { selected } = router.query;
    if (selected) {
      setSelectedServices(selected as string);
    }
  }, [router.query]);

  const inputs = [
    {
      name: "firstName",
      type: "text",
      placeHolder: "John",
      label: "First name",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeHolder: "Doe",
      label: "Last name",
      required: true,
    },
    {
      name: "workEmail",
      type: "email",
      placeHolder: "janedoe@example.com",
      label: "Work email",
      required: true,
    },
    // {
    //   name: "companySize",
    //   type: "dropdown",
    //   values: ["1-25", "25-50", "50-75", "75-100"],
    //   label: "Company size",
    // },
    {
      name: "service",
      type: "dropdown",
      values: ["Commercial Cleaning", "Window Cleaning", "Custom Cleaning"],
      label: "Service",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    setLoading(true);
    if (loading) return;
    const target = e.currentTarget.elements;

    const userInformation = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      workEmail: target.workEmail.value,
      // companySize: target.companySize.value,
      userSelectedPackage: target.service.value,
      ...(selectedServices &&
        target.service.value === "Custom Cleaning" && {
          selectedServices: selectedServices,
        }),
    };

    const domain =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sanchezfamilycleaning.com";

    const sendDetails = await fetch(`${domain}/api/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInformation),
    }).then((data) => data.json().catch((error) => error));

    if (sendDetails.code === 200) {
      setSuccessModal(true);
      const sendConfirmation = await fetch(`${domain}/api/sendConfirmation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInformation),
      }).then((data) => data.json().catch((error) => error));
      setHasSubmitted(true);
      setLoading(false);
      target.firstName.value = "";
      target.lastName.value = "";
      target.workEmail.value = "";
    }
  };

  return (
    <>
      <section className="py-16 lg:py-48">
        <div className="flex flex-col gap-6 px-4 pb-24 mx-auto max-w-7xl lg:flex-row lg:pb-0">
          <div className="flex items-center justify-start flex-1 sm:justify-center ">
            <div className="p-4 font-medium text-slate-900">
              <h1 className="max-w-sm text-5xl font-semibold sm:max-w-xl">
                Contact our team for a quote
              </h1>
              <p className="mt-6 text-sm font-medium sm:text-base">
                Ready to start? With us, you&apos;re getting:
              </p>
              <ul className="mt-2 font-normal list-none text-slate-900/70">
                <li className="flex items-center my-1 text-sm sm:text-base gap-x-3">
                  <CheckBadgeIcon className="w-5 h-5 text-indigo-600" />
                  <p>Professionalism</p>
                </li>
                <li className="flex items-center my-1 text-sm sm:text-base gap-x-3">
                  <CheckBadgeIcon className="w-5 h-5 text-indigo-600" />
                  <p>Excellence</p>
                </li>
                <li className="flex items-center my-1 text-sm sm:text-base gap-x-3">
                  <CheckBadgeIcon className="w-5 h-5 text-indigo-600" />
                  <p>Timeliness</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <form
              className="flex flex-col w-full h-full max-w-xl gap-5 p-4 shadow-lg lg:p-6 g:max-w-md bg-neutral-50 rounded-3xl"
              onSubmit={(e: any) => handleSubmit(e)}
            >
              {inputs.map((input) => (
                <Input
                  {...input}
                  key={input.name}
                  hasSubmitted={hasSubmitted}
                  setHasSubmitted={setHasSubmitted}
                />
              ))}
              <div className="flex items-center justify-end">
                <Button theme="tertiary" isLoading={loading}>
                  <p className="text-sm">Get my quote</p>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {successModal && <SuccessModal setSuccessModal={setSuccessModal} />}
      </AnimatePresence>
    </>
  );
};

const SuccessModal: React.FC<iSuccessModalProps> = ({ setSuccessModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="max-w-md p-6 bg-white text-start w-max h-max rounded-3xl"
      >
        <div className="bg-indigo-100 rounded-full max-h-[75px] max-w-[75px] w-screen h-screen flex items-center justify-center">
          <TbConfetti className="w-10 h-10 text-indigo-600" />
        </div>
        <h6 className="mt-3 text-2xl font-medium sm:text-3xl">
          To new beginnings
        </h6>
        <p className="my-2 text-sm text-black/70 sm:text-base">
          We hope to be working with you soon, all you have to do is, sit back,
          relax, and wait for our message. Thank you!
        </p>
        <div className="flex items-center justify-center mt-8">
          <Button
            theme="tertiary"
            fullWidth={true}
            className="py-4"
            onClick={() => setSuccessModal(false)}
          >
            <p className="text-sm">Understood</p>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
const Input: React.FC<iInputProps> = (props) => {
  const {
    type,
    label,
    name,
    values,
    hasSubmitted,
    setHasSubmitted,
    ...inputProps
  } = props;
  const [packageValue, setPackageValue] = useState("");
  const [selectedServices, setSelectedServices] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { quote, selected } = router.query;
    if (quote) {
      setPackageValue(router.query.quote as string);
    }
  }, [router.query]);

  useEffect(() => {
    // TODO, If has submitted is false, return
    if (!hasSubmitted) return;

    // TODO, set focused to false, & has submitted to false, resetting ui error displays.
    setFocused(false);
    setHasSubmitted(false);
  }, [hasSubmitted]);

  return (
    <>
      {type === "dropdown" ? (
        <div className="flex flex-col items-start gap-1 sm:gap-3 sm:items-center sm:flex-row">
          <p className="w-full max-w-xs sm:max-w-[125px] font-medium flex flex-col items-start">
            {label}
            {name === "companySize" && (
              <span className="mt-1 text-xs font-light opacity-70">
                How many employees does your business have?
              </span>
            )}
          </p>
          <div className="relative flex items-center w-full">
            <select
              className="w-full p-4 mb-auto outline-none appearance-none select-none rounded-xl bg-neutral-200/50 h-max"
              name={name}
              required
            >
              {name === "companySize" && (
                <option value="" disabled selected>
                  Select amount of employees
                </option>
              )}
              {values?.map((value: string) => (
                <>
                  <option selected={value === packageValue ? true : false}>
                    {value}
                  </option>
                </>
              ))}
            </select>
            <ChevronDownIcon className="absolute w-4 h-4 right-3" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-1 sm:gap-3 sm:items-center sm:flex-row">
          <p className="w-full max-w-[125px] font-medium">{label}</p>
          <input
            name={name}
            className={`w-full p-4 rounded-xl outline-none select-none bg-neutral-200/50 ${
              focused ? "invalid:bg-red-200/50" : "invalid:bg-neutral-200/50"
            }`}
            type={type}
            {...inputProps}
            onBlur={() => setFocused(true)}
          />
        </div>
      )}
    </>
  );
};

export default QuoteHero;

interface CustomElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  workEmail: HTMLInputElement;
  companySize: HTMLInputElement;
  service: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

interface iSuccessModalProps {
  setSuccessModal: (val: boolean) => void;
}

interface iInputProps {
  type: string;
  label: string;
  name: string;
  values?: Array<string>;
  placeHolder?: string;
  required?: boolean;
  hasSubmitted: boolean;
  setHasSubmitted: (val: boolean) => void;
}
