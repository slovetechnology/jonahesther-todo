import Image from 'next/image'
import React from 'react'
import { SlMenu } from 'react-icons/sl'

const SubMenu = ({color}: {color: string}) => {
    return (
            <div className={`flex items-center justify-between pt-6 ${color}`}>
                <div className="flex flex-row items-center gap-5 text-xs">
                    <button className="flex items-center gap-1"> <SlMenu /> All categories</button>
                    <button className="">Hot Offers</button>
                    <button className="">Gift Boxes</button>
                    <button className="">White Paper</button>
                    <button className="">Menu Item</button>
                </div>
                <div className="flex flex-row items-center gap-5 text-xs">
                    <button className="">Sell on Shipam</button>
                    <button className="">Become a Service Provider</button>
                    <button className="">Help Center</button>
                    <button className="">Get the app</button>
                </div>
            </div>
    )
}

export default SubMenu