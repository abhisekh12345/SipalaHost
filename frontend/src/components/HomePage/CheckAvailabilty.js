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
      <div className=" pt-10 pb-16 pl-9 pr-9">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="">
            <div className="flex justify-center items-center lg:block xl:block 2xl:block">
              <SecSmallHeading secsubname="Availibilty" />
            </div>
            <div className="flex justify-center items-center lg:block xl:block 2xl:block">
              <SecCentralH boldTitle="Booking Your Best Tour Camping Availability" />
            </div>
            <div className=" mt-9">
              <div className="grid sm:grid-cols-2">
                <div className=" flex justify-center items-center sm:block" >
                  <div>
                  <div className=" flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200 px-2 py-2 bg-gray-50 singleWholediv">
                      <FormInput type="name" placeholder="Guest.."  />
                      <div className="hideShowlogo">
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
                    <div className="mt-5 flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200 px-2 py-2 bg-gray-50 singleWholediv">
                      <FormInput type="email" placeholder="Email address.." />
                      <div className="hideShowlogo">
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
                <div className=" flex justify-center items-center mt-3 sm:mt-0 sm:block">
                 <div>

                
                <div className=" flex items-center max-w-[290px] rounded-lg overflow-hidden border border-gray-200s px-1 py-2 bg-gray-50 singleWholediv">
                      <div>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="bg-gray-50  h-[45px] betweenWidth "

                        />
                      </div>
                      <div className="hideShowlogo">
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
                    className="max-w-[290px] h-[60px] bg-gray-50 mt-5 singleWholediv"
                  />

                  <Select
                    options={options}
                    labelField="name"
                    valueField="id"
                    placeholder="Accommodation"
                    onChange={(values) => this.setValues(values)}
                    className="max-w-[290px] h-[60px] mt-5 singleWholediv"
                  />
                   </div>
                </div>
              </div>
              <div>
                 <div className="mt-5 pr-2">
                    <textarea
                     type="text"
                     placeholder="Comments"
                     rows = {5}
                     className="border border-gray-200 w-[616px] commentWidth px-2 py-2 bg-gray-50"
                     />
                 </div>
              </div>
            </div>
            <div>
               <div className="flex mt-5 mb-6">
                  <ReuseButton name="Check Availability" />
               </div>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <div>
              <Image
                src="/assets/images/contact/contact-1.jpg"
                alt="Contact Image"
                width={570}
                height={570}
                className="rounded-2xl  w-[400px] sm:w-[450px] xl:w-[570px] h-auto pl-3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckAvailabilty;
