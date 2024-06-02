"use client"
import React, { useState } from "react";
import { gridData } from "../data/AllData";
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger";
import { GiHiking } from "react-icons/gi";
import { happyTravelers } from "../data/AllData";


const Counterup = () => {
   
    const [countUp, setConterUp] = useState(false)

  return (
   <ScrollTrigger onEnter={() => setConterUp(true)} onExit={() => setConterUp(false)} >
    <div className=" bg-slate-50">
      <div className="max-w-8xl mx-auto">
        <div className="pt-24 pb-28">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {happyTravelers.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex items-center justify-center openBoder newboxshadow w-full bg-white px-4 py-14 rounded-xl">
                      <div className=" ">
                        <div className=" flex justify-center items-center ">
                          <div className="bg-gray-50 p-6 rounded-full changeBack">
                              {item.icon}
                          </div>
                        </div>
                        <div className=" mt-6">
                          <div className="flex items-center justify-center">
                            <span className="text-3xl font-extrabold">
                            {countUp && <CountUp start={item.start} end={item.end} delay={0} duration={8} />} 
                              {(item.id === 1 || item.id === 2) && <span> + </span>}
                              {item.id === 3 && <span>%</span>}
                              {item.id === 4 && <span>K</span>}
                            </span>
                          </div>
                          <div>
                            <p className="mt-3 leading-7 promptSnaserif text-gray-500">
                               {item.para}
                            </p>
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
    </div>
    </ScrollTrigger>
  );
};

export default Counterup;
