/* eslint-disable no-underscore-dangle */
import React from 'react'
import { FAQType } from '@/modules/interface'
import Link from 'next/link'
import GaussianBlur from '@/modules/shared/components/GaussianBlur'
import GridLines from '@/modules/shared/components/GridLines'

export default function ThreeColumnWithSupportingText({ data }: { data: FAQType }) {
  return (
    <div className="relative bg-white isolate">
      <GaussianBlur />
      <GridLines />
      <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="max-w-2xl mt-6 text-base leading-7 text-gray-600">
          Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support
          team by{' '}
          <Link
            href={`mailto:${data.supportEmail}`}
            className="font-semibold text-green-600 hover:text-green-500"
            target="_blank"
            rel="noreferrer"
          >
            sending us an email
          </Link>{' '}
          and we&apos;ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {data?.faq?.map((obj) => (
              <div key={obj._key}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{obj.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{obj.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
