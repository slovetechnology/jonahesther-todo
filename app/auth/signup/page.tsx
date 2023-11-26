
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="">
                <div className="w-10/12 mx-auto py-10">
                    <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-lg mx-auto">
                        <div className="font-semibold text-xl mb-7">Sign Up</div>
                        <form>
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                <div className="">
                                    <div className="text-sm">First name</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="">
                                    <div className="text-sm">Last name</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="text-sm">Email</div>
                                <input type="text" className='w-full rounded-lg  bg-input p-2' />
                            </div>
                            <div className="text-sm">Phone</div>
                            <div className="mb-5 grid grid-cols-7 gap-4">
                                <div className="col-span-2">
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="col-span-5">
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                <div className="">
                                    <div className="text-sm">Account Number</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="">
                                    <div className="text-sm">Bank</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="text-sm">Account Name</div>
                                <input type="text" className='w-full rounded-lg  bg-input p-2' />
                            </div>
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                <div className="">
                                    <div className="text-sm">Bank Swift code</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="">
                                    <div className="text-sm">Bank Iban</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-2 gap-3">
                                <div className="">
                                    <div className="text-sm">NIN Number</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                                <div className="">
                                    <div className="text-sm">BVN</div>
                                    <input type="text" className='w-full rounded-lg  bg-input p-2' />
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className="text-sm">Tax ID</div>
                                <input type="text" className='w-full rounded-lg  bg-input p-2' />
                            </div>
                            <div className="mb-5">
                                <div className="text-sm">Create Password</div>
                                <input type="text" placeholder='at least 6 characters' className='w-full rounded-lg  bg-input p-2' />
                            </div>
                            <div className="mb-5">
                                <div className="text-sm">Repeat Password</div>
                                <input type="text" className='w-full rounded-lg  bg-input p-2' />
                            </div>
                            <button className="bg-red-700 text-red-100 py-2 w-full rounded-lg">Sign Up</button>
                            <div className="mt-5">
                                <label>
                                    <input type="checkbox" />
                                    <span className='ml-3'>I agree with Terms and Conditions</span>
                                </label>
                            </div>
                            <div className="border-t mt-3 pt-3">
                                <div className="text-center text-slate-500 text-sm">Already have an account? <Link href="/auth/signin" className='text-red-700 cursor-pointer'>Sign In</Link> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page