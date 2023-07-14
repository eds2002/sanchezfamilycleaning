'use client'
import { HomePageData } from '@/modules/interface'
import { urlForImage } from '@/sanity/lib/image'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Services({ data }: { data: HomePageData['services'] }) {
  return (
    <div className="relative py-24 overflow-hidden bg-white isolate sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-30 xl:ml-56 "
        aria-hidden="true"
      >
        <div
          className="aspect-[801/800] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 h-[40rem]"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.heading}</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">{data.subheadingOne}</p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="pl-8 border-l border-indigo-600">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>"{data.floatingTestimonial.testimonial}"</p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="relative flex-none w-10 h-10 mt-1 overflow-hidden rounded-full bg-gray-50">
                  <Image
                    src={urlForImage(data.floatingTestimonial.image).url()}
                    alt={`Image of ${data.floatingTestimonial.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">{data.floatingTestimonial.name}</div>
                  <div className="text-gray-600">{data.floatingTestimonial.county}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>{data?.subheadingTwo ?? ''}</p>
            <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
              {data.services.map((service) => (
                <li className="flex gap-x-3" key={service._key}>
                  <ArrowRightIcon className="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">{service.service}.</strong> {service.serviceDesc}
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
