/* eslint-disable no-underscore-dangle */
import React from 'react'
import { AboutType } from '@/modules/interface'

const mockStats = [
  { _id: 1, stat: 'Transactions every 24 hours', statShortDesc: '44 million' },
  { _id: 2, stat: 'Assets under holding', statShortDesc: '$119 trillion' },
  { _id: 3, stat: 'New users annually', statShortDesc: '46,000' },
]

export default function Simple({ data }: { data: AboutType }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <dl className="grid grid-cols-1 text-center gap-x-8 gap-y-16 lg:grid-cols-3">
          {(data?.stats ?? mockStats).map((stat) => (
            <div key={stat?._id} className="flex flex-col max-w-xs mx-auto gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat?.stat}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat?.statShortDesc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
