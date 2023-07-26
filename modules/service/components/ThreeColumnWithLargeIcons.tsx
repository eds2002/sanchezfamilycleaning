/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React from 'react'
import { CustomBlock, Service, ServicesType, Value } from '@/modules/interface'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import DynamicFontAwesomeIcon from '@/modules/shared/utils/DynamicFontAwesomeIcon'
import Link from 'next/link'
import GaussianBlur from '@/modules/shared/components/GaussianBlur'
import GridLines from '@/modules/shared/components/GridLines'

const features = [
  {
    _type: 'mock',
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: InboxIcon,
  },
  {
    _type: 'mock',
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    _type: 'mock',
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: TrashIcon,
  },
]

function Mock({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div key={feature.name} className="flex flex-col">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-green-600 rounded-lg">
          <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {feature.name}
      </dt>
      <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
        <p className="flex-auto">{feature.description}</p>
        <p className="mt-6">
          <a href={feature.href} className="text-sm font-semibold leading-6 text-green-600">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </p>
      </dd>
    </div>
  )
}

function ServiceBlock({ service }: { service: Service }) {
  const Icon = DynamicFontAwesomeIcon(service.icon ?? ({} as any))
  return (
    <div key={service._id} className="flex flex-col">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-green-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {service.title}
      </dt>
      <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
        <p className="flex-auto">{service.longDesc}</p>
        <p className="mt-6">
          <Link href={service.link} className="text-sm font-semibold leading-6 text-green-600">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </p>
      </dd>
    </div>
  )
}

function Custom({ customBlock }: { customBlock: CustomBlock }) {
  const Icon = DynamicFontAwesomeIcon(customBlock.icon ?? ({} as any))
  return (
    <div key={customBlock._id} className="flex flex-col">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-green-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {customBlock.value}
      </dt>
      <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
        <p className="flex-auto">{customBlock.description}</p>
      </dd>
    </div>
  )
}

function ValueBlock({ value }: { value: Value }) {
  const Icon = DynamicFontAwesomeIcon(value.icon ?? ({} as any))
  return (
    <div key={value._id} className="flex flex-col">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="flex items-center justify-center w-10 h-10 mb-6 bg-green-600 rounded-lg">
          <Icon className="w-6 h-6 text-white" aria-hidden="true" />
        </div>
        {value.value}
      </dt>
      <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
        <p className="flex-auto">{value.valueDesc}</p>
      </dd>
    </div>
  )
}

export default function ThreeColumnWithLargeIcons({ data }: { data: ServicesType }) {
  return (
    <div className="relative py-24 bg-white sm:py-32 isolate">
      <GaussianBlur />
      <GridLines />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data.content?.header ?? 'Stay on top of customer support'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {data.content?.descOne ??
              `Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.`}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {(data.elements ?? features).map((feature: (typeof features)[0] | Service | CustomBlock | Value) => {
              switch (feature._type) {
                case 'mock':
                  return <Mock feature={feature} />
                case 'service':
                  return <ServiceBlock service={feature as Service} />
                case 'customBlock':
                  return <Custom customBlock={feature as CustomBlock} />
                case 'value':
                  return <ValueBlock value={feature as Value} />
                default:
                  return null
              }
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}
