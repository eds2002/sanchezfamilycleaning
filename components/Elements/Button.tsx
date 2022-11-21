import React from 'react'

interface Props{
  text?:string;
  onClick?:()=> void;
  children?:React.ReactNode;
  theme:string;
  fullWidth?:boolean;
}

const Button:React.FC<Props> = ({text,onClick,children,theme,fullWidth}) => {
  return (
    <button
      onClick={onClick}
      className=
      {`
        ${theme === "primary" && ('bg-slate-900 rounded-full text-white px-4 py-2 hover:bg-slate-700 ease-in-out duration-200')}
        ${theme === "secondary" && ('bg-cyan-400 rounded-full px-4 py-2 hover:bg-cyan-500 ease-in-out duration-200 text-black')}
        ${theme === "tertiary" && ('bg-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-500 ease-in-out duration-200 text-white')}
        ${theme === "translucent" && ('bg-slate-900 backdrop-blur-sm rounded-full px-4 py-1 hover:bg-neutral-400/70 ease-in-out duration-200 text-white')}
        ${theme === "outline" && ('bg-transparent border border-slate-200 rounded-full text-black px-4 py-2 hover:border-slate-500 ease-in-out duration-200')}
        ${fullWidth ? 'w-full' : 'w-max' }
        rounded-full relative overflow-hidden group 
      `}
    >
      {children}
    </button>
  )
}

export default Button