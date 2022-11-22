import { NextPage } from "next";
import Head from "next/head";
import React from 'react'
import { CompareServices, Footer, Header, PricingHero } from "../components";

const Services:NextPage = () => {
  return (
    <>
      <Head>

      </Head>
      <Header/>
      <main>
        {/* <PricingHero/> */}
        <CompareServices/>
      </main>
      <Footer/>
    </>
  )
}

export default Services