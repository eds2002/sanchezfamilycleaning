'use client'

import { HomePageData } from '@/modules/interface'

export default function ContactUs({ data }: { data: HomePageData['contactUs'] }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{data.title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{data.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="p-10 rounded-2xl bg-gray-50">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href={`mailto:${data.email}`}>
                        {data.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="p-10 rounded-2xl bg-gray-50">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Phone Number</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Phone Number</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href={`tel:${data.phone}`}>
                        {data.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
