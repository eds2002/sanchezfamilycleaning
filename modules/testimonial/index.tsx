import React from 'react'
import { TESTIMONIAL_COMPONENT_STYLES } from '@/sanity/lib/componentStyles'
import { HeroType, TestimonialsType } from '../interface'
import Grid from './components/Grid'
import OffWhiteGrid from './components/OffWhiteGrid'
import SideBySide from './components/SideBySide'

type TestimonialComponentStyle = (typeof TESTIMONIAL_COMPONENT_STYLES)[number]['value']

export default function Testimonial({ data, style }: { data: TestimonialsType; style: TestimonialComponentStyle }) {
  switch (style) {
    case 'grid':
      return <Grid data={data} />
    case 'offWhiteGrid':
      return <OffWhiteGrid data={data} />
    case 'sideBySide':
      return <SideBySide data={data} />
    default:
      return null
  }
}
