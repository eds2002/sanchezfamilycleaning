import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button, Header } from './'
import heroimg from '../public/heroimage.png'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const title = 'Premium Office Cleaning in New Jersey'
  const paragraph =
    'Reduce clutter & increase productivity: Sanchez Family Cleaning is a well respected and trusted company dedicated to keeping your offices clean.'
  return (
    <section className="relative z-10 pt-48 pb-32 md:pb-48 md:pt-56" ref={ref}>
      <div className="absolute top-0 left-0 right-0 z-20 ">
        <Header logoColor="text-white" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 mx-auto text-white max-w-7xl">
        <div className="flex flex-col mr-auto">
          <AnimatePresence>
            <div className="flex flex-wrap max-w-xl text-5xl font-semibold text-left lg:text-5xl">
              {title.split(' ').map((word, index) => (
                <p key={word} className="overflow-y-hidden ">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{
                      ease: [0.45, 0, 0, 1],
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="inline-block py-1"
                  >
                    {word}
                    &nbsp;
                  </motion.span>
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-start max-w-xl mt-2 text-base text-left lg:text-lg opacity-80">
              {paragraph.split(' ').map((word, index) => (
                <p key={word} className="overflow-y-hidden ">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{
                      ease: [0.45, 0, 0, 1],
                      duration: 1,
                      delay: index * 0.035,
                    }}
                    className="inline-block "
                  >
                    {word}
                    &nbsp;
                  </motion.span>
                </p>
              ))}
            </div>
            <div className="flex w-max gap-x-3 mt-7">
              <Button
                key="requestAQuoteBtn"
                text=""
                theme="tertiary"
                ariaLabel="request a quote"
                href="/request-a-quote"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.45, 0, 0, 1],
                }}
              >
                <p className="py-1 text-sm w-max sm:text-base">Request a quote</p>
              </Button>
              {/* <Button
                key="callUsBtn"
                text=""
                theme="none"
                href="tel:+1 908-336-2757"
                className="flex items-center justify-center px-4 py-2 text-white duration-200 ease-in-out bg-transparent border rounded-full border-slate-200 hover:border-slate-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.45, 0, 0, 1],
                }}
              >
                Call Us
              </Button> */}
            </div>
          </AnimatePresence>
        </div>
      </div>
      <HeroImage />
    </section>
  )
}

function HeroImage() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 z-[5] bg-black/50" />
      <Image priority placeholder="blur" src={heroimg} fill className="object-cover" alt="image of janitor" />
    </div>
  )
}
