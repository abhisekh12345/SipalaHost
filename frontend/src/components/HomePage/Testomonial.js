"use client"
import React from "react";
import SmallHeadTag from "../ReuseComponent/SmallHeadTag";
import CenterHeading from "../ReuseComponent/CenterHeading";
import { teamMembers } from "../data/AllData";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testomonial = () => {
 
    const sliderActive3ItemDot = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
    <>
      <div className="relative testominioalHeight sm:h-[800px] w-full bg-cover bg-center" style={{ backgroundImage: "url(assets/images/bg/map-bg.jpg)" }}>
  <div className="absolute top-0 left-0 w-full h-full newLayOverlay flex justify-center items-center">
    <div className="container mx-auto px-4">
      <div>
        <SmallHeadTag subname="Testimonials" colurTrue={true} />
      </div>
      <div>
        <CenterHeading secboldTitle="What Our Traveler Say About Our Tour Services" colurTrue={true} />
      </div>
      <div className="mt-14">
        <Slider {...sliderActive3ItemDot}>
          {teamMembers.map((item) => (
            <div key={item.id} className="px-2">
              <div className="teamMember px-6 py-8 rounded-xl bg-gray-50 max-w-lg mx-auto sm:px-8 sm:py-9">
                <div>
                  <h1 className="text-gray-800 font-bold text-2xl">Quality Services</h1>
                </div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <FaStar className="text-yellow-400 w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 mt-5 text-xl">
                    To take a trivial example which of us undertakes laborious physical exercise except to obtain advantage from it has any right to find fault with man.
                  </p>
                </div>
                <div className="flex items-center mt-5">
                  <div className="w-1/6 flex items-center">
                    <Image
                      src={item.image}
                      alt="Team Image"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div className="w-5/6 ml-3">
                    <div>
                      <h5 className="text-xl font-bold">{item.title}</h5>
                    </div>
                    <div>
                      <p className="leading-7 text-gray-500">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Testomonial;
