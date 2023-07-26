import React from 'react'
import { TestimonialsType } from '@/modules/interface'
import Image from 'next/image'

export default function SideBySide({ data }: { data: TestimonialsType }) {
  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="flex flex-col justify-between flex-auto mt-10">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  {data.testimonials?.[0].testimonial ??
                    `Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                  arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                  ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis`}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-10 gap-x-6">
                <div className="relative overflow-hidden rounded-full h-14 w-14 bg-gray-50">
                  <Image
                    src={data.testimonials?.[0].image ?? ''}
                    alt={`Image of ${data.testimonials?.[0].name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{data.testimonials?.[0].name ?? 'Name'}</div>
                  <div className="mt-1 text-gray-500">{data.testimonials?.[0].county ?? 'County'}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col pt-10 border-t border-gray-900/10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="flex flex-col justify-between flex-auto mt-10">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  {data.testimonials?.[1].testimonial ??
                    `Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                    reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                    dolor nisi ullamco.`}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-10 gap-x-6">
                <div className="relative rounded-full h-14 w-14 bg-gray-50">
                  <Image
                    src={data.testimonials?.[1].image ?? ''}
                    alt={`Image of ${data.testimonials?.[1].name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">{data.testimonials?.[1].name ?? 'Name'}</div>
                  <div className="mt-1 text-gray-500">{data.testimonials?.[1].county}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
