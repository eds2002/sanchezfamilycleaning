import React from 'react'
import AboutStats from '@/modules/about/components/AboutStats'
import CountyCloud from '@/modules/about/components/CountyCloud'
import Hero from '@/modules/about/components/Hero'
import ImageBanner from '@/modules/about/components/ImageBanner'
import Values from '@/modules/about/components/Values'
import { AboutPageData } from '@/modules/interface'
import { client } from '@/sanity/lib/client'

async function fetchAboutData(): Promise<AboutPageData> {
  const aboutPage = await client.fetch(`*[_type == "aboutPage"]`)
  return aboutPage[0]
}

export default async function AboutPage({}) {
  const aboutPage = await fetchAboutData()
  return (
    <>
      <Hero data={aboutPage.hero} />
      <AboutStats data={aboutPage.aboutUs} />
      <ImageBanner data={aboutPage.bannerImage} />
      <Values data={aboutPage.values} />
      <CountyCloud />
    </>
  )
}
