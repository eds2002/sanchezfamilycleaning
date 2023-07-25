import React from 'react'
import { ContactComponentStyles, ContactType } from '../interface'
import SplitWithPattern from './components/SplitWithPattern'
import FormWithTestimonial from './components/FormWithTestimonial'

export default function Contact({ data, style }: { data: ContactType; style: ContactComponentStyles }) {
  switch (style) {
    case 'splitWithPattern':
      return <SplitWithPattern data={data} />
    case 'formWithTestimonial':
      return <FormWithTestimonial data={data} />
    default:
      return null
  }
}
