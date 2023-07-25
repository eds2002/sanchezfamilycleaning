/* eslint-disable no-underscore-dangle */
import React from 'react'
import { FAQType } from '@/modules/interface'

export default function SideBySide({ data }: { data: FAQType }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 mx-auto divide-y max-w-7xl divide-gray-900/10 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {data.faq.map((obj) => (
            <div key={obj._key} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{obj.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">{obj.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
