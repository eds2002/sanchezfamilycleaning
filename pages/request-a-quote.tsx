import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer, Header, QuoteHero } from '../components'

const RequestAQuote:NextPage = () => {
  return (
    <>
      <Head>
        <title>Request a quote | Sanchez Family Cleaning</title>
      </Head>
      <Header/>
      <main>
        <QuoteHero/>
      </main>
      <Footer/>
    </>
  )
}



export default RequestAQuote