
import React from 'react'
import bgimg from '../public/images/header.jpg'
import bgimg4 from '../public/images/imgs1.jpg'
import bgimg7 from '../public/images/imgs27.jpeg'
import bgimg2 from '../public/images/image92.png'
import bgimg3 from '../public/images/imgs11.png'
import bgimg5 from '../public/images/snake.svg'
import FooterOne from '@/components/general/FooterOne'
import { SlArrowUp, SlEnvolope, SlMagnifier } from 'react-icons/sl'
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { AppIcons, CountryLists, FooterLinks, ProductList1, ProductList2, ProductList3, ProductList4, ProductList5, Secondection, Socials, TopLists } from '@/components/general/Extras'


const page = () => {
  const FixStyle = (id: number) => {
    if (id === 1) return `mt-20`
    if (id === 2) return `-mt-14`
    if (id === 3) return `mt-14`
    if (id === 4) return `mt-28`
    if (id === 5) return `mt-20`
  }
  const FixIcon = (id: number) => {
    if (id === 1) return `w-fit h-fit absolute -top-5 -left-3 bg-red-700 p-3 rounded-full`
    if (id === 2) return `w-fit h-fit bg-red-700 p-3 absolute top-32 left-0 rounded-full`
    if (id === 3) return `w-fit h-fit bg-red-700 p-3 absolute top-32 left-0 rounded-full`
    if (id === 4) return `w-fit h-fit bg-red-700 p-3 absolute top-32 right-0 rounded-full`
    if (id === 5) return `w-fit h-fit bg-red-700 p-3 absolute top-10 left-0 rounded-full`
  }

  const FixTextPlacing = (id: number) => {
    if (id === 1) return `-mt-16`
    if (id === 2) return `ml-14`
    if (id === 3) return `ml-14`
    if (id === 4) return `text-right mr-14`
    if (id === 5) return `-mt-10`
  }
  return (
    <div>
      <div className="">
        {/* first section */}
        <div
          className='banner'
          style={{ backgroundImage: `url(${bgimg.src})` }}
        >
          <div className="bannerdiv w-full h-full">
            <div className="">
              <div className="">
                <div className="flex items-center justify-between w-10/12 mx-auto py-2">
                  <div className="">
                    <Link href="/" className="">
                      <Image
                        src="/images/logo.svg"
                        alt="Shipam"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-6">
                      <Link href="/auth/signin" className='text-sm text-white'>Sign In</Link>
                      <Link href="/auth/signup" className='text-sm text-white bg-red-700 py-1.5 px-7 rounded-full'>Sign Up</Link>
                      <button>
                        <Image 
                        src="/images/heart.svg"
                        alt="Shipam"
                        width={22}
                        height={100}
                        />
                      </button>
                      <button>
                        <Image 
                        src="/images/cart.svg"
                        alt="Shipam"
                        width={22}
                        height={100}
                        />
                      </button>
                      <button>
                        <Image 
                        src="/images/user.svg"
                        alt="Shipam"
                        width={22}
                        height={100}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-center justify-between w-10/12 mx-auto">
                  <div className="flex flex-row items-center gap-5 text-sm text-white">
                    <button className="flex items-center gap-1"> <Image src="/images/bars.svg" alt="Shipam" width={15} height={100} /> All categories</button>
                    <button className="">Hot Offers</button>
                    <button className="">Gift Boxes</button>
                    <button className="">White Paper</button>
                    <button className="">Menu Item</button>
                  </div>
                  <div className="flex flex-row items-center gap-5 text-sm text-white">
                    <button className="">Sell on Shipam</button>
                    <button className="">Become a Service Provider</button>
                    <button className="">Help Center</button>
                    <button className="">Get the app</button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-full flex items-center justify-center flex-col">
              <h1 className='text-white font-semibold text-5xl text-center'>Welcome to Shipam: your Gateway <br /> to Versatile E-Commerce</h1>
              <div className="bg-slate-100/40 p-6 mt-10 rounded-full w-11/12 max-w-[46rem]">
                <div className="bg-white flex items-center justify-between p-1.5 rounded-full">
                  <input type="text" className='p-2 rounded-full outline-none border-none' placeholder='What are you looking for?' />
                  <button className="bg-red-600 text-red-100 text-xl rounded-full p-3"> <SlMagnifier /> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="p-5 bg-[#343434]">
          <div className="w-10/12 mx-auto py-8">
            <div className="lg:gap-10 grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col gap-5 col-span-2">
                <h2 className='text-slate-100 text-5xl leading-[3.5rem] w-[95%] font-semibold'>We are not just an e-commerce platform, we are your gateway to a world of possilibities</h2>
                <Link href="/" className='bg-red-700 text-red-100 py-3 rounded-full w-[13rem] text-center text-xl'>Join Now</Link>
              </div>
              <div className="w-fit ml-auto col-span-1">
                <Image
                  src="/images/img2.png"
                  alt="Shipam"
                  width={350}
                  height={100}
                />
              </div>
            </div>
            <div className="">
              <div className="text-slate-100 text-2xl font-semibold my-4">Three Types of Users, One Unified Platform</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {TopLists.map(((item, index) => (
                  <div className="bg-[#4b4c4d] p-4 rounded-lg" key={index}>
                    <h3 className='text-lg w-11/12 font-semibold text-slate-200 mb-3'>{item.title}</h3>
                    <ul>
                      {item.subs.map((ele, i) => (
                        <ul className="flex gap-1 mb-2 text-slate-300 text-xs" key={i}> <div className="p-1 bg-slate-200 w-fit h-fit rounded-full mt-2"></div> {ele}</ul>
                      ))}
                    </ul>
                  </div>
                )))}
              </div>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="">
          <div className="w-10/12 mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full flex flex-col justify-center lg:w-10/12 gap-8">
                <h2 className='font-semibold text-5xl'>What you can do with Shipam</h2>
                <p>Shipam simplifies your selling process, ensuring a seamless shopping experience for buyers. Our platform makes bulk ordering a breeze and facilitates effective communication between users, fostering transparency and smooth negotiations.</p>
              </div>
              <div className="">
                <div className="grid grid-cols-2 gap-5">
                  {Secondection.map((item, i) => (
                    <div className=" bg-white rounded-xl px-5 py-6 shadow-2xl" key={i}>
                      <div className="bg-red-100 rounded-full p-3 w-fit">
                        <Image
                          src={item.img}
                          alt="Shipam"
                          width={33}
                          height={100}
                        />
                      </div>
                      <div className="font-semibold text-2xl my-3">{item.title}</div>
                      <div className="text-sm">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth section */}
        <div className="py-8 bg-white">
          <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 mb-10">
              <div className="col-span-1">
                <div className="w-full p-0 h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bgimg2.src})` }}
                >
                  <div className="px-4 pt-10">
                    <div className="font-semibold mb-6">Home and outdoor</div>
                    <Link href="/" className='bg-white py-2.5 px-3 rounded-lg text-xs font-semibold shadow-md'>Source now</Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {ProductList1.map((item, i) => (
                    <div className="relative border p-3 h-[8rem]" key={i}>
                      {item.status && <div className="absolute top-0 right-0 bg-red-700 text-white capitalize py-1 px-3 text-[0.6rem]">new</div>}
                      <div className="mb-4">{item.title}</div>
                      <div className="text-xs text-slate-500 capitalize">{item.tag}</div>
                      <div className="text-xs text-slate-500">{item.pricing}</div>
                      <div className="absolute bottom-2 right-2">
                        <Image
                          src={item.img}
                          alt="Shipam"
                          width={70}
                          height={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 mb-10">
              <div className="col-span-1">
                <div className="w-full p-0 h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${bgimg3.src})` }}
                >
                  <div className="px-4 pt-10">
                    <div className="font-semibold mb-12 w-3/4">Consumer electornics and gadgets</div>
                    <Link href="/" className='bg-white py-2.5 px-3 rounded-lg text-xs font-semibold shadow-md'>Source now</Link>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {ProductList2.map((item, i) => (
                    <div className="relative border p-3 h-[9rem]" key={i}>
                      {item.status && <div className="absolute top-0 right-0 bg-red-700 text-white capitalize py-1 px-3 text-[0.6rem]">new</div>}
                      <div className="mb-4">{item.title}</div>
                      <div className="text-xs text-slate-500 capitalize">{item.tag}</div>
                      <div className="text-xs text-slate-500">{item.pricing}</div>
                      <div className="absolute bottom-2 right-2">
                        <Image
                          src={item.img}
                          alt="Shipam"
                          width={70}
                          height={100}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 font-semibold text-3xl">Explore all our product offerings <div className="flex items-center mt-2 text-base"><FaPlay className="text-red-700" /><FaPlay className="text-red-700" /></div> </div>
          </div>
        </div>
        {/* fifth section */}
        <div className=" py-6">
          <div className="w-10/12 mx-auto">
            <div className="font-semibold text-[2rem]">Recommended items</div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
              {ProductList3.map((item, i) => (
                <div className="bg-white relative px-4 py-9" key={i}>
                  {item.discount && <div className="absolute top-24 right-0 bg-red-700 text-white text-[0.53rem] py-1 px-3">{item.discount}</div>}
                  <div className="w-full relative mx-auto h-[8rem]">
                    <Image
                      src={item.img}
                      alt="Shipam"
                      fill
                      objectFit='contain'
                    />
                  </div>
                  <div className="text-xs my-3 font-medium">{item.pricing}</div>
                  <div className="text-xs text-slate-400">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sixth section */}
        <div className="grid grid-cols-1 lg:grid-cols-2  py-14">
          <div className=" w-10/12 ml-auto flex flex-col justify-center gap-7">
            <h2 className="text-5xl font-semibold w-4/6">What Else We Offer</h2>
            <p className='lg:w-4/6 text-sm'>Join Shipam for streamlined, transparent and thriving commerce - redefining how business is conducted.</p>
          </div>
          <div className="bg-white shadow-xl rounded-bl-3xl rounded-tl-3xl">
            <div className="grid grid-cols-2 w-10/12 py-10 pl-5 gap-6">
              {ProductList4.map((item, i) => (
                <div className="flex items-center gap-3" key={i}>
                  <div className="bg-red-100 w-fit rounded-lg p-3">
                    <Image
                      src={item.img}
                      alt="Shipam"
                      width={45}
                      height={50}
                    />
                  </div>
                  <div className="font-semibold text-lg text-slate-700">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* seventh section */}
        <div className="h-[40rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimg4.src})` }}
        >
          <div className="bg-black/50 h-full py-10 flex items-center justify-center flex-col">
            <div className="w-10/12 mx-auto">
              <div className="text-white text-center text-5xl font-semibold mb-20">We're committed  to making your e-commerce experience as versatile and efficient as possible.</div>
              <div className="bg-white/30 rounded-2xl flex flex-col gap-10 items-center justify-center p-16 w-10/12 mx-auto">
                <div className="font-semibold text-3xl text-white">Discover the Future of Commerce with Shipam</div>
                <div className="text-white text-center">At Shipam, we've redefined the e-commerce landscape, creating a dynamic marketplace that adapts to the diverse needs of businesses, vendors, and consumers. More than just an online shopping platform, Shipam is a complete ecosystem, facilitating B2B (Business-to-Business), P2P (Peer-to-Peer), and B2C (Business-to-Consumer) interactions in one unified space.</div>
              </div>
            </div>
          </div>
        </div>
        {/* seventh section */}
        <div className="my-20 relative">
          <div className="text-5xl w-10/12 mx-auto text-center font-semibold">How to Use Shipam</div>
          <div className="w-10/12 mx-auto relative">
            <div className="bg-contain bg-no-repeat absolute top-0 left-0 h-[150rem] w-full mx-auto right-0"
              style={{ backgroundImage: `url(${bgimg5.src})` }}
            ></div>
            {ProductList5.map((item, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 pb-20 ${FixStyle(i + 1)}`}>
                <div className={`${(i + 1) % 2 === 0 ? 'order-2' : 'order-1'} flex flex-col justify-center w-4/5 mx-auto relative`}>
                  <div className={`${FixIcon(i + 1)}`}>
                    <Image
                      src={item.icon}
                      alt="Shipam"
                      width={25}
                      height={100}
                    />
                  </div>
                  <div className={` ${FixTextPlacing(i + 1)}`}>
                    <div className={`text-red-700 font-semibold text-3xl mb-5`}>{item.title}</div>
                    <div className="text-base">{item.text}</div>
                  </div>
                </div>
                <div className={`${(i + 1) % 2 !== 0 ? 'order-2' : 'order-1'} py-10`}>
                  <div className={`relative w-[33rem] ${(i + 1) % 2 !== 0 ? 'ml-auto' : 'mr-auto'} h-[20rem]`}>
                    <Image
                      src={item.img}
                      alt="Shipam"
                      fill
                      objectFit='cover'
                      className='rounded-3xl brightness-90'
                    />
                    <div className="w-full h-full bg-white/20 absolute top-0 left-0 rounded-3xl"></div>
                    <div className="w-11/12 mx-auto right-0 h-5/6 my-auto bottom-0 bg-black/30 absolute top-0 left-0 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* eight section */}
        <div className="w-10/12 mx-auto h-[40rem] mb-20 bg-cover bg-center rounded-[2rem]"
          style={{ backgroundImage: `url(${bgimg7.src})` }}
        >
          <div className="w-full h-full bg-black/40 rounded-[2rem] flex items-center flex-col justify-end pb-14">
            <div className="font-semibold text-white text-[3rem]">Join Shipam's vibrant community today</div>
            <div className="text-white text-center w-2/4 mb-10 text-lg">We're more than an e-commerce platform; we're a robust ecosystem that empowers businesses, fuels entrepreneurship, and caters to all your consumer needs.</div>
            <Link href="/" className='py-3 w-[18rem] bg-white/20 rounded-full text-white text-center border border-white'>Start with Shipam</Link>
          </div>
        </div>
        {/* ninth section */}
        <div className="bg-[#343434] pb-14">
          <div className="w-10/12 mx-auto">
            <div className="text-slate-100 text-3xl font-semibold pt-8 mb-10">Find suppliers by country or region</div>
            <div className="grid grid-cols-4 lg:grid-cols-8 w-10/12 mx-auto">
              {CountryLists.map((item, i) => (
                <div className="flex items-center flex-col" key={i}>
                  <div className="relative rounded-full p-3 w-fit h-10 bg-slate-100/40">
                    <Image
                      src={item.img}
                      alt="Shipam"
                      height={20}
                      width={20}
                      objectFit='cover'
                    />
                  </div>
                  <div className="text-white font-light mt-2 text-xs">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* tenth section */}
        <div className="w-10/12 mx-auto py-14">
          <div className="font-semibold text-center">Subscribe on our newsletter</div>
          <div className="text-center font-light text-slate-500 mt-3">Get daily news on upcoming offers from many suppliers all over the world</div>
          <div className="w-fit rounded-full mx-auto max-w-[53rem] mt-10 flex items-center bg-white">
            <SlEnvolope className="ml-3 text-slate-500" />
            <input type="text" className='border-none py-2 px-2 bg-transparent outline-none' placeholder='Email' />
            <button className="bg-red-700 text-red-100 rounded-full py-3.5 px-8 capitalize text-sm">sbscribe</button>
          </div>
        </div>
        {/* eleventh section */}
        <FooterOne />
        {/* twelve section */}
        <div className="py-8">
          <div className="w-10/12 mx-auto text-slate-500 text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="">
                <div className="">© 2023 Shipam. </div>
              </div>
              <div className="w-fit ml-auto">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/c8.png"
                    alt="Shipam"
                    width={20}
                    height={100}
                  />
                  <div className="">English</div>
                  <SlArrowUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
