import React from 'react'
import { ServiceInterface } from '@/modules/interface'
import Link from 'next/link'

export default function FAQ({ data }: { data: ServiceInterface['questions'] }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">{data.header}</h2>
        <p className="max-w-2xl mt-6 text-base leading-7 text-gray-600">
          Have a different question and can&apos;t find the answer you&apos;re looking for? Reach out to our support
          team by{' '}
          <Link
            href="mailto:eduardo@sanchezfamilycleaning.com"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            sending us an email
          </Link>{' '}
          and we&apos;ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {data.questions.map((faq) => (
              // eslint-disable-next-line no-underscore-dangle
              <div key={faq._key}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
