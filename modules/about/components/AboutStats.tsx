import React from 'react'
import { About } from '@/modules/interface'

export default function AboutStats({ data }: { data: AboutPageData['aboutUs'] }) {
  return (
    <div className="py-32 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.title}</h2>
          <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">{data.description}</p>
              <p className="max-w-xl mt-10 text-base leading-7 text-gray-700">{data.description2}</p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {data.stats.map((stat) => (
                  <div key={stat._key} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.statTitle}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.stat}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
