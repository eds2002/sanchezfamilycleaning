import { AboutType } from '@/modules/interface'
import React from 'react'

export default function Stepped({ data }: { data: AboutType }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data?.content?.header ?? 'Header'}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {data?.content?.descOne ??
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum cumque id asperiores perspiciatis error sed tempora voluptatum quam aperiam? Laborum, dolorum. Dolor molestias rerum ipsam, illo iste id mollitia!'}
          </p>
        </div>
        <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-gray-50 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
              {data.stats?.[0].stat ?? 'Stat 1 statistic'}
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">
                {data.stats?.[0].statShortDesc ?? 'Stat 1 short description'}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {data.stats?.[0].statDesc ?? 'Stat 1 long description'}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-gray-900 gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              {data.stats?.[1].stat ?? 'Stat 2 statistic'}
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                {data.stats?.[1].statShortDesc ?? 'Stat 2 short description'}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-400">
                {data?.stats?.[1].statDesc ?? 'Stat 2 long description'}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-indigo-600 gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">
              {data.stats?.[2].stat ?? 'Stat 3 statistic'}
            </p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                {data.stats?.[2].statShortDesc ?? 'Stat 3 short description'}
              </p>
              <p className="mt-2 text-base leading-7 text-indigo-200">
                {data.stats?.[2].statDesc ?? 'Stat 3 long description'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
