import Image from 'next/image'
import React from 'react'

const CheckAvailabilty = () => {
  return (
     <>
        <div className='border border-red-500 '>
            <div className='max-w-8xl mx-auto flex items-center'>
                 <div className='border border-yellow-500 w-1/2'>
                      form
                 </div>
                 <div className='border border-yellow-500 w-1/2 flex justify-center items-center'>
                      <div>
                         <Image 
                           src="/assets/images/contact/contact-1.jpg"
                           alt="Contact Image"
                           width={570}
                           height={570}
                           className='rounded-2xl'
                           />
                      </div>
                 </div>
            </div>
        </div>
     </>
  )
}

export default CheckAvailabilty