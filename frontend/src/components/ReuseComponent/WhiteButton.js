import React from "react";
import { BiLogoTelegram } from "react-icons/bi";

const WhiteButton = ({ name }) => {
  return (
    <div className="flex  items-center pl-5 py-[2px] pr-[2px] rounded-3xl readMore">
      <div>
        <p className="paraWhite pr-2 font-semibold">{name}</p>
      </div>
      <div className="arrowBackG rounded-full  p-2 ">
        <span className="">
          {" "}
          <BiLogoTelegram
            style={{ width: "29px", height: "29px", }}
            className="arrowColor"
          />
        </span>
      </div>
    </div>
  );
};

export default WhiteButton;
