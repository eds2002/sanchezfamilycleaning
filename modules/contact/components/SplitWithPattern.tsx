/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-bind */

'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useMutation } from '@tanstack/react-query'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import { ContactType } from '@/modules/interface'
import toast from 'react-hot-toast'
import Input from '@/modules/shared/components/Input'
import Textarea from '@/modules/shared/components/TextArea'
import formatPhoneNumber from '@/modules/shared/utils/formatPhoneNumber'
import sendMessageRequest from '../utils/sendMessageRequest'

function CompanyDetails({ data }: { data: ContactType }) {
  return (
    <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
      <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
        <div className="absolute inset-y-0 left-0 w-full overflow-hidden bg-gray-100 -z-10 ring-1 ring-gray-900/10 lg:w-1/2">
          <svg
            className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="100%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M130 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="white" />
            <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
              <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{data.content.header}</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">{data.content.descOne}</p>
        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon className="w-6 text-gray-400 h-7" aria-hidden="true" />
            </dt>
            <dd>{data.location}</dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <PhoneIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
            </dt>
            <dd>
              <Link className="hover:text-gray-900" href={`tel:${data.phoneNum}`}>
                {formatPhoneNumber(data.phoneNum)}
              </Link>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon className="w-6 text-gray-400 h-7" aria-hidden="true" />
            </dt>
            <dd>
              <Link className="hover:text-gray-900" href={`mailto:${data.email}`}>
                {data.email}
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default function SplitWithPattern({ data }: { data: ContactType }) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const { mutate: sendEmails, isLoading } = useMutation(sendMessageRequest, {
    onSuccess: () => {
      toast.dismiss()
      toast.success("Successfully sent! We'll be in touch soon.", {
        duration: 5000,
      })
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      })
    },
    onError: () => {
      toast.error('Error in sending, please try again later.', {
        duration: 5000,
      })
    },
  })

  const recaptchaRef = React.createRef() as any

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === 'phoneNumber' ? formatPhoneNumber(e.target.value) : e.target.value,
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { phoneNumber, ...otherValues } = formData
    const values = Object.values(otherValues)
    // If any of the values are empty, return
    if (values.some((value) => value === '')) {
      // Show an error notification
      return
    }
    toast.loading('Sending your message...')
    recaptchaRef.current.execute()
  }

  const onReCAPTCHAChange = async (captchaCode: any) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email: formData.email, captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // If the response is ok than show the success alert
        sendEmails(formData)
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json()
        toast.dismiss()
        toast.error(error.message, {
          duration: 5000,
        })
        throw new Error(error.message)
      }
    } catch (error) {
      toast.dismiss()
      toast.error('Something went wrong validating the reCAPTCHA.', {
        duration: 5000,
      })
      throw new Error('Something went wrong validating the reCAPTCHA.')
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset()
    }
  }

  return (
    <div className="relative bg-white isolate">
      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <CompanyDetails data={data} />
        <form onSubmit={handleSubmit} action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
            onChange={onReCAPTCHAChange}
          />
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={onChange}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                  <div className="mt-2.5">
                    <Input
                      type="text"
                      name="lastName"
                      onChange={onChange}
                      value={formData.lastName}
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                      required
                      placeholder="Doe"
                    />
                  </div>
                </label>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                  <div className="mt-2.5">
                    <Input
                      type="email"
                      onChange={onChange}
                      value={formData.email}
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                      required
                      placeholder="john@gmail.com"
                    />
                  </div>
                </label>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  <div className="flex items-center justify-between">
                    <p>Phone number</p>
                    <p className="font-normal text-gray-400">Optional</p>
                  </div>
                  <div className="mt-2.5">
                    <Input
                      type="tel"
                      name="phoneNumber"
                      onChange={onChange}
                      value={formData.phoneNumber}
                      id="phone-number"
                      autoComplete="tel"
                      invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                      pattern="^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="(555) 234-5678"
                    />
                  </div>
                </label>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                  <div className="mt-2.5">
                    <Textarea
                      name="message"
                      onChange={onChange}
                      value={formData.message}
                      id="message"
                      required
                      invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue=""
                      placeholder="Please tell me more about your services."
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[10rem] items-cener justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-20" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                      <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0c-4.418 0-8 3.582-8 8z" />
                    </svg>
                  </div>
                ) : (
                  "Let's talk"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
