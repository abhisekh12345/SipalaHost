"use client"
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutData from "../data/AboutCompapnyData";
import {motion} from 'framer-motion'

const AboutCompany = () => {
  var sliderActive4Item = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-14 overflow-hidden relative z-1">
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
              <p className="text-lg  aboutCom text-[#63AB45]">About company</p>
            </motion.div>
          </div>
          <motion.div className="flex justify-center items-center  mt-9"
             initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            transition={{duration : 1.5}}
            variants={{
              visible : {opacity:1, y:0},
              hidden : {opacity:0, y:50}
            }}
          >
            <div className=" w-[850px]">
              <h1 className="text-4xl promptSnaserif font-extrabold tracking-wider fo text-center text-gray-800">
                We Are Most Funning Company About Travel & Tours
              </h1>
            </div>
          </motion.div>
          <motion.div className="flex justify-center items-center mb-9  mt-9"
             initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            transition={{duration : 1.5}}
            variants={{
              visible : {opacity:1, x:0},
              hidden : {opacity:0, x:100}
            }}
          >
            <div className=" w-[850px]">
              <h1 className=" rubikamily  tracking-wider fo text-center text-gray-400 text-sm leading-6">
                Sit amet consectetur. Velit integer eu tincidunt scelerisque.
                Sodales volutpat neque fermentum malesuada scelerisque massa
                lacus. Ultrices eget leo cras odio blandit rhoncus eu. At
                feugiat condimentum massa integer iaculis sit sit. Sagittis
                vitae quis sed vitae congue
              </h1>
            </div>
          </motion.div>
          <div className="mb-11">
            <Slider {...sliderActive4Item}>
              {AboutData.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <div className="ml-[40px]">
                        <div className="relative w-[350px] h-[420px] mainCard rounded-lg overflow-hidden">
                          <Image
                            src={item.img}
                            alt="feat1"
                            layout="fill"
                          />
                          <div className="absolute top-0 left-0 w-full h-full  flex items-end justify-around ">
                            <div className="border border-gray-200 rounded-lg px-6 py-5 w-[280px] bg-gray-100 mb-3">
                              <div className="border-2 border-[#63AB45] w-16"></div>
                              <div className="flex justify-between items-center mt-2">
                                <div className="w-4/6">
                                  <h1 className="text-xl text-webGreen font-semibold">
                                     {item.title}
                                  </h1>
                                </div>
                                <div className="w-2/6 flex  justify-end">
                                  <div className="bg-[#63AB45] rounded-full  p-2 ">
                                    <span>
                                      {" "}
                                      <FaLocationArrow
                                        style={{
                                          width: "25px",
                                          height: "25px",
                                          color: "#f1f5f9",
                                        }}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3 smallParagraph">
                                <p className="text-gray-500">
                                  {item.para}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
