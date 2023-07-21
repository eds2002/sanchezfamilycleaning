/* eslint-disable no-underscore-dangle */
import { AboutType } from '@/modules/interface'
import React from 'react'

const stats = [
  { _id: 1, statShortDesc: 'Creators on the platform', stat: '8,000+' },
  { _id: 2, statShortDesc: 'Flat platform fee', stat: '3%' },
  { _id: 3, statShortDesc: 'Uptime guarantee', stat: '99.9%' },
  { _id: 4, statShortDesc: 'Paid out to creators', stat: '$70M' },
]

export default function SimpleGrid({ data }: { data: AboutType }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data?.content?.header ?? 'Header'}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {data?.content?.descOne ??
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ex quam modi, inventore voluptas suscipit, doloribus voluptatum qui, excepturi eos nihil? Sunt placeat delectus cupiditate ex enim velit provident consequatur.`}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {(data?.stats ?? stats).map((stat) => (
              <div key={stat._id} className="flex flex-col p-8 bg-gray-400/5">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.statShortDesc}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.stat}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
