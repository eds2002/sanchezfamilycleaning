import { GalleryType } from '@/modules/interface'
import Image from 'next/image'
import React from 'react'

export default function Masonry({ data }: { data: GalleryType }) {
  return (
    <div className="px-4 py-16 mx-auto space-y-6 max-w-7xl columns-2 md:columns-3 lg:columns-3">
      {data.images.map((obj, index) => (
        <div className={`${index % 3 ? 'aspect-video' : 'aspect-square'} relative rounded-lg overflow-hidden`}>
          <Image layout="fill" objectFit="cover" src={obj.image} alt={obj.caption} />
        </div>
      ))}
    </div>
  )
}
