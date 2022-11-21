import React from 'react'
import { Button } from '..'

const ContactUs:React.FC = () => {
  return (
    <section className = "py-24">
      <div className = "px-4 mx-auto max-w-7xl">
        <div className = "flex flex-col items-center justify-center text-center">
          <span className = "text-lg font-medium text-indigo-600">Contact Us</span>
          <h2 className = "text-3xl font-medium text-center text-slate-900">Ready to start a new adventure?</h2>
          <p className = "max-w-md mt-2 text-sm text-black lg:text-lg sm:text-base">
            We are just one email away! Interested, or curious about anything? Leave us a message! We&apos;ll get back to you as soon as possible. We&apos;re hoping to hear from you.
          </p>
          <div className = "flex items-center justify-center mt-6 gap-x-3 w-max">
            <Button
            theme = 'tertiary'
            >
              <p className = "text-sm sm:text-base">Request a quote</p>
            </Button>
            <a className = "text-xs text-indigo-600 cursor-pointer sm:text-sm whitespace-nowrap">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs