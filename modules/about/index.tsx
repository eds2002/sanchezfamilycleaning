import React from 'react'
import { ABOUT_COMPONENT_STYLES } from '@/sanity/lib/componentStyles'
import { AboutType } from '../interface'
import Simple from './components/Simple'
import Timeline from './components/Timeline'
import SimpleGrid from './components/SimpleGrid'
import Stepped from './components/Stepped'
import WithDescription from './components/WithDescription'

type AboutComponentStyle = (typeof ABOUT_COMPONENT_STYLES)[number]['value']

export default function About({ data, style }: { data: AboutType; style: AboutComponentStyle }) {
  switch (style) {
    case 'simple':
      return <Simple data={data} />
    case 'simpleGrid':
      return <SimpleGrid data={data} />
    case 'stepped':
      return <Stepped data={data} />
    case 'timeline':
      return <Timeline data={data} />
    case 'withDescription':
      return <WithDescription data={data} />
    default:
      return null
  }
}
