import React, { useEffect, useState } from 'react'
import { Button } from '..'
import {Bars3Icon, ChevronRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const Header:React.FC = () => {
  const [openMobileNav,setOpenMobileNav] = useState(false)
  const navItems = [
    {
      title:'Services',
      handle:"services"
    },
    {
      title:'About Us',
      handle:"about-us"
    },
    {
      title:"Contact Us",
      handle:"contact-us"
    }
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
          <Link href = "/">
            <h1 className = "text-3xl font-semibold transition duration-200 hover:opacity-70">S.F.C</h1>
          </Link>
          <ul className = "items-center hidden list-none gap-x-3 md:flex">
            {navItems.map((nav)=>(
              <li className = "px-2 py-1 text-sm rounded-md cursor-pointer hover:bg-slate-100">
                <Link href = {nav.handle} key = {nav.title}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className = "hidden md:block">
            <Link href = "/request-a-quote">
              <Button
              theme = 'primary'
              ariaLabel='menu'
              >
                <p className = "text-sm">Request a quote</p>
              </Button>
            </Link>
          </div>
          <div className = "block cursor-pointer md:hidden">
            <Button
            theme = 'primary'
            onClick = {()=>setOpenMobileNav(!openMobileNav)}
            ariaLabel="menu"
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
      handle:"services"
    },
    {
      title:'About Us',
      handle:"about-us"
    },
    {
      title:"Contact Us",
      handle:"contact-us"
    }
  ]
  return(
    <div className = {`fixed inset-0 z-20 p-4 bg-black/25 backdrop-blur-3xl ${openMobileNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition duration-500 ease-in-out md:hidden`}>
      <div className = 'relative w-full h-full overflow-hidden bg-gray-100 shadow-xl rounded-xl'>
        <div className = "flex items-start justify-between p-4">
          <Link href = "/">
            <p className = "text-3xl font-semibold transition duration-200 hover:opacity-70">S.F.C</p>
          </Link>
          <div 
            className = "p-1 text-white rounded-full cursor-pointer bg-slate-900 hover:bg-slate-800"
            onClick = {()=>setOpenMobileNav(false)}
          >
            <XMarkIcon className = "w-4 h-4"/></div>
        </div>
        <ul className = "list-none divide-y mt-7 divide-black/10">
          {mobileNavItems.map((navItem:{title?:string;subLinks?:Array<string>;handle:string;})=>(
            <li className = {navItem?.subLinks && ('bg-neutral-200/30')} key = {navItem.title}>
              <Link href = {navItem.handle} key = {navItem.title}>
                <p className = {`p-4 text-2xl font-medium  ${navItem?.subLinks ? ('border-b cursor-default') : ('hover:opacity-70 cursor-pointer')}`}>{navItem?.title}</p>
                <ul className = "divide-y divide-black/5s">  
                  {navItem?.subLinks?.map((sub)=>(
                    <li className = "flex items-center justify-between px-8 py-4 text-lg font-medium cursor-pointer hover:opacity-70" key = {sub}>
                      {sub}
                      <ChevronRightIcon className = "w-5 h-5"/>
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
        <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center py-6 bg-neutral-200/50 rounded-tl-xl rounded-tr-xl'>
          <Link href = "/request-a-quote">
            <Button
            theme = 'primary'
            ariaLabel='request a quote'
            >
              <p className = "text-sm">Request a quote</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header