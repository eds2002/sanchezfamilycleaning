import React from 'react'
import Header from '@/modules/shared/components/Header'
import '../../styles/globals.css'
import Footer from '@/modules/shared/components/Footer'
import { client } from '@/sanity/lib/client'
import QueryClientProvider from '@/modules/shared/lib/QueryClientProvider'
import NextTopLoader from 'nextjs-toploader'
import { Service } from '@/modules/interface'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  async function getServices(): Promise<Pick<Service, 'title' | 'isPopular' | 'shortDesc' | 'link'>[]> {
    const servies = await client.fetch(`*[_type == "services"]{
      _id,
      title,
      isPopular,
      "image": image.asset->url,
      shortDesc,
      longDesc,
      "link": "/services/" + slug.current
    }`)
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
