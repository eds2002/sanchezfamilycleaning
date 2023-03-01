import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  AboutUsHero,
  Footer,
  Header,
  Testimonials,
  OurStory,
  GetStarted,
} from "../components";

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="A quick brief history about our company and how far we've progressed over these past 2 decades."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pb-24 md:pb-0">
        <AboutUsHero />
        <Testimonials />
        <OurStory />
        <GetStarted />
        <GridLines />
      </main>
      <Footer />
    </>
  );
};

function GridLines() {
  return (
    <div className="absolute inset-0 z-10 ">
      <div className="grid w-full h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        <div className="border-dotted border-gray-400 border-opacity-[0.15] border-x" />
        <div className="hidden border-dotted border-gray-400 border-opacity-[0.15] border-x sm:block" />
        <div className="hidden border-dotted border-gray-400 border-opacity-[0.15] border-x lg:block" />
      </div>
    </div>
  );
}

export default AboutUs;
