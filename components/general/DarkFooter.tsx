import Image from 'next/image'
import React from 'react'
import { SlArrowUp } from 'react-icons/sl'

const DarkFooter = () => {
  return (
   
    <div className="py-8 bg-[#343434] text-slate-200">
    <div className="w-10/12 mx-auto  text-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="">© 2023 Shipam. </div>
        </div>
        <div className="w-fit ml-auto">
          <div className="flex items-center gap-2">
            <Image 
            src="/images/c8.png"
            alt="Shipam"
            width={20}
            height={100}
            />
            <div className="">English</div>
            <SlArrowUp />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DarkFooter