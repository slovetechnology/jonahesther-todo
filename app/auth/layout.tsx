import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlArrowUp } from 'react-icons/sl'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
    <div className="bg-white py-4">
        <div className="w-10/12 mx-auto">
            <div className="flex items-center justify-between">
                <div className="">
                    <Link href="/">
                        <Image 
                        src="/images/frame1.svg"
                        alt="Shipam"
                        width={150}
                        height={100}
                        />
                    </Link>
                </div>
                <div className="">
                    <div className="flex items-center flex-row gap-3">
                        <Link href="/auth/signin" className='border border-red-600 rounded-lg py-2 px-4 text-sm text-red-700'>Sign in</Link>
                        <Link href="/auth/signup" className='bg-red-700 text-white text-sm rounded-lg py-2 px-4'>Join Shipam</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {children}

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
    </div>
  )
}

export default layout