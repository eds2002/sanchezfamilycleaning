import React from 'react'
import Hero from '@/modules/home/components/Hero'
import CompanyStats from '@/modules/home/components/CompanyStats'
import Services from '@/modules/home/components/Services'
import Testimonials from '@/modules/home/components/Testimonials'
import WhyUs from '@/modules/home/components/WhyUs'
import ContactUs from '@/modules/home/components/ContactUs'
import { client } from '@/sanity/lib/client'
import { HomePageData } from '@/modules/interface'

async function fetchHomeData(): Promise<HomePageData> {
  const homepage = await client.fetch(`*[_type == "homePage"]`)
  return homepage[0]
}

export default async function Page({}) {
  const homepage = await fetchHomeData()
  return (
    <>
      <Hero data={homepage.hero} />
      <CompanyStats data={homepage.companyStats} />
      <Services data={homepage.services} />
      <Testimonials data={homepage.testimonials} />
      <WhyUs data={homepage.whyUs} />
      <ContactUs data={homepage.contactUs} />
    </>
  )
}
