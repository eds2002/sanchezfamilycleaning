import React from 'react'
import Image from 'next/image'
import { ServiceInterface } from '@/modules/interface'
import { urlForImage } from '@/sanity/lib/image'

function PopularPill() {
  return (
    <span className="inline-flex items-center px-2 py-1 mt-24 mb-4 text-xs font-medium text-purple-700 bg-purple-100 rounded-full sm:mt-10 top-6 right-6">
      Popular
    </span>
  )
}

export default function ServiceHero({
  serviceName,
  serviceDesc,
  serviceImage,
  isPopular,
}: {
  serviceName: ServiceInterface['title']
  serviceDesc: ServiceInterface['longDesc']
  serviceImage: ServiceInterface['image']
  isPopular: ServiceInterface['isPopular']
}) {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {isPopular ? (
              <PopularPill />
            ) : (
              // Spacer
              <span className="inline-flex mt-24 mb-4 sm:mt-10" />
            )}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{serviceName}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{serviceDesc}</p>
            <div className="flex items-center mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-[5] bg-gradient-to-b from-white/50 via-white/10 to-white/5" />
          <div className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full relative overflow-hidden">
            <Image src={urlForImage(serviceImage).url()} layout="fill" objectFit="cover" alt="Image of the service" />
          </div>
        </div>
      </div>
    </div>
  )
}
