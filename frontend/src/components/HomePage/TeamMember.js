import React from "react";
import SmallHeadTag from "../ReuseComponent/SmallHeadTag";
import CenterHeading from "../ReuseComponent/CenterHeading";
import { gridData } from "../data/AllData";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { teamMembers } from "../data/AllData";

const TeamMember = () => {
  return (
    <>
      <div className="pt-14 pb-20">
        <div className="max-w-8xl mx-auto  ">
          <div>
            <SmallHeadTag subname="Team Member" />
          </div>
          <div className="mb-11">
            <CenterHeading boldTitle="We’ve Expert Team Members Meet With Team" />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5 gap-y-9">
              {teamMembers.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex teamMember px-4 py-9 rounded-xl">
                      <div className="w-2/6 flex justify-center items-center ">
                        <div className=" ">
                            <Image 
                             src={item.image}
                             alt="Team Image"
                             width ={80}
                             height ={80}
                             className="rounded-full"
                             />
                        </div>
                      </div>
                      <div className="w-4/6">
                        <div>
                          <h5 className="text-xl font-bold">{item.title}</h5>
                        </div>
                        <div>
                          <p className=" leading-7 promptSnaserif text-gray-500">
                               {item.position}
                          </p>
                        </div>
                        <div className="border border-gray-200 mt-5">
                        </div>
                        <div className="flex mt-3">
                            <FaFacebookF className="mr-3 text-gray-500 hover:text-[#63AB45]" />
                            <FaTwitter className="mr-3 text-gray-500 hover:text-[#63AB45]" />
                            <FaInstagram className="mr-3 text-gray-500 hover:text-[#63AB45]" />
                            <FaLinkedinIn className="mr-3 text-gray-500 hover:text-[#63AB45]" />
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

export default TeamMember;
