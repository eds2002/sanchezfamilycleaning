import React from 'react'
import { CTAType } from '@/modules/interface'
import Link from 'next/link'

export default function StackedLeft({ data }: { data: CTAType }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-[15ch]">
          {data.content.header ?? 'Ready to dive in?'}
        </h2>
        <div className="flex items-center mt-10 gap-x-6">
          {data.primaryButton && (
            <Link
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              href={data.primaryButton.link}
            >
              {data.primaryButton.text}
            </Link>
          )}
          {data.secondaryButton && (
            <Link href={data.secondaryButton.link} className="text-sm font-semibold leading-6 text-gray-900">
              {data.secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
