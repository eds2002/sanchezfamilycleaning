/* eslint-disable react/no-array-index-key */
import React from 'react'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const links = [
  {
    name: 'Documentation',
    href: '#',
    description: 'Learn how to integrate our tools with your app.',
    icon: BookOpenIcon,
  },
  { name: 'API Reference', href: '#', description: 'A complete API reference for our libraries.', icon: QueueListIcon },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: BookmarkSquareIcon,
  },
  { name: 'Blog', href: '#', description: 'Read our latest news and articles.', icon: RssIcon },
]

export default function NotFoundPage() {
  return (
    <div className="bg-white">
      <main className="w-full px-6 pt-10 pb-16 mx-auto max-w-7xl sm:pb-24 lg:px-8">
        <div className="max-w-2xl mx-auto mt-20 text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>
        <div className="flow-root max-w-lg mx-auto mt-16 sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul className="-mt-6 border-b divide-y divide-gray-900/5 border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex py-6 gap-x-6">
                <div className="flex items-center justify-center flex-none w-10 h-10 rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
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
          <div className="flex justify-center mt-10">
            <Link href="/" className="text-sm font-semibold leading-6 text-indigo-600">
              <span aria-hidden="true">&larr;</span>
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
