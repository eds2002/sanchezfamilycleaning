/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { aboutGROQ, contactGROQ, ctaGROQ, heroGROQ, servicesGROQ, testimonialsGROQ } from '@/modules/shared/lib/queries'
import {
  HeroType,
  PageData,
  ServicesType,
  AboutType,
  TestimonialsType,
  CTAType,
  ContactType,
  ContactComponentStyles,
  CTAComponentStyles,
  TestimonialComponentStyles,
  ServiceComponentStyles,
  AboutComponentStyles,
  HeroComponentStyle,
  FAQComponentStyles,
  FAQType,
  GalleryComponentStyles,
  GalleryType,
} from '@/modules/interface'
import Hero from '@/modules/hero'
import faqGROQ from '@/modules/shared/lib/queries/faqGROQ'
import About from '@/modules/about'
import Testimonial from '@/modules/testimonial'
import Service from '@/modules/service'
import CallToAction from '@/modules/cta'
import Contact from '@/modules/contact'
import { Metadata } from 'next'
import FAQ from '@/modules/faq'
import galleryGROQ from '@/modules/shared/lib/queries/galleryGROQ'
import Gallery from '@/modules/gallery'

type Props = {
  params: { page: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = !params?.page || params?.page?.[0] === 'sw.js' ? 'home' : params?.page?.join('/')

    // fetch data
    const data = await client.fetch(`*[_type == "page" && slug.current == "${slug}"]{
      'slug': slug.current,
      metadata,
    }[0]`)

    return {
      title: data.metadata.title,
      description: data.metadata.description,
    }
  } catch (e) {
    return {
      title: '404',
      description: 'Page not found',
    }
  }
}

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
      ${faqGROQ},
      ${galleryGROQ}
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
  const slug = !params?.page || params?.page?.[0] === 'sw.js' ? 'home' : params?.page?.join('/')
  const page = await fetchPageDate(slug)
  return (
    <>
      {page.pageBuilder.map((pg, index) => {
        const [component, data] = Object.entries(pg)[0]
        switch (component) {
          case 'hero':
            return <Hero key={index} data={data as HeroType} style={data.componentStyle as HeroComponentStyle} />
          case 'about':
            return <About key={index} data={data as AboutType} style={data.componentStyle as AboutComponentStyles} />
          case 'services':
            return (
              <Service key={index} data={data as ServicesType} style={data.componentStyle as ServiceComponentStyles} />
            )
          case 'testimonials':
            return (
              <Testimonial
                key={index}
                data={data as TestimonialsType}
                style={data.componentStyle as TestimonialComponentStyles}
              />
            )
          case 'cta':
            return <CallToAction key={index} data={data as CTAType} style={data.componentStyle as CTAComponentStyles} />
          case 'contact':
            return (
              <Contact key={index} data={data as ContactType} style={data.componentStyle as ContactComponentStyles} />
            )
          case 'faq':
            return <FAQ key={index} data={data as FAQType} style={data.componentStyle as FAQComponentStyles} />
          case 'gallery':
            return (
              <Gallery key={index} data={data as GalleryType} style={data.componentStyle as GalleryComponentStyles} />
            )
          default:
            return null
        }
      })}
    </>
  )
}
