import React from 'react'
import { AboutType } from '@/modules/interface'
import { DateTime } from 'luxon'

export default function Timeline({ data }: { data: AboutType }) {
  const timeline = data?.timeline?.map((event) => ({
    name: event.name,
    description: event.description,
    date: DateTime.fromISO(event.date).toFormat('LLL yyyy'),
    dateTime: DateTime.fromISO(event.date).toFormat('yyyy-MM'),
  }))

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline?.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg viewBox="0 0 4 4" className="flex-none w-1 h-1 mr-4" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute w-screen h-px -ml-2 -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
