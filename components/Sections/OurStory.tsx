import Image from 'next/image'
import React from 'react'

const OurStory:React.FC = () => {
  return (
    <section className = "h-full px-4 py-20 text-white md:py-32 bg-slate-900">
      <div className = "relative flex flex-col gap-10 px-4 mx-auto md:flex-row max-w-7xl">
        <div className = "md:flex-1">
          <span className = "block text-lg font-semibold text-cyan-400">Our history</span>
          <h3 className = "max-w-xl text-3xl font-semibold text-white">A little story of our start</h3>
          <div className = "">
            <div className = "mt-4">
              <h5 className = "relative font-semibold">
                Time travel 20 years ago
                <span className = "absolute top-0 block w-px h-full -left-4 bg-cyan-400"></span>
              </h5>
              <p className = "max-w-md mt-1 opacity-80">
                Our story began 20 years ago, cleaning offices for a living. A couple years later, with the experience and knowledge we&apos;ve built, we decided to branch off and start our own company.
                A company where we can provide high quality services for business that want to grow with us.
              </p>
            </div>
            <div className = "mt-8">
              <h5 className = "relative font-semibold">
                Fast forward today
                <span className = "absolute top-0 block w-px h-full -left-4 bg-cyan-400"></span>
              </h5>
              <p className = "max-w-md mt-1 opacity-80">
                Fast forward today, we are proud and happy to have loyal clients all around Morris County. We are grateful to even be able 
                to watch and contribute to our clients&apos; business growth.
              </p>
            </div>
          </div>
        </div>
        <div className = "relative w-full h-[350px] md:flex-1 md:h-auto ">
          <Image src = "/education.svg" layout='fill' alt = "Image of a book." objectFit='contain'/>
        </div>
        <div className = "absolute left-0 w-[0.5px] h-full top-0 bottom-0 bg-white/20"/>
      </div>
    </section>
  )
}

export default OurStory