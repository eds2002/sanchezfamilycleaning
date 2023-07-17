import { ServiceInterface } from '@/modules/interface'

export default function ServiceCTA({ data }: { data: ServiceInterface['callToAction'] }) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">{data.header}</h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600">{data.subHeader}</p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get a free quote
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
