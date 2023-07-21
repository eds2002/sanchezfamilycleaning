'use client'

import { AboutType } from '@/modules/interface'
import React from 'react'

const INVALID_NUMBERS_REGEX = /\D/g

export default function CompanyStats({ data }: { data: AboutType }) {
  const lowestStat = React.useCallback(() => {
    const lowest = data?.stats?.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(INVALID_NUMBERS_REGEX, ''))
      const accNum = Number(acc.stat.replace(INVALID_NUMBERS_REGEX, ''))
      if (num < accNum) {
        return curr
      }
      return acc
    }, data.stats[0])
    return lowest
  }, [])

  const highestStat = React.useCallback(() => {
    const highest = data?.stats?.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(INVALID_NUMBERS_REGEX, ''))
      const accNum = Number(acc.stat.replace(INVALID_NUMBERS_REGEX, ''))
      if (num > accNum) return curr
      return acc
    }, data.stats[0])
    return highest
  }, [])

  const middleStat = React.useCallback(() => {
    const middle = data?.stats?.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(INVALID_NUMBERS_REGEX, ''))
      const accNum = Number(acc.stat.replace(INVALID_NUMBERS_REGEX, ''))
      const highestStatNum = Number(highestStat().stat.replace(INVALID_NUMBERS_REGEX, ''))
      if (num > accNum && num < highestStatNum) return curr
      return acc
    }, data.stats[0])
    return middle
  }, [])

  return (
    <div className="relative pt-24 pb-32 isolate sm:pt-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data?.content?.header}</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">{data?.content?.descOne}</p>
        </div>
        <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-gray-50 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">{lowestStat()?.stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">{lowestStat()?.stat}</p>
              <p className="mt-2 text-base leading-7 text-gray-600">{lowestStat()?.statDesc}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-gray-900 gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">{highestStat()?.stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">{highestStat()?.stat}</p>
              <p className="mt-2 text-base leading-7 text-gray-400">{highestStat()?.statDesc}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-indigo-600 gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">{middleStat()?.stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">{middleStat()?.stat}</p>
              <p className="mt-2 text-base leading-7 text-indigo-200">{middleStat()?.statDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
