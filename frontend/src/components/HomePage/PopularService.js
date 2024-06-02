"use client";
import React from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutData from "../data/AboutCompapnyData";
import { motion } from "framer-motion";
import { FaBoxArchive } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { GiBarracksTent } from "react-icons/gi";
import { IoMdBonfire } from "react-icons/io";
import { popSerData } from "../data/AllData";
import GridServices from "./GridServices";

const PopularService = () => {
  const sliderActive3Item = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-10  overflow-hidden ">
        <div className=" pt-5">
          <div className="flex justify-center items-center">
            <motion.div
              className="border border-gray-300 px-5 py-2 rounded-lg bg-[#63ab451a] "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <p className="text-lg  aboutCom text-[#63AB45]">
                Popular Services
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center items-center  mt-9"
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
              <h1 className="text-4xl promptSnaserif font-extrabold tracking-wider fo text-center text-gray-800">
                Amazing Adventure Camping Services for Enjoyed
              </h1>
            </div>
          </motion.div>
          <div className=" mt-16 max-w-8xl  mx-auto ">
            <div>
              <Slider {...sliderActive3Item}>
                {popSerData.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className=" w-[420px] px-6 py-4 wholebox">
                        <div>
                          <h1 className="promptSnaserif font-bold text-2xl mt-3">
                            {item.title}
                          </h1>
                        </div>
                        <div>
                          <p className="mt-5 text-gray-500">
                            {item.paragraph}
                          </p>
                        </div>
                        <div>
                          <div className="mt-5  flex">
                            <div className="mr-4">
                              <FaBoxArchive
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  color: "#94a3b8",
                                  marginRight: "5px",
                                }}
                              />
                            </div>
                            <div className="mr-4">
                              <FaCat
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  color: "#94a3b8",
                                  marginRight: "5px",
                                }}
                              />
                            </div>
                            <div className="mr-4">
                              <GiBarracksTent
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  color: "#94a3b8",
                                  marginRight: "5px",
                                }}
                              />
                            </div>
                            <div className="mr-4">
                              <IoMdBonfire
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  color: "#94a3b8",
                                  marginRight: "5px",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" relative  mt-5 ">
                          <div className="mt-[-17px] absolute top-0 right-0 z-20">
                            <div className="flex justify-end mr-5">
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
                          <div className="z-1">
                            <div w-ful>
                              <Image
                                src={item.image}
                                alt="Service Image"
                                width={400}
                                height={100}
                                className="rounded-xl "
                              />
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
          <GridServices />
        </div>
      </div>
    </>
  );
};

export default PopularService;
