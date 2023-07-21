'use client'

import React from 'react'
import { ServicesType } from '@/modules/interface'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

function GaussianBlur() {
  return (
    <div className="absolute inset-x-0 -z-10 transform-gpu sm:-top-80 blur-3xl" aria-hidden="true">
      <div
        className="relative left-[calc(50%-11rem)] -z-10 aspect-square opacity-30 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
        style={{
          clipPath:
            'polygon(24% 26%, 37% 35%, 24% 63%, 23% 46%, 37% 46%, 46% 53%, 46% 63%, 34% 68%, 55% 81%, 14% 66%, 61% 50%, 61% 62%, 43% 46%, 34% 54%, 25% 61%, 43% 91%, 95% 47%, 29% 46%, 2% 84%, 55% 96%, 21% 46%, 44% 57%);',
        }}
      />
    </div>
  )
}

export default function Services({ data }: { data: ServicesType }) {
  console.log(data)
  return (
    <div className="relative py-24 sm:py-32 isolate">
      <GaussianBlur />
      <div className="px-6 mx-auto max-w-7xl lg:px-8 isolate">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.content.header}</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">{data.content.descOne}</p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="pl-8 border-l border-indigo-600">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>&quot;{data.testimonial.testimonial}&quot;</p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="relative flex-none w-10 h-10 mt-1 overflow-hidden rounded-full bg-gray-50">
                  <Image
                    src={data.testimonial.image}
                    alt={`Image of ${data.testimonial.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">{data.testimonial.name}</div>
                  <div className="text-gray-600">{data.testimonial.county}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>{data.content.descOne}</p>
            <ul className="max-w-xl mt-8 space-y-8 text-gray-600">
              {data.services.map((service) => (
                // eslint-disable-next-line no-underscore-dangle
                <li className="flex gap-x-3" key={service._id}>
                  <ArrowRightIcon className="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">{service.title}.</strong> {service.shortDesc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
