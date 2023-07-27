import React from 'react'
import Image from 'next/image'
import { Navigation } from '@/modules/interface'

export default function Footer({ footer }: { footer: Navigation }) {
  if (!footer) return null

  const formattedFooter = footer?.items?.map((item) => ({
    text: item.text,
    linkData: item?.linkData?.map((link) => ({
      name: link.title,
      href: link.slug,
    })),
  }))

  return (
    <footer className="bg-green-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="relative w-40 h-20 -top-8 -left-8">
              <Image
                priority
                src="/sanchezCleaningLogoWhite.svg"
                alt="Company name"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="relative text-sm leading-6 -top-10 text-green-50">
              {footer.mission ?? 'Making the world a better place through constructing elegant hierarchies.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {formattedFooter?.map((item, idx) => (
                <React.Fragment key={item.text}>
                  {idx < 2 && (
                    <div className={`${idx === 1 ? 'mt-10 md:mt-0' : ''}`}>
                      <h3 className="text-sm font-semibold leading-6 text-green-400">{item.text}</h3>
                      <ul className="mt-6 space-y-4">
                        {item.linkData.map((supportLink) => (
                          <li key={supportLink.name}>
                            <a href={supportLink.href} className="text-sm leading-6 text-green-50 hover:text-green-300">
                              {supportLink.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {formattedFooter?.map((item, idx) => (
                <React.Fragment key={item.text}>
                  {idx >= 2 && (
                    <div className={`${idx === 3 ? 'mt-10 md:mt-0' : ''}`}>
                      <h3 className="text-sm font-semibold leading-6 text-green-400">{item.text}</h3>
                      <ul className="mt-6 space-y-4">
                        {item.linkData.map((supportLink) => (
                          <li key={supportLink.name}>
                            <a href={supportLink.href} className="text-sm leading-6 text-green-50 hover:text-green-300">
                              {supportLink.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-green-50/10 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-green-50">
            &copy; {new Date().getFullYear()} Sanchez Family Cleaning, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
