/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { aboutGROQ, contactGROQ, ctaGROQ, heroGROQ, servicesGROQ, testimonialsGROQ } from '@/modules/shared/lib/queries'
import {
  CTAType,
  ContactType,
  HeroType,
  PageData,
  ServicesType,
  AboutType,
  TestimonialsType,
} from '@/modules/interface'
import Services from '@/modules/home/components/Services'
import WhyUs from '@/modules/home/components/WhyUs'
import ContactUs from '@/modules/home/components/ContactUs'
import Hero from '@/modules/hero'
import faqGROQ from '@/modules/shared/lib/queries/faqGROQ'
import About from '@/modules/about'
import Testimonial from '@/modules/testimonial'
import Service from '@/modules/service'

async function fetchPageDate(slug: string): Promise<PageData> {
  const data = await client.fetch(`*[_type == "page" && slug.current == "${slug}"]{
    'slug': slug.current,
    pageBuilder[]{
      ${heroGROQ},
      ${aboutGROQ},
      ${servicesGROQ},
      ${testimonialsGROQ},
      ${ctaGROQ},
      ${contactGROQ},
      ${faqGROQ}
    }
  }`)
  if (!data?.[0]) return notFound()
  return data[0]
}

export default async function PageBuilder({
  params,
}: {
  params: {
    page: string[]
  }
}) {
  const slug = params?.page?.at(-1) ?? ('home' as string)
  const page = await fetchPageDate(slug === 'sw.js' ? 'home' : slug)
  return (
    <>
      {page.pageBuilder.map((pg) => {
        const [component, data] = Object.entries(pg)[0]
        switch (component) {
          case 'hero':
            return <Hero data={data as HeroType} style={data.componentStyle as any} />
          case 'about':
            return <About data={data as AboutType} style={data.componentStyle as any} />
          case 'services':
            return <Service data={data as ServicesType} style={data.componentStyle as any} />
          case 'testimonials':
            return <Testimonial data={data as TestimonialsType} style={data.componentStyle as any} />
          case 'cta':
            return <WhyUs data={data as CTAType} />
          case 'contact':
            return <ContactUs data={data as ContactType} />
          default:
            return null
        }
      })}
    </>
  )
}
