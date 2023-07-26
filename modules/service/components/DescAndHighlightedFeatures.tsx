/* eslint-disable no-underscore-dangle */
import { CustomBlock, Service, ServicesType, Value } from '@/modules/interface'
import React from 'react'

const features = [
  {
    _type: 'mock',
    name: 'Push to deploy.',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    _type: 'mock',
    name: 'SSL certificates.',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    _type: 'mock',
    name: 'Simple queues.',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    _type: 'mock',
    name: 'Advanced security.',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    _type: 'mock',
    name: 'Powerful API.',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    _type: 'mock',
    name: 'Database backups.',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

function Mock({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div key={feature.name}>
      <dt className="font-semibold text-gray-900">{feature.name}</dt>
      <dd className="mt-1 text-gray-600">{feature.description}</dd>
    </div>
  )
}

function ServiceBlock({ service }: { service: Service }) {
  return (
    <div key={service._id}>
      <dt className="font-semibold text-gray-900">{service.title}</dt>
      <dd className="mt-1 text-gray-600">{service.shortDesc}</dd>
    </div>
  )
}

function Custom({ customBlock }: { customBlock: CustomBlock }) {
  return (
    <div key={customBlock._id}>
      <dt className="font-semibold text-gray-900">{customBlock.value}</dt>
      <dd className="mt-1 text-gray-600">{customBlock.description}</dd>
    </div>
  )
}

function ValueBlock({ value }: { value: Value }) {
  return (
    <div key={value._id}>
      <dt className="font-semibold text-gray-900">{value.value}</dt>
      <dd className="mt-1 text-gray-600">{value.valueDesc}</dd>
    </div>
  )
}

export default function DescAndHighlightedFeatures({ data }: { data: ServicesType }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {(data.elements ?? features).map((feature) => {
            switch (feature._type) {
              case 'value':
                return <ValueBlock value={feature as Value} />
              case 'customBlock':
                return <Custom customBlock={feature as CustomBlock} />
              case 'service':
                return <ServiceBlock service={feature as Service} />
              default:
                return <Mock feature={feature as (typeof features)[0]} />
            }
          })}
        </dl>
      </div>
    </div>
  )
}
