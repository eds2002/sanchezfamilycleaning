/* eslint-disable no-underscore-dangle */
import { AboutType } from '@/modules/interface'
import React from 'react'

const stats = [
  { _key: 1, statShortDesc: 'Transactions every 24 hours', stat: '44 million' },
  { _key: 2, statShortDesc: 'Assets under holding', stat: '$119 trillion' },
  { _key: 3, statShortDesc: 'New users annually', stat: '46,000' },
]

export default function WithDescription({ data }: { data: AboutType }) {
  return (
    <div className="py-32 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.content?.header ?? 'Header'}
          </h2>
          <div className="flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                {data.content?.descOne ??
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo exercitationem harum ex voluptas blanditiis enim dolore earum laboriosam nisi, quisquam culpa quidem vel ut at impedit qui, tempora accusamus.`}
              </p>
              <p className="max-w-xl mt-10 text-base leading-7 text-gray-700">
                {data.content?.descTwo ??
                  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo exercitationem harum ex voluptas blanditiis enim dolore earum laboriosam nisi, quisquam culpa quidem vel ut at impedit qui, tempora accusamus.`}
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div key={stat._key} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.statShortDesc}</dt>
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
