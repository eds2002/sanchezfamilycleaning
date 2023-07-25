import React from 'react'
import { FAQComponentStyles, FAQType } from '../interface'
import OffsetWithSupportingText from './components/OffsetWithSupportingText'
import ThreeColumnWithSupportingText from './components/ThreeColumnWithSupportingText'
import SideBySide from './components/SideBySide'

export default function FAQ({ data, style }: { data: FAQType; style: FAQComponentStyles }) {
  switch (style) {
    case 'offsetWithSupportingText':
      return <OffsetWithSupportingText data={data} />
    case 'threeColumnWithSupportingText':
      return <ThreeColumnWithSupportingText data={data} />
    case 'sideBySide':
      return <SideBySide data={data} />
    default:
      return null
  }
}
