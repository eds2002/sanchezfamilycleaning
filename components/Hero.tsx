import React from 'react'
import {Button} from './'
import {EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/solid'

const Hero:React.FC = () => {
  return (
    <section className = "py-48">
      <div className = "flex items-center justify-start h-full px-4 mx-auto max-w-7xl">
        <div className = "flex flex-col items-start">
          <h1 className = "max-w-lg text-5xl font-semibold lg:text-7xl">
            Commercial Cleaning Based in New Jersey
          </h1>
          <p className = "max-w-sm mt-2 text-base lg:text-lg">
            Reduce clutter & increase productivity: Sanchez Family Cleaning is a well respected and trusted company dedicated to keeping your offices clean. 
          </p>
          <div className = "flex w-max gap-x-3 mt-7">
            <Button
              text = ''
              theme = 'primary'
            >
              <p className = "text-sm w-max sm:text-base">Request a quote</p>
            </Button>
            <Button
              text = ''
              theme = 'outline'
            >
              <p className = "text-sm w-max sm:text-base">Call Us</p>
            </Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero