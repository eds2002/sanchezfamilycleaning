/* eslint-disable no-param-reassign */
import React from 'react'
import Header from '@/modules/shared/components/Header'
import '@/modules/shared/styles/globals.css'
import Footer from '@/modules/shared/components/Footer'
import { client } from '@/sanity/lib/client'
import QueryClientProvider from '@/modules/shared/lib/QueryClientProvider'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import { Navigation } from '@/modules/interface'
import navigationGROQ from '@/modules/shared/lib/queries/mainMenuGROQ'
import footerMenuGROQ from '@/modules/shared/lib/queries/footerMenuGROQ'

async function fetchHeader() {
  try {
    const res = (await client.fetch(navigationGROQ)) as Navigation
    // TODO: remove this when we have a better way to handle this
    res.items = res.items.map((item) => {
      item.linkData = item.linkData.map((link) => ({
        ...link,
        slug: link.slug === 'home' ? '/' : `/${link.slug}`,
      }))
      return item
    })
    return res
  } catch (e) {
    throw new Error(`Failed to fetch header. ERROR=>${e}`)
  }
}
async function fetchFooter() {
  try {
    const res = (await client.fetch(footerMenuGROQ)) as Navigation
    // TODO: remove this when we have a better way to handle this
    res.items = res?.items?.map((item) => {
      item.linkData = item?.linkData?.map((link) => ({
        ...link,
        slug: link.slug === 'home' ? '/' : `/${link.slug}`,
      }))
      return item
    })

    return res
  } catch (e) {
    throw new Error(`Failed to fetch footer. ERROR=>${e}`)
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [header, footer] = await Promise.all([fetchHeader(), fetchFooter()])
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="transparent" />
      <body>
        <QueryClientProvider>
          <Header header={header} />
          <NextTopLoader color="#16a34a" showSpinner={false} />
          {children}
          <Footer footer={footer} />
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
