import React from 'react'

const AboutUsHero = () => {
  return (
    <section className = "relative z-10 py-14 sm:py-24 lg:py-40 bg-neutral-100">
      <div className = "flex flex-col max-w-5xl px-4 mx-auto text-center">
        <span className = "block text-lg font-medium text-indigo-600">Sanchez Family</span>
        <h1 className = "z-10 mt-1 text-5xl font-semibold text-slate-900 md:text-6xl">
          Providing professional janitorial services for the last <span className = "underline">20 years</span>.
        </h1>
      </div>
      <svg className = "absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path></svg>
    </section>
  )
}

export default AboutUsHero