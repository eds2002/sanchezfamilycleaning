import React from 'react'
import { CTAComponentStyles, CTAType } from '../interface'
import StackedCenter from './components/StackedCenter'
import StackedLeft from './components/StackedLeft'
import StackedCenterWithBrand from './components/StackedCenterWithBrand'

export default function CallToAction({ data, style }: { data: CTAType; style: CTAComponentStyles }) {
  switch (style) {
    case 'stackedCenter':
      return <StackedCenter data={data} />
    case 'stackedLeft':
      return <StackedLeft data={data} />
    case 'stackedCenterWithBrand':
      return <StackedCenterWithBrand data={data} />
    default:
      return null
  }
}
