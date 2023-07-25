/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */

'use client'

import React, { Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import classNames from '@/modules/shared/utils/classNames'
import { Navigation } from '@/modules/interface'
import DynamicFontAwesomeIcon from '../utils/DynamicFontAwesomeIcon'

function Card({ item, close }: { item: any; close: any }) {
  const Icon = DynamicFontAwesomeIcon(item.icon ?? '')
  return (
    <div key={item._id} className="relative p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50">
      <div className="flex items-center justify-center mb-6 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
        <Icon className="text-xl" size={24} />
      </div>
      {item.isPopular && (
        <span className="absolute items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full top-6 right-6">
          Popular
        </span>
      )}
      <Link onClick={() => close()} href={item.slug} className="block font-semibold text-gray-900">
        {item.title}
        <span className="absolute inset-0" />
      </Link>
      <p className="mt-1 text-gray-600">{item.shortDesc}</p>
    </div>
  )
}

export default function Header({ header }: { header: Navigation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const singleLinks = React.useCallback(
    () => header.items.filter((item) => item.linkData.length === 1).map((item) => item.linkData[0]),
    [],
  )
  const [expandableLink] = header.items.filter((item) => item.linkData.length > 1)

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent isolate ">
      <nav className="flex items-center justify-between w-full p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sanchez Family Cleaning</span>
            <Image className="w-auto h-8" src="/vercel.svg" alt="" width={32} height={32} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {singleLinks().map((link) => (
            <Link
              key={link.title}
              href={link.slug}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 "
            >
              {link.title}
            </Link>
          ))}
          <Popover>
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 gap-x-1">
              {expandableLink.text}
              <ChevronDownIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 bg-white shadow-lg -z-10 pt-14 ring-1 ring-gray-900/5">
                {({ close }) => (
                  <div className="grid grid-cols-3 px-6 py-10 mx-auto max-w-7xl gap-x-4 lg:px-8 xl:gap-x-8">
                    {expandableLink.linkData.map((item) => (
                      <Card key={item._id} item={item} close={close} />
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get a free quote
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sanchez Family Cleaning</span>
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                {singleLinks().map((link) => (
                  <Link
                    key={link.title === 'Home' ? '/' : link.title}
                    href={link.slug}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                  >
                    {link.title}
                  </Link>
                ))}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {expandableLink.text}
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {expandableLink.linkData.map((item) => (
                          <Disclosure.Button
                            key={item._id}
                            as="a"
                            href={item.slug}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white  bg-indigo-600 hover:bg-indigo-500 "
                >
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
