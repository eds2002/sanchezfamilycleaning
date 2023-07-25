import { HeroType } from '@/modules/interface'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function SplitWithImage({ data }: { data: HeroType }) {
  return (
    <div className="relative bg-white xl:h-screen">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              {data.annoucement && (
                <div className="relative px-3 py-1 text-sm leading-6 text-gray-500 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {data.annoucement.text}{' '}
                  <Link href={data.annoucement.link ?? '/'} className="font-semibold text-indigo-600 whitespace-nowrap">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              )}
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {data.content.header ?? 'Hero Header'}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{data.content.descOne ?? 'Hero Description One'}</p>
            <div className="flex items-center mt-10 gap-x-6">
              {data.primaryButton && (
                <Link
                  href={data.primaryButton.link}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {data.primaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full relative overflow-hidden ">
            <Image src={data.mainImage.image} alt={data.mainImage.caption} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-white bg-opacity-25" />
          </div>
        </div>
      </div>
    </div>
  )
}
