import DarkFooter from '@/components/general/DarkFooter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {
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
      <DarkFooter />
    </div>
  )
}

export default layout