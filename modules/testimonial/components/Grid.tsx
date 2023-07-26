'use client'

/* eslint-disable react/no-array-index-key */

import React from 'react'
import { TestimonialsType } from '@/modules/interface'
import Image from 'next/image'
import GridLines from '@/modules/shared/components/GridLines'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function GaussianBlur() {
  return (
    <>
      <div
        className="absolute inset-x-0 overflow-hidden -translate-y-1/2 opacity-100 top-1/2 -z-10 transform-gpu blur-3xl "
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-green-50 to-green-200"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 flex pt-32 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-green-50 to-green-200 xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </>
  )
}

export default function Grid({ data }: { data: TestimonialsType }) {
  const featuredTestimonial = {
    body: data.testimonials?.[0]?.testimonial ?? 'Testimonial Body',
    author: {
      name: data.testimonials?.[0]?.name ?? 'Testimonial Author',
      county: data.testimonials?.[0]?.county ?? 'Testimonial County',
      imageUrl: data.testimonials?.[0]?.image ?? '',
      alt: `Image of ${data.testimonials?.[0]?.name}.`,
    },
  }
  const testimonials = [
    [
      [
        {
          body: data.testimonials?.[1].testimonial ?? 'Testimonial Body',
          author: {
            name: data.testimonials?.[1].name ?? 'Testimonial Author',
            county: data.testimonials?.[1].county ?? 'Testimonial County',
            imageUrl: data.testimonials?.[1].image ?? '',
            alt: `Image of ${data.testimonials?.[1]?.name}.`,
          },
        },
        // More testimonials...
      ],
      [
        {
          body: data.testimonials?.[2]?.testimonial ?? 'Testimonial Body',
          author: {
            name: data.testimonials?.[2]?.name ?? 'Testimonial Author',
            county: data.testimonials?.[2]?.county ?? 'Testimonial County',
            imageUrl: data.testimonials?.[2]?.image ?? '',
            alt: `Image of ${data.testimonials?.[2]?.name}.`,
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: data.testimonials?.[3]?.testimonial ?? 'Testimonial Body',
          author: {
            name: data.testimonials?.[3]?.name ?? 'Testimonial Author',
            county: data.testimonials?.[3]?.county ?? 'Testimonial County',
            imageUrl: data.testimonials?.[3]?.image ?? '',
            alt: `Image of ${data.testimonials?.[3]?.name}.`,
          },
        },
        // More testimonials...
      ],
      [
        {
          body: data.testimonials?.[4]?.testimonial ?? 'Testimonial Body',
          author: {
            name: data.testimonials?.[4]?.name ?? 'Testimonial Author',
            county: data.testimonials?.[4]?.county ?? 'Testimonial County',
            imageUrl: data.testimonials?.[4]?.image ?? '',
            alt: `Image of ${data.testimonials?.[4]?.name}.`,
          },
        },
        // More testimonials...
      ],
    ],
  ]
  return (
    <div className="relative pt-24 pb-32 isolate sm:pt-32">
      <GridLines />
      <GaussianBlur />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-600">
            {data.content?.header ?? 'Header'}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.content?.descOne ??
              'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, blanditiis, dolor architecto ad odit quod ex at, velit nobis rerum sit mollitia! Unde, architecto nostrum. Blanditiis labore laborum maiores necessitatibus.'}
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="hidden col-span-2 sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center px-6 py-4 border-t gap-x-4 border-gray-900/10">
              <div className="relative flex-none w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                <Image
                  src={featuredTestimonial.author.imageUrl}
                  alt={featuredTestimonial.author.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.county}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.county}
                      className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="flex items-center mt-6 gap-x-4">
                        <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gray-50">
                          <Image
                            src={testimonial.author.imageUrl}
                            objectFit="cover"
                            layout="fill"
                            alt={testimonial.author.alt}
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.county}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
