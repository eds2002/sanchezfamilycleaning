import { ServiceInterface } from '@/modules/interface'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

export default function MixImageGrid({ data }: { data: ServiceInterface['gallery'] }) {
  return (
    <div className="grid grid-cols-2 gap-2 px-6 mx-auto max-w-7xl">
      <div className="relative block object-cover object-center w-full h-full overflow-hidden rounded-lg aspect-square max-h-[25rem]">
        <Image src={urlForImage(data[0].image).url()} alt={data[0].caption} layout="fill" objectFit="cover" />
      </div>
      <div className="relative block object-cover object-center w-full h-full overflow-hidden rounded-lg aspect-square max-h-[25rem]">
        <Image src={urlForImage(data[1].image).url()} alt={data[1].caption} layout="fill" objectFit="cover" />
      </div>
      <div className="relative block object-cover object-center w-full h-full overflow-hidden rounded-lg aspect-square max-h-[25rem]">
        <Image src={urlForImage(data[2].image).url()} alt={data[2].caption} layout="fill" objectFit="cover" />
      </div>
      <div className="relative block object-cover object-center w-full h-full overflow-hidden rounded-lg aspect-square max-h-[25rem]">
        <Image src={urlForImage(data[3].image).url()} alt={data[3].caption} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
