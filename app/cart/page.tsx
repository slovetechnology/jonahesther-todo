import DarkFooter from '@/components/general/DarkFooter'
import { CartListOne } from '@/components/general/Extras'
import FooterOne from '@/components/general/FooterOne'
import SearchHeader from '@/components/general/SearchHeader'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <SearchHeader showSearch={false} />
      <div className="">
        <div className="w-11/12 mx-auto max-w-[78%]">
          <div className="my-6 font-semibold text-xl">My cart (3)</div>
          <div className="grid grid-cols-1 lg:grid-cols-7">
            <div className="col-span-5">
              <div className="bg-white rounded-lg p-3">
                {CartListOne.map((item, i) => (
                  <div className="" key={i}>
                    <div className="flex gap-2">
                      <div className="">
                        <Image
                          src={item.img}
                          alt="Shipam"
                          width={40}
                          height={100}
                        />
                      </div>
                      <div className="w-full">
                        <div className="grid grid-cols-2">
                          <div className="font-semibold">{item.title}</div>
                          <div className="font-semibold w-fit ml-auto">{item.pricing}</div>
                        </div>
                        <div className="">
                          <div className="">{item.size}</div>
                          <div className="">{item.seller}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
      <FooterOne />
      <DarkFooter />
    </div>
  )
}

export default page