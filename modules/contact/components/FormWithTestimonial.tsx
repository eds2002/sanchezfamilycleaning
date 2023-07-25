/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import { ContactType } from '@/modules/interface'
import Input from '@/modules/shared/components/Input'
import Textarea from '@/modules/shared/components/TextArea'
import Link from 'next/link'
import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import formatPhoneNumber from '@/modules/shared/utils/formatPhoneNumber'
import Image from 'next/image'
import sendMessageRequest from '../utils/sendMessageRequest'

export default function FormWithTestimonial({ data }: { data: ContactType }) {
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
    console.log(values)
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
    <div className="relative px-6 py-24 bg-white isolate sm:py-32 lg:px-8">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div className="max-w-3xl mx-auto lg:max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">{data.content.header ?? 'Header'}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {data.content.descOne ??
            'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.'}
        </p>
        <div className="flex flex-col gap-16 mt-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSubmit} method="POST" className="lg:flex-auto">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
              onChange={onReCAPTCHAChange}
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="firstName"
                    id="first-name"
                    onChange={onChange}
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <Input
                    type="text"
                    name="lastName"
                    onChange={onChange}
                    required
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
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
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  <div className="flex items-center justify-between">
                    <p>Phone number</p>
                    <p className="font-normal text-gray-400">Optional</p>
                  </div>
                </label>
                <div className="mt-2.5">
                  <Input
                    type="tel"
                    name="phoneNumber"
                    onChange={onChange}
                    value={formData.phoneNumber}
                    id="phone-number"
                    autoComplete="tel"
                    pattern="^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                    placeholder="(555) 234-5678"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <Textarea
                    name="message"
                    onChange={onChange}
                    value={formData.message}
                    id="message"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    invalidCN="invalid:ring-red-300 valid:ring-indigo-600"
                    rows={4}
                    defaultValue=""
                    placeholder="Please tell me more about your services."
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            <p className="mt-4 text-sm leading-6 text-gray-500">
              By submitting this form, I agree to the{' '}
              <Link href="/privacy-policy" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </Link>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>“{data.testimonial.testimonial}”</p>
              </blockquote>
              <figcaption className="flex mt-10 gap-x-6">
                <div className="relative flex-none w-12 h-12 overflow-hidden rounded-full bg-gray-50">
                  <Image
                    src={data.testimonial.image ?? ''}
                    alt={`Image of ${data.testimonial.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900">{data.testimonial.name}</div>
                  <div className="text-sm leading-6 text-gray-600">{data.testimonial.county}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
