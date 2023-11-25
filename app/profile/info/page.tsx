import { OrderListings } from '@/components/general/Extras'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMapMarkerAlt, FaPen, FaPlus } from 'react-icons/fa'
import { SlArrowRight, SlMap } from 'react-icons/sl'

const page = () => {
    return (
        <div className='w-11/12 max-w-[78%] mx-auto pt-7 pb-14'>
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                <span className="">Home</span>
                <SlArrowRight />
                <span className="">Profile</span>
                <SlArrowRight />
                <span className="">Profile Info</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-8">
                <div className="col-span-2">
                    <div className="flex flex-col text-sm text-slate-500 font-light">
                        <Link href="/" className='py-2.5'>Personal Info</Link>
                        <Link href="/" className='py-2.5'>New orders</Link>
                        <Link href="/" className='py-2.5'>Orders history</Link>
                        <Link href="/" className='py-2.5'>My wishlist</Link>
                        <Link href="/" className='py-2.5'>Transactions</Link>
                        <Link href="/" className='py-2.5'>Profile Settings</Link>
                        <Link href="/" className='py-2.5'>Logout</Link>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="bg-white p-3">
                        <div className="font-semibold text-lg text-slate-600">Personal Info</div>
                        <div className="flex items-center gap-3 border-b pb-2">
                            <Image
                                src="/images/avatar.jpeg"
                                alt="Shipam"
                                width={60}
                                height={100}
                                className='rounded-full'
                            />
                            <div className="">
                                <div className="text-slate-600">Mr. Jackson Mike</div>
                                <div className="flex items-center gap-2">
                                    <div className="text-slate-500 text-sm">Email: myusername@gmail.com, Phone: +1234567890988 </div> <FaPen className="text-red-700" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-5">
                            <div className="border shadow-sm p-3 rounded-lg">
                                <div className="flex text-slate-500 items-center text-sm">
                                    <div className=""> <FaMapMarkerAlt /> </div>
                                    <div className=""> United States, 490 Old Capitol Trail</div>
                                </div>
                                <div className="flex items-center gap-2 text-sm mt-2">
                                    <button className="text-red-600">Edit</button>
                                    <div className="p-[0.1rem] bg-slate-500 w-fit h-fit rounded-full"></div>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </div>
                            <div className="border shadow-sm p-3 rounded-lg">
                                <div className="flex text-slate-500 items-center text-sm">
                                    <div className=""> <FaMapMarkerAlt /> </div>
                                    <div className=""> United States, 490 Old Capitol Trail</div>
                                </div>
                                <div className="flex items-center gap-2 text-sm mt-2">
                                    <button className="text-red-600">Edit</button>
                                    <div className="p-[0.1rem] bg-slate-500 w-fit h-fit rounded-full"></div>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button className="rounded-xl gap-2 text-sm py-2.5 px-4 border border-red-700 text-red-700 flex items-center">
                                <FaPlus />
                                <span>Add New Address</span>
                            </button>
                        </div>
                        <div className="mt-8">
                            <div className="font-medium">My recent orders</div>
                            {OrderListings.map((item, i) => (
                                <div className="border rounded-lg mt-3 p-4" key={i}>
                                    <div className="grid grid-cols-2">
                                        <div className="text-sm text-slate-600">
                                            <div className="flex items-center gap-1">
                                                <div className="">{item.tag}</div>
                                                <div className="p-[0.2rem] rounded-full w-fit h-fit bg-slate-500"></div>
                                                <div className={`${item.status !== 'pending' ? 'text-green-500' : 'text-red-700'} capitalize`}>{item.status}</div>
                                            </div>
                                            <div className="">{item.createdAt}</div>
                                        </div>
                                        <div className="flex items-center justify-end gap-3 text-xs">
                                            <button className="py-2 px-4 rounded-lg text-red-700 border border-red-700">Create order</button>
                                            <button className="py-2 px-4 rounded-lg text-white bg-red-700">Track order</button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 py-4 gap-3">
                                        <div className="text-xs text-slate-600 border-r-2 p-2">
                                            <div className="mb-3 text-slate-500">Contact</div>
                                            <div className="mb-1">{item.name}</div>
                                            <div className="mb-1">{item.phone}</div>
                                            <div className="mb-1">{item.email}</div>
                                        </div>
                                        <div className="text-xs text-slate-600 border-r-2 p-2">
                                            <div className="mb-3 text-slate-500">Shipping Address</div>
                                            <div className="mb-1">{item.country}</div>
                                            <div className="mb-1">{item.address1}</div>
                                            <div className="mb-1">{item.address2}</div>
                                        </div>
                                        <div className="text-xs text-slate-600 p-2">
                                            <div className="mb-3 text-slate-500">Payment</div>
                                            <div className="mb-1">{item.pay_card}</div>
                                            <div className="mb-1">{item.fee}</div>
                                            <div className="mb-1">{item.total}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                        {item.subs.map((data, index) => (
                                            <div className="flex items-center gap-2" key={index}>
                                                <div className="border rounded-lg p-1">
                                                    <Image
                                                        src={data.img}
                                                        alt="Shipam"
                                                        width={45}
                                                        height={100}
                                                    />
                                                </div>
                                                <div className="text-sm text-slate-600">
                                                    <div className="">{data.title}</div>
                                                    <div className="">{data.size}</div>
                                                    <div className="">{data.pricing}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page