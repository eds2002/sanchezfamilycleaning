/* eslint-disable no-param-reassign */
import React from 'react'
import Header from '@/modules/shared/components/Header'
import '@/modules/shared/styles/globals.css'
import Footer from '@/modules/shared/components/Footer'
import { client } from '@/sanity/lib/client'
import QueryClientProvider from '@/modules/shared/lib/QueryClientProvider'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import { groq } from 'next-sanity'
import { Navigation } from '@/modules/interface'

async function fetchHeader() {
  try {
    const res = (await client.fetch(groq`*[_type == "navigation" && title == 'Main Menu'][0]{
        _id,
        title,
        "items":items[]{
          text,
          "linkData":navigationItemUrl.internalLinks[]{
            icon,
            ...reference->{
              ...select(
                _type == "service" => {
                  _type,
                  "_id": _id,
                  title,
                  "slug": "service/" + slug.current,
                  shortDesc,
                  isPopular,
                },
                _type == "page" => {
                  _type,
                  "_id": _id,
                  title,
                  "slug": slug.current,
                  "shortDesc": metadata.description,
                }
              )
            }
          },
        }
      }`)) as Navigation
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
    console.error(e)
  }
}
async function fetchFooter() {
  try {
    const res = await client.fetch(groq`*[_type == "navigation" && title == 'footer'][0]{
      _id,
      title,
      "items":items[]{
        text,
        "links":navigationItemUrl.internalLink[]->{
          _type,
          "slug":slug.current,
          ...select(
            _type == "service" => {
              "_id": _id,
              "slug": "/service/" + slug.current,
              shortDesc,
              isPopular,
            },
            _type == "page" => {
              ...,
              "_id": _id,
              "slug": slug.current,
            }
          )
        }
      }
    }`)
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
    console.error(e)
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [header, footer] = await Promise.all([fetchHeader(), fetchFooter()])
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <Header header={header} />
          <NextTopLoader color="#4f46e5" />
          {children}
          <Footer />
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  )
}
