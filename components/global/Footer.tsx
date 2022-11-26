import React from 'react'
import { MapPinIcon,ChatBubbleLeftIcon } from '@heroicons/react/24/solid'

const Footer:React.FC = () => {
  return (
    <section className = "py-10 bg-gray-100">
      <div className = "px-4 mx-auto text-center max-w-7xl">
        <p className = "text-3xl font-semibold">S.F.C</p>
        <div className='flex items-center justify-center mt-4 text-sm gap-x-3'>
          <MapPinIcon className = "w-4 h-4"/>
          <p>Morris County, NJ</p>
        </div>
        <div className='flex items-center justify-center text-sm gap-x-3'>
          <ChatBubbleLeftIcon className = "w-4 h-4"/>
          <p>English and Spanish</p>
        </div>
        <p className = "mt-10 text-sm text-neutral-400">© 2022 Sanchez Family Cleaning</p>
      </div>
    </section>

  )
}

export default Footer