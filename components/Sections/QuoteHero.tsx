import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../Elements/Button'

const QuoteHero:React.FC = () => {
  const inputs = [
    {
      id:1,
      name:"firstName",
      type:"text",
      placeHolder:"John",
      label:"First name"
    },
    {
      id:2,
      name:"lastName",
      type:"text",
      placeHolder:"Doe",
      label:"Last name"
    },
    {
      id:3,
      name:"workEmail",
      type:"email",
      placeHolder:"doe@example.com",
      label:"Work email"
    },
    {
      id:4,
      name:"companySize",
      type:"dropdown",
      values:[
        "1-25",
        "25-50",
        "50-75",
        "75-100",
      ],
      label:"Company size"
    },
    {
      id:4,
      name:"package",
      type:"dropdown",
      values:[
        "Basic",
        "Deep",
        "Custom",
      ],
      label:"Package"
    },
  ]

  interface CustomElements extends HTMLFormControlsCollection{
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    workEmail:HTMLInputElement;
    companySize:HTMLInputElement;
    package:HTMLInputElement;
  }

  interface CustomForm extends HTMLFormElement{
    readonly elements:CustomElements
  }

  const handleSubmit=(e:React.FormEvent<CustomForm>)=>{
    e.preventDefault()
    const target = e.currentTarget.elements
    const firstName = target.firstName.value 
    const lastName = target.lastName.value 
    const workEmail = target.workEmail.value 
    const companySize = target.companySize.value 
    const userSelectedPackage = target.package.value 
  }




  return (
    <section className = "py-16 lg:py-48">
      <div className = "flex flex-col gap-6 px-4 mx-auto max-w-7xl lg:flex-row">
        <div className = "flex items-center justify-start flex-1 sm:justify-center ">
          <div className = "p-4 font-medium text-slate-900">
            <h1 className = "max-w-sm text-5xl sm:max-w-xl">Contact our team for a quote</h1>
            <p className = "mt-6 text-sm font-medium sm:text-base">Ready to start? With us, you&apos;re getting:</p>
            <ul className = "mt-2 font-normal list-none text-slate-900/70">
              <li className = "flex items-center my-1 text-sm sm:text-base gap-x-3">
                <CheckBadgeIcon className = "w-5 h-5 text-indigo-600"/>
                <p>Professionalism</p>
              </li>
              <li className = "flex items-center my-1 text-sm sm:text-base gap-x-3">
              <CheckBadgeIcon className = "w-5 h-5 text-indigo-600"/>
                <p>Excellence</p>
              </li>
              <li className = "flex items-center my-1 text-sm sm:text-base gap-x-3">
                <CheckBadgeIcon className = "w-5 h-5 text-indigo-600"/>
                <p>Timeliness</p>
              </li>
            </ul>
          </div>
        </div>
        <div className = "flex items-center justify-center flex-1">
          <form 
            className = "flex flex-col w-full h-full max-w-xl gap-5 p-4 shadow-lg lg:p-6 g:max-w-md bg-neutral-50 rounded-3xl"
            onSubmit={(e:any)=>handleSubmit(e)}
          >
            {inputs.map((input)=>(
              <Input {...input} key = {input.id}/>
            ))}
            <div className = "flex items-center justify-end">
              <Button
              theme = 'tertiary'
              >
                <p className = "text-sm">Get my quote</p>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}



const Input:React.FC<any> = (props) =>{
  const {type,label,name,values, ...inputProps} = props
  const [packageValue,setPackageValue] = useState('')
  const router = useRouter()
  useEffect(()=>{
    if(Object.keys(router.query).length != 0){
      setPackageValue(router.query.quote as string)
    }
  },[router.query])
  return(
    <>
      {type === "dropdown" ? 
        <div className = "flex flex-col items-start gap-1 sm:gap-3 sm:items-center sm:flex-row">
          <p className = "w-full max-w-xs sm:max-w-[125px] font-medium flex flex-col items-start">
            {label}
            {name === "companySize" && (
              <span className = "mt-2 text-xs font-light opacity-70">How many employees does your business have?</span>
            )}
          </p>
          <select 
            className = "w-full px-2 py-2 mb-auto rounded-md outline-none select-none bg-neutral-200/50 h-max"
            name = {name}
          >
            {values.map((value:string)=>(
              <>
                <option selected={value.toLowerCase() === packageValue ? true : false}>{value}</option>
              </>
            ))}
          </select>
        </div>
      :
        <div className = "flex flex-col items-start gap-1 sm:gap-3 sm:items-center sm:flex-row">
          <p className = "w-full max-w-[125px] font-medium">{label}</p>
          <input 
            name = {name}
            className = "w-full px-3 py-2 rounded-md outline-none select-none bg-neutral-200/50"
            type = {type}
            {...inputProps}
          />
        </div>
      }
    </>
  )
}

export default QuoteHero