import React, { useEffect, useState } from 'react'
import { Button } from '..'
import {Bars3Icon, ChevronRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

const Header:React.FC = () => {
  const [openMobileNav,setOpenMobileNav] = useState(false)
  const navItems = [
    'About Us',
    'Services',
    'Contact Us',
  ]


  useEffect(()=>{
    if(openMobileNav){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = ''
    }
  },[openMobileNav])

  return (
    <>
      <section className = "py-6">
        <div className = "flex items-center justify-between px-4 mx-auto gap-x-6 max-w-7xl">
          <h1 className = "text-3xl font-semibold">S.F.C</h1>
          <div className = "items-center hidden list-none gap-x-3 md:flex">
            {navItems.map((nav:string)=>(
              <li className = "px-2 py-1 text-sm rounded-md cursor-pointer hover:bg-slate-100">
                {nav}
              </li>
            ))}
          </div>
          <div className = "hidden md:block">
            <Button
            theme = 'primary'
            >
              <p className = "text-sm">Request a quote</p>
            </Button>
          </div>
          <div className = "block cursor-pointer md:hidden">
            <Button
            theme = 'primary'
            onClick = {()=>setOpenMobileNav(!openMobileNav)}
            >
              <Bars3Icon className = "w-5 h-5"/>
            </Button>
          </div>
        </div>
      </section>
      <MobileNav
        openMobileNav={openMobileNav}
        setOpenMobileNav={setOpenMobileNav}
      />
    </>
  )
}

const MobileNav:React.FC<{openMobileNav:boolean,setOpenMobileNav:(openMobileNav:boolean)=>void;}> = ({openMobileNav,setOpenMobileNav}) => {
  const mobileNavItems = [
    {
      title:'Services',
      subLinks:[
        'Starter cleaning',
        'Commercial Cleaning',
        'Build your own',
      ]
    },
    {
      title:'About Us',
    },
    {
      title:"Contact Us"
    }
  ]
  return(
    <div className = {`fixed inset-0 z-10 p-4 bg-black/25 backdrop-blur-3xl ${openMobileNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition duration-500 ease-in-out md:hidden`}>
      <div className = 'relative w-full h-full overflow-hidden bg-gray-100 shadow-xl rounded-xl'>
        <div className = "flex items-start justify-between p-4">
          <p className = "text-3xl font-semibold">S.F.C</p>
          <div 
            className = "p-1 text-white rounded-full cursor-pointer bg-slate-900 hover:bg-slate-800"
            onClick = {()=>setOpenMobileNav(false)}
          >
            <XMarkIcon className = "w-4 h-4"/></div>
        </div>
        <div className = "list-none divide-y mt-7 divide-black/5">
          {mobileNavItems.map((navItem)=>(
            <li className = {navItem?.subLinks && ('bg-neutral-200/30')}>
              <p className = {`p-4 text-lg font-medium  ${navItem?.subLinks ? ('border-b cursor-default') : ('hover:opacity-70 cursor-pointer')}`}>{navItem?.title}</p>
              <ul className = "divide-y divide-black/5s">  
                {navItem?.subLinks?.map((sub)=>(
                  <li className = "flex items-center justify-between px-8 py-4 text-lg font-medium cursor-pointer hover:opacity-70">
                    {sub}
                    <ChevronRightIcon className = "w-5 h-5"/>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center py-6 bg-neutral-200/50 rounded-tl-xl rounded-tr-xl'>
          <Button
          theme = 'primary'
          >
            <p className = "text-sm">Request a quote</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header