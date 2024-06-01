import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoTelegram } from "react-icons/bi";
import ReuseButton from './ReuseComponent/ReuseButton';

const Header = () => {
  return (
      <>
        <div className=' bg-[#1D231F] py-3 '>
            <div className='max-w-8xl mx-auto  '>
            <div className='flex justify-between items-center '>
                <div>
                    <Image 
                      src="/assets/images/nabinTreks.jpg" 
                      alt="mainLogo"
                       width={70}
                       height={70}
                       className='rounded-full'
                       />
                </div>
                <div>
                    <ul className='flex'>
                        <li className='- ml-7 cursor-pointer'>
                            <div>
                                <Link href="" className='text-gray-100'>Home</Link>
                            </div>
                        </li>
                        <li className=' ml-7 cursor-pointer'>
                            <div>
                              <Link href="" className='text-gray-100'>Tours</Link>
                            </div>
                        </li>
                        <li className=' ml-7 cursor-pointer'>
                            <div>
                               <Link href="" className='text-gray-100'>Destination</Link>
                            </div>
                        </li>
                        <li className=' ml-7 cursor-pointer'>
                            <div>
                               <Link href="" className='text-gray-100'>Blog</Link> 
                            </div>
                        </li>
                        <li className=' ml-7 cursor-pointer'>
                            <div>
                                 <Link href="" className='text-gray-100'>Pages</Link>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <div>
                   <ReuseButton name="Contact Now" />
                </div>
            </div>
            
            </div>
          
        </div>
      </>
  )
}

export default Header