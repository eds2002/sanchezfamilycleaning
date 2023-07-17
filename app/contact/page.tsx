import ContactPage from '@/modules/contact/pages/ContactPage'
import { ContactInterface } from '@/modules/interface'
import { client } from '@/sanity/lib/client'
import React from 'react'

async function fetchContactPage(): Promise<ContactInterface> {
  const homepage = await client.fetch(`*[_type == "contactPage"][0]`)
  return homepage
}

export default async function page() {
  const data = await fetchContactPage()
  return <ContactPage data={data} />
}
