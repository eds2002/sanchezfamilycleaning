import React from 'react'
import { GalleryComponentStyles, GalleryType } from '../interface'
import Masonry from './components/Masonry'
import SingleImageBanner from './components/SingleImageBanner'

export default function Gallery({ data, style }: { data: GalleryType; style: GalleryComponentStyles }) {
  switch (style) {
    case 'masonry':
      return <Masonry data={data} />
    case 'singleImageBanner':
      return <SingleImageBanner data={data} />
    default:
      return null
  }
}
