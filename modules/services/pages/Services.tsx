import React from 'react'
import AllServicesHeader from '../components/AllServicesHeader'
import ServiceTestimonials from '../components/ServiceTestimonials'
import CallToAction from '../components/CallToAction'

export default function Services() {
  return (
    <div className="mt-24">
      <AllServicesHeader />
      <ServiceTestimonials />
      <CallToAction />
    </div>
  )
}
