import React from "react";
import { GiCampingTent } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

const PopularInfo = ({ seeData }) => {
  console.log("seedata", seeData);

  return (
    <>
      <div>
        {seeData.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <div>{item.icon}</div>
                </div>
                <div>
                  <h1 className="text-3xl mt-7 font-bold text-gray-200 promptSnaserif">
                    {item.head}
                  </h1>
                </div>
                <div>
                  <p className="text-gray-200 mt-7 mb-5 text-sm">{item.para}</p>
                </div>
                <div className="flex-col items-center ">
                  {item.subtitle.map((subtit, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <div>
                          <TiTick
                            style={{
                              height: "25px",
                              width: "25px",
                              color: "#63AB45",
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-gray-200 my-3 text-sm ml-3 font-semibold">
                             {subtit}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularInfo;
