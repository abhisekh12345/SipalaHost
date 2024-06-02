import React from 'react'
import { GiRabbit } from "react-icons/gi";
import { gridData } from '../data/AllData';

const GridServices = () => {
  return (
     <>
      <div className='bg-gray-50 pt-24 pb-16'>
        <div className='max-w-8xl mx-auto'>
            <div className='grid grid-cols-3 gap-4'>
             {
                gridData.map((item) => {
                    return (
                        <div key={item.id}>
                        <div className='flex openBoder bg-gray-100 px-4 py-9 rounded-xl'>
                     <div className='w-2/6 flex justify-center items-center '>
                         <div className='bg-white p-4 rounded-full changeBack'>
                             {item.icon}
                         </div>
                     </div>
                     <div className='w-4/6'>
                        <div>
                            <h1 className='text-xl font-bold'>{item.head}</h1>
                        </div>
                        <div>
                            <p className='mt-3 leading-7 promptSnaserif text-gray-500'>{item.para}</p>
                        </div>
                     </div>
                </div>
                        </div>
                    )
                })
             }
            </div>
        </div>
      </div>
     </>
  )
}

export default GridServices