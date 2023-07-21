import React from 'react'
import { ServicesType, ServiceComponentStyles } from '../interface'
import DescAndHighlightedFeatures from './components/DescAndHighlightedFeatures'
import OffsetWithFeatureList from './components/OffsetWithFeatureList'
import SimpleThreeColumnWithLargeIcons from './components/SimpleThreeColumnWithLargeIcons'
import WithTestimonialAndRightImage from './components/WithTestimonialAndRightImage'

export default function Service({ data, style }: { data: ServicesType; style: ServiceComponentStyles }) {
  switch (style) {
    case 'descAndHighlightedFeatures':
      return <DescAndHighlightedFeatures data={data} />
    case 'offsetWithFeatureList':
      return <OffsetWithFeatureList data={data} />
    case 'simpleThreeColumnWithLargeIcons':
      return <SimpleThreeColumnWithLargeIcons data={data} />
    case 'withTestimonialAndRightImage':
      return <WithTestimonialAndRightImage data={data} />
    default:
      return null
  }
}
