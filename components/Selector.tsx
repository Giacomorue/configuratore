"use client"

import { Check } from 'lucide-react'
import React from 'react'

function SelectorSiNo({children, title} : {children: React.ReactNode, title: string}) {
  return (
    <div className="p-4 lg:p-0">
      <div className='text-2xl uppercase font-bold text-neutral-800'>
        {title}
      </div>
      {/* <div className='text-md font-normal text-neutral-500 mt-2'>
        {description}
      </div> */}
      <div className='mt-5 gap-5 flex xl:flex-row flex-col'>
        {children}
      </div>
      <div className='w-full h-[2px] bg-neutral-200 my-10' />
    </div>
  )
}

export {SelectorSiNo, SelectorList, ButtonList}

function SelectorList({children, title} : {children: React.ReactNode, title: string}) {
  return (
    <div className="p-4 lg:p-0">
      <div className='text-2xl uppercase font-bold text-neutral-800'>
        {title}
      </div>
      {/* <div className='text-md font-normal text-neutral-500 mt-2'>
        {description}
      </div> */}
      <div className='mt-5 flex flex-col gap-5'>
        {children}
      </div>
      <div className='w-full h-[2px] bg-neutral-200 my-10' />
    </div>
  )
}

function ButtonList({
  text, onChange, isActive
}: {
  text: string, onChange: () => void, isActive?: boolean
}) {
  return (
    <div className='w-full max-w-full flex flex-row items-center gap-2'>
      <div onClick={onChange} className={`h-9 w-9 rounded-full flex flex-row font-medium items-center justify-center border-2 cursor-pointer ${isActive? 'bg-red-600 text-white border-red-600' : 'bg-white text-neutral-600 hover:border-red-600'}`}>
        {isActive && <Check className='w-4 h-4' />}
      </div>{text}
    </div>
  )
}