"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import ReuseButton from "../ReuseComponent/ReuseButton";

const SliderMenu = ({funDis}) => {
  const [menuState, setMenuState] = useState({
    tours: false,
    destinations: false,
    blogs: false,
    pages: false,
  });

  

  const handleToggle = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  

  

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 bg-gray-50 border px-2 py-2 max-w-[260px] newHeight">
        <div>
            <div className="flex justify-end">
                <RxCross1 onClick={funDis} />
            </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/nabinTreks.jpg"
            alt="mainLogo"
            width={70}
            height={70}
            className="rounded-full"
            priority
          />
        </div>
        <ul className="mt-6">
            <li className="mainHeader cursor-pointer border-b border-gray-300">
              <div>
                <Link href="" className=" font-bold headerlinkhov allNewColor">
                  Home
                </Link>
              </div>
            </li>
            <li className="mainHeader cursor-pointer border-b border-gray-300">
              <div onClick={() => handleToggle("tours")}>
                <div className="flex justify-between items-center">
                  <Link href="" className="allNewColor font-bold headerlinkhov">
                    Tours
                  </Link>
                  {menuState.tours ? (
                    <IoIosArrowUp className="ml-2 text-gray-700 headerlinkhov" />
                  ) : (
                    <FaAngleDown className="ml-2 text-gray-700 headerlinkhov" />
                  )}
                </div>
                {menuState.tours && (
                  <ul>
                    <li className="hiddenDropli">
                      <Link href="" className="linkHover font-bold allNewColor">
                        Tours
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className="linkHover font-bold allNewColor">
                        Tours Details
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="mainHeader border-b border-gray-300">
              <div onClick={() => handleToggle("destinations")}>
                <div className="flex justify-between items-center">
                  <Link href="" className="allNewColor font-bold headerlinkhov">
                    Destinations
                  </Link>
                  {menuState.destinations ? (
                    <IoIosArrowUp className="ml-2 text-gray-700 headerlinkhov" />
                  ) : (
                    <FaAngleDown className="ml-2 text-gray-700 headerlinkhov" />
                  )}
                </div>
                {menuState.destinations && (
                  <ul>
                    <li className="hiddenDropli">
                      <Link href="" className="linkHover font-bold allNewColor">
                        Destination
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className="linkHover font-bold allNewColor">
                        Destination Details
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="mainHeader cursor-pointer border-b border-gray-300">
              <div onClick={() => handleToggle("blogs")}>
                <div className="flex justify-between items-center">
                  <Link href="" className="allNewColor font-bold headerlinkhov">
                    Blogs
                  </Link>
                  {menuState.blogs ? (
                    <IoIosArrowUp className="ml-2 text-gray-700 headerlinkhov" />
                  ) : (
                    <FaAngleDown className="ml-2 text-gray-700 headerlinkhov" />
                  )}
                </div>
                {menuState.blogs && (
                  <ul>
                    <li className="hiddenDropli">
                      <Link href="" className="allNewColor linkHover font-bold">
                        Blog List
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className=" allNewColor linkHover font-bold">
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="mainHeader cursor-pointer border-b border-gray-300">
              <div onClick={() => handleToggle("pages")}>
                <div className="flex justify-between items-center">
                  <Link href="" className="allNewColor font-bold headerlinkhov">
                    Pages
                  </Link>
                  {menuState.pages ? (
                    <IoIosArrowUp className="ml-2 text-gray-700 headerlinkhov" />
                  ) : (
                    <FaAngleDown className="ml-2 text-gray-700 headerlinkhov" />
                  )}
                </div>
                {menuState.pages && (
                  <ul>
                    <li className="hiddenDropli">
                      <Link href="" className=" allNewColor linkHover">
                        About Us
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className=" allNewColor linkHover">
                        Our Gallery
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className="allNewColor linkHover">
                        Our Events
                      </Link>
                    </li>
                    <li className="hiddenDropli">
                      <Link href="" className=" allNewColor linkHover">
                        Contact
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        <div className="mt-9">
             <div className="flex">
                <ReuseButton name="Contact Now" />
             </div>
          </div>
      </div>
    </div>
  );
};

export default SliderMenu;
