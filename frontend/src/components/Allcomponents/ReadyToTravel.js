import React from 'react'
import {motion} from 'framer-motion'
import ReuseButton from '../ReuseComponent/ReuseButton'

const ReadyToTravel = () => {
  return (
     <>
        <div className=''>
            <div className=' h-[500px] w-full relative'  style={{
                 backgroundImage: "url(/assets/images/bg/cta-bg.jpg)" ,
            }}>
              <div className='absolute top-0 left-0 w-full h-full newLayOverlay flex justify-center items-center'>
                   <div className=''>
                     <div>
                         <div className=" w-[850px]">
                            <h1 className="text-4xl promptSnaserif font-extrabold tracking-wider fo text-center text-gray-100">
                            Ready to Travel With Real Adventure and Enjoy Natural
                           </h1>
                         </div>
                     </div>
                     <div className='flex justify-center items-center mt-9'>
                        <div>
                           <ReuseButton name="Check Availability" />
                       </div>
                     </div>
                   </div>
              </div> 
            </div>
        </div>
     </>
  )
}

export default ReadyToTravel