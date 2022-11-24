import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { AboutUsHero, Footer, Header, Testimonials, OurStory, GetStarted } from '../components'

const AboutUs:NextPage = () => {
  return (
    <>
      <Head>
        <title>About us | Sanchez Family Cleaning</title>    
      </Head>
      <Header/>
      <main>
        <AboutUsHero/>
        <Testimonials/>
        <OurStory/>
        <GetStarted/>
      </main>
      <Footer/>
    </>
  )
}

export default AboutUs