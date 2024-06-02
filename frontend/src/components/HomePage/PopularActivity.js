"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import FeaturesButton from '../Buttons/FeaturesButton'
import PopularInfo from '../Allcomponents/PopularInfo'
import Image from 'next/image'
import PopActData from '../data/PopularActData'



const PopularActivity = () => {

    const buttons = [
        {
            id : 1,
            title : "Tent-Camping"
        },
        {
            id : 2,
            title : "Moutain-Biking"
        },
        {
            id : 3,
            title : "Bird Watching"
        },
        {
            id : 4,
            title : "Fishing"
        },
        {
            id : 5,
            title : "Moutain Hiking"
        },
        {
            id : 6,
            title : "Moutain Hiking"
        },
    ]

    const [select,setSelected] = useState(1)
    const [click,setClick] =useState(false)
    const [data,setData] = useState(PopActData)

    const filterhandler = (buttonId) => {
        console.log(buttonId)
       const filterData = PopActData.filter((item) => item.id === buttonId)
       setData(filterData)
       setClick(true)
       setSelected(buttonId)
    }

    useEffect(() =>{
        const initialData = PopActData.filter((item) => item.id === 1)
        setData(initialData)
    },[PopActData])

    console.log("setData",data)

  return (
    <>
         <div className="pt-12 pb-20  bg-[#1D231F] ">
        <div className=" pt-5">
          <div className="flex justify-center items-center">
            <motion.div className="border border-gray-300 px-5 py-2 rounded-lg bg-[#63ab451a] "
             initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            transition={{duration : 1.5}}
            variants={{
              visible : {opacity:1, scale:1},
              hidden : {opacity:0,scale : 0}
            }}
            >
              <p className="text-lg  aboutCom text-[#F7921E]">Popula Activity</p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center  mt-9">
            <motion.div className=" w-[500px]"
               initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            transition={{duration : 1.5}}
            variants={{
              visible : {opacity:1, x: 0},
              hidden : {opacity:0,  x : -50}
            }}
            >
              <h1 className="text-4xl promptSnaserif font-bold tracking-wider fo text-center text-gray-100 mb-11">
              Feel Real Adventure and Very Colse to Nature
              </h1>
            </motion.div>
          </div>
          <div className='max-w-8xl mx-auto'>
             <motion.div className='flex  items-center justify-center'
                initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            transition={{duration : 1.5}}
            variants={{
              visible : {opacity:1, scale:1},
              hidden : {opacity:0,scale : 0}
            }}
              >
              <div className='w-2/6 px-7 py-3 pt-5 bg-gray-50 rounded-xl'>
                   <FeaturesButton febutton={buttons} filterFunction={filterhandler} selected={select} />
              </div>
              <div className=' w-2/6 px-3 pl-9'>
                    <PopularInfo  seeData={data} />
              </div>
              <div className=' w-2/6'>
                   <div className='flex items-center justify-center '>
                   {
                    data.map((item) =>{
                        return(
                           <div key={item.id}>
                           <Image
                         src={item.photo}
                         alt="Image"
                         width={350}
                         height={350}
                         className='rounded-xl'
                         sizes="(max-width: 600px) 100vw, 
                           (max-width: 1200px) 50vw, 
                              410px"
                         />
                           </div>
                        )
                    })
                   }
                    
                   </div>
              </div>
             </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularActivity