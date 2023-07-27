/* eslint-disable no-underscore-dangle */
import { Service, ServicesType } from '@/modules/interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WithTestimonialAndImage({ data }: { data: ServicesType }) {
  const formatedData = React.useCallback(
    () => data.elements?.filter((e) => e._type === 'service'),
    [data],
  ) as () => Service[]

  return (
    <section>
      {formatedData()?.map((element: Service) => (
        <div key={element._id} className="py-16 overflow-hidden bg-white sm:py-24">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              <div className="lg:pr-4 lg:pt-4">
                <div className="flex flex-col lg:max-w-lg">
                  <div>
                    {element.isPopular && (
                      <span className="items-center px-2 py-1 text-sm font-medium rounded-full text-rose-600 bg-rose-100 ">
                        Popular
                      </span>
                    )}
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{element.title}</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{element.longDesc}</p>
                    <div className="flex items-center mt-8 gap-x-6">
                      <Link
                        href="/contact"
                        className="inline-flex rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        Get a free quote
                      </Link>
                      <Link href={element.link} className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <figure className="pl-8 mt-16 text-gray-600 border-l border-gray-200">
                      <blockquote className="text-base leading-7">
                        <p>“{element.testimonial?.testimonial}”</p>
                      </blockquote>
                      <figcaption className="flex mt-6 text-sm leading-6 gap-x-4">
                        <div className="relative flex-none w-6 h-6 overflow-hidden rounded-full">
                          <Image
                            src={element.testimonial?.image}
                            alt={`Testimonial of ${element.testimonial?.name}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">{element.testimonial?.name}</span> -{' '}
                          {element.testimonial?.county}
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className={`relative `}>
                <div className="relative  aspect-video lg:aspect-[16/12] xl:aspect-video xl:w-[2432px] max-h-[30rem] max-w-[50rem]">
                  <Image
                    src={element.image.image}
                    alt={element.image.caption}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0 self-start "
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
