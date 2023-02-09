import React from "react";

const testimonials = [
  {
    id: 1,
    text: "The best in town, the only service that meets my needs.",
    longerText: "",
    author: "Jamie ~ Trusted Client",
    gradient:
      "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
  {
    id: 2,
    text: "A responsible team that was never disappointed.",
    longerText: "",
    author: "Anna ~ Trusted Client",
    gradient:
      "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
  {
    id: 3,
    text: "Fast and thorough.",
    longerText: "",
    author: "Austin ~ Trusted Client",
    gradient:
      "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
  {
    id: 4,
    text: "I am super impressed with the quality Eduardo and his team give to our building.",
    longerText: "",
    author: "Andre ~ Trusted Client",
    gradient:
      "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
  {
    id: 5,
    text: "No issues, Eduardo's team is fast and reliable.",
    longerText: "",
    author: "Jose ~ Trusted Client",
    gradient:
      "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
  {
    id: 6,
    text: "The best cleaning in town. They are the only ones I am able to trust!",
    longerText: "",
    author: "James ~ Trusted Client",
    gradient:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-800 to-indigo-200",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-start">
          <div>
            <span className="text-lg font-medium text-cyan-400">
              Our Reviews
            </span>
            <h2 className="max-w-xl text-3xl font-medium text-left text-white ">
              Don&apos;t just take our word, take a look at what they say about
              us.
            </h2>
          </div>
        </div>
        <Testimonails />
      </div>
    </section>
  );
};

const Testimonails = () => (
  <div className="grid grid-cols-2 gap-6 mt-6 md:gap-8 lg:gap-16 md:grid-cols-3">
    {testimonials.map((testimonial) => (
      <div
        className={`p-4 sm:p-6 text-white bg-indigo-600 rounded-3xl h-[375px] flex items-start justify-between flex-col ${testimonial.gradient}`}
        key={testimonial.id}
      >
        <p className="text-2xl font-semibold break-noraml md:text-3xl lg:text-4xl xl:text-4xl">
          {testimonial.text}
        </p>
        <p className="text-base ">{testimonial.author}</p>
      </div>
    ))}
  </div>
);

export default Testimonials;
