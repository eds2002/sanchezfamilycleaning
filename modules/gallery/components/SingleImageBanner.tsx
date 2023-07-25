import React from 'react'
import { GalleryType } from '@/modules/interface'
import Image from 'next/image'

export default function SingleImageBanner({ data }: { data: GalleryType }) {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <div className="aspect-[4/2] w-full object-cover rounded-3xl relative overflow-hidden">
        <Image src={data.images[0].image} alt={data.images[0].caption} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}
