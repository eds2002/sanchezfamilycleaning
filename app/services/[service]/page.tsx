import Service from '@/modules/services/pages/Service'
import React from 'react'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { ServiceInterface } from '@/modules/interface'

async function getService(service: string): Promise<ServiceInterface> {
  const data = await client.fetch(`*[_type=="services" && slug.current == '${service}'][0]`)
  if (!data) {
    notFound()
  }
  return data
}

export default async function ServicePage({
  params,
}: {
  params: {
    service: string
  }
}) {
  const { service } = params
  const serviceData = await getService(service)

  return <Service serviceData={serviceData} />
}
