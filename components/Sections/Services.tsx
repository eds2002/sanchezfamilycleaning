import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import {Button} from '../'
import React from 'react'
import Link from 'next/link'

const Services:React.FC = () => {

  const servicesArr = [
    {
      title:"Custom",
      desc:"Customize your package.",
      handle:"/request-a-quote?quote=custom",
      includes:[
        'Bathroom Cleaning',
        'Office cleaning',
        'Kitchen Cleaning',
        'Waste Removal',
        'Dust Removal',
        'Floor & Carpet Cleaning',
        'Windows & Mirrors',
        'Waste Removal',
      ]
    },
    {
      title:"Deep",
      desc:"The deep clean package.",
      handle:"/request-a-quote?quote=deep",
      includes:[
        'Carpets & Floors',
        'Windows & Mirrors',
        'Bathroom cleaning',
        'Kitchen Cleaning',
        'Office cleaning',
        'Waste Removal',
      ]
    },
    {
      title:"Basic",
      desc:"Most business choose this.",
      handle:"/request-a-quote?quote=basic",
      includes:[
        'Bathroom Cleaning',
        'Office cleaning',
        'Kitchen Cleaning',
        'Waste Removal'
      ]
    },
  ]


  return (
    <section className = "py-24 bg-gray-100">
      <div className = "px-4 mx-auto max-w-7xl">
        <div className = "flex flex-col items-center justify-center text-center">
          <span className = "text-lg font-medium text-indigo-600">Services</span>
          <h2 className = "text-3xl font-medium text-center text-slate-900">Interested?</h2>
          <p className = "max-w-md mt-2 text-sm text-black lg:text-lg sm:text-base">
            Explore our services and request for a quote. You can also <span className = "text-indigo-600 cursor-pointer hover:text-indigo-700">contact us</span> if you need more information.
          </p>
        </div>
        <div className = "flex flex-col-reverse items-center justify-center gap-6 mt-10 gap-x-6 md:flex-row md:items-start">
          {servicesArr.map((service,index)=>(
            <ServiceCard 
              service = {service}
              index = {index}
              key = {service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


interface iServiceCardProps{
  service:{
    desc:string;
    includes:Array<string>;
    title:string;
    handle:string;
  }
  index:number
}


const ServiceCard:React.FC<iServiceCardProps> = ({service,index}) =>{
  return(
    <div 
      className = {`shadow-lg shadow-gray-900/5 w-full md:max-w-sm p-12 h-max  rounded-3xl ${index === 2 ? 'bg-slate-900 text-white' : 'bg-white'}`}
      key = {service.title}
    >
      <p className = "text-2xl font-medium">{service.title}</p>
      <p className = "text-sm sm:text-base">{service.desc}</p>
      <div className = "w-full mt-4 mb-4">
        <Link href = {service.handle}>
          <Button
          theme = {`${index === 2 ? 'secondary' : 'primary'}`}
          fullWidth={true}
          >
            <p className = "text-sm sm:text-base">Request a quote</p>
          </Button>
        </Link>
      </div>
      <ul className = "list-none divide-y divide-gray-600 divide-opacity-40">
        {service.includes.map((feature)=>(
          <li className = "flex items-center py-2 text-sm gap-x-3" key = {feature}>
            <CheckBadgeIcon className = {`
              w-4 h-4
              ${index === 2 ? 'text-cyan-400' : 'text-slate-900'}
            `}/>
            <p className = {`
            ${index === 2 ? 'text-white/70' : 'text-black/70'}
            `}>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services