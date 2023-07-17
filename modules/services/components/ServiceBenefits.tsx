import { ServiceInterface } from '@/modules/interface'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Invite team members',
    description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  },
  { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  {
    name: 'Keyboard shortcuts',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Calendars',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Reporting',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'Mobile app',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]

export default function ServiceBenefits({ data }: { data: ServiceInterface['features'] }) {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">What&apos;s included?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.header}</p>
            <p className="mt-6 text-base leading-7 text-gray-600">{data.subHeader}</p>
          </div>
          <dl className="grid grid-cols-1 col-span-2 text-base leading-7 text-gray-600 gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-y-16">
            {data.features.map((feature) => (
              <div key={feature._key} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 w-5 h-5 text-indigo-500 top-1" aria-hidden="true" />
                  {feature.feature}
                </dt>
                <dd className="mt-2">{feature.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
