import Head from 'next/head'
import React from 'react'
import { ContactSection, Footer, Header } from '../components'

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact us | Sanchez Family Cleaning</title>
      </Head>
      <Header/>
      <main>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}
