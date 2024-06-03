import Image from 'next/image'
import React from 'react'
import LinkServices from '../ReuseComponent/LinkServices'

const FooterSecondPart = () => {
  return (
    <>
        <div className='border border-red-500'>
             <div className='grid grid-cols-3'>
              <div className='border border-yellow-500 px-3 py-3 '>
                <div>
                     <h1 className="text-xl text-gray-200 promptSnaserif font-semibold">
                       About
                    </h1>
                </div>
                <div>
                     <p className="text-gray-200 promptSnaserif tracking-wider w-[350px] leading-8 mt-9">
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

              <div className='border border-yellow-500 px-3 py-3'>
                <div className='flex items-center'>
                 <div className='w-1/2 border border-red-500'>
                   <div>
                       <h1 className="text-xl text-gray-200 promptSnaserif font-semibold">
                        Services
                        </h1>
                        <div>
                           <LinkServices linkser=" Caravan Soler Tent" />
                        </div>
                   </div>
                 </div>
                 <div className='w-1/2 border border-red-600'>
                    sdsd
                 </div>

                </div>
              </div>
              <div className='border border-yellow-500'>
                third
              </div>
             </div>
        </div>
    </>
  )
}

export default FooterSecondPart