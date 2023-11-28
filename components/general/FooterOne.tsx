import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import frame1 from '../../public/images/frame1.svg'
import { AppIcons, FooterLinks, Socials } from './Extras'

const FooterOne = () => {
  return (
    <div className="bg-white py-10">
          <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
              <div className="col-span-1">
                <Image
                  src={frame1}
                  alt="Shipam"
                  width={150}
                  height={100}
                />
                <div className="text-slate-500 text-sm my-7">Best information about the company goes here but now lorem ipsum is</div>
                <div className="flex items-center flex-row gap-2">
                  {Socials.map((item, i) => (
                    <Link key={i} href="/">
                      <Image
                        src={item}
                        alt="Shipam"
                        width={30}
                        height={100}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                  {FooterLinks.map((item, i) => (
                    <div className="" key={i}>
                      <div className="font-semibold text-sm mb-3">{item.title}</div>
                      <div className="flex flex-col">
                        {item.subs.map((link, index) => (
                          <Link href="/" key={index} className='text-xs text-slate-500 py-2'>{link.title}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-1">
                <div className="mb-5">Get app</div>
                <div className="flex flex-col gap-2">
                  {AppIcons.map((item, i) => (
                    <Link href="/" key={i}>
                      <Image
                        src={item}
                        alt="Shipam"
                        width={100}
                        height={100}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FooterOne