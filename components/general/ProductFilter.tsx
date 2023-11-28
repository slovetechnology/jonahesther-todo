import React from 'react'
import { FaStar } from 'react-icons/fa'
import { SlArrowUp } from 'react-icons/sl'

const ProductFilter = () => {
    return (
        <div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Category</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="text-zinc-700 font-light text-sm">
                    <div className="py-1.5 px-2 ">Mobile Accessory</div>
                    <div className="py-1.5 px-2 ">Electronics</div>
                    <div className="py-1.5 px-2 ">Smartphones</div>
                    <div className="py-1.5 px-2 ">Modern tech</div>
                    <div className="py-1.5 px-2 text-red-700">See all</div>
                </div>
            </div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Brands</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="text-zinc-700 font-light text-sm">
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Samsung</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Apple</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Huawwei</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Pocco</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Lenovo</div>
                    <div className="py-1.5 px-2 text-red-700">See all</div>
                </div>
            </div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Features</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="text-zinc-700 font-light text-sm">
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Metallic</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Plastic cover</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> 8GB ram</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Super power</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-md"></div> Large memory</div>
                    <div className="py-1.5 px-2 text-red-700">See all</div>
                </div>
            </div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Price range</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="">
                            <div className="capitalize text-xs">min</div>
                            <input type="text" className="bg-white w-full p-2 rounded-md text-xs outline-none border" placeholder='0' />
                        </div>
                        <div className="">
                            <div className="capitalize text-xs">max</div>
                            <input type="text" className="bg-white w-full p-2 rounded-md text-xs outline-none border" placeholder='9999' />
                        </div>
                    </div>
                    <button className="w-full border bg-white rounded-md py-2 text-center text-red-700">Apply</button>
                </div>
            </div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Condition</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="text-zinc-700 font-light text-sm">
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-red-700 rounded-full p-1"> <div className="rounded-full bg-red-700 w-3 h-3 -mt-[0.06rem] -ml-[0.06rem]"></div> </div> Any</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-full"></div> Refurbished</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-full"></div>Brand new</div>
                    <div className="py-1.5 px-2 flex items-center gap-2"> <div className="w-5 h-5 border border-slate-400 rounded-full"></div> Old items</div>
                </div>
            </div>
            <div className="border-t w-11/12 mx-auto py-3">
                <div className="grid grid-cols-2 px-2 py-2 text-sm">
                    <div className="font-semibold">Ratings</div>
                    <button className="w-fit ml-auto text-slate-600"> <SlArrowUp /> </button>
                </div>
                <div className="text-zinc-700 font-light text-sm">
                    <div className="py-1.5 px-2 flex items-center gap-2">
                        <div className="w-5 h-5 border border-slate-400 rounded-md"></div>
                        <div className="flex items-center">
                            {new Array(5).fill(0).map((ele, index) => (
                                <FaStar key={index} className="text-orange-400" />
                            ))}
                        </div>
                    </div>
                    <div className="py-1.5 px-2 flex items-center gap-2">
                        <div className="w-5 h-5 border border-slate-400 rounded-md"></div>
                        <div className="flex items-center">
                            {new Array(4).fill(0).map((ele, index) => (
                                <FaStar key={index} className="text-orange-400" />
                            ))}
                            <FaStar className="text-slate-400" />
                        </div>
                    </div>
                    <div className="py-1.5 px-2 flex items-center gap-2">
                        <div className="w-5 h-5 border border-slate-400 rounded-md"></div>
                        <div className="flex items-center">
                            {new Array(3).fill(0).map((ele, index) => (
                                <FaStar key={index} className="text-orange-400" />
                            ))}
                            <FaStar className="text-slate-400" />
                            <FaStar className="text-slate-400" />
                        </div>
                    </div>
                    <div className="py-1.5 px-2 flex items-center gap-2">
                        <div className="w-5 h-5 border border-slate-400 rounded-md"></div>
                        <div className="flex items-center">
                            {new Array(2).fill(0).map((ele, index) => (
                                <FaStar key={index} className="text-orange-400" />
                            ))}
                            <FaStar className="text-slate-400" />
                            <FaStar className="text-slate-400" />
                            <FaStar className="text-slate-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter