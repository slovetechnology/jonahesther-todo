import DarkFooter from '@/components/general/DarkFooter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="bg-white">
                <div className="w-10/12 flex items-center justify-between mx-auto py-2">
                    <div className="">
                        <Link href="/profile/info"
                            className=''> <Image src="/images/frame1.svg" alt="Shipam" width={120} height={100} /> </Link>
                    </div>
                    <div className="w-full max-w-lg">
                        <div className="bg-red-700 rounded-full p-[0.1rem] text-sm w-full flex items-center">
                            <div className="w-full">
                                <input type="text" className="w-full bg-white py-[0.4rem] rounded-tl-full rounded-bl-full px-3" placeholder='Search' />
                            </div>
                            <select className="bg-white pt-[0.4rem] pb-[0.45rem]">
                                <option value="">All Category</option>
                            </select>
                            <button className="bg-red-700 text-white py-1.5 rounded-tr-full rounded-br-full px-5">search</button>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-5">
                            <button className="flex items-center justify-center flex-col text-slate-500 gap-2">
                                <Image src="/images/v5.svg" alt="Shipam" width={17} height={100} />
                                <div className="text-xs">Profile</div>
                            </button>
                            <button className="flex items-center justify-center flex-col text-slate-500 gap-2">
                                <Image src="/images/symbol.png" alt="Shipam" width={17} height={100} />
                                <div className="text-xs">message</div>
                            </button>
                            <button className="flex items-center justify-center flex-col text-slate-500 gap-2">
                                <Image src="/images/v3.svg" alt="Shipam" width={17} height={100} />
                                <div className="text-xs">saved</div>
                            </button>
                            <button className="flex items-center justify-center flex-col text-slate-500 gap-2">
                                <Image src="/images/v1.svg" alt="Shipam" width={17} height={100} />
                                <div className="text-xs">cart</div>
                            </button>
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