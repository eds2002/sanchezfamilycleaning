import React from 'react'
import type { HeroType } from '@/modules/interface'
import Image from 'next/image'
import Link from 'next/link'
import GaussianBlur from '@/modules/shared/components/GaussianBlur'
import GridLines from '@/modules/shared/components/GridLines'

export default function WithImageTiles({ data }: { data: HeroType }) {
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <GridLines />
          <GaussianBlur clipPath="polygon(96% 0, 70% 16%, 94% 86%, 80% 70%, 88% 8%, 98% 32%, 42% 4%, 68% 2%, 96% 58%, 94% 71%, 98% 50%, 71% 55%, 71% 80%, 86% 94%);" />
          <div className="overflow-hidden">
            <div className="px-6 pb-32 mx-auto max-w-7xl pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{data.content.header}</h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    {data.content.descOne}
                  </p>
                  <div className="flex items-center mt-10 gap-x-6">
                    {data.primaryButton && (
                      <Link
                        href={data.primaryButton.link}
                        className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        {data.primaryButton.text}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg relative overflow-hidden">
                      <Image
                        src={data.gallery[0].image}
                        alt={data.gallery[0].caption}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg relative overflow-hidden">
                      <Image
                        src={data.gallery[1].image}
                        alt={data.gallery[1].caption}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg relative overflow-hidden">
                      <Image
                        src={data.gallery[2].image}
                        alt={data.gallery[2].caption}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg relative overflow-hidden">
                      <Image
                        src={data.gallery[3].image}
                        alt={data.gallery[3].caption}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg relative overflow-hidden">
                      <Image
                        src={data.gallery[4].image}
                        alt={data.gallery[4].caption}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
