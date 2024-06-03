import React from "react";
import { gridData } from "./data/AllData";
import FooterFirstPart from "./Allcomponents/FooterFirstPart";
import FooterSecondPart from "./Allcomponents/FooterSecondPart";




const Footer = () => {
  return (
    <>
      <div className="border border-red-600 mb-[500px] bg-[#1D231F] py-5 ">
        <div>
          <div className="max-w-8xl mx-auto border border-red-600 py-3 ">
               <div>
                  <FooterFirstPart />
               </div>
               <div>
                 <FooterSecondPart />
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
