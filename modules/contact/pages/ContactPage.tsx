'use client'

import React from 'react'
import ContactHero from '@/modules/contact/components/ContactHero'
import { ContactInterface } from '@/modules/interface'

export default function ContactPage({ data }: { data: ContactInterface }) {
  return <ContactHero data={data} />
}
