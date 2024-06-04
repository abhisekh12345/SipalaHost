import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterFirstPart = () => {
  return (
    <>
      <div>
        <div className="border-t border-gray-700 mb-3"></div>
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="">
            <div className="px-3 py-4">
              <div className=" rounded-lg flex items-center">
                <div className="w-1/6 ">
                  <div className=" flex  justify-end">
                    <div className="bg-[#63AB45] rounded-full  p-3 ">
                      <span>
                        {" "}
                        <MdOutlineLocationOn
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

                <div className="w-5/6  ml-3 ">
                  <div className>
                    <h1 className=" promptSnaserif font-semibold text-gray-100">
                      Location
                    </h1>
                  </div>
                  <div className="">
                    <p className=" promptSnaserif text-gray-100">
                      55 Main Street, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-3 py-4">
              <div className=" rounded-lg flex items-center">
                <div className="w-1/6 ">
                  <div className=" flex  justify-end">
                    <div className="bg-[#63AB45] rounded-full  p-3 ">
                      <span>
                        {" "}
                        <TfiEmail
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

                <div className="w-5/6  ml-3 ">
                  <div className>
                    <h1 className=" text-gray-200 promptSnaserif font-semibold">
                      Email
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-gray-200 promptSnaserif tracking-wider">
                      support@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-3 py-4">
              <div className=" rounded-lg flex items-center">
                <div className="w-1/6 ">
                  <div className=" flex  justify-end">
                    <div className="bg-[#63AB45] rounded-full  p-3 ">
                      <span>
                        {" "}
                        <MdLocalPhone
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

                <div className="w-5/6  ml-3 ">
                  <div className>
                    <h1 className=" text-gray-200 promptSnaserif font-semibold">
                      Hotline
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-gray-200 promptSnaserif tracking-wider">
                      +000 (123) 456 898
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="px-3 py-4">
              <div>
                <div className="flex mt-3">
                  <div className=" w-[45px] h-[45px] flex items-center justify-center rounded-full  fachover">
                    <FaFacebookF className=" text-gray-500 hofayo " />
                  </div>
                  <div className=" w-[45px] h-[45px] flex items-center justify-center rounded-full  fachover">
                    <FaTwitter className=" text-gray-500 hofayo " />
                  </div>
                  <div className=" w-[45px] h-[45px] flex items-center justify-center rounded-full  fachover">
                    <FaInstagram className=" text-gray-500 hofayo " />
                  </div>
                  <div className=" w-[45px] h-[45px] flex items-center justify-center rounded-full  fachover">
                    <FaLinkedinIn className=" text-gray-500 hofayo " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-3"></div>
      </div>
    </>
  );
};

export default FooterFirstPart;
