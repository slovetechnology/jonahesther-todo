import Image from 'next/image'
import React from 'react'
import { SlArrowUp } from 'react-icons/sl'
import bgimg from "../../../public/images/signin.svg"

const page = () => {
  return (
    <div>
        <div className="">
            <div className="w-10/12 mx-auto h-[90vh] py-10">
                <div className="grid grid-cols-1 lg:grid-cols-6">
                    <div className="lg:col-span-4">
                        <div className="w-auto h-[68vh] rounded-3xl bg-contain bg-no-repeat bg-center"
                        style={{backgroundImage: `url(${bgimg.src})`}}
                        ></div>
                    </div>
                    <div className="lg:col-span-2 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-xl shadow-xl w-full">
                            <div className="font-semibold text-xl mb-7">Sign In</div>
                            <form>
                                <div className="mb-5">
                                    <div className="text-sm">Username</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="mb-5">
                                    <div className="text-sm">Password</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <button className="bg-red-700 text-red-100 py-2 w-full rounded-lg">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page