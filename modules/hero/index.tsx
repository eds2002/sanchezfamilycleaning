import React from 'react'
import { HeroType, HeroComponentStyle } from '../interface'
import SimpleCentered from './components/SimpleCentered'
import WithImageTiles from './components/WithImageTiles'
import SplitWithImage from './components/SplitWithImage'
import WithOffsetImage from './components/WithOffsetImage'

export default function Hero({ data, style }: { data: HeroType; style: HeroComponentStyle }) {
  switch (style) {
    case 'simpleCentered':
      return <SimpleCentered data={data} />
    case 'withImageTiles':
      return <WithImageTiles data={data} />
    case 'splitWithImage':
      return <SplitWithImage data={data} />
    case 'withOffsetImage':
      return <WithOffsetImage data={data} />
    default:
      return null
  }
}
