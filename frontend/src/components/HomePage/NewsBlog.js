import React from 'react'
import SmallHeadTag from '../ReuseComponent/SmallHeadTag'
import CenterHeading from '../ReuseComponent/CenterHeading'
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { popularTours } from '../data/AllData';
import WhiteButton from '../ReuseComponent/WhiteButton';
import { newsandBlog } from '../data/AllData';

const NewsBlog = () => {
  return (
     <>
        <div className=" pt-10 pb-20   mb-28">
            <div className='max-w-8xl mx-auto '>
                  <div>
                    <SmallHeadTag subname="News and Blog" />
                  </div>
                  <div className='mb-9'>
                     <CenterHeading boldTitle = "Amazing News & Blog For Every Single Update" />
                  </div>
                  <div>
                  <div className="grid grid-cols-3 gap-5 gap-y-10">
              {newsandBlog.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="p-2  ">
                      <div>
                        <div>
                          <div className='relative h-[300px] w-full'>
                            <Image
                              src={item.img}
                              alt="Service Image"
                              layout='fill'
                              className='rounded-2xl'
                            />
                          </div>
                        </div>
                      </div>
                       <div className='ml-5 mt-3'>
                          <div className='flex'>
                           
                              <div className=' font-medium text-gray-100 rotateBox px-5 py-2 '>
                               <h1 className='text-lg tracking-wider'>Adventure</h1>
                              </div>
                           
                          </div>
                       </div>
                      <div className="px-5 mb-5">
                      <div>
                          <div className="mt-5  flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="mr-4">
                                <SlCalender
                                  style={{
                                    height: "20px",
                                    width: "20px",
                                    color: "#94a3b8",
                                  }}
                                />
                              </div>
                              <div>
                                <p className=" text-gray-600 font-medium">{item.date}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h1 className="promptSnaserif font-bold text-2xl mt-7 hover:text-[#F7921E]">
                            {item.title}
                          </h1>
                        </div>
                        <div className='mt-9'>
                           <div className='flex'>
                              <WhiteButton name={item.button} />
                           </div>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>  
                  </div>
            </div>
        </div>
     </>
  )
}

export default NewsBlog