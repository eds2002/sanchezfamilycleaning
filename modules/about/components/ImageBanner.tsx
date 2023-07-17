import { AboutPageData } from '@/modules/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

export default function ImageBanner({ data }: { data: AboutPageData['bannerImage'] }) {
  return (
    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="aspect-[5/2] w-full object-cover xl:rounded-3xl overflow-hidden relative">
        <Image src={urlForImage(data).url()} layout="fill" alt="Banner image of a clean office" objectFit="cover" />
      </div>
    </div>
  )
}
