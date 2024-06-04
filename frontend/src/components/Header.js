import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoTelegram } from "react-icons/bi";
import ReuseButton from './ReuseComponent/ReuseButton';
import { FaAngleDown } from "react-icons/fa6";

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
                        <li className='- ml-7 cursor-pointer mainHeader'>
                            <div className=''>
                                <div className='flex items-center'>
                                  <Link href="" className='text-gray-100'>Home</Link>
                                   <FaAngleDown className='ml-2 text-gray-200' />
                                </div>
                                <div>
                                    <ul className='dropList'>
                                        <li className='hiddenDropli'><Link href="">Home 1</Link></li>
                                        <li className='hiddenDropli'><Link href="">Home 2</Link></li>
                                        <li className='hiddenDropli'><Link href="">Home 3</Link></li>
                                    </ul>
                                </div>
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