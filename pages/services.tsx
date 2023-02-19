import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { CompareServices, Footer, Header } from "../components";

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our services | Sanchez Family Cleaning</title>
      </Head>
      <Header />
      <main className="pb-24 ">
        <CompareServices />
      </main>
      <Footer />
    </>
  );
};

export default Services;
