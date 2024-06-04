"use client"
import React from 'react'
import { motion } from 'framer-motion'


const SecCentralH = ({boldTitle,colurTrue}) => {
  return (
     <>
        <div>
        <motion.div
            className="mt-9"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <div className=" w-[700px]">
              <h1 className={ colurTrue ? "text-4xl promptSnaserif font-extrabold tracking-wider  text-gray-200" : "text-4xl promptSnaserif font-extrabold tracking-wider text-gray-800" }>
                {boldTitle}
              </h1>
            </div>
          </motion.div>
        </div>
     </>
  )
}

export default SecCentralH