'use client'

import { HomePageData } from '@/modules/interface'
import React from 'react'

const ONLY_VALID_NUMBERS = /\D/g

export default function CompanyStats({ data }: { data: HomePageData['companyStats'] }) {
  const lowestStat = React.useCallback(() => {
    const lowest = data.stats.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(ONLY_VALID_NUMBERS, ''))
      const accNum = Number(acc.stat.replace(ONLY_VALID_NUMBERS, ''))
      if (num < accNum) {
        return curr
      }
      return acc
    }, data.stats[0])
    return lowest
  }, [])

  const middleStat = React.useCallback(() => {
    const middle = data.stats.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(ONLY_VALID_NUMBERS, ''))
      const accNum = Number(acc.stat.replace(ONLY_VALID_NUMBERS, ''))
      const highestStatNum = Number(highestStat().stat.replace(ONLY_VALID_NUMBERS, ''))
      if (num > accNum && num < highestStatNum) return curr
      return acc
    }, data.stats[0])
    return middle
  }, [])

  const highestStat = React.useCallback(() => {
    const highest = data.stats.reduce((acc, curr) => {
      const num = Number(curr.stat.replace(ONLY_VALID_NUMBERS, ''))
      const accNum = Number(acc.stat.replace(ONLY_VALID_NUMBERS, ''))
      if (num > accNum) return curr
      return acc
    }, data.stats[0])
    return highest
  }, [])

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.heading}</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">{data.subheading}</p>
        </div>
        <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-gray-50 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">{lowestStat().stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">{lowestStat().statTitle}</p>
              <p className="mt-2 text-base leading-7 text-gray-600">{lowestStat().statDesc}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-gray-900 gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">{highestStat().stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">{highestStat().statTitle}</p>
              <p className="mt-2 text-base leading-7 text-gray-400">{highestStat().statDesc}</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between p-8 bg-indigo-600 gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">{middleStat().stat}</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">{middleStat().statTitle}</p>
              <p className="mt-2 text-base leading-7 text-indigo-200">{middleStat().statDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
