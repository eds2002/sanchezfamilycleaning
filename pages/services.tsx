import { NextPage } from "next";
import Head from "next/head";
import React from 'react'
import { CompareServices, Footer, Header } from "../components";

const Services:NextPage = () => {
  return (
    <>
      <Head>

      </Head>
      <Header/>
      <main>
        <CompareServices/>
      </main>
      <Footer/>
    </>
  )
}

export default Services