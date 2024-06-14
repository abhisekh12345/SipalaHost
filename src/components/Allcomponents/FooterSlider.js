"use client"
import React from 'react'
import AboutData from '../data/AboutCompapnyData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { allImages } from '../data/AllData';

const FooterSlider = () => {

    const sliderActive5Item = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

  return (
     <div>
        <div>
        <Slider {...sliderActive5Item}>
              {allImages.map((item) => {
                return (
                  <div key={item.id}>
                    <div>
                      <div className="ml-[40px]">
                        <div className="relative w-[250px] h-[250px] mainCard rounded-lg overflow-hidden">
                          <Image
                            src={item.img}
                            alt="feat1"
                            layout="fill"
                          />
                           
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
        </div>
     </div>
  )
}

export default FooterSlider