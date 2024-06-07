import React from 'react'
import LinkServices from '../ReuseComponent/LinkServices'

const FooterThirdPart = () => {
  return (
      <>
        <div className='px-3  sm:flex sm:justify-between items-center'>
            <div>
                 <p className=" text-gray-200 promptSnaserif font-semibold text-center sm:text-left">
                 Copy@ 2023 <span className='text-[#F7921E]'>Nabin Terks</span>,All Right Reserved
                 </p>
            </div>
            <div className='flex items-center justify-center sm:block'>
               <div className='flex  flex-wrap'>
                 <div className='mr-5'>
                    <LinkServices linkser="Setting & privacy"  />
                 </div>
                <div className='mr-5'>
                  <LinkServices linkser="Faqs" />
                </div>
                <div>
                  <LinkServices linkser="Support" />
                </div>
               </div>
            </div>
        </div>
      </>
  )
}

export default FooterThirdPart