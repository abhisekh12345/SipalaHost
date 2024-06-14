"use client"
import React from 'react'
import { motion } from 'framer-motion'

const CenterHeading = ({secboldTitle,colurTrue}) => {
  return (
     <>
        <div>
        <motion.div
            className="flex justify-center items-center  mt-9 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <div className="max-w-[700px]">
              <h1 className={ colurTrue ? "text-4xl promptSnaserif font-extrabold tracking-wider fo text-center text-gray-200" : "text-4xl promptSnaserif font-extrabold tracking-wider fo text-center text-gray-800" }>
                {secboldTitle}
              </h1>
            </div>
          </motion.div>
        </div>
     </>
  )
}

export default CenterHeading