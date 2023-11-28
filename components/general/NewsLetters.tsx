import React from 'react'
import { SlEnvolope } from 'react-icons/sl'

const NewsLetters = () => {
    return (
        <div className="bg-slate-100">
            <div className="w-10/12 mx-auto py-14">
                <div className="font-semibold text-center">Subscribe on our newsletter</div>
                <div className="text-center font-light text-slate-500 mt-3">Get daily news on upcoming offers from many suppliers all over the world</div>
                <div className="w-fit rounded-full mx-auto max-w-[53rem] mt-10 flex items-center bg-white">
                    <SlEnvolope className="ml-3 text-slate-500" />
                    <input type="text" className='border-none py-2 px-2 bg-transparent outline-none' placeholder='Email' />
                    <button className="bg-red-700 text-red-100 rounded-full py-3.5 px-8 capitalize text-sm">sbscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetters