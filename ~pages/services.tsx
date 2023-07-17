import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { CompareServices, Footer, Header } from '../components'
import AllServices from '../components/servicespage/AllServices'
import Hero from '../components/servicespage/Hero'

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Premium Services | Sanchez Family Cleaning</title>
        <meta
          name="description"
          content="Check out our premium services! We make sure offices are squeaky clean! Get started today for a free quote."
        />
        <meta property="og:title" content="Our Premium Services" />
        <meta property="og:url" content="https://sanchezfamilycleaning.com/services" />
        <meta
          property="og:description"
          content="Check out our premium services! We make sure offices are squeaky clean! Get started today for a free quote."
        />
        <meta property="og:site_name" content="Sanchez Family Cleaning" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="Sanchez Family Cleaning" />
        <meta property="twitter:domain" content="https://sanchezfamilycleaning.com/services" />
        <meta property="twitter:url" content="https://sanchezfamilycleaning.com/services" />
        <meta name="twitter:title" content="Our Premium Services" />
        <meta
          name="twitter:description"
          content="Check out our premium services! We make sure offices are squeaky clean! Get started today for a free quote."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen pb-24 bg-stone-100">
        <Hero />
        <AllServices />
      </main>
      <Footer />
    </>
  )
}
{
  /* <CompareServices /> */
}

export default Services
