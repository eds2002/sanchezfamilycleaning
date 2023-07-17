import React from 'react'

function Grid() {
  return (
    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
      <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
        <defs>
          <pattern
            id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
            width={200}
            height={200}
            x="50%"
            y="50%"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(-100 0)"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
          <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
      </svg>
    </div>
  )
}

export default function CountyCloud() {
  return (
    <div className="relative my-32 isolate -z-10 sm:my-48">
      <Grid />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold leading-8 text-center text-gray-900">
          We&apos;ve worked all over New Jersey
        </h2>
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="object-contain w-full col-span-2 max-h-12 lg:col-span-1">
            <p className="text-2xl font-bold text-center">Morris county</p>
          </div>
          <div className="object-contain w-full col-span-2 max-h-12 lg:col-span-1">
            <p className="text-2xl font-bold text-center">Essex county</p>
          </div>
          <div className="object-contain w-full col-span-2 max-h-12 lg:col-span-1">
            <p className="text-2xl font-bold text-center">Union county</p>
          </div>
          <div className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1">
            <p className="text-2xl font-bold text-center">Somerset county</p>
          </div>
          <div className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1">
            <p className="text-2xl font-bold text-center">Hudson County</p>
          </div>
        </div>
      </div>
    </div>
  )
}
