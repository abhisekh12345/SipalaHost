import React from "react";
import SmallHeadTag from "../ReuseComponent/SmallHeadTag";
import CenterHeading from "../ReuseComponent/CenterHeading";
import { FaBoxArchive } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { GiBarracksTent } from "react-icons/gi";
import { IoMdBonfire } from "react-icons/io";
import { popSerData } from "../data/AllData";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import { popularTours } from "../data/AllData";

const PopularTourPlace = () => {
  return (
    <>
      <div className="pb-20">
        <div className="max-w-8xl mx-auto ">
          <div>
            <SmallHeadTag subname="Popular Tour place" />
          </div>
          <div className="mb-11">
            <CenterHeading boldTitle="Visit & Enjoy Adventure Life With Full Of Dreams" />
          </div>
          <div>
            <div className="grid grid-cols-4 gap-5 gap-y-10">
              {popularTours.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="p-2 rounded-3xl moreRounded bg-neutral-100 ">
                      <div>
                        <div>
                          <div>
                            <Image
                              src={item.img}
                              alt="Service Image"
                              width={400}
                              height={100}
                              className="moreRounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="px-5 mb-5">
                        <div>
                          <h1 className="promptSnaserif font-bold text-2xl mt-4">
                            {item.title}
                          </h1>
                        </div>
                        <div className="flex items-center mt-2 ml-[-3px]">
                          <p>
                            <MdOutlineLocationOn className="h-[21px] w-[21px] text-gray-400" />
                          </p>
                          <p className=" text-gray-500 ml-1">
                           {item.location}
                          </p>
                        </div>
                        <div className="border-t border-gray-300 mt-3 ">

                        </div>
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
                                <p className=" text-gray-500">{item.date}</p>
                              </div>
                            </div>
                            <div>
                             <div className=" p-3 rounded-full bg-white">
                              <FaArrowRightLong
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  color: "#94a3b8",
                                }}
                              />
                             </div>
                            </div>
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
  );
};

export default PopularTourPlace;
