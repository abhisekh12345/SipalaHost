import Image from 'next/image'
import React from 'react'
import LinkServices from '../ReuseComponent/LinkServices'
import { BiLogoTelegram } from "react-icons/bi";


const FooterSecondPart = () => {
  return (
    <>
        <div className=''>
             <div className='grid grid-cols-3'>
              <div className=' px-3 py-3 '>
                <div>
                     <h1 className="text-xl text-gray-200 promptSnaserif font-semibold">
                       About
                    </h1>
                </div>
                <div>
                     <p className="text-sm text-gray-200 promptSnaserif tracking-wider w-[350px] leading-8 mt-9">
                     To take trivial example which us ever undertakes laborious physica exercise except obsome
                    </p>
                </div>
                <div className='flex items-center mt-6'>
                  <div>
                    <Image
                      src="/assets/images/nabinTreks.jpg" 
                      alt="mainLogo"
                       width={70}
                       height={70}
                       className='rounded-full'
                       />
                  </div>
                   <div className='ml-5'>
                      <h1 className='text-3xl font-bold text-[#63AB45]'>Nabin Terks</h1>
                   </div>
                </div>
              </div>

              <div className=' px-3 py-3'>
                      <h1 className="text-xl text-gray-200 promptSnaserif font-semibold">
                        Services
                        </h1>
                <div className='flex'>
                 <div className='w-1/2 '>
                   <div>
                        <div>
                           <LinkServices linkser=" Caravan Soler Tent" />
                           <LinkServices linkser="Family Tent Camping" />
                           <LinkServices linkser="Classic Tent Camping" />
                           <LinkServices linkser="Wild Tent Camping" />
                           <LinkServices linkser="Small Cabin Wood" />

                        </div>
                   </div>
                 </div>
                 <div className='w-1/2 '>
                    <div>
                       <LinkServices linkser="Need a Career ?" />
                       <LinkServices linkser="Latest News & Blog" />
                       <LinkServices linkser="Core Features" />
                       <LinkServices linkser="Meet Our teams" />
                    </div>
                 </div>
                </div>
              </div>
              <div className='px-3 py-3'>
                  <h1 className="text-xl text-gray-200 promptSnaserif font-semibold">
                        Services
                  </h1>
                  <div>
                    <p className="text-sm text-gray-200 promptSnaserif tracking-wider w-[350px] leading-8 mt-9">
                    Which of us ever undertake laborious physical exercise except obtain
                    </p>
                  </div>
                  <div className=' mt-6'>
                      <div className=' flex items-center max-w-[290px] rounded-lg overflow-hidden bg-white'>
                        <div>
                           <input 
                           type='email'
                           placeholder='Email Addres..'
                           className='h-[45px] px-2 text-black'
                           />
                        </div>
                        <div>
                          <button className='ml-2 mt-1'> <span> <BiLogoTelegram style={{width : "29px",height : "29px", color: "#F7921E"}} /></span> </button>
                        </div>
                      </div>
                  </div>
              </div>
             </div>
        </div>
    </>
  )
}

export default FooterSecondPart