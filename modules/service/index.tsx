import React from 'react'
import { ServicesType, ServiceComponentStyles } from '../interface'
import DescAndHighlightedFeatures from './components/DescAndHighlightedFeatures'
import OffsetWithFeatureList from './components/OffsetWithFeatureList'
import ThreeColumnWithLargeIcons from './components/ThreeColumnWithLargeIcons'
import WithTestimonialAndImage from './components/WithTestimonialAndImage'

export default function Service({ data, style }: { data: ServicesType; style: ServiceComponentStyles }) {
  switch (style) {
    case 'descAndHighlightedFeatures':
      return <DescAndHighlightedFeatures data={data} />
    case 'offsetWithFeatureList':
      return <OffsetWithFeatureList data={data} />
    case 'threeColumnWithLargeIcons':
      return <ThreeColumnWithLargeIcons data={data} />
    case 'withTestimonialAndImage':
      return <WithTestimonialAndImage data={data} />
    default:
      return null
  }
}
