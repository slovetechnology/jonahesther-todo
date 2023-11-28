import DarkFooter from '@/components/general/DarkFooter'
import { CartCardsList, CartListOne, CartListTwo, cartListThree } from '@/components/general/Extras'
import FooterOne from '@/components/general/FooterOne'
import SearchHeader from '@/components/general/SearchHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <SearchHeader showSearch={false} />
      <div className="">
        <div className="w-11/12 mx-auto max-w-[78%]">
          <div className="my-6 font-semibold text-xl">My cart (3)</div>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            <div className="col-span-5">
              <div className="bg-white rounded-lg border p-3">
                {CartListOne.map((item, i) => (
                  <div className="py-3 border-b" key={i}>
                    <div className="flex gap-2">
                      <div className="border py-2 px-3 rounded-lg h-fit">
                        <Image
                          src={item.img}
                          alt="Shipam"
                          width={50}
                          height={100}
                        />
                      </div>
                      <div className="w-full">
                        <div className="grid grid-cols-2 mb-2">
                          <div className="font-medium">{item.title}</div>
                          <div className="font-medium w-fit ml-auto">{item.pricing}</div>
                        </div>
                        <div className="text-sm text-slate-600 font-light">
                          <div className="grid grid-cols-2">
                            <div className="">
                              <div className="">{item.size}</div>
                              <div className="">{item.seller}</div>
                            </div>
                            <div className="w-32 ml-auto">
                              <select className='py-2 px-3 w-full border rounded-md'>
                                <option value="">Qyt: 3</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-2 text-sm">
                            <button className="border rounded-lg text-red-700 py-2 px-3">Remove</button>
                            <button className="border rounded-lg text-slate-500 py-2 px-3">Save for later</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 py-3 w-11/12 mx-auto">
                  <div className=""> <button className="bg-red-700 flex items-center text-sm gap-3 rounded-lg text-white py-2 px-4"> <FaArrowLeft /> Back to shop </button> </div>
                  <div className="w-fit ml-auto"> <button className="text-red-700 py-3 px-5 rounded-lg border text-sm">Remove all</button> </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 py-10">
                {CartListTwo.map((item, i) => (
                  <div className="flex gap-3" key={i}>
                    <div className="rounded-full p-3 bg-zinc-200 text-slate-400 text-2xl h-fit self-start"> <item.icon /> </div>
                    <div className="">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-3 border rounded-lg">
                <div className="font-medium mb-4 text-xl">Save for later</div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {cartListThree.map((item, i) => (
                    <div className="" key={i}>
                      <div className="border py-3 h-fit rounded-lg">
                        <div className="px-3 relative h-32 flex items-center justify-center">
                          <Image
                            src={item.img}
                            alt="Shipam"
                            className='object-contain'
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex justify-center gap-3 flex-col py-5 px-3">
                        <div className="font-semibold">{item.pricing}</div>
                        <div className="text-slate-500 text-xs">{item.text}</div>
                        <button className="rounded-lg py-2 px-5 border text-red-700 text-sm flex items-center gap-2"> <FaShoppingCart /> Move to cart</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-10 bg-[#B90404] overflow-hidden rounded-2xl">
                <div className="grid grid-cols-5">
                  <div className="flex gap-1 col-span-3 justify-center flex-col w-11/12 mx-auto py-5">
                    <div className="font-semibold text-xl text-red-50">Super discount on more than 100 USD</div>
                    <div className="text-red-200 text-sm">Have you ever finally just write dummy info</div>
                  </div>
                  <div className="bg-[#820A0A] cartafter relative col-span-2 rounded-tr-xl rounded-br-xl">
                    <div className="w-fit ml-auto flex  h-full mr-10 gap-1 justify-center flex-col">
                      <Link href="/" className='py-2.5 px-5 text-sm rounded-lg bg-slate-400 text-white'>Shop now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-white p-4 rounded-lg border">
                <div className="mb-2">Have a coupon?</div>
                <div className="rounded-xl border flex items-center">
                  <input type="text" placeholder='Add coupon' className="py-2 px-3 bg-transparent outline-none border-none text-sm w-full" />
                  <button className="text-red-700 border-l py-2 px-3 text-center">Apply</button>
                </div>
              </div>
              <div className="mt-3">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="grid grid-cols-2 text-sm py-2.5 font-light text-slate-600">
                    <div className="">Sub total:</div>
                    <div className="text-right">$1403.97</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm py-2.5 font-light text-slate-600">
                    <div className="">Discount:</div>
                    <div className="text-right text-red-700">- $60.00</div>
                  </div>
                  <div className="grid grid-cols-2 text-sm py-2.5 font-light text-slate-600 border-b">
                    <div className="">Tax:</div>
                    <div className="text-right text-green-500">+ $14.00</div>
                  </div>
                  <div className="grid grid-cols-2 py-3">
                    <div className="">Total</div>
                    <div className="text-right text-xl font-semibold">$1357.97</div>
                  </div>
                  <div className="">
                    <button className="bg-red-700 py-3 w-full px-5 text-red-100 rounded-lg">Checkout</button>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-4 mb-2">
                    {CartCardsList.map((item, i) => (
                      <div className="border rounded-lg px-2 py-1 h-fit" key={i}>
                        <div className="relative w-6 h-6 mx-auto">
                          <Image
                            src={item}
                            alt="Shipam"
                            fill 
                            className='object-contain'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
      <DarkFooter />
    </div>
  )
}

export default page