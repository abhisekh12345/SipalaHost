import React from "react";
import { gridData } from "./data/AllData";
import FooterFirstPart from "./Allcomponents/FooterFirstPart";
import FooterSecondPart from "./Allcomponents/FooterSecondPart";
import FooterThirdPart from "./Allcomponents/FooterThirdPart";
import FooterSlider from "./Allcomponents/FooterSlider";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1D231F] pt-5 pb-2 ">
        <div className="mt-[-120px]">
          <FooterSlider />
        </div>
        <div>
          <div className="max-w-8xl mx-auto mt-9 py-3 ">
            <div>
              <FooterFirstPart />
            </div>
            <div className="mt-16 mb-8">
              <FooterSecondPart />
            </div>
            <div className="border-t border-gray-700 mb-2"></div>
            <div>
              <FooterThirdPart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
