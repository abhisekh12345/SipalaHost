import Image from "next/image";
import React from "react";
import LinkServices from "../ReuseComponent/LinkServices";
import { BiLogoTelegram } from "react-icons/bi";

const FooterSecondPart = () => {
  return (
    <>
      <div className="">
        <div className="grid  md:grid-cols-2 xl:grid-cols-3">
          <div className=" px-3 py-3 flex justify-center items-center md:block">
            <div className="">
              <div>
                <h1 className="text-xl text-gray-200 promptSnaserif font-semibold text-center md:text-left">
                  About
                </h1>
              </div>
              <div className="max-w-xs sm:max-w-[350px]">
                <p className="text-sm text-gray-200 promptSnaserif tracking-wider  leading-8 mt-9">
                  To take trivial example which us ever undertakes laborious
                  physica exercise except obsome
                </p>
              </div>
              <div className="flex items-center mt-6">
                <div>
                  <Image
                    src="/assets/images/nabinTreks.jpg"
                    alt="mainLogo"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <h1 className="text-3xl font-bold text-[#63AB45]">
                    Nabin Terks
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className=" px-3 py-3 flex justify-center items-center mt-9 md:block md:mt-0">
            <div>
              <h1 className="text-xl text-gray-200 promptSnaserif font-semibold text-center md:text-left">
                Services
              </h1>
              <div className="grid grid-cols-2">
                <div className="">
                  <div>
                    <div className="px-2 sm:px-0">
                      <LinkServices linkser=" Caravan Soler Tent" />
                      <LinkServices linkser="Family Tent Camping" />
                      <LinkServices linkser="Classic Tent Camping" />
                      <LinkServices linkser="Wild Tent Camping" />
                      <LinkServices linkser="Small Cabin Wood" />
                    </div>
                  </div>
                </div>
                <div className="pl-3">
                  <div className="px-2 sm:px-0">
                    <LinkServices linkser="Need a Career ?" />
                    <LinkServices linkser="Latest News & Blog" />
                    <LinkServices linkser="Core Features" />
                    <LinkServices linkser="Meet Our teams" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-3 py-3 mt-9 xl:mt-0 flex justify-center items-center md:block">
            <div>
              <h1 className="text-xl text-gray-200 promptSnaserif font-semibold text-center md:text-left">
                Services
              </h1>
              <div className=" max-w-xs sm:max-w-[350px]">
                <p className="text-sm text-gray-200 promptSnaserif tracking-wider leading-8 mt-9">
                  Which of us ever undertake laborious physical exercise except
                  obtain
                </p>
              </div>
              <div className=" mt-6">
                <div className="flex items-center max-w-full sm:max-w-[290px] rounded-lg overflow-hidden bg-white p-2">
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="Email Address.."
                      className="w-full h-10 px-2 text-black"
                    />
                  </div>
                  <div>
                    <button className="ml-2">
                      <BiLogoTelegram
                        style={{
                          width: "29px",
                          height: "29px",
                          color: "#F7921E",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSecondPart;
