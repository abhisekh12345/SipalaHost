"use client";
import Image from "next/image";
import React, { useState } from "react";
import SmallHeadTag from "../ReuseComponent/SmallHeadTag";
import CenterHeading from "../ReuseComponent/CenterHeading";
import SecSmallHeading from "../ReuseComponent/SecSmallHeading";
import SecCentralH from "../ReuseComponent/SecCentralH";
import { BiLogoTelegram } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import FormInput from "../ReuseComponent/FormInput";
import Select from "react-dropdown-select";
import { CgProfile } from "react-icons/cg";
import ReuseButton from "../ReuseComponent/ReuseButton";

const CheckAvailabilty = () => {
  const [startDate, setStartDate] = useState(null);

  const options = [
    {
      id: 1,
      name: "Class tent",
    },
    {
      id: 2,
      name: "Forest Camp",
    },
  ];

  return (
    <>
      <div className=" pt-10 pb-16">
        <div className="max-w-8xl mx-auto flex items-center">
          <div className=" w-1/2">
            <div>
              <SecSmallHeading secsubname="Availibilty" />
            </div>
            <div>
              <SecCentralH boldTitle="Booking Your Best Tour Camping Availability" />
            </div>
            <div className=" mt-9">
              <div className="flex">
                <div className="w-1/2">
                  <div>
                  <div className=" flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200 px-2 py-2 bg-gray-50">
                      <FormInput type="name" placeholder="Guest.." />
                      <div>
                        <button className="ml-2 mt-1">
                          {" "}
                          <span>
                            {" "}
                            <CgProfile
                              style={{
                                width: "29px",
                                height: "29px",
                                color: "#63AB45",
                              }}
                            />
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200 px-2 py-2 bg-gray-50">
                      <FormInput type="email" placeholder="Email address.." />
                      <div>
                        <button className="ml-2 mt-1">
                          {" "}
                          <span>
                            {" "}
                            <BiLogoTelegram
                              style={{
                                width: "29px",
                                height: "29px",
                                color: "#63AB45",
                              }}
                            />
                          </span>{" "}
                        </button>
                      </div>
                    </div>
                    
                  </div>
                  <div></div>
                </div>
                <div className="w-1/2">
                <div className=" flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200s px-1 py-2 bg-gray-50">
                      <div>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="bg-gray-50  h-[45px] "

                        />
                      </div>
                      <div>
                        <button className="ml-6 mt-1">
                          {" "}
                          <span>
                            {" "}
                            <FaCalendarAlt
                              style={{
                                width: "29px",
                                height: "29px",
                                color: "#63AB45",
                              }}
                            />
                          </span>{" "}
                        </button>
                      </div>
                    </div>


                  <Select
                    options={options}
                    labelField="name"
                    valueField="id"
                    placeholder="Accommodation"
                    onChange={(values) => this.setValues(values)}
                    className="max-w-[290px] h-[60px] bg-gray-50 mt-5"
                  />

                  <Select
                    options={options}
                    labelField="name"
                    valueField="id"
                    placeholder="Accommodation"
                    onChange={(values) => this.setValues(values)}
                    className="max-w-[290px] h-[60px] mt-5"
                  />
                  
                </div>
              </div>
              <div>
                 <div className="mt-5">
                    <textarea
                     type="text"
                     placeholder="Comments"
                     rows = {5}
                     className="border border-gray-200 w-[616px] px-2 py-2 bg-gray-50"
                     />
                 </div>
              </div>
            </div>
            <div>
               <div className="flex mt-9">
                  <ReuseButton name="Check Availability" />
               </div>
            </div>
          </div>
          <div className=" w-1/2 flex justify-center items-center">
            <div>
              <Image
                src="/assets/images/contact/contact-1.jpg"
                alt="Contact Image"
                width={570}
                height={570}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckAvailabilty;
