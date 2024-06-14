"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import ReuseButton from "./ReuseComponent/ReuseButton";
import { FaAngleDown } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import SliderMenu from "./Allcomponents/SliderMenu";

const Header = () => {
  
    const[scroll,setScroll] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 50){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[scroll])


    const[showDisplay,setShowDisplay] = useState(false)

    const handleShowDisplay = () => {
        setShowDisplay(!showDisplay);
      };
    
      const handleHideDisplay = () => {
        setShowDisplay(false);
      };

  return (
    <>
     <div className="">
      <div className={scroll ? " bg-[#1D231F] py-3 fixed transition ease-in-out duration-500 backdrop-blur-sm bg-opacity-90 z-20 w-full top-0 left-0" : "bg-[#1D231F]  py-3 fixed transition ease-in-out duration-500  z-20 w-full top-0 left-0"}>
        <div className=" max-w-8xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="pl-3 md:pl-0">
              <Image
                src="/assets/images/nabinTreks.jpg"
                alt="mainLogo"
                width={70}
                height={70}
                className="rounded-full"
                priority
              />
            </div>
            <div>
              <ul className=" hidden  xl:flex">
                <li className="mainHeader cursor-pointer">
                  <div>
                    <Link href="" className="text-gray-100 headerlinkhov">
                      Home
                    </Link>
                  </div>
                </li>
                <li className="mainHeader">
                  <div className="">
                    <div className="flex items-center">
                      <Link href="/service/nepal" className="text-gray-100 headerlinkhov ">
                        Tours
                      </Link>
                      <FaAngleDown className="ml-2 text-gray-200 headerlinkhov" />
                    </div>
                    <div>
                      <ul className="dropList">
                        <li className="hiddenDropli">
                          <Link href="/service/nepal" className="linkHover ">Nepal tour</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Bhutan tour</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mainHeader">
                  <div className="">
                    <div className="flex items-center">
                      <Link href="" className="text-gray-100 headerlinkhov ">
                        Destinations
                      </Link>
                      <FaAngleDown className="ml-2 text-gray-200 headerlinkhov" />
                    </div>
                    <div>
                      <ul className="dropList">
                        <li className="hiddenDropli">
                          <Link href="" className="linkHover ">Destination</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Destination Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mainHeader">
                  <div className="">
                    <div className="flex items-center">
                      <Link href="" className="text-gray-100 headerlinkhov ">
                         Blogs 
                      </Link>
                      <FaAngleDown className="ml-2 text-gray-200 headerlinkhov" />
                    </div>
                    <div>
                      <ul className="dropList">
                        <li className="hiddenDropli">
                          <Link href="" className="linkHover ">Blog List</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Blog Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mainHeader">
                  <div className="">
                    <div className="flex items-center">
                      <Link href="" className="text-gray-100 headerlinkhov ">
                         Pages
                      </Link>
                      <FaAngleDown className="ml-2 text-gray-200 headerlinkhov" />
                    </div>
                    <div>
                      <ul className="dropList">
                        <li className="hiddenDropli">
                          <Link href="/about-us" className="linkHover ">About Us</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Our Gallery</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Our Events</Link>
                        </li>
                        <li className="hiddenDropli">
                          <Link href=""  className="linkHover">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
             
             
              
              </ul>
            </div>
            <div className="  flex items-center">
              <div className="hidden xl:block">
                <ReuseButton name="Contact Now" />
              </div>
              <div className="lg:block xl:hidden">
                  <div className="border border-gray-50 p-2 rounded-lg">
                       <LuMenu className="h-[25px] w-[25px] text-gray-50" onClick={handleShowDisplay} />
                  </div>
              </div>
            </div>
          </div>
          <div className={ scroll ? "" : "border-b border-gray-600 mt-3"}></div>
        </div>
      </div>
      </div>
      {showDisplay &&  <SliderMenu funDis={handleHideDisplay} /> }
      
  
    </>
  );
};

export default Header;
