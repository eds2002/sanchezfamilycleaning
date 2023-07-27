'use client'

import React from 'react'
import { HeroType } from '@/modules/interface'
import Link from 'next/link'
import GaussianBlur from '@/modules/shared/components/GaussianBlur'

function SecondaryButton({ secondary }: { secondary: HeroType['secondaryButton'] }) {
  if (!secondary) return null
  return (
    <Link href={`${secondary.link}`} className="text-sm font-semibold leading-6 text-gray-900">
      {secondary.text} <span aria-hidden="true">→</span>
    </Link>
  )
}

function PrimaryButton({ primary }: { primary: HeroType['primaryButton'] }) {
  if (!primary) return null
  return (
    <Link
      href={`${primary.link}`}
      className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      {primary.text}
    </Link>
  )
}

function Announcement({ announcement }: { announcement: HeroType['annoucement'] }) {
  if (!announcement) return null
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {announcement.text}{' '}
        <Link href={announcement.link} className="font-semibold text-green-600">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}

export default function SimpleCentered({ data }: { data: HeroType }) {
  return (
    <div>
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <Announcement announcement={data.annoucement} />
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{data.content.header}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{data.content.descOne}</p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <PrimaryButton primary={data.primaryButton} />
              <SecondaryButton secondary={data.secondaryButton} />
            </div>
          </div>
        </div>
        <GaussianBlur />
      </div>
    </div>
  )
}
