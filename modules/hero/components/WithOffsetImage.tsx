import { HeroType } from '@/modules/interface'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function WithOffsetImage({ data }: { data: HeroType }) {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden isolate bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="px-6 py-32 mx-auto max-w-7xl sm:py-40 lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              {data.content.header ?? 'Hero Header'}
            </h1>
            <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">{data.content.descOne ?? 'Hero Description One'}</p>
              <div className="flex items-center mt-10 gap-x-6">
                {data.primaryButton && (
                  <Link
                    href={data.primaryButton.link}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {data.primaryButton.text}
                  </Link>
                )}
                {data.secondaryButton && (
                  <Link href={data.secondaryButton.link} className="text-sm font-semibold leading-6 text-gray-900">
                    {data.secondaryButton.text}
                  </Link>
                )}
              </div>
            </div>
            <div className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 overflow-hidden relative">
              <Image src={data.mainImage.image} alt={data.mainImage.caption} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
