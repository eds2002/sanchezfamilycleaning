import { ArrowPathIcon, ChevronRightIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { LightBulbIcon } from '@heroicons/react/24/solid'

function Services() {
  const features = [
    {
      name: 'Push to deploy',
      description:
        'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
      href: '#',
      icon: LightBulbIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
      href: '#',
      icon: LightBulbIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
      href: '#',
      icon: LightBulbIcon,
    },
  ]
  return (
    <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col">
            <dt className="flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3">
              <feature.icon className="flex-none w-5 h-5 text-indigo-600" aria-hidden="true" />
              {feature.name}
            </dt>
            <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600">
              <p className="flex-auto">{feature.description}</p>
              <p className="mt-6">
                <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function AllServicesHeader() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <Services />
      </div>
    </div>
  )
}
