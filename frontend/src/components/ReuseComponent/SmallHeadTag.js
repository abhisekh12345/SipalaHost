"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SmallHeadTag = ({subname,colurTrue}) => {
  return (
    <>
        <div>
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
              <p className={ colurTrue ? "text-lg  aboutCom text-[#F7921E]" : "text-lg  aboutCom text-[#63AB45]" } >{subname}</p>
            </motion.div>
          </div>
        </div>
    </>
  )
}

export default SmallHeadTag