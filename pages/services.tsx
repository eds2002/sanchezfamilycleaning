import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { CompareServices, Footer, Header } from "../components";
import AllServices from "../components/servicespage/AllServices";
import Hero from "../components/servicespage/Hero";

const Services: NextPage = () => {
  const router = useRouter();
  // const scrollTo = async (selected: any) => {
  //   document
  //     .getElementById(selected)
  //     ?.scrollIntoView({ behavior: "smooth", block: "end" });
  // };
  // useEffect(() => {
  //   const { selected } = router.query;
  //   if (selected) {
  //     scrollTo(selected);
  //   }
  // }, [router.query]);
  return (
    <>
      <Head>
        <title>Our services | Sanchez Family Cleaning</title>
      </Head>
      <main className="min-h-screen pb-24 bg-stone-100">
        <Hero />
        <AllServices />
      </main>
      <Footer />
    </>
  );
};
{
  /* <CompareServices /> */
}

export default Services;
