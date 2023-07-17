import React from 'react'
import Link from 'next/link'
import { Button } from '..'

const GetStarted: React.FC = () => {
  return (
    <section className="relative z-20 py-24 bg-white md:py-56">
      <div className="px-4 mx-auto max-w-7xl ">
        <div className="max-w-md">
          <span className="block text-lg font-semibold text-indigo-600">Get started</span>
          <h3 className="max-w-xl text-3xl font-semibold text-slate-900">Ready to start an adventure together?</h3>
          <p className="mt-2 text-slate-900/80">
            We&apos;re always looking for new clients, interested in our company? Request for a quote and we&apos;ll get
            back to you as soon as we can. Or you can study all of our services.
          </p>
          <div className="flex items-center mt-6 gap-x-4">
            <Link href="/request-a-quote">
              <Button theme="primary">
                <p>Get a free quote</p>
              </Button>
            </Link>
            <Link href="/services">
              <p className="text-sm text-indigo-600">View services</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
