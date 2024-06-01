"use client"
import React from 'react'

const FeaturesButton = ({febutton,filterFunction,selected}) => {
  return (
    <>
     <div>
        {
            febutton.map((item) => {
                return(
                    <div key={item.id} className='mb-4'>
                       <div>
                          <div className={ selected === item.id ? 'px-5 py-4 bg-[#F7921E] text-gray-100 rounded-xl' : 'px-5 py-4 bg-gray-100 rounded-xl' }>
                             <button 
                             className='text-xl font-semibold'
                             onClick={() =>filterFunction(item.id)}
                             >{item.title}</button>
                          </div>
                        </div>
                    </div>
                )
            })
        }
     </div>
    </>
  )
}

export default FeaturesButton