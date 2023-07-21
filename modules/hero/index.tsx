import React from 'react'
import { HeroType, HeroComponentStyle } from '../interface'
import SimpleCentered from './SimpleCentered'
import WithImageTiles from './WithImageTiles'

export default function Hero({ data, style }: { data: HeroType; style: HeroComponentStyle }) {
  switch (style) {
    case 'simpleCentered':
      return <SimpleCentered data={data} />
    case 'withImageTiles':
      return <WithImageTiles data={data} />
    default:
      return <SimpleCentered data={data} />
  }
}
