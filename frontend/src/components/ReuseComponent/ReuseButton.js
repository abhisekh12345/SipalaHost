import React from 'react'
import { BiLogoTelegram } from "react-icons/bi";


const ReuseButton = ({name}) => {
  return (
    <div className='flex  items-center pl-5 py-[2px] pr-[2px] rounded-3xl conHover'>
    <div>
       <p className='text-gray-100 pr-2 font-semibold'>{name}</p>
    </div>
    <div className='bg-gray-100 rounded-full  p-2 '>
        <span> <BiLogoTelegram style={{width : "29px",height : "29px", color: "#475569"}} /></span> 
    </div>
 </div>
  )
}

export default ReuseButton