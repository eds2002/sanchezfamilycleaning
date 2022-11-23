import { CheckBadgeIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../Elements/Button'


const QuoteHero:React.FC = () => {
  const [successModal,setSuccessModal] = useState(false)

  const inputs = [
    {
      name:"firstName",
      type:"text",
      placeHolder:"John",
      label:"First name",
      required:true
    },
    {
      name:"lastName",
      type:"text",
      placeHolder:"Doe",
      label:"Last name",
      required:true
    },
    {
      name:"workEmail",
      type:"email",
      placeHolder:"doe@example.com",
      label:"Work email",
      required:true
    },
    {
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

  const handleSubmit= async (e:React.FormEvent<CustomForm>)=>{
    e.preventDefault()
    setSuccessModal(!successModal)
    const target = e.currentTarget.elements

    const userInformation = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      workEmail: target.workEmail.value,
      companySize:target.companySize.value,
      userSelectedPackage:target.package.value
    }

    const domain = process.env.NEXT_PUBLIC_NODE_ENV === "development" ? 'http://localhost:3000' : 'https://sanchezfamilycleaning.com'

    const sendDetails = await fetch(`${domain}/api/sendMail`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userInformation),
      }
    ).then((data)=>  data.json().catch((error)=> error))

    if(sendDetails.code === 200) {
      setSuccessModal(true)
      const sendConfirmation = await fetch(`${domain}/api/sendConfirmation`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userInformation),
      }).then((data)=> data.json().catch((error)=>error))
      target.firstName.value = ""
      target.lastName.value = ""
      target.workEmail.value = ""
    }
  }

  return (
    <>
      <section className = "py-16 lg:py-48">
        <div className = "flex flex-col gap-6 px-4 mx-auto max-w-7xl lg:flex-row">
          <div className = "flex items-center justify-start flex-1 sm:justify-center ">
            <div className = "p-4 font-medium text-slate-900">
              <h1 className = "max-w-sm text-5xl sm:max-w-xl">
                Contact our team for a quote
              </h1>
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
                <Input {...input} key = {input.name}/>
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
      <SuccessModal 
        successModal={successModal}
        setSuccessModal={setSuccessModal}
      />
    </>
  )
}

const SuccessModal:React.FC<iSuccessModalProps> = ({successModal,setSuccessModal}) =>{
  useEffect(()=>{
    if(successModal){
      document.body.style.overflow = 'hidden'

    }else{
      document.body.style.overflow = ''
    }
  },[successModal])


  return(
    <div className = {`fixed inset-0 z-10 flex items-center justify-center ${successModal ? 'bg-black/25 backdrop-blur-lg pointer-events-auto': 'bg-black/0 backdrop-blur-0 pointer-events-none'} p-4`}>
      <div className = {`${successModal ? 'opacity-100' : 'opacity-0'} max-w-md p-6 text-center bg-white w-max h-max rounded-3xl`}>
        <h6 className = "text-2xl font-medium sm:text-3xl">To new beginnings</h6>
        <p className = "my-2 text-sm text-black/70 sm:text-base">We hope to be working with you soon, all you have to do is, sit back, relax, and wait for our message. Thank you!</p>
        <div className = "flex items-center justify-center mt-8">
          <Button
          theme = "tertiary"
          fullWidth={true}
          onClick = {()=>setSuccessModal(false)}
          >
            <p className = "text-sm">Understood</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
const Input:React.FC<iInputProps> = (props) =>{
  const {type,label,name,values, ...inputProps} = props
  const [packageValue,setPackageValue] = useState('')
  const [focused,setFocused] = useState(false)
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
          <div className = "relative flex items-center w-full">
            <select 
              className = "w-full px-3 py-2 mb-auto rounded-md outline-none appearance-none select-none bg-neutral-200/50 h-max"
              name = {name}
            >
              {values?.map((value:string)=>(
                <>
                  <option  selected={value.toLowerCase() === packageValue ? true : false}>{value}</option>
                </>
              ))}
            </select>
            <ChevronDownIcon className = "absolute w-4 h-4 right-3"/>
          </div>
        </div>
      :
        <div className = "flex flex-col items-start gap-1 sm:gap-3 sm:items-center sm:flex-row">
          <p className = "w-full max-w-[125px] font-medium">{label}</p>
          <input 
            name = {name}
            className = {`w-full px-3 py-2 rounded-md outline-none select-none bg-neutral-200/50 ${focused ? ('invalid:bg-red-200/50') : ('')}`}
            type = {type}
            {...inputProps}
            onBlur={()=>setFocused(true)}
          />
        </div>
      }
    </>
  )
}

export default QuoteHero


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

interface iSuccessModalProps{
  successModal:boolean;
  setSuccessModal:(val:boolean) => void;
}


interface iInputProps{
  type:string;
  label:string;
  name:string;
  values?:Array<string>;
  placeHolder?:string;
  required?:boolean;
}

