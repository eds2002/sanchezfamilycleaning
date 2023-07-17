import React from 'react'
import Header from '@/modules/shared/components/Header'
import '../styles/globals.css'
import Footer from '@/modules/shared/components/Footer'
import { client } from '@/sanity/lib/client'
import { ServiceInterface } from '@/modules/interface'
import QueryClientProvider from '@/modules/shared/lib/QueryClientProvider'
import NextTopLoader from 'nextjs-toploader'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  async function getServices(): Promise<Pick<ServiceInterface, 'title' | 'isPopular' | 'shortDesc' | 'slug'>[]> {
    const servies = await client.fetch(`*[_type == "services"]{ title, shortDesc, slug, isPopular }`)
    return servies
  }
  const services = await getServices()
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <Header services={services} />
          <NextTopLoader color="#4f46e5" />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  )
}
