/* eslint-disable no-underscore-dangle */
import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { AboutType, CustomBlock, Service, ServicesType, Value } from '@/modules/interface'

const features = [
  {
    _type: 'mock',
    _key: 1,
    name: 'Invite team members',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  {
    _type: 'mock',
    _key: 2,
    name: 'List view',
    description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.',
  },
  {
    _key: 3,
    _type: 'mock',
    name: 'Keyboard shortcuts',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    _key: 4,
    _type: 'mock',
    name: 'Calendars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  {
    _key: 5,
    _type: 'mock',
    name: 'Notifications',
    description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.',
  },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    _key: 6,
    _type: 'mock',
    name: 'Reporting',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    _type: 'mock',
    name: 'Mobile app',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]

function Mock({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div key={feature.name} className="relative pl-9">
      <dt className="font-semibold text-gray-900">
        <CheckIcon className="absolute left-0 w-5 h-5 text-indigo-500 top-1" aria-hidden="true" />
        {feature.name}
      </dt>
      <dd className="mt-2">{feature.description}</dd>
    </div>
  )
}

function ServiceBlock({ service }: { service: Service }) {
  return (
    <div key={service._id} className="relative pl-9">
      <dt className="font-semibold text-gray-900">
        <CheckIcon className="absolute left-0 w-5 h-5 text-indigo-500 top-1" aria-hidden="true" />
        {service.title}
      </dt>
      <dd className="mt-2">{service.longDesc}</dd>
    </div>
  )
}

function Custom({ customBlock }: { customBlock: CustomBlock }) {
  return (
    <div key={customBlock._id} className="relative pl-9">
      <dt className="font-semibold text-gray-900">
        <CheckIcon className="absolute left-0 w-5 h-5 text-indigo-500 top-1" aria-hidden="true" />
        {customBlock.value}
      </dt>
      <dd className="mt-2">{customBlock.description}</dd>
    </div>
  )
}

function ValueBlock({ value }: { value: Value }) {
  return (
    <div key={value._id} className="relative pl-9">
      <dt className="font-semibold text-gray-900">
        <CheckIcon className="absolute left-0 w-5 h-5 text-indigo-500 top-1" aria-hidden="true" />
        {value.value}
      </dt>
      <dd className="mt-2">{value.valueDesc}</dd>
    </div>
  )
}

export default function OffsetWithFeatureList({ data }: { data: ServicesType }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.content?.header}</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {data.content?.descOne ??
                `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias beatae impedit laborum rerum repellat natus, dolor ipsum nobis harum expedita ipsa quas similique minus reprehenderit inventore quos animi et a.`}
            </p>
          </div>
          <dl className="grid grid-cols-1 col-span-2 text-base leading-7 text-gray-600 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {(data.elements ?? features).map((feature) => {
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
