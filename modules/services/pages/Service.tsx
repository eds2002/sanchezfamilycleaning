import React from 'react'
import ServiceHero from '../components/ServiceHero'
import ServiceBenefits from '../components/ServiceBenefits'
import FAQ from '../components/FAQ'
import ServiceCTA from '../components/ServiceCTA'
import { ServiceInterface } from '@/modules/interface'
import MixImageGrid from '../components/MixImageGrid'

export default function Service({ serviceData }: { serviceData: ServiceInterface }) {
  return (
    <>
      <ServiceHero
        serviceName={serviceData.title}
        serviceDesc={serviceData.longDesc}
        serviceImage={serviceData.image}
        isPopular={serviceData.isPopular}
      />
      <ServiceBenefits data={serviceData.features} />
      <MixImageGrid data={serviceData.gallery} />
      <FAQ data={serviceData.questions} />
      <ServiceCTA data={serviceData.callToAction} />
    </>
  )
}
