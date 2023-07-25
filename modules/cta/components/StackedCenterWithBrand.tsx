import React from 'react'
import { CTAType } from '@/modules/interface'
import Link from 'next/link'

export default function StackedCenterWithBrand({ data }: { data: CTAType }) {
  return (
    <div className="bg-indigo-700">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {data.content.header ?? 'Header'}
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-indigo-200">
            {data.content.descOne ??
              'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'}
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            {data.primaryButton && (
              <Link
                href={data.primaryButton.link}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {data.primaryButton.text}
              </Link>
            )}
            {data.secondaryButton && (
              <Link href={data.secondaryButton.link} className="text-sm font-semibold leading-6 text-white">
                {data.secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
