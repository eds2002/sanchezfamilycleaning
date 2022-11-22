import React from 'react'
import { ClockIcon, CheckBadgeIcon,DocumentIcon,WrenchIcon,AcademicCapIcon} from '@heroicons/react/24/solid'
import {Button} from '../'

const Motives:React.FC = () => {

  const details = [
    {
      icon:AcademicCapIcon,
      title:'Trained Staff',
      paragraph:'All of our staff are background checked and trained before cleaning your building.'
    },
    {
      icon:WrenchIcon,
      title:'We provide the materials',
      paragraph:'We provide all the tools we need so you can sit back and let us do the rest.'
    },
    {
      icon:CheckBadgeIcon,
      title:'Satisfaction Guaranteed',
      paragraph:'We always go above and beyond when starting a job.'
    },
    {
      icon:DocumentIcon,
      title:'Fully Insured',
      paragraph:'Accidents happen, we are fully insured if any accidents happen.'
    },
    {
      icon:ClockIcon,
      title:'Over 20 years of experience',
      paragraph:'Over the past 2 decades we have dedicated our craft to providing the best possible service out there.'
    },
  ]

  return (
    <section className = "py-24 bg-slate-900">
      <div className = "px-4 mx-auto max-w-7xl">
        <div className = "flex flex-col items-start">
          <div>
            <span className = "text-lg font-medium text-cyan-400">Why Us</span>
            <h2 className = "max-w-xl text-3xl font-medium text-left text-white ">We provide customizable, premium cleaning services for your business</h2>
          </div>
          <div className = "grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 place-items-start">
            {details.map((detail)=>(
              <div className = "relative flex flex-col items-start justify-start h-full pl-4 border-l-[0.5px] border-white/20" key = {detail.title}>
                  <detail.icon className = "w-12 h-12 text-cyan-400"/>
                <h4 className = "mt-4 text-sm font-medium text-white sm:text-base">
                  {detail.title}
                  <span className = "absolute -left-0.5 w-0.5 h-5 bg-cyan-400"/>
                </h4>
                <p className = "mt-2 text-sm text-left text-white/70 sm:text-base">{detail.paragraph}</p>
              </div>  
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motives