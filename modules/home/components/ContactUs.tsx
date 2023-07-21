'use client'

import React from 'react'
import { ContactType } from '@/modules/interface'
import Link from 'next/link'

export default function ContactUs({ data }: { data: ContactType }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{data.content.header}</h2>
              <p className="mt-4 leading-7 text-gray-600">{data.content.descOne}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="p-10 rounded-2xl bg-gray-50">
                {data.email && (
                  <>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          <Link className="font-semibold text-indigo-600" href={`mailto:${data.email}`}>
                            {data.email}
                          </Link>
                        </dd>
                      </div>
                    </dl>
                  </>
                )}
              </div>
              <div className="p-10 rounded-2xl bg-gray-50">
                {data.phoneNum && (
                  <>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Phone Number</h3>
                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                      <div>
                        <dt className="sr-only">Phone Number</dt>
                        <dd>
                          <Link className="font-semibold text-indigo-600" href={`tel:${data.phoneNum}`}>
                            {data.phoneNum}
                          </Link>
                        </dd>
                      </div>
                    </dl>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
