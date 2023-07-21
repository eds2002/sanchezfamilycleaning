'use client'

/* eslint-disable no-underscore-dangle */

import { CTAType } from '@/modules/interface'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function PrimaryButton({ primary }: { primary: CTAType['primaryButton'] }) {
  if (!primary) return null
  return (
    <Link
      href={primary.link}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {primary.text}
    </Link>
  )
}

export default function WhyUs({ data }: { data: CTAType }) {
  return (
    <div className="py-32 ">
      <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.content.header}</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">{data.content.descOne}</p>
            <ul className="max-w-xl mt-8 space-y-8 text-gray-600">
              {data.values.map((reason, idx) => (
                <React.Fragment key={reason._id}>
                  {idx < 3 && (
                    <li className="flex gap-x-3">
                      <ArrowRightIcon className="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">{reason.value}.</strong> {reason.valueDesc}
                      </span>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            <div className="flex mt-10">
              <PrimaryButton primary={data.primaryButton} />
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <div className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50  overflow-hidden relative">
                <Image src={data.gallery[0]?.image} alt={data.gallery[0]?.caption} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                <div className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover relative overflow-hidden">
                  <Image src={data.gallery[1]?.image} alt={data.gallery[1]?.caption} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                <div className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover relative overflow-hidden">
                  <Image src={data.gallery[2]?.image} alt={data.gallery[2]?.caption} layout="fill" objectFit="cover" />
                </div>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <div className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover relative overflow-hidden">
                  <Image src={data.gallery[3]?.image} alt={data.gallery[3]?.caption} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
