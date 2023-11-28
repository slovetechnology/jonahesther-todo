import DarkFooter from '@/components/general/DarkFooter'
import { ProductList6 } from '@/components/general/Extras'
import FooterOne from '@/components/general/FooterOne'
import NewsLetters from '@/components/general/NewsLetters'
import ProductFilter from '@/components/general/ProductFilter'
import SearchHeader from '@/components/general/SearchHeader'
import SubMenu from '@/components/general/SubMenu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { ImMenu } from 'react-icons/im'
import { SlArrowLeft, SlArrowRight, SlHeart } from 'react-icons/sl'

const page = () => {
  return (
    <div>
      <SearchHeader />
      <div className="w-11/12 mx-auto max-w-[78%]">
        <div className="">
          <SubMenu color="text-black" />
          <div className="flex items-center gap-2 text-xs text-slate-500 py-6">
            <Link href="/">Home</Link>
            <SlArrowRight />
            <Link href="/">Computer and tech</Link>
            <SlArrowRight />
            <Link href="/">Phones</Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
            <div className="col-span-2">
              <ProductFilter />
            </div>
            <div className="col-span-5">
              <div className="mb-5 bg-white p-3 border rounded-lg">
                <div className="grid grid-cols-6">
                  <div className="col-span-2 text-sm pt-2 font-light">
                    <div className="">12,911 items in <span className="font-semibold">Phones</span> </div>
                  </div>
                  <div className="col-span-4 flex items-center justify-end gap-3">
                    <div className="flex items-center gap-1 mr-3">
                      <div className="w-5 h-5 rounded-md bg-red-700 text-sm text-red-100 flex items-center justify-center"> <FaCheck /> </div>
                      <div className="font-light text-sm">Verified only</div>
                    </div>
                    <div className="">
                      <select className="py-1.5 px-2 text-xs rounded-sm w-32 border">
                        <option value="">Featured</option>
                      </select>
                    </div>
                    <div className="text-xl flex items-center gap-[0.1rem]">
                      <div className="border px-3 py-[0.3rem] rounded-tl-sm rounded-bl-sm"><MdDashboard /> </div>
                      <div className="border px-3 py-[0.3rem] bg-slate-200 rounded-tr-sm rounded-br-sm"><ImMenu /> </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                {ProductList6.map((item, i) => (
                  <div className="bg-white p-5 rounded-lg border mb-3" key={i}>
                    <div className="grid grid-cols-6">
                      <div className="col-span-2">
                        <div className="relative w-full h-full">
                        <Image 
                        src={item.img}
                        alt="Shipam"
                        fill
                        className='object-contain'
                        />
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="grid grid-cols-3">
                          <div className="font-semibold col-span-2 text-sm">{item.title}</div>
                          <div className="w-fit ml-auto border rounded-lg p-2 text-xs h-fit text-red-700"> <SlHeart /> </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="font-semibold">{item.currentpricing}</div>
                          {item.oldpricing && <del className="text-slate-500">{item.oldpricing}</del> }
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center">
                            {new Array(4).fill(0).map((ele, index) => (
                              <FaStar key={index} className="text-orange-400" />
                            ))}
                            <FaStar className="text-slate-400" />
                            <div className="text-orange-400">{item.rating}</div>
                          </div>
                          <div className="p-[0.2rem] bg-slate-500 rounded-full"></div>
                          <div className="text-slate-500">{item.order}</div>
                          <div className="p-[0.2rem] bg-slate-500 rounded-full"></div>
                          <div className="text-green-500">{item.tag}</div>
                        </div>
                        <div className="text-slate-500 text-sm my-3">{item.text}</div>
                        <div className=""> <Link href="/" className='text-red-700 text-sm'>View details</Link> </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-end gap-4 mb-10">
                  <div className="">
                    <select className="bg-white rounded-lg text-sm p-2 border outline-none">
                      <option value="">Show 10</option>
                    </select>
                  </div>
                  <div className="bg-white rounded-lg flex item-center">
                    <div className="px-2 py-1.5 flex items-center justify-center border-r text-sm"> <SlArrowLeft /> </div>
                    {new Array(3).fill(0).map((item, i)=> (
                      <div className={`px-2 py-1.5 flex items-center justify-center border-r ${i + 1 === 1 ? 'bg-slate-200' : ''}`} key={i}>{i + 1}</div>
                    ))}
                    <div className="px-2 py-1.5 flex items-center justify-center"> <SlArrowRight /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetters />
      <FooterOne />
      <DarkFooter />
    </div>
  )
}

export default page