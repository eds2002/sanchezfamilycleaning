import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiHappyBeaming } from "react-icons/bi";
import Button from "../Elements/Button";
const inputs = [
  {
    name: "workEmail",
    type: "email",
    placeHolder: "janedoe@example.com",
    label: "Email",
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    placeHolder: "My question is...",
    label: "Write your message",
    required: true,
  },
];

export default function ContactSection() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const target = e.currentTarget.elements;
    const email = target.workEmail.value;
    const message = target.message.value;

    const domain =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://sanchezfamilycleaning.com";

    const sendMail = await fetch(`${domain}/api/sendQuestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    }).then((data) => data.json().catch((error) => error));

    if (sendMail.code === 200) {
      setSuccessModal(true);
      target.workEmail.value = "";
      target.message.value = "";
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-16 md:py-48">
        <div className="flex flex-col gap-6 px-4 mx-auto max-w-7xl lg:flex-row">
          <div className="flex flex-col flex-1 gap-10 md:items-center md:justify-start sm:justify-between md:flex-row ">
            <div className="flex flex-col items-start justify-center flex-1 p-4 mb-auto font-medium text-slate-900">
              <span className="block text-lg font-semibold text-indigo-600">
                Contact us
              </span>
              <h3 className="max-w-xl text-3xl font-semibold text-slate-900">
                Questions, concerns?
              </h3>
              <p className="mt-2 text-slate-900/80">
                Something on your mind? Ask away! Our team will get back to you
                as soon as they can.
              </p>
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
                    <p className="text-sm">Send my message</p>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {successModal && <SuccessModal setSuccessModal={setSuccessModal} />}
      </AnimatePresence>
    </>
  );
}

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
        className="max-w-lg p-6 bg-white text-start w-max h-max rounded-3xl"
      >
        <div className="bg-indigo-100 rounded-full max-h-[75px] max-w-[75px] w-screen h-screen flex items-center justify-center">
          <BiHappyBeaming className="w-10 h-10 text-indigo-600" />
        </div>
        <h6 className="mt-3 text-2xl font-medium sm:text-3xl">
          We&apos;ll get back to you shortly
        </h6>
        <p className="my-2 text-sm text-black/70 sm:text-base">
          Our staff will get right back to you, thank you for your interest in
          our company. We hope to resolve any concerns you may have!
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
  return (
    <>
      {type === "textarea" ? (
        <div>
          <p className="w-full font-medium">{label}</p>
          <textarea
            name={name}
            className="w-full h-32 p-4 mt-2 outline-none resize-none select-none rounded-xl bg-neutral-200/50"
            placeholder={inputProps.placeHolder}
          ></textarea>
        </div>
      ) : (
        <div className="flex flex-col">
          <p className="w-full max-w-[125px] font-medium">{label}</p>
          <input
            name={name}
            className={`w-full mt-2 p-4 rounded-xl outline-none select-none bg-neutral-200/50`}
            type={type}
            {...inputProps}
          />
        </div>
      )}
    </>
  );
};

interface iSuccessModalProps {
  setSuccessModal: (val: boolean) => void;
}

interface CustomElements extends HTMLFormControlsCollection {
  workEmail: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
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
