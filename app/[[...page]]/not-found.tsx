/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { Navigation } from '@/modules/interface'
import errorMenuGROQ from '@/modules/shared/lib/queries/errorMenuGROQ'
import DynamicFontAwesomeIcon from '@/modules/shared/utils/DynamicFontAwesomeIcon'

async function fetch404() {
  try {
    const res = (await client.fetch(errorMenuGROQ)) as Navigation
    // TODO: remove this when we have a better way to handle this
    res.items = res?.items?.map((item) => {
      item.linkData = item?.linkData?.map((link) => ({
        ...link,
        slug: link.slug === 'home' ? '/' : `/${link.slug}`,
      }))
      return item
    })

    return res
  } catch (e) {
    throw new Error(`Failed to fetch footer. ERROR=>${e}`)
  }
}

export default async function NotFoundPage() {
  const data = await fetch404()
  const format404Links = data.items.map((item) => ({
    name: item.text,
    href: item.linkData[0].slug,
    description: item.linkData[0].linkDescription,
    icon: DynamicFontAwesomeIcon({ name: item.linkData[0]?.icon!.name }),
  }))
  return (
    <div className="bg-white">
      <main className="w-full px-6 pt-10 pb-16 mx-auto max-w-7xl sm:pb-24 lg:px-8">
        <div className="max-w-2xl mx-auto mt-20 text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-green-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="flow-root max-w-lg mx-auto mt-16 sm:mt-20">
          {format404Links.length !== 0 && (
            <>
              <h2 className="sr-only">Popular pages</h2>
              <ul className="-mt-6 border-b divide-y divide-gray-900/5 border-gray-900/5">
                {format404Links.map((link, linkIdx) => (
                  <li key={linkIdx} className="relative flex py-6 gap-x-6">
                    <div className="flex items-center justify-center flex-none w-10 h-10 rounded-lg shadow-sm ring-1 ring-gray-900/10">
                      <link.icon className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={link.href}>
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.name}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{link.description}</p>
                    </div>
                    <div className="self-center flex-none">
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="flex justify-center mt-10">
            <Link href="/" className="text-sm font-semibold leading-6 text-green-600">
              <span aria-hidden="true">&larr;</span>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
