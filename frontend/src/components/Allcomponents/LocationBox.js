import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const LocationBox = () => {
  return (
    <div className="border  bg-gray-100 mt-[-6px]">
      <div className="max-w-8xl mx-auto px-6 py-3">
        <div className="flex flex-wrap items-center">
          <h1 className=" text-gray-700">Home</h1>
          <MdOutlineDoubleArrow className="pl-3 w-[27px] h-[27px] text-webGreen" />

          <h1 className="pl-3 text-gray-700">Nepal</h1>
          <MdOutlineDoubleArrow className="pl-3 w-[27px] h-[27px] text-webGreen" />

          <h1 className="pl-3 text-gray-700">Everst Treking</h1>
        </div>
      </div>
    </div>
  );
};

export default LocationBox;
