import React from 'react'
import LinkServices from '../ReuseComponent/LinkServices'

const FooterThirdPart = () => {
  return (
      <>
        <div className='px-3  flex justify-between items-center'>
            <div>
                 <p className=" text-gray-200 promptSnaserif font-semibold">
                 Copy@ 2023 <span className='text-[#F7921E]'>Nabin Terks</span>,All Right Reserved
                 </p>
            </div>
            <div >
               <div className='flex'>
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