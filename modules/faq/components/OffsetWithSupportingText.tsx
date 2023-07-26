/* eslint-disable no-underscore-dangle */
import React from 'react'
import { FAQType } from '@/modules/interface'
import Link from 'next/link'

export default function OffsetWithSupportingText({ data }: { data: FAQType }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto max-w-7xl sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our{' '}
              <Link href={`mailto:${data.supportEmail}`} className="font-semibold text-green-600 hover:text-green-500">
                customer support
              </Link>{' '}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {data.faq.map((obj) => (
                <div key={obj._key}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">{obj.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{obj.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
